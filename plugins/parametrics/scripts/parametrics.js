/*

Script: Parametrics.js
	Initializes the GUI property sliders.

Copyright:
	Copyright (c) 2007-2008 Greg Houston, <http://greghoustondesign.com/>.	

License:
	MIT-style license.

Requires:
	Core.js, Window.js


Modyfied By darko.hajnal@domenacom.hr , 2013 
<http://www.domenacom.hr/>.	

Require Mootools 1.4.5 no compat!



*/

//MUI.extend({
Object.append(MUI,  {
	addRadiusSlider: function(){
		if ($('radiusSliderarea')) {
			var windowOptions = MUI.Windows.windowOptions;
			var sliderFirst = true;
			var mochaSlide = new Slider($('radiusSliderarea'), $('radiusSliderknob'), {
				steps: 14,
				offset: 0,
                                // get default values from Window
                                initialStep: windowOptions.cornerRadius,
				onChange: function(pos){
					$('radiusUpdatevalue').set('html', pos);
					// Change default corner radius of the original class
                                        
					windowOptions.cornerRadius = pos;
					MUI.Window.implement({ options: windowOptions });
					// Don't redraw windows the first time the slider is initialized
					if (sliderFirst == true) {
						sliderFirst = false;
						return;
					}
					// Change corner radius of all active classes and their windows
                                        /** 1.2 MUI.Windows.instances.each(function(instance){ */
                                        Object.each( MUI.Windows.instances, function(instance){   
						instance.options.cornerRadius = pos;
						instance.drawWindow();
					}.bind(this));
				}.bind(this)
			}).set(windowOptions.cornerRadius);
		}
	},
	addShadowSlider: function(){
		if ($('shadowSliderarea')){
			var windowOptions = MUI.Windows.windowOptions;
			var sliderFirst = true;
			var mochaSlide = new Slider($('shadowSliderarea'), $('shadowSliderknob'), {
				range: [1, 10],
				offset: 0,
                                // get default values from Window
                                initialStep: windowOptions.shadowBlur,
				onChange: function(pos){
					$('shadowUpdatevalue').set('html', pos);
					// Change default shadow width of the original class
					windowOptions.shadowBlur = pos;
					MUI.Window.implement({ options: windowOptions });
					// Don't redraw windows the first time the slider is initialized
					// !!! Probably need to make this separate from the corner radius slider
					if (sliderFirst == true) { 
						sliderFirst = false;
						return;
					}
					// Change shadow width of all active classes and their windows
                                        /** 1.2 MUI.Windows.instances.each(function(instance){ */
                                        Object.each( MUI.Windows.instances, function(instance){   
					
						var oldshadowBlur = instance.options.shadowBlur;
						instance.options.shadowBlur = pos;
						instance.windowEl.setStyles({
							'top': instance.windowEl.getStyle('top').toInt() - (instance.options.shadowBlur - oldshadowBlur),
							'left': instance.windowEl.getStyle('left').toInt() - (instance.options.shadowBlur - oldshadowBlur)
						});
						instance.drawWindow();
					}.bind(this));
				}.bind(this),
				onComplete: function(){
					
                                        /** 1.2 MUI.Windows.instances.each(function(instance){ */
                                        /** 
                                         Object.each( MUI.Windows.instances.options, function(opt){   
						if (opt.resizable){
							MUI.Windows.instances.adjustHandles();
						}
					});
                                        ***/
                                        
                                        Object.each( MUI.Windows.instances, function(instance){   
						if (instance.options.resizable){
							instance.adjustHandles();
						}
					});
                                        
				}
			}).set(windowOptions.shadowBlur);
		}
	}
});
