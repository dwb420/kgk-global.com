<?php
session_start();
ini_set('session.cookie_domain', '.kgk-global.com');
setcookie('_ksid', session_id(), 0, '/', '.kgk-global.com');
//$mobile = $_GET['mobile'];
$login = $_POST['loginMonUserName'];
$password = $_POST['loginMonUserPwd'];
$action = 'https://monitor.kgk-global.com/user/authorization/login?lang=ru';
//$mobile_ver = 'https://m.kgk-global.com/mobile/index/login';

//if($mobile) {
//  $action = $mobile_ver;
//}

?>

<html lang="ru">
  <head>
    <meta charset="utf-8">
    <script src="/assets/template/kgk/js/jquery-3.4.1.min.js"></script>
    <title>Вход...</title>
  </head>
  <body style="text-align: center;">
    <img src="/assets/template/kgk/img/prelogin.gif" alt="">
    <form id="redirection_form" action="<?=$action;?>" method="POST" style="display: none!important;">
      <input type="test" name="user_name" value="<? echo $login; ?>" autocomplete="off">
      <input type="password" name="user_password" value="<? echo $password; ?>" autocomplete="off">
      <input type="submit" value="submit">
    </form>
  </body>
  <script type="text/javascript">

    window.onload = function() {
      $('#redirection_form').submit();
    };
    // $( document ).ready(function() {
    //     $('#rederection_form').submit();
    // });
  </script>
</html>

<?php

?>
