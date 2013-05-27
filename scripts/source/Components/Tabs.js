/*

Script: Tabs.js
	Functionality for window tabs.

Copyright:
	Copyright (c) 2007-2008 Greg Houston, <http://greghoustondesign.com/>.	

License:
	MIT-style license.

Requires:
	Core.js, Window.js (for tabbed windows) or Layout.js (for tabbed panels)


    Changes from Mootools 1.2 to 1.4.x  no compat <http://www.domenacom.hr/>
    darko.hajnal@domenacom.hr 

    

*/


Object.append(  MochaUI, {

/*

	Function: initializeTabs
		Add click event to each list item that fires the selected function.

	*/
	initializeTabs: function(el, target){
		$(el).getElements('li').each(function(listitem){
			var link = listitem.getFirst('a').addEvent('click', function(e){
				e.preventDefault();
			});
			listitem.addEvent('click', function(e){
				MochaUI.updateContent({
					'element':  $(target),
					'url':      link.get('href')
				});
				MochaUI.selected(this, el);
			});
		});
	},
	/*

	Function: selected
		Add "selected" class to current list item and remove it from sibling list items.

	Syntax:
		(start code)
			selected(el, parent);
		(end)

Arguments:
	el - the list item
	parent - the ul

	*/
	selected: function(el, parent){
		$(parent).getChildren().each(function(listitem){
			listitem.removeClass('selected');
		});
		el.addClass('selected');
	}
});



