<?php
/* Smarty version 3.1.33, created on 2019-07-01 16:05:04
  from '/var/www/www-root/data/www/dev2.igornesov.ru/setup/templates/footer.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_5d1a050100c6f0_79518812',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3f267c9b5d4be62965de55a257a87a6f4f2e1b54' => 
    array (
      0 => '/var/www/www-root/data/www/dev2.igornesov.ru/setup/templates/footer.tpl',
      1 => 1550128366,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5d1a050100c6f0_79518812 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/var/www/www-root/data/www/dev2.igornesov.ru/core/model/smarty/plugins/modifier.replace.php','function'=>'smarty_modifier_replace',),));
?>
        </div>
        <!-- end content -->
        <div class="clear">&nbsp;</div>
    </div>
</div>

<!-- start footer -->
<div id="footer">
    <div id="footer-inner">
    <div class="container_12">
        <p><?php ob_start();
echo date('Y');
$_prefixVariable1 = ob_get_clean();
echo smarty_modifier_replace($_smarty_tpl->tpl_vars['_lang']->value['modx_footer1'],'[[+current_year]]',$_prefixVariable1);?>
</p>
        <p><?php echo $_smarty_tpl->tpl_vars['_lang']->value['modx_footer2'];?>
</p>
    </div>
    </div>
</div>

<div class="post_body">

</div>
<!-- end footer -->
</body>
</html><?php }
}
