!function(o){var e,n,t=navigator.userAgent.toLowerCase(),i=/msie/.test(t)&&!/opera/.test(t);o.log=function(){var t,l=arguments;i?(void 0===e&&(e=o('<div id="DEBUG"></div>').appendTo("body"),n=o("<ol></ol>").appendTo(e)),t=1==(t=Array.prototype.slice.call(l)).length&&"string"==typeof t[0]?t[0]:t.join(" "),n.append("<li>"+t+"</li>"),e.scrollTop(e[0].scrollHeight)):console.log.apply(console,l)},o.fn.debug=function(){return this.each(function(){o.log(this)})}}(jQuery);
