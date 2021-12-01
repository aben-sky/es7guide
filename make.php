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
foreach ($arr AS $filePath) {
    $relativePath = mb_substr($filePath, $sourcePathLength + 1);
    $relativeFolder = mb_substr($relativePath, 0, mb_strrpos($relativePath, DIRECTORY_SEPARATOR) + 1);//带斜线
    $newFolder = 'html' . DIRECTORY_SEPARATOR . $relativeFolder;//带斜线
    $fileName = $GetFiles->getFileName($filePath);

    if (!is_dir($newFolder)) {
        mkdir($newFolder, 0777, true);
    }

    //md文件才转换
    if (mb_strlen($filePath) > 3
        && mb_substr($filePath, mb_strlen($filePath) - 3) === '.md'
    ) {
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

        //修正文件后缀
        //$ix = mb_strrpos($fileName, '.');
        //$fileName = mb_substr($fileName, 0, $ix) . '.html';
        $fileName = $GetFiles->getPureFileName($fileName) . '.html';
        $newPath = $newFolder . $fileName;

        file_put_contents($newPath, $html);
        echo $filePath . ' => ' . $newPath . PHP_EOL;
    } else {
        //直接复制
        $newPath = $newFolder . $fileName;

        copy($filePath, $newPath);
        echo $filePath . ' 直接拷贝到 ' . $newPath . PHP_EOL;
    }
}

