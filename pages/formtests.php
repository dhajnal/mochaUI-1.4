<?php 
   date_default_timezone_set('Europe/Zagreb');
    
    $action = (isset($_POST['action']))? $_POST['action']: null;
    $caller = (isset($_REQUEST['caller']))? $_REQUEST['caller']: null;
    
    switch ($action) {
    case 'postform':
            print "<pre>".print_r($_POST, true)."</pre>";
        break;

    default:
        print "<pre>".print_r($_REQUEST, true)."</pre>";
        break;
}
 

?>


<div class="form" id="formtestsWindowDiv">
<form id="formtestsWindowForm" action="pages/formtests.php" method="post">
    <input type="hidden" name="action" value="postform"/>
    <input type="hidden" name="caller" id="caller" value="<?php echo $caller?>"/>
	
	<div class="formRow">
	<div class="formLabel">Title:</div>
	<div class="formField">
            <select name="update_title" class="input" id="update_title" tabindex="1">
                <option value="Mr">Mr.</option>
                <option value="Miss">Miss</option>
                
            </select>
        </div>
	<div class="clear"></div>
	</div>

	<div class="formRow">
            <div class="formLabel">Gender: </div>
            <div class="inline">
                <input type="radio" id="radio1" name="radio1" class="regular-radio" <?php echo ( isset( $_POST['radio1'] ) and $_POST['radio1'] === '2'  or !isset($_POST['radio1']) )? ' checked="checked" ':'';?>  value="2"/>
                <label tabindex="2"  for="radio1"></label>
            </div>
            <div class="inline">Male&nbsp;&nbsp;</div>

            <div class="inline">
                <input  type="radio" id="radio2" name="radio1" class="regular-radio" value="1" <?php echo ( isset($_POST['radio1']) and $_POST['radio1']=== '1'  )? ' checked="checked" ':'';?> />
                &nbsp;&nbsp;&nbsp;<label tabindex="3" for="radio2"></label>
            </div>
            <div class="inline">Female</div>
            
        <div class="clear"></div>
	</div>
	
        <div class="formRow">
	<div class="formLabel">Check this? </div>
            <div class="inline">
                <input  required type="checkbox" id="checkbox1" class="regular-checkbox" value="Y"  <?php echo ( isset($_POST['check_this']) )? ' checked="checked" ': ''?> name="check_this"/>
                <label tabindex="4"for="checkbox1"></label>
            </div>
        
	<div class="clear"></div>
	</div>

	<div class="formRow">
	<div class="formLabel">Content: </div>
	<div class="formField"><textarea required tabindex="5" id="newWindowContent" class="input" rows="5" name="content" cols="40"><?php echo(isset($_POST['content']))? $_POST['content']: ''?></textarea></div>
	<div class="clear"></div>
	</div>

	
	<div class="formRow">
        <div class="formLabel">Date Test: </div>   
        <div class="formField">
            <input tabindex="6" type="text" readonly="readonly" class="input" id="date_test" name="date_test" value="<?php echo(isset($_POST['date_test']))? $_POST['date_test']: date('Y-m-d')?>"/>
        </div>        
	<div class="clear"></div>
	</div>
	
	<div class="formRow">
            <div class="formLabel">Position: </div>
            <div class="formField">
                <div class="inline"> x:</div>
                <div class="inline">
                    <input tabindex="7" type="text" class="input number" id="newWindowY" value="<?php echo(isset($_POST['x']))? $_POST['x']: '30'?>" name="x" maxlength="2" size="2"/>
                </div>
                <div class="inline"> &nbsp;y:</div>
                <div class="inline">
                    <input tabindex="8" type="text" class="input number" id="newWindowX" name="y" value="<?php echo(isset($_POST['y']))? $_POST['y']: '100';?>" maxlength="3" size="3"/>
                </div>
            </div>    
            <div class="clear"></div>
	</div>
	
	
	<div class="formRow">
	<div class="formLabel">Properties: </div>
	<div class="formField">
            
            <div class="inline">
                <input type="checkbox" id="prop_color" name='prop_color' class="regular-checkbox" value="Y" <?php echo ( isset($_POST['prop_color']) )? ' checked="checked" ': ''?>/>
                <label tabindex="9" for="prop_color"></label>
            </div>
            <div class="inline">Color? &nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div class="inline">
                <input type="checkbox" id="prop_pattern" name='prop_pattern' class="regular-checkbox" value="N" <?php echo ( isset($_POST['prop_pattern']) )? ' checked="checked" ': ''?>/>
                <label tabindex="10" for="prop_pattern"></label>
            </div>
            <div class="inline">Pattern? </div>
            
        </div>
	<div class="clear"></div>	
	</div>
    
        <div class="formRow">
	<div class="formLabel">Disabled: </div>
	<div class="formField">
            
            <div class="inline">
                <input tabindex="11" type="checkbox" id="disabledInput" name='disabledInput' class="regular-checkbox" value="Y" checked="checked" disabled="disabled"/>
                <label title="Input disabled" onClick="alert('Input disabled');" for="disabledInput"></label>
            </div>
            <div class="inline">Check this </div>
            
        </div>
	<div class="clear"></div>	
	</div>
    <hr>
    <p><i id="navigationMsg">Use TAB Key to move cursor forward,Shift+Tab to move cursor backward. Enter to Submit form.</i></p>
	<div class="buttonRow">
            <div class="formLabel"></div>
            <div class="formField"><input tabindex="12" type="submit" id="newWindowSubmit" class="button" value="Submit" /></div>
            <div class="clear"></div>
	</div>
		
</form>
</div>


<script type="text/javascript">
  window.addEvent('domready', function(){ 
      
    myCal = new Calendar({ 'date_test': 'Y-m-d' }, {
         classes: ['alternate'],
         navigation: 2,
         offset: 1 // week starts in Monday 
        
     });
    
      
    
    if($('formtestsWindowID')){
        var update_container = 'formtestsWindowID_content';
        alert('Update container: '+update_container);
    }else{
        var update_container = 'mainPanel_pad';
        alert('Update container: '+update_container);
    }
      
    //!Update Window id="formtestsWindowID". see definition in mocha-init.js 
    new Form.Request($('formtestsWindowForm'), $(update_container), {
        requestOptions: {
            spinnerOptions: {
                message: 'Sending the form...'
            }
        },
        onSend: function(){
                $('spinner').show();
        },
        
        onSuccess: function(){
                $('spinner').hide();
                if ( $('formtestsWindowDiv') && MUI.options.standardEffects === true) {
                       $('formtestsWindowDiv').setStyle('opacity', 0).get('morph').start({'opacity': 1});
                }
        }

    });

});


    
    
</script>
    