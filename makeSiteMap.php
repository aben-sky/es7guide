<?php
//禁止非命令行访问
if (!preg_match("/cli/i", php_sapi_name())) {
    header("HTTP/1.1 404 Not Found");
}


/**
 * @param string $index_path 要生成链接列表的页面地址
 * @param string $target_file_name 要写入的sitemap文件地址
 */
function makeSiteMap($index_path, $target_file_name) {
    $path = __DIR__ . '\\' . $index_path;

    $html = file_get_contents($path);

    //提取超链接
    $pattern = '/<a(.*?)href="(.*?)"(.*?)>(.*?)<\/a>/i';
    preg_match_all($pattern, $html, $matches);
    $arr = $matches[2];
    $arr_link = ['https://www.pipiho.com/es/7.7/cn/index.html'];
    foreach ($arr AS $link) {
        //去掉相对链接和外部链接
        if (preg_match('/^(http:|https:|\.\.)/', $link)) {
            echo $link . ' 去掉' . PHP_EOL;
        } else {
            $arr_link[] = 'https://www.pipiho.com/es/7.7/cn/' . $link;
        }

    }
    //去重
    $arr_link = array_unique($arr_link);

    echo '一共有 ' . count($arr_link) . ' 个链接' . PHP_EOL;

    $content = implode("\n", $arr_link);

    $target_file_path = __DIR__ . '\\' . $target_file_name;

    $rt = file_put_contents($target_file_path, $content);

    echo 'Write file to ' . $target_file_path . ': ' . var_export($rt, true) . PHP_EOL;
}

makeSiteMap('html\7.7\cn\index.html', 'html\7.7\cn\sitemap.txt');