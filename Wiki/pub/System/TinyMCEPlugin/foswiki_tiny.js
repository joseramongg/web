var FoswikiTiny={foswikiVars:null,metaTags:null,tml2html:new Array,html2tml:new Array,transformCbs:new Array,getFoswikiVar:function(name){if(null==FoswikiTiny.foswikiVars){var sets=tinyMCE.activeEditor.getParam("foswiki_vars","");FoswikiTiny.foswikiVars=eval(sets)}return FoswikiTiny.foswikiVars[name]},expandVariables:function(i){for(var e in FoswikiTiny.foswikiVars)"WEB"!=e&&"TOPIC"!=e&&"SYSTEMWEB"!=e&&""!=FoswikiTiny.foswikiVars[e]&&(i=i.replace("%"+e+"%",FoswikiTiny.foswikiVars[e],"g"));return i},saveEnabled:0,enableSaveButton:function(i){var e=i?null:"disabled";FoswikiTiny.saveEnabled=i?1:0;var n=document.getElementById("save");n&&(n.disabled=e),(n=document.getElementById("quietsave"))&&(n.disabled=e),(n=document.getElementById("checkpoint"))&&(n.disabled=e),(n=document.getElementById("preview"))&&(n.style.display="none",n.disabled=e)},transform:function(i,e,n,t,o){var s=FoswikiTiny.getFoswikiVar("SCRIPTURL"),a=FoswikiTiny.getFoswikiVar("SCRIPTSUFFIX");null==a&&(a=""),s+="/rest"+a+"/WysiwygPlugin/"+e;var r=FoswikiTiny.getFoswikiVar("WEB")+"."+FoswikiTiny.getFoswikiVar("TOPIC");tinymce.util.XHR.send({url:s,content_type:"application/x-www-form-urlencoded",type:"POST",data:"nocache="+encodeURIComponent((new Date).getTime())+"&topic="+encodeURIComponent(r)+"&text="+encodeURIComponent(n),async:!0,scope:i,success:t,error:o})},removeErasedSpans:function(i,e){e.content=e.content.replace(/<span[^>]*class=['"][^'">]*WYSIWYG_HIDDENWHITESPACE[^>]+>&nbsp;<\/span>/g,"")},setUpContent:function(i,e,n){if("mce_fullscreen"!=i){var t=tinyMCE.getInstanceById(i);t.initialisedFromServer||(FoswikiTiny.switchToWYSIWYG(t),t.onGetContent.add(FoswikiTiny.removeErasedSpans),t.initialisedFromServer=!0)}},cleanBeforeSave:function(i,e){var n=document.getElementById(e);null!=n&&(n.onclick=function(){return tinyMCE.getInstanceById(i).isNotDirty=!0,!0})},onSubmitHandler:!1,switchToRaw:function(i){var e=i.getContent();(t=document.getElementById("foswikiTinyMcePluginWysiwygEditHelp"))&&(t.style.display="none"),(t=document.getElementById("foswikiTinyMcePluginRawEditHelp"))&&(t.style.display="block");for(var n=0;n<FoswikiTiny.html2tml.length;n++){e=FoswikiTiny.html2tml[n].apply(i,[i,e])}FoswikiTiny.enableSaveButton(!1),i.getElement().value="Please wait... retrieving page from server.",FoswikiTiny.transform(i,"html2tml",e,function(e,n,t){i.getElement().value=e,FoswikiTiny.enableSaveButton(!0);for(var o=0;o<FoswikiTiny.transformCbs.length;o++){FoswikiTiny.transformCbs[o].apply(i,[i,e])}},function(e,n,t){i.setContent("<div class='foswikiAlert'>There was a problem retrieving "+t.url+": "+e+" "+n.status+"</div>")});var t,o=i.id,s=o+"_2WYSIWYG";if(t=document.getElementById(s))t.style.display="inline";else{(t=document.createElement("INPUT")).id=s,t.type="button",t.value="WYSIWYG",t.className="foswikiButton";i.getElement().parentNode.insertBefore(t,i.getElement())}t.onclick=function(){var e=document.getElementById("foswikiTinyMcePluginWysiwygEditHelp");return e&&(e.style.display="block"),(e=document.getElementById("foswikiTinyMcePluginRawEditHelp"))&&(e.style.display="none"),tinyMCE.execCommand("mceToggleEditor",null,o),FoswikiTiny.switchToWYSIWYG(i),!1};var a=document.getElementsByTagName("body")[0];tinymce.DOM.removeClass(a,"foswikiHasWysiwyg"),i.getElement().onchange=function(){return tinyMCE.getInstanceById(o).isNotDirty=!1,!0},i.onSubmitHandler=function(e,n){i.initialized=!1},i.onSubmit.addToTop(i.onSubmitHandler),FoswikiTiny.cleanBeforeSave(o,"save"),FoswikiTiny.cleanBeforeSave(o,"quietsave"),FoswikiTiny.cleanBeforeSave(o,"checkpoint"),FoswikiTiny.cleanBeforeSave(o,"preview"),FoswikiTiny.cleanBeforeSave(o,"cancel")},switchToWYSIWYG:function(i){i.getElement().onchange=null;var e=i.getElement().value;i.onSubmitHandler&&(i.onSubmit.remove(i.onSubmitHandler),i.onSubmitHandler=null),FoswikiTiny.enableSaveButton(!1);var n=FoswikiTiny.getFoswikiVar("PUBURLPATH")+"/"+FoswikiTiny.getFoswikiVar("SYSTEMWEB")+"/DocumentGraphics/processing.gif";i.setContent("<img src='"+n+"' />"),FoswikiTiny.transform(i,"tml2html",e,function(e,n,t){for(var o=0;o<FoswikiTiny.tml2html.length;o++){e=FoswikiTiny.tml2html[o].apply(this,[this,e])}void 0!==i.plugins.wordcount&&void 0!==i.plugins.wordcount.block&&(i.plugins.wordcount.block=0),i.setContent(e),i.isNotDirty=!0,FoswikiTiny.enableSaveButton(!0);var s=i.id+"_2WYSIWYG",a=document.getElementById(s);if(a){a.style.display="none";var r=document.getElementsByTagName("body")[0];tinymce.DOM.addClass(r,"foswikiHasWysiwyg")}for(o=0;o<FoswikiTiny.transformCbs.length;o++){FoswikiTiny.transformCbs[o].apply(i,[i,e])}},function(e,n,t){i.setContent("<div class='foswikiAlert'>There was a problem retrieving "+t.url+": "+e+" "+n.status+"</div>")})},saveCallback:function(i,e,n){for(var t=tinyMCE.getInstanceById(i),o=0;o<FoswikiTiny.html2tml.length;o++){e=FoswikiTiny.html2tml[o].apply(t,[t,e])}var s=tinyMCE.activeEditor.getParam("foswiki_secret_id");return null!=s&&-1==e.indexOf("\x3c!--"+s+"--\x3e")&&(e="\x3c!--"+s+"--\x3e"+e),e},convertLink:function(i,e,n){null==n&&(n=!1);var t=FoswikiTiny.getFoswikiVar("PUBURL"),o=FoswikiTiny.getFoswikiVar("VIEWSCRIPTURL"),s=FoswikiTiny.getFoswikiVar("SCRIPTURL");if(i=FoswikiTiny.expandVariables(i),n)0!=i.indexOf(t+"/")&&0==i.indexOf(o+"/")&&0!=s.indexOf(o)&&0==(i=(i=i.substr(o.length+1)).replace(/\/+/g,".")).indexOf(FoswikiTiny.getFoswikiVar("WEB")+".")&&(i=i.substr(FoswikiTiny.getFoswikiVar("WEB").length+1));else if(-1==i.indexOf("/")){var a=/^((?:\w+\.)*)(\w+)$/.exec(i);if(null!=a){var r=a[1],l=a[2];null!=r&&0!=r.length||(r=FoswikiTiny.getFoswikiVar("WEB")),i=o+"/"+(r=(r=r.replace(/\.+/g,"/")).replace(/\/+$/,""))+"/"+l}}return i},convertPubURL:function(i){if(-1==(i=FoswikiTiny.expandVariables(i)).indexOf("/")){i=FoswikiTiny.getFoswikiVar("PUBURL")+"/"+FoswikiTiny.getFoswikiVar("WEB")+"/"+FoswikiTiny.getFoswikiVar("TOPIC")+"/"+i}return i},getMetaTag:function(i){if(null==FoswikiTiny.metaTags||0==FoswikiTiny.metaTags.length){var e=document.getElementsByTagName("META");e=e[0].parentNode.childNodes,FoswikiTiny.metaTags=new Array;for(var n=0;n<e.length;n++)null!=e[n].tagName&&"META"==e[n].tagName.toUpperCase()&&(FoswikiTiny.metaTags[e[n].name]=e[n].content)}return FoswikiTiny.metaTags[i]},install:function(i){i||(i=FoswikiTiny.init),i&&(tinyMCE.init(i),tinyMCE.each(tinyMCE.explode(i.plugins),function(e){if("-"==e.charAt(0)){e=e.substr(1,e.length);var n=i.foswiki_plugin_urls[e];n&&tinyMCE.PluginManager.load(e,n)}}))},getTopicPath:function(){return this.getFoswikiVar("WEB")+"."+this.getFoswikiVar("TOPIC")},getScriptURL:function(i){var e=this.getFoswikiVar("SCRIPTURL"),n=this.getFoswikiVar("SCRIPTSUFFIX");return null==n&&(n=""),e+"/"+i+n},getRESTURL:function(i){return this.getScriptURL("rest")+"/WysiwygPlugin/"+i},getListOfAttachments:function(onSuccess){var url=this.getRESTURL("attachments"),path=this.getTopicPath(),params="nocache="+encodeURIComponent((new Date).getTime())+"&topic="+encodeURIComponent(path);tinymce.util.XHR.send({url:url+"?"+params,type:"POST",content_type:"application/x-www-form-urlencoded",data:params,success:function(atts){null!=atts&&onSuccess(eval(atts))}})}};
