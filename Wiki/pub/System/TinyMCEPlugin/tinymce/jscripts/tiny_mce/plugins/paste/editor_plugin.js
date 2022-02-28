!function(){function e(e,t){return e.getParam(t,n[t])}var t=tinymce.each,n={paste_auto_cleanup_on_paste:!0,paste_enable_default_filters:!0,paste_block_drop:!1,paste_retain_style_properties:"none",paste_strip_class_attributes:"mso",paste_remove_spans:!1,paste_remove_styles:!1,paste_remove_styles_if_webkit:!0,paste_convert_middot_lists:!0,paste_convert_headers_to_strong:!1,paste_dialog_width:"450",paste_dialog_height:"400",paste_max_consecutive_linebreaks:2,paste_text_use_dialog:!1,paste_text_sticky:!1,paste_text_sticky_default:!1,paste_text_notifyalways:!1,paste_text_linebreaktype:"combined",paste_text_replacements:[[/\u2026/g,"..."],[/[\x93\x94\u201c\u201d]/g,'"'],[/[\x60\x91\x92\u2018\u2019]/g,"'"]]};tinymce.create("tinymce.plugins.PastePlugin",{init:function(n,s){function a(t,s){var a,o=n.dom;i.onPreProcess.dispatch(i,t),t.node=o.create("div",0,t.content),tinymce.isGecko&&(a=n.selection.getRng(!0)).startContainer==a.endContainer&&3==a.startContainer.nodeType&&1===t.node.childNodes.length&&/^(p|h[1-6]|pre)$/i.test(t.node.firstChild.nodeName)&&-1===t.content.indexOf("__MCE_ITEM__")&&o.remove(t.node.firstChild,!0),i.onPostProcess.dispatch(i,t),t.content=n.serializer.serialize(t.node,{getInner:1,forced_root_block:""}),!s&&n.pasteAsPlainText?(i._insertPlainText(t.content),e(n,"paste_text_sticky")||(n.pasteAsPlainText=!1,n.controlManager.setActive("pastetext",!1))):i._insert(t.content)}function o(e){function s(e){e.preventDefault()}var o,i,r,c,l,d,p=n.selection,_=n.dom,g=n.getBody();if((e.clipboardData||_.doc.dataTransfer)&&(d=(e.clipboardData||_.doc.dataTransfer).getData("Text"),n.pasteAsPlainText))return e.preventDefault(),void a({content:_.encode(d).replace(/\r?\n/g,"<br />")});if(!_.get("_mcePaste")){if(o=_.add(g,"div",{id:"_mcePaste",class:"mcePaste","data-mce-bogus":"1"},"\ufeff\ufeff"),l=g!=n.getDoc().body?_.getPos(n.selection.getStart(),g).y:g.scrollTop+_.getViewPort(n.getWin()).y,_.setStyles(o,{position:"absolute",left:tinymce.isGecko?-40:0,top:l-25,width:1,height:1,overflow:"hidden"}),tinymce.isIE)return c=p.getRng(),(r=_.doc.body.createTextRange()).moveToElementText(o),r.execCommand("Paste"),_.remove(o),"\ufeff\ufeff"===o.innerHTML?(n.execCommand("mcePasteWord"),void e.preventDefault()):(p.setRng(c),p.setContent(""),setTimeout(function(){a({content:o.innerHTML})},0),tinymce.dom.Event.cancel(e));_.bind(n.getDoc(),"mousedown",s),_.bind(n.getDoc(),"keydown",s),i=n.selection.getRng(),o=o.firstChild,(r=n.getDoc().createRange()).setStart(o,0),r.setEnd(o,2),p.setRng(r),window.setTimeout(function(){var e,o="";_.select("div.mcePaste > div.mcePaste").length?o="<p>"+_.encode(d).replace(/\r?\n\r?\n/g,"</p><p>").replace(/\r?\n/g,"<br />")+"</p>":(e=_.select("div.mcePaste"),t(e,function(e){var n=e.firstChild;n&&"DIV"==n.nodeName&&n.style.marginTop&&n.style.backgroundColor&&_.remove(n,1),t(_.select("span.Apple-style-span",e),function(e){_.remove(e,1)}),t(_.select("br[data-mce-bogus]",e),function(e){_.remove(e)}),"mcePaste"!=e.parentNode.className&&(o+=e.innerHTML)})),t(_.select("div.mcePaste"),function(e){_.remove(e)}),i&&p.setRng(i),a({content:o}),_.unbind(n.getDoc(),"mousedown",s),_.unbind(n.getDoc(),"keydown",s)},0)}}var i=this;i.editor=n,i.url=s,i.onPreProcess=new tinymce.util.Dispatcher(i),i.onPostProcess=new tinymce.util.Dispatcher(i),i.onPreProcess.add(i._preProcess),i.onPostProcess.add(i._postProcess),i.onPreProcess.add(function(e,t){n.execCallback("paste_preprocess",e,t)}),i.onPostProcess.add(function(e,t){n.execCallback("paste_postprocess",e,t)}),n.onKeyDown.addToTop(function(e,t){if((tinymce.isMac?t.metaKey:t.ctrlKey)&&86==t.keyCode||t.shiftKey&&45==t.keyCode)return!1}),n.pasteAsPlainText=e(n,"paste_text_sticky_default"),n.addCommand("mceInsertClipboardContent",function(e,t){a(t,!0)}),e(n,"paste_text_use_dialog")||n.addCommand("mcePasteText",function(t,s){var a=tinymce.util.Cookie;n.pasteAsPlainText=!n.pasteAsPlainText,n.controlManager.setActive("pastetext",n.pasteAsPlainText),n.pasteAsPlainText&&!a.get("tinymcePasteText")&&(e(n,"paste_text_sticky")?n.windowManager.alert(n.translate("paste.plaintext_mode_sticky")):n.windowManager.alert(n.translate("paste.plaintext_mode")),e(n,"paste_text_notifyalways")||a.set("tinymcePasteText","1",new Date((new Date).getFullYear()+1,12,31)))}),n.addButton("pastetext",{title:"paste.paste_text_desc",cmd:"mcePasteText"}),n.addButton("selectall",{title:"paste.selectall_desc",cmd:"selectall"}),e(n,"paste_auto_cleanup_on_paste")&&(tinymce.isOpera||/Firefox\/2/.test(navigator.userAgent)?n.onKeyDown.addToTop(function(e,t){((tinymce.isMac?t.metaKey:t.ctrlKey)&&86==t.keyCode||t.shiftKey&&45==t.keyCode)&&o(t)}):n.onPaste.addToTop(function(e,t){return o(t)})),n.onInit.add(function(){n.controlManager.setActive("pastetext",n.pasteAsPlainText),e(n,"paste_block_drop")&&n.dom.bind(n.getBody(),["dragend","dragover","draggesture","dragdrop","drop","drag"],function(e){return e.preventDefault(),e.stopPropagation(),!1})}),i._legacySupport()},getInfo:function(){return{longname:"Paste text/word",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/paste",version:tinymce.majorVersion+"."+tinymce.minorVersion}},_preProcess:function(n,s){function a(e){t(e,function(e){l=e.constructor==RegExp?l.replace(e,""):l.replace(e[0],e[1])})}function o(e,t){if("all"===r)return"";var n=d(p(t.replace(/^(["'])(.*)\1$/,"$2")," "),function(e){return/^(?!mso)/i.test(e)});return n.length?' class="'+n.join(" ")+'"':""}var i,r,c=this.editor,l=s.content,d=tinymce.grep,p=tinymce.explode,_=tinymce.trim;if(0!=c.settings.paste_enable_default_filters){if(tinymce.isIE&&document.documentMode>=9&&/<(h[1-6r]|p|div|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|caption|blockquote|center|dl|dt|dd|dir|fieldset)/.test(s.content)&&(a([[/(?:<br>&nbsp;[\s\r\n]+|<br>)*(<\/?(h[1-6r]|p|div|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|caption|blockquote|center|dl|dt|dd|dir|fieldset)[^>]*>)(?:<br>&nbsp;[\s\r\n]+|<br>)*/g,"$1"]]),a([[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])),/class="?Mso|style="[^"]*\bmso-|w:WordDocument/i.test(l)||s.wordContent){s.wordContent=!0,a([/^\s*(&nbsp;)+/gi,/(&nbsp;|<br[^>]*>)+\s*$/gi]),e(c,"paste_convert_headers_to_strong")&&(l=l.replace(/<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi,"<p><strong>$1</strong></p>")),e(c,"paste_convert_middot_lists")&&a([[/<!--\[if !supportLists\]-->/gi,"$&__MCE_ITEM__"],[/(<span[^>]+(?:mso-list:|:\s*symbol)[^>]+>)/gi,"$1__MCE_ITEM__"],[/(<p[^>]+(?:MsoListParagraph)[^>]+>)/gi,"$1__MCE_ITEM__"]]),a([/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi," "]]);do{i=l.length,l=(l=l.replace(/(<?!(ol|ul)[^>]*\s)(?:id|name|language|type|on\w+|\w+:\w+)=(?:"[^"]*"|\w+)\s?/gi,"$1")).replace(/(<(ol|ul)[^>]*\s)(?:id|name|language|on\w+|\w+:\w+)=(?:"[^"]*"|\w+)\s?/gi,"$1")}while(i!=l.length);0==e(c,"paste_retain_style_properties").replace(/^none$/i,"").length?l=l.replace(/<\/?span[^>]*>/gi,""):a([[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return t.length>0?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join(" "):""}],[/(<[a-z][^>]*)\sstyle="([^"]*)"/gi,function(e,n,s){var a=[],o=0,i=p(_(s).replace(/&quot;/gi,"'"),";");return t(i,function(e){function t(e){return e+("0"!==e&&/\d$/.test(e))?"px":""}var n,s,i=p(e,":");if(2==i.length){switch(n=i[0].toLowerCase(),s=i[1].toLowerCase(),n){case"mso-padding-alt":case"mso-padding-top-alt":case"mso-padding-right-alt":case"mso-padding-bottom-alt":case"mso-padding-left-alt":case"mso-margin-alt":case"mso-margin-top-alt":case"mso-margin-right-alt":case"mso-margin-bottom-alt":case"mso-margin-left-alt":case"mso-table-layout-alt":case"mso-height":case"mso-width":case"mso-vertical-align-alt":return void(a[o++]=n.replace(/^mso-|-alt$/g,"")+":"+t(s));case"horiz-align":return void(a[o++]="text-align:"+s);case"vert-align":return void(a[o++]="vertical-align:"+s);case"font-color":case"mso-foreground":return void(a[o++]="color:"+s);case"mso-background":case"mso-highlight":return void(a[o++]="background:"+s);case"mso-default-height":return void(a[o++]="min-height:"+t(s));case"mso-default-width":return void(a[o++]="min-width:"+t(s));case"mso-padding-between-alt":return void(a[o++]="border-collapse:separate;border-spacing:"+t(s));case"text-line-through":return void("single"!=s&&"double"!=s||(a[o++]="text-decoration:line-through"));case"mso-zero-height":return void("yes"==s&&(a[o++]="display:none"))}if(/^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?!align|decor|indent|trans)|top-bar|version|vnd|word-break)/.test(n))return;a[o++]=n+":"+i[1]}}),o>0?n+' style="'+a.join(";")+'"':n}]])}e(c,"paste_convert_headers_to_strong")&&a([[/<h[1-6][^>]*>/gi,"<p><strong>"],[/<\/h[1-6][^>]*>/gi,"</strong></p>"]]),a([[/Version:[\d.]+\nStartHTML:\d+\nEndHTML:\d+\nStartFragment:\d+\nEndFragment:\d+/gi,""]]),"none"!==(r=e(c,"paste_strip_class_attributes"))&&(l=(l=l.replace(/ class="([^"]+)"/gi,o)).replace(/ class=([\-\w]+)/gi,o)),e(c,"paste_remove_spans")&&(l=l.replace(/<\/?span[^>]*>/gi,"")),s.content=l}},_postProcess:function(n,s){var a,o=this.editor,i=o.dom;0!=o.settings.paste_enable_default_filters&&(s.wordContent&&(t(i.select("a",s.node),function(e){e.href&&-1==e.href.indexOf("#_Toc")||i.remove(e,1)}),e(o,"paste_convert_middot_lists")&&this._convertLists(n,s),a=e(o,"paste_retain_style_properties"),tinymce.is(a,"string")&&"all"!==a&&"*"!==a&&(a=tinymce.explode(a.replace(/^none$/i,"")),t(i.select("*",s.node),function(e){var t,n,s,o={},r=0;if(a)for(t=0;t<a.length;t++)n=a[t],(s=i.getStyle(e,n))&&(o[n]=s,r++);i.setAttrib(e,"style",""),a&&r>0?i.setStyles(e,o):"SPAN"!=e.nodeName||e.className||i.remove(e,!0)}))),e(o,"paste_remove_styles")||e(o,"paste_remove_styles_if_webkit")&&tinymce.isWebKit?t(i.select("*[style]",s.node),function(e){e.removeAttribute("style"),e.removeAttribute("data-mce-style")}):tinymce.isWebKit&&t(i.select("*",s.node),function(e){e.removeAttribute("data-mce-style")}))},_convertLists:function(e,n){var s,a,o,i,r,c=e.editor.dom,l=-1,d=[];t(c.select("p",n.node),function(e){var n,r,p,_,g,u="";for(n=e.firstChild;n&&3==n.nodeType;n=n.nextSibling)u+=n.nodeValue;u=e.innerHTML.replace(/<\/?\w+[^>]*>/gi,"").replace(/&nbsp;/g," "),/^(__MCE_ITEM__)+[\u2022\u00b7\u00a7\u00d8o\u25CF]\s*\u00a0*/.test(u)&&(r="ul"),/^__MCE_ITEM__\s*\w+\.\s*\u00a0+/.test(u)&&(r="ol"),r?((o=parseFloat(e.style.marginLeft||0))>l&&d.push(o),s&&r==i?o>l?s=a.appendChild(c.create(r)):o<l&&(_=tinymce.inArray(d,o),g=c.getParents(s.parentNode,r),s=g[g.length-1-_]||s):(s=c.create(r),c.insertAfter(s,e)),t(c.select("span",e),function(e){var t=e.innerHTML.replace(/<\/?\w+[^>]*>/gi,"");"ul"==r&&/^__MCE_ITEM__[\u2022\u00b7\u00a7\u00d8o\u25CF]/.test(t)?c.remove(e):/^__MCE_ITEM__[\s\S]*\w+\.(&nbsp;|\u00a0)*\s*/.test(t)&&c.remove(e)}),p=e.innerHTML,p="ul"==r?e.innerHTML.replace(/__MCE_ITEM__/g,"").replace(/^[\u2022\u00b7\u00a7\u00d8o\u25CF]\s*(&nbsp;|\u00a0)+\s*/,""):e.innerHTML.replace(/__MCE_ITEM__/g,"").replace(/^\s*[\w|'<'|'>']+\.(&nbsp;|\u00a0)+\s*/,""),a=s.appendChild(c.create("li",0,p)),c.remove(e),l=o,i=r):s=l=0}),-1!=(r=n.node.innerHTML).indexOf("__MCE_ITEM__")&&(n.node.innerHTML=r.replace(/__MCE_ITEM__/g,""))},_insert:function(e,t){var n=this.editor,s=n.selection.getRng();n.selection.isCollapsed()||s.startContainer==s.endContainer||n.getDoc().execCommand("Delete",!1,null),n.execCommand("mceInsertContent",!1,e,{skip_undo:t})},_insertPlainText:function(n){function s(e){t(e,function(e){n=e.constructor==RegExp?n.replace(e,""):n.replace(e[0],e[1])})}var a=this.editor,o=e(a,"paste_text_linebreaktype"),i=e(a,"paste_text_replacements"),r=tinymce.is;if("string"==typeof n&&n.length>0){/<(?:p|br|h[1-6]|ul|ol|dl|table|t[rdh]|div|blockquote|fieldset|pre|address|center)[^>]*>/i.test(n)?s([/[\n\r]+/g]):s([/\r+/g]),s([[/<\/(?:p|h[1-6]|ul|ol|dl|table|div|blockquote|fieldset|pre|address|center)>/gi,"\n\n"],[/<br[^>]*>|<\/tr>/gi,"\n"],[/<\/t[dh]>\s*<t[dh][^>]*>/gi,"\t"],/<[a-z!\/?][^>]*>/gi,[/&nbsp;/gi," "],[/(?:(?!\n)\s)*(\n+)(?:(?!\n)\s)*/gi,"$1"]]);var c=Number(e(a,"paste_max_consecutive_linebreaks"));if(c>-1){for(var l=new RegExp("\n{"+(c+1)+",}","g"),d="";d.length<c;)d+="\n";s([[l,d]])}n=a.dom.decode(tinymce.html.Entities.encodeRaw(n)),r(i,"array")?s(i):r(i,"string")&&s(new RegExp(i,"gi")),s("none"==o?[[/\n+/g," "]]:"br"==o?[[/\n/g,"<br />"]]:"p"==o?[[/\n+/g,"</p><p>"],[/^(.*<\/p>)(<p>)$/,"<p>$1"]]:[[/\n\n/g,"</p><p>"],[/^(.*<\/p>)(<p>)$/,"<p>$1"],[/\n/g,"<br />"]]),a.execCommand("mceInsertContent",!1,n)}},_legacySupport:function(){var t=this,n=t.editor;n.addCommand("mcePasteWord",function(){n.windowManager.open({file:t.url+"/pasteword.htm",width:parseInt(e(n,"paste_dialog_width")),height:parseInt(e(n,"paste_dialog_height")),inline:1})}),e(n,"paste_text_use_dialog")&&n.addCommand("mcePasteText",function(){n.windowManager.open({file:t.url+"/pastetext.htm",width:parseInt(e(n,"paste_dialog_width")),height:parseInt(e(n,"paste_dialog_height")),inline:1})}),n.addButton("pasteword",{title:"paste.paste_word_desc",cmd:"mcePasteWord"})}}),tinymce.PluginManager.add("paste",tinymce.plugins.PastePlugin)}();
