

<div id="postContent">
	<?php
		print "<pre>".print_r($_POST, true)."</pre>";
                $file_content = (isset($_POST['file_content']))? $_POST['file_content']:'Put text here';
	?>
</div>

<h1>PHP Ckeditor test</h1>
<br>
<div id="editHelpDiv">
    <form name="editHelpForm"  id="editHelpForm" method="post" action="pages/CKEditor.php" method="post">

    <input type="hidden" name="action" value="helpaction"/>

    <div class="formRow">
         
         <div class="formField">
             <textarea class="input" name="file_content" id="file_content" rows="50" cols="180"><?php echo $file_content?></textarea>
             
         </div>
    </div>
    
    <div class="buttonRow">
        <div class="formLabel"></div>
        <div class="formField">
                <input type="submit" id="userFormSubmit" class="button" onclick="CKupdate();" value="Submit" />
                
        </div>
    </div>
</form>
</div>

<script type="text/javascript">


var ckInstance; // CKeditor instances
 
 function CKupdate(){
    //for ( instance in CKEDITOR.instances )
    //    CKEDITOR.instances[instance].updateElement();
    ckInstance.updateElement();
    
}  


 window.addEvent('domready', function(){     

     ckInstance = CKEDITOR.replace( 'file_content' );
    //!IMPORTANT MUST update mainPanel_pad DIV ! NOT mainPanel!!!!!
    new Form.Request($('editHelpForm'), $('mainPanel_pad'), {
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
                if ( $('editHelpDiv') && MUI.options.standardEffects === true) {
                       $('editHelpDiv').setStyle('opacity', 0).get('morph').start({'opacity': 1});
                }
        }

    });

});

</script>
