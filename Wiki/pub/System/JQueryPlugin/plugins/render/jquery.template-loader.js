!function(e){"use strict";var r={};e.loadTemplate=function(t,n){if(n=n||{},"string"==typeof t?n.url=t:"object"==typeof t&&(n=t),void 0===n.url)throw"ERROR: no url specified in loadTemplate";n.name=n.name||n.url||function(){var e,r=(new Date).getTime().toString(32);for(e=0;e<5;e++)r+=Math.floor(65535*Math.random()).toString(32);return"tmpl_"+r}();var o=r[n.url];return void 0===o&&(r[n.url]=o=e.Deferred(function(t){var o=e.templates[n.name];void 0===o||n.force?(e.log("loading template from ",n.url),e.ajax({url:n.url}).then(function(l,a,i){return r[n.url]=void 0,o=e.templates(n.name,l),t.resolve(o),!0},function(e,o,l){return r[n.url]=void 0,t.reject(e),!1})):t.resolve(o)}).promise()),o},e.fn.loadTemplate=function(r,t){return this.each(function(){var n=e(this);e.loadTemplate(r).done(function(e){n.html(e.render(t))})})}}(jQuery);
