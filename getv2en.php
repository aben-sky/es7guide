<?php

//从官网抓取v2的文档, 处理后放入本地

require_once 'vendor/autoload.php';

use QL\QueryList;

function tepGetDocList() {
    //所有文档列表
    $docList = file_get_contents('doc_list_2.x_en.txt');

    return $docList;
}

/**
 * 从官网抓取文档, 并存入本地
 */
function getOriginalHtmls() {
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
    foreach ($arrLink AS $link) {
        if (is_file('2.x_en/origin/' . $link)) {
            echo $link . '已存在, 忽略' . PHP_EOL;
            continue;
        }
        $rt = false;
        echo '获取 ' . $link;
        for ($i = 1; $i < $retry; $i++) {
            //$rt = getAndPut($link);
            $rt = getOriginalHtml($link);
            if ($rt == true) {
                break;
            } else {
                echo '尝试' . $i;
            }
        }
        if ($rt === false) {
            $arrLinkFailed[] = $link;
            echo ' ==> 失败';
        } else {
            echo ' ==> 成功';
        }
        echo PHP_EOL;
        sleep(2);
    }

    //记录获取失败的链接
    if (!empty($arrLinkFailed)) {
        file_put_contents('log_v2_failed.log', date('Y-m-d H:i:s') . PHP_EOL . json_encode($arrLinkFailed) . PHP_EOL);
    }
}

/**
 * 获取原始html内容并保存
 * @param string $link
 * @return bool
 */
function getOriginalHtml($link) {
    if (preg_match('/^http(s)?:\/\//', $link)) {
        //完整的url
        $url = $link;

        //解析文件名
        $link = substr($url, strrpos($url, '/') + 1);
        if(strpos($link, '?') !== false){
            $link = substr($link, 0, strpos($link, '?'));
        }
        if(strpos($link, '#') !== false){
            $link = substr($link, 0, strpos($link, '#'));
        }
    } else {
        $prefix = 'https://www.elastic.co/guide/en/elasticsearch/guide/current/';
        $url = $prefix . $link;
    }

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
    //写入
    file_put_contents('2.x_en/origin/' . $link, $originHtml);
    return true;
}

/**
 * 把官网的文档转换到本地
 */
function convertToLocalFile($link) {
    $html = file_get_contents('2.x_en/origin/' . $link);
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
            '<img src="images/',//修正图片路径
        ],
        [
            'href="https://www.elastic.co/',
            '<img src="../images/',//修正图片路径
        ],
        $body
    );


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
</head>
<body>
<div class="main-container">
    <section id="content">
        
        <div class="content-wrapper">
            <section id="guide" lang="zh_cn">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-md-8 guide-section">
                            <div style="color:gray; word-break: break-all; font-size:12px;">原文地址: <a href="https://www.elastic.co/guide/en/elasticsearch/guide/current/$link" rel="nofollow">https://www.elastic.co/guide/en/elasticsearch/guide/current/$link</a>, 版权归 www.elastic.co 所有<br/>
                            </div>
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

    //写入
    file_put_contents('html/2.x/en/' . $link, $html);

    return true;
}

function convertToLocalFiles() {
    $folder = '2.x_en' . DIRECTORY_SEPARATOR . 'origin';
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
//convertToLocalFile('inverted-index.html');//单个转换测试
convertToLocalFiles();


//获取指定的文件:
//$rt = getOriginalHtml('https://www.elastic.co/guide/en/elasticsearch/reference/2.4/analysis-stop-tokenfilter.html');
//var_dump($rt);
//convertToLocalFile('analysis-stop-tokenfilter.html');