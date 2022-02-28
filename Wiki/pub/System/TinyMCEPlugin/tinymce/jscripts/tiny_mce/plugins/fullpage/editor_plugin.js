!function(){var t=tinymce.each,e=tinymce.html.Node;tinymce.create("tinymce.plugins.FullPagePlugin",{init:function(t,e){var n=this;n.editor=t,t.addCommand("mceFullPageProperties",function(){t.windowManager.open({file:e+"/fullpage.htm",width:430+parseInt(t.getLang("fullpage.delta_width",0)),height:495+parseInt(t.getLang("fullpage.delta_height",0)),inline:1},{plugin_url:e,data:n._htmlToData()})}),t.addButton("fullpage",{title:"fullpage.desc",cmd:"mceFullPageProperties"}),t.onBeforeSetContent.add(n._setContent,n),t.onGetContent.add(n._getContent,n)},getInfo:function(){return{longname:"Fullpage",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/fullpage",version:tinymce.majorVersion+"."+tinymce.minorVersion}},_htmlToData:function(){function e(t,e){return t.attr(e)||""}var n,l,i=this._parseHeader(),a={},o=this.editor;return a.fontface=o.getParam("fullpage_default_fontface",""),a.fontsize=o.getParam("fullpage_default_fontsize",""),7==(n=i.firstChild).type&&(a.xml_pi=!0,(l=/encoding="([^"]+)"/.exec(n.value))&&(a.docencoding=l[1])),(n=i.getAll("#doctype")[0])&&(a.doctype="<!DOCTYPE"+n.value+">"),(n=i.getAll("title")[0])&&n.firstChild&&(a.metatitle=n.firstChild.value),t(i.getAll("meta"),function(t){var e,n=t.attr("name"),l=t.attr("http-equiv");n?a["meta"+n.toLowerCase()]=t.attr("content"):"Content-Type"==l&&(e=/charset\s*=\s*(.*)\s*/gi.exec(t.attr("content")))&&(a.docencoding=e[1])}),(n=i.getAll("html")[0])&&(a.langcode=e(n,"lang")||e(n,"xml:lang")),(n=i.getAll("link")[0])&&"stylesheet"==n.attr("rel")&&(a.stylesheet=n.attr("href")),(n=i.getAll("body")[0])&&(a.langdir=e(n,"dir"),a.style=e(n,"style"),a.visited_color=e(n,"vlink"),a.link_color=e(n,"link"),a.active_color=e(n,"alink")),a},_dataToHtml:function(n){function l(t,e,n){t.attr(e,n||void 0)}function i(t){o.firstChild?o.insert(t,o.firstChild):o.append(t)}var a,o,r,d,s,c=this.editor.dom;a=this._parseHeader(),(o=a.getAll("head")[0])||(d=a.getAll("html")[0],o=new e("head",1),d.firstChild?d.insert(o,d.firstChild,!0):d.append(o)),d=a.firstChild,n.xml_pi?(s='version="1.0"',n.docencoding&&(s+=' encoding="'+n.docencoding+'"'),7!=d.type&&(d=new e("xml",7),a.insert(d,a.firstChild,!0)),d.value=s):d&&7==d.type&&d.remove(),d=a.getAll("#doctype")[0],n.doctype?(d||(d=new e("#doctype",10),n.xml_pi?a.insert(d,a.firstChild):i(d)),d.value=n.doctype.substring(9,n.doctype.length-1)):d&&d.remove(),d=a.getAll("title")[0],n.metatitle&&(d||((d=new e("title",1)).append(new e("#text",3)).value=n.metatitle,i(d))),n.docencoding&&(d=null,t(a.getAll("meta"),function(t){"Content-Type"==t.attr("http-equiv")&&(d=t)}),d||((d=new e("meta",1)).attr("http-equiv","Content-Type"),d.shortEnded=!0,i(d)),d.attr("content","text/html; charset="+n.docencoding)),t("keywords,description,author,copyright,robots".split(","),function(t){var l,o,r=a.getAll("meta"),s=n["meta"+t];for(l=0;l<r.length;l++)if((o=r[l]).attr("name")==t)return void(s?o.attr("content",s):o.remove());s&&((d=new e("meta",1)).attr("name",t),d.attr("content",s),d.shortEnded=!0,i(d))}),(d=a.getAll("link")[0])&&"stylesheet"==d.attr("rel")?n.stylesheet?d.attr("href",n.stylesheet):d.remove():n.stylesheet&&((d=new e("link",1)).attr({rel:"stylesheet",text:"text/css",href:n.stylesheet}),d.shortEnded=!0,i(d)),(d=a.getAll("body")[0])&&(l(d,"dir",n.langdir),l(d,"style",n.style),l(d,"vlink",n.visited_color),l(d,"link",n.link_color),l(d,"alink",n.active_color),c.setAttribs(this.editor.getBody(),{style:n.style,dir:n.dir,vLink:n.visited_color,link:n.link_color,aLink:n.active_color})),(d=a.getAll("html")[0])&&(l(d,"lang",n.langcode),l(d,"xml:lang",n.langcode)),r=new tinymce.html.Serializer({validate:!1,indent:!0,apply_source_formatting:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"}).serialize(a),this.head=r.substring(0,r.indexOf("</body>"))},_parseHeader:function(){return new tinymce.html.DomParser({validate:!1,root_name:"#document"}).parse(this.head)},_setContent:function(e,n){function l(t){return t.replace(/<\/?[A-Z]+/g,function(t){return t.toLowerCase()})}var i,a,o,r,d=n.content,s="",c=this.editor.dom;"raw"==n.format&&this.head||n.source_view&&e.getParam("fullpage_hide_in_source_view")||(-1!=(i=(d=d.replace(/<(\/?)BODY/gi,"<$1body")).indexOf("<body"))?(i=d.indexOf(">",i),this.head=l(d.substring(0,i+1)),-1==(a=d.indexOf("</body",i))&&(a=d.length),n.content=d.substring(i+1,a),this.foot=l(d.substring(a))):(this.head=this._getDefaultHeader(),this.foot="\n</body>\n</html>"),o=this._parseHeader(),t(o.getAll("style"),function(t){t.firstChild&&(s+=t.firstChild.value)}),(r=o.getAll("body")[0])&&c.setAttribs(this.editor.getBody(),{style:r.attr("style")||"",dir:r.attr("dir")||"",vLink:r.attr("vlink")||"",link:r.attr("link")||"",aLink:r.attr("alink")||""}),c.remove("fullpage_styles"),s&&(c.add(this.editor.getDoc().getElementsByTagName("head")[0],"style",{id:"fullpage_styles"},s),(r=c.get("fullpage_styles")).styleSheet&&(r.styleSheet.cssText=s)))},_getDefaultHeader:function(){var t,e="",n=this.editor,l="";return n.getParam("fullpage_default_xml_pi")&&(e+='<?xml version="1.0" encoding="'+n.getParam("fullpage_default_encoding","ISO-8859-1")+'" ?>\n'),e+=n.getParam("fullpage_default_doctype",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'),e+="\n<html>\n<head>\n",(t=n.getParam("fullpage_default_title"))&&(e+="<title>"+t+"</title>\n"),(t=n.getParam("fullpage_default_encoding"))&&(e+='<meta http-equiv="Content-Type" content="text/html; charset='+t+'" />\n'),(t=n.getParam("fullpage_default_font_family"))&&(l+="font-family: "+t+";"),(t=n.getParam("fullpage_default_font_size"))&&(l+="font-size: "+t+";"),(t=n.getParam("fullpage_default_text_color"))&&(l+="color: "+t+";"),e+="</head>\n<body"+(l?' style="'+l+'"':"")+">\n"},_getContent:function(t,e){e.source_view&&t.getParam("fullpage_hide_in_source_view")||(e.content=tinymce.trim(this.head)+"\n"+tinymce.trim(e.content)+"\n"+tinymce.trim(this.foot))}}),tinymce.PluginManager.add("fullpage",tinymce.plugins.FullPagePlugin)}();
