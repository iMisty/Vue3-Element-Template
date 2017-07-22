<?php
/**
 * Created by PhpStorm.
 * User: JingYi21
 * Date: 2017/03/19
 * Time: 15:22
 */
    session_start();
    $image = imagecreatetruecolor(100,30);
    $bgColor = imagecolorallocate($image,255,255,255);
    imagefill($image,0,0,$bgColor);

/*生成4个随机数字*/
/*
    for($i = 0;$i < 4;$i++){
        $fontSize = 6;
        $fontColor = imagecolorallocate($image,rand(0,150),rand(0,150),rand(0,150));
        $fontContent = rand(0,9);

        $x = ($i * 100 / 4) + rand(5,10);
        $y = rand(5,10);

        imagestring($image,$fontSize,$x,$y,$fontContent,$fontColor);
    }
*/
    $captchaCode = '';
/*生成字母+数字混合*/
    for($i = 0;$i < 4;$i++){
        $fontSize = 6;
        $fontColor = imagecolorallocate($image,rand(0,120),rand(0,120),rand(0,120));

        $data ='3456789qwertyuipasdfghjkzxcvbnm';
        $fontContent = substr($data,rand(0,strlen($data)-1),1);
        $captchaCode = $fontContent;

        $x = ($i * 100 / 4) + rand(5,10);
        $y = rand(5,10);

        imagestring($image,$fontSize,$x,$y,$fontContent,$fontColor);
    }
    $_SESSION['authcode'] = $captchaCode;

    /*生成干扰用背景点*/
    for($i = 0;$i < 200;$i++){
        $pointColor = imagecolorallocate($image,rand(50,200),rand(50,200),rand(50,200));
        imagesetpixel($image,rand(1,99),rand(1,29),$pointColor);
    }
    /*生成干扰用线条*/
    for($i = 0;$i < 9;$i++){
        $lineColor = imagecolorallocate($image,rand(80,220),rand(80,220),rand(80,220));
        imageline($image,rand(1,99),rand(1,99),rand(1,29),rand(1,29),$lineColor);
    }
    /*输出图像*/
    header('Content-type: text/html; charset=utf-8; content-type:image/png');
    imagepng($image);
    imagedestroy($image);