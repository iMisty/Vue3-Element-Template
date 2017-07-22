<?php
/**
 * Created by PhpStorm.
 * User: Jingyi21
 * Date: 2017/03/19
 * Time: 16:40
 */

if(isset($_REQUEST['authcode']))
{
    session_start();
    if (strtolower($_REQUEST['authcode'])==$_SESSION['authcode'])
    {
        header('Content-type: text/html; charset=UTF8');
        echo '<font color="#0000CC">输入正确</font>';
    }
    else{
        header('Content-type: text/html; charset=UTF8');
        echo '<font color="#CC0000"><b>输入错误</b></font>';
    }
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Captcha Demo</title>
</head>
<body>
    <form method="post" action="./form.php" style="text-align: center;">
        <p>验证码图片：
            <img id="captcha_img" border = "1" src = "captcha.php?r=<?php echo rand();?>" width = 100; height = 30; style="vertical-align:middle;"/>
            <a href="javascript:void(0)" onclick="document.getElementById('captcha_img').src='./captcha.php?r='+Math.random();">看不清，换一个</a>
        <p>请输入图片内容：
            <input type="text" name="authcode" value=""/>
        </p>
        <p>
            <input type="submit" value="提交" style="padding: 6px 20px;">
        </p>
    </form>
</body>
</html>
