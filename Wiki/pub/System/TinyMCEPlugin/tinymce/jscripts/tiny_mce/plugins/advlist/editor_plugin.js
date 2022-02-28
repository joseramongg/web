!function(){var e=tinymce.each;tinymce.create("tinymce.plugins.AdvListPlugin",{init:function(t,i){function n(t){var i=[];return e(t.split(/,/),function(e){i.push({title:"advlist."+("default"==e?"def":e.replace(/-/g,"_")),styles:{listStyleType:"default"==e?"":e}})}),i}this.editor=t,this.numlist=t.getParam("advlist_number_styles")||n("default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman"),this.bullist=t.getParam("advlist_bullet_styles")||n("default,circle,disc,square"),tinymce.isIE&&/MSIE [2-7]/.test(navigator.userAgent)&&(this.isIE7=!0)},createControl:function(t,i){function n(t,i){var n=!0;return e(i.styles,function(e,i){if(d.dom.getStyle(t,i)!=e)return n=!1,!1}),n}function o(){var e,i=d.dom,o=d.selection;(e=i.getParent(o.getNode(),"ol,ul"))&&e.nodeName!=("bullist"==t?"OL":"UL")&&!n(e,s)||d.execCommand("bullist"==t?"InsertUnorderedList":"InsertOrderedList"),s&&(e=i.getParent(o.getNode(),"ol,ul"))&&(i.setStyles(e,s.styles),e.removeAttribute("data-mce-style")),d.focus()}var l,s,r=this,d=r.editor;if("numlist"==t||"bullist"==t)return"advlist.def"==r[t][0].title&&(s=r[t][0]),(l=i.createSplitButton(t,{title:"advanced."+t+"_desc",class:"mce_"+t,onclick:function(){o()}})).onRenderMenu.add(function(i,l){l.onHideMenu.add(function(){r.bookmark&&(d.selection.moveToBookmark(r.bookmark),r.bookmark=0)}),l.onShowMenu.add(function(){var i,o=d.dom.getParent(d.selection.getNode(),"ol,ul");(o||s)&&(i=r[t],e(l.items,function(t){var l=!0;t.setSelected(0),o&&!t.isDisabled()&&(e(i,function(e){if(e.id==t.id&&!n(o,e))return l=!1,!1}),l&&t.setSelected(1))}),o||l.items[s.id].setSelected(1)),d.focus(),tinymce.isIE&&(r.bookmark=d.selection.getBookmark(1))}),l.add({id:d.dom.uniqueId(),title:"advlist.types",class:"mceMenuItemTitle",titleItem:!0}).setDisabled(1),e(r[t],function(e){r.isIE7&&"lower-greek"==e.styles.listStyleType||(e.id=d.dom.uniqueId(),l.add({id:e.id,title:e.title,onclick:function(){s=e,o()}}))})}),l},getInfo:function(){return{longname:"Advanced lists",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/advlist",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("advlist",tinymce.plugins.AdvListPlugin)}();
