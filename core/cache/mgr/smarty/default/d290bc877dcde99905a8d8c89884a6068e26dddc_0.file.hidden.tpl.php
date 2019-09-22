<?php
/* Smarty version 3.1.33, created on 2019-09-06 17:44:40
  from '/var/www/www-root/data/www/dev2.igornesov.ru/manager/templates/default/element/tv/renders/input/hidden.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_5d7270d80b83f7_97182470',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd290bc877dcde99905a8d8c89884a6068e26dddc' => 
    array (
      0 => '/var/www/www-root/data/www/dev2.igornesov.ru/manager/templates/default/element/tv/renders/input/hidden.tpl',
      1 => 1550128366,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5d7270d80b83f7_97182470 (Smarty_Internal_Template $_smarty_tpl) {
?><input id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" type="hidden" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['tv']->value->get('value'), ENT_QUOTES, 'UTF-8', true);?>
" />

<?php echo '<script'; ?>
 type="text/javascript">
// <![CDATA[

MODx.on('ready',function() {
    var fld = MODx.load({
    
        xtype: 'hidden'
        ,applyTo: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,value: '<?php echo strtr($_smarty_tpl->tpl_vars['tv']->value->get('value'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
'
    
    });
    var p = Ext.getCmp('modx-panel-resource');
    if (p) {
        p.add(fld);
        p.doLayout();
    }
});

// ]]>
<?php echo '</script'; ?>
>
<?php }
}
