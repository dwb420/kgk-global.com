<?php if(time() > 1568822461){return null;} return '/* Запускаем плагин только на фронтенде и с включенными sef-url */
if ($modx->context->key == \'mgr\' || !$modx->getOption(\'friendly_urls\') || $modx->event->name != \'OnHandleRequest\') {
return;
}
/* Определяем текущий язык в cultureKey */
switch ($_REQUEST[\'cultureKey\']) {
/* Переключаем контекст */
case \'en\':
$modx->switchContext(\'web1\');
break;
case \'pt\':
$modx->switchContext(\'web2\');
break;
case \'ua\':
$modx->switchContext(\'web3\');
break;
case \'ur\':
$modx->switchContext(\'web4\');
break;
/* Устанавливаем контекст по умолчанию */
default:
$modx->switchContext(\'web\');
break;
}
/* Очищаем GET-параметр чтобы не допустить появлении ссылки вида cultureKey=xy при генерации URL других компонентов */
unset($_GET[\'cultureKey\']);
return;
';