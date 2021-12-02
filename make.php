<?php
//把source下的md文件转换成html

require_once 'classes/Parsedown.php';
require_once 'classes/GetFiles.php';

$Parsedown = new Parsedown();

$sourcePath = __DIR__ . DIRECTORY_SEPARATOR . 'source';
$sourcePathLength = mb_strlen($sourcePath);

$dir = $sourcePath;
$GetFiles = new GetFiles();
$arr = $GetFiles->get($dir);
$dump = false;//是否模拟(空run, 只打印log)
foreach ($arr AS $filePath) {
    $relativePath = mb_substr($filePath, $sourcePathLength + 1);
    $relativeFolder = mb_substr($relativePath, 0, mb_strrpos($relativePath, DIRECTORY_SEPARATOR));//不带斜线
    $newFolder = 'html' . (strlen($relativeFolder) > 0 ? DIRECTORY_SEPARATOR . $relativeFolder : '');//不带斜线
    $fileName = $GetFiles->getFileName($filePath);

    if (!$dump && !is_dir($newFolder)) {
        mkdir($newFolder, 0777, true);
    }

    //md文件才转换
    if (mb_strlen($filePath) > 3
        && mb_substr($filePath, mb_strlen($filePath) - 3) === '.md'
    ) {
        if (!$dump) {
            $mdContent = file_get_contents($filePath);
            $html = $Parsedown->text($mdContent);
            $html = <<<EOF
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>$fileName</title>
</head>
<body>
$html
</body>
</html>
EOF;
        }

        //修正文件后缀
        //$ix = mb_strrpos($fileName, '.');
        //$fileName = mb_substr($fileName, 0, $ix) . '.html';
        $fileName = $GetFiles->getPureFileName($fileName) . '.html';
        $newPath = $newFolder . DIRECTORY_SEPARATOR . $fileName;

        if (!$dump) {
            file_put_contents($newPath, $html);
        }
        echo $relativePath . ' => ' . $newPath . PHP_EOL;
    } else {
        //直接复制
        $newPath = $newFolder . DIRECTORY_SEPARATOR . $fileName;

        if (!$dump) {
            copy($filePath, $newPath);
        }
        echo $relativePath . ' 直接拷贝到 ' . $newPath . PHP_EOL;
    }
}

