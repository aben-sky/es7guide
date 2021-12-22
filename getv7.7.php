<?php

//从官网抓取7.7英文版文档, 处理后放入本地

require_once 'vendor/autoload.php';

use QL\QueryList;

$folderPath = '7.7en/origin/';

function tepGetDocList() {
    //所有文档列表
    $docList = file_get_contents('doc_list_7.7_en.txt');

    return $docList;
}

/**
 * 从官网抓取文档, 并存入本地
 */
function getOriginalHtmls() {
    global $folderPath;
    $docList = tepGetDocList();
    $arrLink = QueryList::getInstance()
        ->setHtml($docList)
        ->find('a')
        ->attrs('href')
        ->toArray();
    //补充首页
    $arrLink[] = 'index.html';

    $retry = 10;//最多尝试10次
    $arrLinkFailed = [];
    file_put_contents('getv7.7.log', date('Y-m-d H:i:s') . ' begin' . PHP_EOL, FILE_APPEND);
    $total = count($arrLink);
    $seq = 1;
    foreach ($arrLink AS $link) {
        if (is_file($folderPath . $link)) {
            echo $link . ' 已存在, 忽略' . PHP_EOL;
            $seq++;
            continue;
        }
        $rt = false;
        echo '获取 ' . $seq . '/' . $total . ' ' . $link . ': ';
        for ($i = 1; $i < $retry; $i++) {
            $rt = getOriginalHtml($link);
            if ($rt == true) {
                break;
            } else {
                echo ' 尝试' . $i;
            }
        }
        if ($rt === false) {
            $arrLinkFailed[] = $link;
            //记录获取失败的链接
            file_put_contents('getv7.7.log', $link . PHP_EOL, FILE_APPEND);
            echo ' ==> 失败';
        } else {
            echo ' ==> 成功';
        }
        echo PHP_EOL;
        $seq++;
        sleep(2);
    }

    file_put_contents('getv7.7.log', date('Y-m-d H:i:s') . ' finished' . PHP_EOL, FILE_APPEND);
}

/**
 * 获取原始html内容并保存
 * @param string $link
 * @return bool
 */
function getOriginalHtml($link) {
    $prefix = 'https://www.elastic.co/guide/en/elasticsearch/reference/7.7/';

    $url = $prefix . $link;

    try {
        $originHtml = QueryList::getInstance()
            ->get($url, [], ['timeout' => 10])
            ->getHtml();
    } catch (Exception $ex) {
        return false;
    }
    if (empty($originHtml)) {
        return false;
    }
    global $folderPath;
    //写入
    file_put_contents($folderPath . $link, $originHtml);
    return true;
}

/**
 * 把官网的文档转换到本地
 */
function convertToLocalFile($link) {
    global $folderPath;
    $html = file_get_contents($folderPath . $link);
    $document = QueryList::getInstance()->setHtml($html);

    //获取title
    $title = $document->find('title')->text();
    echo $title . PHP_EOL;

    //获取主要内容
    $body = $document->find('#guide>.container>.row>.guide-section')
        ->html();
    if (empty($body)) {
        return false;
    }

    //把body中的`href="/`这种补充成完整的url
    $body = str_replace(
        [
            'href="/',
            'href="../current/'
        ]
        , [
            'href="https://www.elastic.co/',
            'href="https://www.elastic.co/guide/en/elasticsearch/reference/current/'
        ]
        , $body);

    //if ($link === 'index.html') {
    //    //首页右边不需要导航
    //    $docList = '';
    //} else {
    //    $docList = tepGetDocList();
    //}
    $docList = ''; //由js去渲染
    $html = <<<EOF
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>$title</title>
    <!-- Give IE8 a fighting chance -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	<link rel="stylesheet" type="text/css" href="../static/styles.css" />
	<script>
	var _link = '$link';
    </script>
</head>
<body>
<div class="main-container">
    <section id="content">
        <div class="content-wrapper">
            <section id="guide" lang="zh_cn">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-md-8 guide-section">
                            <div style="color:gray; word-break: break-all; font-size:12px;">原文地址: <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.7/$link" rel="nofollow" target="_blank">https://www.elastic.co/guide/en/elasticsearch/reference/7.7/$link</a>, 版权归 www.elastic.co 所有</div>
                        $body
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4" id="right_col">
                        $docList
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</div>
<script src="../static/en.js"></script>
</body>
</html>
EOF;

    //提取图片并保存
    $arrImages = [];
    //$document->find('img')->map(function ($img) use ($arrImages) {
    //    //也可以直接在这里处理, 但是无法修改外部的html了
    //});
    foreach ($document->find('img')->attrs('src')->all() AS $img) {
        $arrImages[] = $img;
    }
    $retry = 10;//最多尝试10次

    $client = new \GuzzleHttp\Client();
    foreach ($arrImages AS $src) {
        //处理完整路径的图片
        if (preg_match('/^http(s)?:\/\//', $src)) {
            $url = $src;
            echo $url . PHP_EOL;
            $arr = parse_url($src);
            if ($arr === false) {
                echo 'ERROR: ' . $src . ' 解析失败';
                file_put_contents('getv7.7.log', date('Y-m-d H:i:s') . PHP_EOL . $link . ' => ' . $src . ' 解析失败', FILE_APPEND);
                break;
            }
            $path = $arr['host'] . $arr['path'];
            $imgSavePath = __DIR__ . '/html/7.7/static/images/' . $path;
            //替换html
            $html = str_replace('src="' . $src . '"', 'src="../static/images/' . $path . '"', $html);
        } else {
            $url = 'https://www.elastic.co/guide/en/elasticsearch/reference/7.7/' . $src;
            $imgSavePath = __DIR__ . '/html/7.7/static/' . $src;
            //替换html
            $html = str_replace('src="' . $src . '"', 'src="../static/' . $src . '"', $html);
        }
        echo $url . ' => ';
        echo $imgSavePath . ' : ';

        if (!is_file($imgSavePath)) {
            //创建文件夹
            $pathInfo = pathinfo($imgSavePath);
            $dir = $pathInfo['dirname'];
            if (!is_dir($dir)) {
                echo '创建目录: ' . $dir . PHP_EOL;
                mkdir($dir, 0777, true);
            }

            echo '下载中....';
            $rt = false;
            for ($i = 1; $i < $retry; $i++) {
                try {
                    $rt = $client->request('GET', $url, ['timeout' => 10]);
                    if ($rt->getStatusCode() == 200) {
                        echo ' 成功';
                        file_put_contents($imgSavePath, $rt->getBody());
                        break;
                    } else {
                        echo ' 尝试' . $i;
                        sleep(2);
                    }
                } catch (\Exception $ex) {
                    echo ' 尝试' . $i;
                    sleep(2);
                }
            }
            if ($rt === false) {
                echo '下载失败';
            }
        } else {
            echo ' 存在, 忽略..';
        }
        echo PHP_EOL;
    }

    //写入html
    file_put_contents(__DIR__ . '/html/7.7/en/' . $link, $html);

    return true;
}

function convertToLocalFiles() {
    $folder = '7.7en' . DIRECTORY_SEPARATOR . 'origin';
    $arr = scandir($folder);
    $files = [];
    foreach ($arr as $v) {
        $temp = $folder . DIRECTORY_SEPARATOR . $v;
        if (is_dir($temp)) {
            if ($v == '.' || $v == '..') {
                //系统文件夹
                continue;
            }
        } else {
            $files[] = $v;
        }
    }
    foreach ($files AS $file) {
        $rt = convertToLocalFile($file);
        if ($rt === true) {
            echo $file . ' 成功' . PHP_EOL;
        } else {
            echo $file . ' 失败' . PHP_EOL;
        }
    }
}

//抓取原文档
//getOriginalHtmls();

//原文档转换到本地文档
//convertToLocalFile('actions-pagerduty.html');//单个转换测试
//convertToLocalFile('query-dsl-function-score-query.html');//单个转换测试: 带完整地址的图片
convertToLocalFiles();
