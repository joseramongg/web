"use strict";jQuery(function(t){var e={loop:!1,overlayOpacity:.8,overlayFadeDuration:400,resizeDuration:300,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:300,captionAnimationDuration:200,counterText:"Image {x} of {y}",itemSelector:"a[href]",titleAttr:"title"};t(function(){var t=foswiki.getPreference("ImagePlugin.counterText");t&&(e.counterText=t)}),t(".jqSlimbox:not(.jqInitedSlimbox)").livequery(function(){var i=t(this);i.addClass("jqInitedSlimbox");var r=t.extend({},e,i.data(),i.metadata()),a="lightbox-"+Math.floor(100*Math.random());i.find(r.itemSelector).attr("rel",a).slimbox(r,function(e){var i=t(e),a=t.extend({},i.data(),i.metadata()),n=a.origUrl||e.href,o=a.title||i.attr(r.titleAttr)||"";return o=o.replace(/\..*?$/,"").replace(/[\-_]/g," "),[e.href,'<a href="'+n+'">'+o+"</a>"]},function(t){return this==t||this.rel.length>8&&this.rel==t.rel})})});
