<?php

/**
 * Class GetFiles
 * @author aben
 */
class GetFiles {

    private $files = [];

    /**
     * 遍历文件夹, 把文件路径填充到数组
     * @param $folder
     * @return array
     */
    public function get(string $folder) {
        $arr = scandir($folder);
        foreach ($arr as $v) {
            $temp = $folder . DIRECTORY_SEPARATOR . $v;
            if (is_dir($temp)) {
                if ($v == '.' || $v == '..') {
                    //系统文件夹
                    continue;
                }
                $this->get($temp);
            } else {
                $this->files[] = $temp;
            }
        }
        return $this->files;
    }

    /**
     * 获取包含扩展名的文件名
     * @param string $path 文件路径
     * @return string
     */
    public function getFileName($path) {
        $path = str_replace('\\', DIRECTORY_SEPARATOR, $path);
        $ix = mb_strrpos($path, DIRECTORY_SEPARATOR);

        //包括扩展名的文件名
        return mb_substr($path, $ix + 1);
    }

    /**
     * 获取不包含扩展名的文件名
     * @param string $fileName 文件名
     * @return string
     */
    public function getPureFileName($fileName){
        $ix = mb_strrpos($fileName, '.');
        $rt = mb_substr($fileName, 0, $ix);

        return $rt;
    }
}