/*

Script: Tree.js
	Create folder trees.

Copyright:
	Copyright (c) 2007-2008 Greg Houston, <http://greghoustondesign.com/>.	

License:
	MIT-style license.	

*/

function buildTree(treeID){
	
	var iconPath = "plugins/tree/images/"

	$$('#'+treeID+' li.folder').each(function(folder){
		var folderContents = folder.getChildren('ul');
		var folderImage = new Element('img', {
			'src': iconPath + '_open.gif',
			'width': 18,
			'height': 18
		}).inject(folder, 'top');

		// Determine which open and close graphic each folder gets
		
		if (folder.hasClass('root')) {
			folder.minus = iconPath + 'Rminus.gif'
			folder.plus = iconPath + 'Rplus.gif'
		}
		else if (folder.hasClass('first')) {
			folder.minus = iconPath + 'Fminus.gif'
			folder.plus = iconPath + 'Fplus.gif'
		}		
		else 
			if (folder.getNext()) {
				folder.minus = iconPath + 'Tminus.gif'
				folder.plus = iconPath + 'Tplus.gif'
			}
			else {
				folder.minus = iconPath + 'Lminus.gif'
				folder.plus = iconPath + 'Lplus.gif'
			}
		
		var image = new Element('img', {
			'src': folder.minus,
			'width': 18,
			'height': 18
		}).addEvent('click', function(){
			if (folder.hasClass('f-open')) {
				image.setProperty('src', folder.plus);
				folderImage.setProperty('src', iconPath + '_closed.gif');
				folderContents.each(function(el){
					el.setStyle('display', 'none');
				});
				folder.removeClass('f-open');
			}
			else {
				image.setProperty('src', folder.minus);
				folderImage.setProperty('src', iconPath + '_open.gif');
				folderContents.each(function(el){
					el.setStyle('display', 'block');
				});
				folder.addClass('f-open');
			}
		}).inject(folder, 'top');
		
		if (!folder.hasClass('f-open')) {
			image.setProperty('src', folder.plus);
			folderContents.each(function(el){
				el.setStyle('display', 'none');
			});
			folder.removeClass('f-open');
		}

		// Add connecting branches to each file node

		folderContents.each(function(element){
			var docs = element.getChildren( 'li.doc');
			docs.each(function(el){
				if (el == docs.getLast() && !el.getNext()) {
					new Element('img', {
						'src': iconPath + 'L.gif',
						'width': 18,
						'height': 18
					}).inject(el.getElement('span'), 'before');
				}
				else {
					new Element('img', {
						'src': iconPath + 'T.gif',
						'width': 18,
						'height': 18
					}).inject(el.getElement('span'), 'before');
				}
			});
		});
		
	});
	
	// Add connecting branches to each node

	$$('#'+treeID+' li').each(function(node){
		node.getParents('li').each(function(parent){
			if (parent.getNext()) {
				new Element('img', {
					'src': iconPath + 'I.gif',
					'width': 18,
					'height': 18
				}).inject(node, 'top');
			}
			else {
				new Element('img', {
					'src': iconPath + 'spacer.gif',
					'width': 18,
					'height': 18
				}).inject(node, 'top');
			}
		});
	});

	$$('#'+treeID+' li.doc').each(function(el){
                var fileIco = '_doc.gif';
                var classes = el.get('class'); // doc pdf
                var class_array = classes.split(' ');
                Array.each(class_array , function( class_name , index){
                    switch ( class_name){
                        case 'pdf':
                            fileIco = '_pdf.gif';
                             break;
                        case 'word':
                            fileIco = '_word.gif';
                        break;
                        case 'user':
                            fileIco = '_user.png';
                        break;
                        case 'useradd':
                            fileIco = '_useradd.png';
                        break;
                        case 'group':
                            fileIco = '_group.png';
                        break;
                        case 'groupadd':
                            fileIco = '_groupadd.png';
                        break;
                        case 'db':
                            fileIco = '_db.png';
                        break;
                        case 'role-list':
                            fileIco = '_role-list.png';
                        break;
                         case 'role-edit':
                            fileIco = '_role-edit.png';
                        break;
                         case 'role-add':
                            fileIco = '_role-add.png';
                        break;
                         case 'role-del':
                            fileIco = '_role-del.png';
                        break;
                        case 'perm-add':
                            fileIco = '_perm-add.png';
                        break;
                       case 'perm':
                            fileIco = '_perm.png';
                        break;
                       case 'pass':
                            fileIco= '_pass.png';
                            break;
                       case 'user-diff':
                            fileIco = '_user-diff.png';
                            break;
                       case 'online':
                            fileIco = '_online.png';
                            break;     
                       

                    }
                })

		new Element('img', {
			//'src': iconPath + '_doc.gif',
                        'src': iconPath + fileIco,
			'width': 18,
			'height': 18
		}).inject(el.getElement('span'), 'before');
	});
        

	
}
