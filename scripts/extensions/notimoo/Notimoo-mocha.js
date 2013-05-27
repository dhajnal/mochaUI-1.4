/*
Script: Notimoo-mocha.js
	Enhance mocha Notification system using Mootools (1.2)
*/


window.addEvent('load', function(){
    //Init Notimoo as MochaUI Notifier

    MUI.Notimoo = new Notimoo();
    MUI.notification = function(message, title ,customClass){
          if(!title)
              title = '';
          if(!customClass)
              customClass = '';

              this.Notimoo.show( {'message': message,
                                  'title': title ,
                                  'customClass': customClass });
    }

    /**
     MUI.alert = function(message, title){
                this.Notimoo.show({
                               'message': message,
                               'title': title,
                               'sticky': true,
                               'customClass': 'alert'
                               });
     }
     window.alert = function(message, title){
            MUI.alert(message, title);
     }

    **/

});

