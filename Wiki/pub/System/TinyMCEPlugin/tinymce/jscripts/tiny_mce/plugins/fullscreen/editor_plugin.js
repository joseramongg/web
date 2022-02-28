!function(){var e=tinymce.DOM,t=function(e,n,t){var l=function(t){var l=e.controlManager.get(t),o=n.controlManager.get(t);l&&o&&o.displayColor(l.value)};l("forecolor"),l("backcolor"),n.setContent(e.getContent({format:"raw"}),{format:"raw"}),n.selection.moveToBookmark(t),e.plugins.spellchecker&&n.plugins.spellchecker&&n.plugins.spellchecker.setLanguage(e.plugins.spellchecker.selectedLang)};tinymce.create("tinymce.plugins.FullScreenPlugin",{init:function(l,o){var i,r,c,s,a,u,d=this,m={},f=e.doc.documentElement;l.addCommand("mceFullScreen",function(){var t;if(l.getParam("fullscreen_is_enabled"))l.getParam("fullscreen_new_window")?closeFullscreen():e.win.setTimeout(function(){var e=l;tinyMCE.get(e.getParam("fullscreen_editor_id")).plugins.fullscreen.saveState(e),tinyMCE.remove(e)},10);else if(l.getParam("fullscreen_new_window")){d.fullscreenSettings={bookmark:l.selection.getBookmark()},t=e.win.open(o+"/fullscreen.htm","mceFullScreenPopup","fullscreen=yes,menubar=no,toolbar=no,scrollbars=no,resizable=yes,left=0,top=0,width="+screen.availWidth+",height="+screen.availHeight);try{t.resizeTo(screen.availWidth,screen.availHeight)}catch(e){}}else r=e.getStyle(e.doc.body,"overflow",1)||"auto",c=e.getStyle(f,"overflow",1),i=e.getViewPort(),s=i.x,a=i.y,tinymce.isOpera&&"visible"==r&&(r="auto"),tinymce.isIE&&"scroll"==r&&(r="auto"),!tinymce.isIE||"visible"!=c&&"scroll"!=c||(c="auto"),"0px"==r&&(r=""),e.setStyle(e.doc.body,"overflow","hidden"),f.style.overflow="hidden",i=e.getViewPort(),e.win.scrollTo(0,0),tinymce.isIE&&(i.h-=1),u=tinymce.isIE6||"BackCompat"==document.compatMode?"absolute;top:"+i.y:"fixed;top:0",n=e.add(e.doc.body,"div",{id:"mce_fullscreen_container",style:"position:"+u+";left:0;width:"+i.w+"px;height:"+i.h+"px;z-index:200000;"}),e.add(n,"div",{id:"mce_fullscreen"}),tinymce.each(l.settings,function(e,n){m[n]=e}),m.id="mce_fullscreen",m.width=n.clientWidth,m.height=n.clientHeight-15,m.fullscreen_is_enabled=!0,m.fullscreen_editor_id=l.id,m.theme_advanced_resizing=!1,m.save_onsavecallback=function(){l.setContent(tinyMCE.get(m.id).getContent()),l.execCommand("mceSave")},tinymce.each(l.getParam("fullscreen_settings"),function(e,n){m[n]=e}),d.fullscreenSettings={bookmark:l.selection.getBookmark(),fullscreen_overflow:r,fullscreen_html_overflow:c,fullscreen_scrollx:s,fullscreen_scrolly:a},"external"===m.theme_advanced_toolbar_location&&(m.theme_advanced_toolbar_location="top"),tinyMCE.oldSettings=tinyMCE.settings,d.fullscreenEditor=new tinymce.Editor("mce_fullscreen",m),d.fullscreenEditor.onInit.add(function(){d.loadState(d.fullscreenEditor)}),d.fullscreenEditor.render(),d.fullscreenElement=new tinymce.dom.Element("mce_fullscreen_container"),d.fullscreenElement.update(),d.resizeFunc=tinymce.dom.Event.add(e.win,"resize",function(){var e,n,t=tinymce.DOM.getViewPort(),l=d.fullscreenEditor;e=l.dom.getSize(l.getContainer().getElementsByTagName("table")[0]),n=l.dom.getSize(l.getContainer().getElementsByTagName("iframe")[0]),l.theme.resizeTo(t.w-e.w+n.w,t.h-e.h+n.h)})}),l.addButton("fullscreen",{title:"fullscreen.desc",cmd:"mceFullScreen"}),l.onNodeChange.add(function(e,n){n.setActive("fullscreen",e.getParam("fullscreen_is_enabled"))}),d.loadState=function(e){if(!e||!d.fullscreenSettings)throw"No fullscreen editor to load to";t(l,e,d.fullscreenSettings.bookmark),e.focus()},d.saveState=function(n){if(!n||!d.fullscreenSettings)throw"No fullscreen editor to restore from";var o=d.fullscreenSettings;t(n,l,n.selection.getBookmark()),l.getParam("fullscreen_new_window")||(tinymce.dom.Event.remove(e.win,"resize",d.resizeFunc),delete d.resizeFunc,e.remove("mce_fullscreen_container"),e.doc.documentElement.style.overflow=o.fullscreen_html_overflow,e.setStyle(e.doc.body,"overflow",o.fullscreen_overflow),e.win.scrollTo(o.fullscreen_scrollx,o.fullscreen_scrolly)),tinyMCE.settings=tinyMCE.oldSettings,delete tinyMCE.oldSettings,delete d.fullscreenEditor,delete d.fullscreenElement,delete d.fullscreenSettings,e.win.setTimeout(function(){l.selection.moveToBookmark(void 0),l.focus()},10)}},getInfo:function(){return{longname:"Fullscreen",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/fullscreen",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("fullscreen",tinymce.plugins.FullScreenPlugin)}();
