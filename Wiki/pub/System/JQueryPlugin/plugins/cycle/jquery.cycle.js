!function(e,t){"use strict";function n(t){e.fn.cycle.debug&&i(t)}function i(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function c(t,n,i){var c=e(t).data("cycle.opts");if(c){var s=!!t.cyclePause;s&&c.paused?c.paused(t,c,n,i):!s&&c.resumed&&c.resumed(t,c,n,i)}}function s(n,s,o){function r(t,n,c){if(!t&&!0===n){var s=e(c).data("cycle.opts");if(!s)return i("options not found, can not resume"),!1;c.cycleTimeout&&(clearTimeout(c.cycleTimeout),c.cycleTimeout=0),l(s.elements,s,1,!s.backwards)}}if(n.cycleStop===t&&(n.cycleStop=0),s!==t&&null!==s||(s={}),s.constructor==String){switch(s){case"destroy":case"stop":var a=e(n).data("cycle.opts");return!!a&&(n.cycleStop++,n.cycleTimeout&&clearTimeout(n.cycleTimeout),n.cycleTimeout=0,a.elements&&e(a.elements).stop(),e(n).removeData("cycle.opts"),"destroy"==s&&function(t,n){n.next&&e(n.next).unbind(n.prevNextEvent);n.prev&&e(n.prev).unbind(n.prevNextEvent);(n.pager||n.pagerAnchorBuilder)&&e.each(n.pagerAnchors||[],function(){this.unbind().remove()});n.pagerAnchors=null,e(t).unbind("mouseenter.cycle mouseleave.cycle"),n.destroy&&n.destroy(n)}(n,a),!1);case"toggle":return n.cyclePause=1===n.cyclePause?0:1,r(n.cyclePause,o,n),c(n),!1;case"pause":return n.cyclePause=1,c(n),!1;case"resume":return n.cyclePause=0,r(!1,o,n),c(n),!1;case"prev":case"next":return(a=e(n).data("cycle.opts"))?("string"==typeof o&&(a.oneTimeFx=o),e.fn.cycle[s](a),!1):(i('options not found, "prev/next" ignored'),!1);default:s={fx:s}}return s}if(s.constructor==Number){var f=s;return(s=e(n).data("cycle.opts"))?f<0||f>=s.elements.length?(i("invalid slide index: "+f),!1):(s.nextSlide=f,n.cycleTimeout&&(clearTimeout(n.cycleTimeout),n.cycleTimeout=0),"string"==typeof o&&(s.oneTimeFx=o),l(s.elements,s,1,f>=s.currSlide),!1):(i("options not found, can not advance slide"),!1)}return s}function o(t,n){if(!e.support.opacity&&n.cleartype&&t.style.filter)try{t.style.removeAttribute("filter")}catch(e){}}function r(s,r,a,u,d){var h,p=e.extend({},e.fn.cycle.defaults,u||{},e.metadata?s.metadata():e.meta?s.data():{}),m=e.isFunction(s.data)?s.data(p.metaAttr):null;m&&(p=e.extend(p,m)),p.autostop&&(p.countdown=p.autostopCount||a.length);var y=s[0];if(s.data("cycle.opts",p),p.$cont=s,p.stopCount=y.cycleStop,p.elements=a,p.before=p.before?[p.before]:[],p.after=p.after?[p.after]:[],!e.support.opacity&&p.cleartype&&p.after.push(function(){o(this,p)}),p.continuous&&p.after.push(function(){l(a,p,0,!p.backwards)}),function(t){t.original={before:[],after:[]},t.original.cssBefore=e.extend({},t.cssBefore),t.original.cssAfter=e.extend({},t.cssAfter),t.original.animIn=e.extend({},t.animIn),t.original.animOut=e.extend({},t.animOut),e.each(t.before,function(){t.original.before.push(this)}),e.each(t.after,function(){t.original.after.push(this)})}(p),"static"==s.css("position")&&s.css("position","relative"),p.width&&s.width(p.width),p.height&&"auto"!=p.height&&s.height(p.height),p.startingSlide!==t?(p.startingSlide=parseInt(p.startingSlide,10),p.startingSlide>=a.length||p.startSlide<0?p.startingSlide=0:h=!0):p.backwards?p.startingSlide=a.length-1:p.startingSlide=0,p.random){p.randomMap=[];for(var g=0;g<a.length;g++)p.randomMap.push(g);if(p.randomMap.sort(function(e,t){return Math.random()-.5}),h)for(var x=0;x<a.length;x++)p.startingSlide==p.randomMap[x]&&(p.randomIndex=x);else p.randomIndex=1,p.startingSlide=p.randomMap[1]}else p.startingSlide>=a.length&&(p.startingSlide=0);p.currSlide=p.startingSlide||0;var v=p.startingSlide;r.css({position:"absolute",top:0,left:0}).hide().each(function(t){var n;n=p.backwards?v?t<=v?a.length+(t-v):v-t:a.length-t:v?t>=v?a.length-(t-v):v-t:a.length-t,e(this).css("z-index",n)}),e(a[v]).css("opacity",1).show(),o(a[v],p),p.fit&&(p.aspect?r.each(function(){var t=e(this),n=!0===p.aspect?t.width()/t.height():p.aspect;p.width&&t.width()!=p.width&&(t.width(p.width),t.height(p.width/n)),p.height&&t.height()<p.height&&(t.height(p.height),t.width(p.height*n))}):(p.width&&r.width(p.width),p.height&&"auto"!=p.height&&r.height(p.height))),!p.center||p.fit&&!p.aspect||r.each(function(){var t=e(this);t.css({"margin-left":p.width?(p.width-t.width())/2+"px":0,"margin-top":p.height?(p.height-t.height())/2+"px":0})}),!p.center||p.fit||p.slideResize||r.each(function(){var t=e(this);t.css({"margin-left":p.width?(p.width-t.width())/2+"px":0,"margin-top":p.height?(p.height-t.height())/2+"px":0})});if((p.containerResize||p.containerResizeHeight)&&s.innerHeight()<1){for(var w=0,S=0,b=0;b<a.length;b++){var B=e(a[b]),I=B[0],O=B.outerWidth(),F=B.outerHeight();O||(O=I.offsetWidth||I.width||B.attr("width")),F||(F=I.offsetHeight||I.height||B.attr("height")),w=O>w?O:w,S=F>S?F:S}p.containerResize&&w>0&&S>0&&s.css({width:w+"px",height:S+"px"}),p.containerResizeHeight&&S>0&&s.css({height:S+"px"})}var A=!1;if(p.pause&&s.bind("mouseenter.cycle",function(){A=!0,this.cyclePause++,c(y,!0)}).bind("mouseleave.cycle",function(){A&&this.cyclePause--,c(y,!0)}),!1===function(t){var c,s,o=e.fn.cycle.transitions;if(t.fx.indexOf(",")>0){for(t.multiFx=!0,t.fxs=t.fx.replace(/\s*/g,"").split(","),c=0;c<t.fxs.length;c++){var r=t.fxs[c];(s=o[r])&&o.hasOwnProperty(r)&&e.isFunction(s)||(i("discarding unknown transition: ",r),t.fxs.splice(c,1),c--)}if(!t.fxs.length)return i("No valid transitions named; slideshow terminating."),!1}else if("all"==t.fx){t.multiFx=!0,t.fxs=[];for(var l in o)o.hasOwnProperty(l)&&(s=o[l],o.hasOwnProperty(l)&&e.isFunction(s)&&t.fxs.push(l))}if(t.multiFx&&t.randomizeEffects){var a=Math.floor(20*Math.random())+30;for(c=0;c<a;c++){var f=Math.floor(Math.random()*t.fxs.length);t.fxs.push(t.fxs.splice(f,1)[0])}n("randomized fx sequence: ",t.fxs)}return!0}(p))return!1;var k=!1;if(u.requeueAttempts=u.requeueAttempts||0,r.each(function(){var t=e(this);if(this.cycleH=p.fit&&p.height?p.height:t.height()||this.offsetHeight||this.height||t.attr("height")||0,this.cycleW=p.fit&&p.width?p.width:t.width()||this.offsetWidth||this.width||t.attr("width")||0,t.is("img")){if(0===this.cycleH&&0===this.cycleW&&!this.complete){if(d.s&&p.requeueOnImageNotLoaded&&++u.requeueAttempts<100)return i(u.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH),setTimeout(function(){e(d.s,d.c).cycle(u)},p.requeueTimeout),k=!0,!1;i("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}return!0}),k)return!1;if(p.cssBefore=p.cssBefore||{},p.cssAfter=p.cssAfter||{},p.cssFirst=p.cssFirst||{},p.animIn=p.animIn||{},p.animOut=p.animOut||{},r.not(":eq("+v+")").css(p.cssBefore),e(r[v]).css(p.cssFirst),p.timeout){p.timeout=parseInt(p.timeout,10),p.speed.constructor==String&&(p.speed=e.fx.speeds[p.speed]||parseInt(p.speed,10)),p.sync||(p.speed=p.speed/2);for(var T="none"==p.fx?0:"shuffle"==p.fx?500:250;p.timeout-p.speed<T;)p.timeout+=p.speed}if(p.easing&&(p.easeIn=p.easeOut=p.easing),p.speedIn||(p.speedIn=p.speed),p.speedOut||(p.speedOut=p.speed),p.slideCount=a.length,p.currSlide=p.lastSlide=v,p.random?(++p.randomIndex==a.length&&(p.randomIndex=0),p.nextSlide=p.randomMap[p.randomIndex]):p.backwards?p.nextSlide=0===p.startingSlide?a.length-1:p.startingSlide-1:p.nextSlide=p.startingSlide>=a.length-1?0:p.startingSlide+1,!p.multiFx){var H=e.fn.cycle.transitions[p.fx];if(e.isFunction(H))H(s,r,p);else if("custom"!=p.fx&&!p.multiFx)return i("unknown transition: "+p.fx,"; slideshow terminating"),!1}var R=r[v];return p.skipInitializationCallbacks||(p.before.length&&p.before[0].apply(R,[R,R,p,!0]),p.after.length&&p.after[0].apply(R,[R,R,p,!0])),p.next&&e(p.next).bind(p.prevNextEvent,function(){return f(p,1)}),p.prev&&e(p.prev).bind(p.prevNextEvent,function(){return f(p,0)}),(p.pager||p.pagerAnchorBuilder)&&function(t,n){var i=e(n.pager);e.each(t,function(c,s){e.fn.cycle.createPagerAnchor(c,s,i,t,n)}),n.updateActivePagerLink(n.pager,n.startingSlide,n.activePagerClass)}(a,p),function(t,i){t.addSlide=function(c,s){var o=e(c),r=o[0];t.autostopCount||t.countdown++,i[s?"unshift":"push"](r),t.els&&t.els[s?"unshift":"push"](r),t.slideCount=i.length,t.random&&(t.randomMap.push(t.slideCount-1),t.randomMap.sort(function(e,t){return Math.random()-.5})),o.css("position","absolute"),o[s?"prependTo":"appendTo"](t.$cont),s&&(t.currSlide++,t.nextSlide++),e.support.opacity||!t.cleartype||t.cleartypeNoBg||function(t){function i(e){return(e=parseInt(e,10).toString(16)).length<2?"0"+e:e}n("applying clearType background-color hack");t.each(function(){e(this).css("background-color",function(t){for(;t&&"html"!=t.nodeName.toLowerCase();t=t.parentNode){var n=e.css(t,"background-color");if(n&&n.indexOf("rgb")>=0){var c=n.match(/\d+/g);return"#"+i(c[0])+i(c[1])+i(c[2])}if(n&&"transparent"!=n)return n}return"#ffffff"}(this))})}(o),t.fit&&t.width&&o.width(t.width),t.fit&&t.height&&"auto"!=t.height&&o.height(t.height),r.cycleH=t.fit&&t.height?t.height:o.height(),r.cycleW=t.fit&&t.width?t.width:o.width(),o.css(t.cssBefore),(t.pager||t.pagerAnchorBuilder)&&e.fn.cycle.createPagerAnchor(i.length-1,r,e(t.pager),i,t),e.isFunction(t.onAddSlide)?t.onAddSlide(o):o.hide()}}(p,a),p}function l(i,c,s,o){function r(){var e=0;c.timeout;c.timeout&&!c.continuous?(e=a(i[c.currSlide],i[c.nextSlide],c,o),"shuffle"==c.fx&&(e-=c.speedOut)):c.continuous&&f.cyclePause&&(e=10),e>0&&(f.cycleTimeout=setTimeout(function(){l(i,c,0,!c.backwards)},e))}var f=c.$cont[0],u=i[c.currSlide],d=i[c.nextSlide];if(s&&c.busy&&c.manualTrump&&(n("manualTrump in go(), stopping active transition"),e(i).stop(!0,!0),c.busy=0,clearTimeout(f.cycleTimeout)),c.busy)n("transition active, ignoring new tx request");else if(f.cycleStop==c.stopCount&&(0!==f.cycleTimeout||s))if(s||f.cyclePause||c.bounce||!(c.autostop&&--c.countdown<=0||c.nowrap&&!c.random&&c.nextSlide<c.currSlide)){var h=!1;if(!s&&f.cyclePause||c.nextSlide==c.currSlide)r();else{h=!0;var p=c.fx;u.cycleH=u.cycleH||e(u).height(),u.cycleW=u.cycleW||e(u).width(),d.cycleH=d.cycleH||e(d).height(),d.cycleW=d.cycleW||e(d).width(),c.multiFx&&(o&&(c.lastFx===t||++c.lastFx>=c.fxs.length)?c.lastFx=0:!o&&(c.lastFx===t||--c.lastFx<0)&&(c.lastFx=c.fxs.length-1),p=c.fxs[c.lastFx]),c.oneTimeFx&&(p=c.oneTimeFx,c.oneTimeFx=null),e.fn.cycle.resetState(c,p),c.before.length&&e.each(c.before,function(e,t){f.cycleStop==c.stopCount&&t.apply(d,[u,d,c,o])});var m=function(){c.busy=0,e.each(c.after,function(e,t){f.cycleStop==c.stopCount&&t.apply(d,[u,d,c,o])}),f.cycleStop||r()};n("tx firing("+p+"); currSlide: "+c.currSlide+"; nextSlide: "+c.nextSlide),c.busy=1,c.fxFn?c.fxFn(u,d,c,m,o,s&&c.fastOnEvent):e.isFunction(e.fn.cycle[c.fx])?e.fn.cycle[c.fx](u,d,c,m,o,s&&c.fastOnEvent):e.fn.cycle.custom(u,d,c,m,o,s&&c.fastOnEvent)}if(h||c.nextSlide==c.currSlide){var y;c.lastSlide=c.currSlide,c.random?(c.currSlide=c.nextSlide,++c.randomIndex==i.length&&(c.randomIndex=0,c.randomMap.sort(function(e,t){return Math.random()-.5})),c.nextSlide=c.randomMap[c.randomIndex],c.nextSlide==c.currSlide&&(c.nextSlide=c.currSlide==c.slideCount-1?0:c.currSlide+1)):c.backwards?(y=c.nextSlide-1<0)&&c.bounce?(c.backwards=!c.backwards,c.nextSlide=1,c.currSlide=0):(c.nextSlide=y?i.length-1:c.nextSlide-1,c.currSlide=y?0:c.nextSlide+1):(y=c.nextSlide+1==i.length)&&c.bounce?(c.backwards=!c.backwards,c.nextSlide=i.length-2,c.currSlide=i.length-1):(c.nextSlide=y?0:c.nextSlide+1,c.currSlide=y?i.length-1:c.nextSlide-1)}h&&c.pager&&c.updateActivePagerLink(c.pager,c.currSlide,c.activePagerClass)}else c.end&&c.end(c)}function a(e,t,i,c){if(i.timeoutFn){for(var s=i.timeoutFn.call(e,e,t,i,c);"none"!=i.fx&&s-i.speed<250;)s+=i.speed;if(n("calculated timeout: "+s+"; speed: "+i.speed),!1!==s)return s}return i.timeout}function f(t,n){var i=n?1:-1,c=t.elements,s=t.$cont[0],o=s.cycleTimeout;if(o&&(clearTimeout(o),s.cycleTimeout=0),t.random&&i<0)t.randomIndex--,-2==--t.randomIndex?t.randomIndex=c.length-2:-1==t.randomIndex&&(t.randomIndex=c.length-1),t.nextSlide=t.randomMap[t.randomIndex];else if(t.random)t.nextSlide=t.randomMap[t.randomIndex];else if(t.nextSlide=t.currSlide+i,t.nextSlide<0){if(t.nowrap)return!1;t.nextSlide=c.length-1}else if(t.nextSlide>=c.length){if(t.nowrap)return!1;t.nextSlide=0}var r=t.onPrevNextEvent||t.prevNextClick;return e.isFunction(r)&&r(i>0,t.nextSlide,c[t.nextSlide]),l(c,t,1,n),!1}e.expr[":"].paused=function(e){return e.cyclePause},e.fn.cycle=function(t,c){var o={s:this.selector,c:this.context};return 0===this.length&&"stop"!=t?!e.isReady&&o.s?(i("DOM not ready, queuing slideshow"),e(function(){e(o.s,o.c).cycle(t,c)}),this):(i("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this):this.each(function(){var f=s(this,t,c);if(!1!==f){f.updateActivePagerLink=f.updateActivePagerLink||e.fn.cycle.updateActivePagerLink,this.cycleTimeout&&clearTimeout(this.cycleTimeout),this.cycleTimeout=this.cyclePause=0,this.cycleStop=0;var u=e(this),d=f.slideExpr?e(f.slideExpr,this):u.children(),h=d.get();if(h.length<2)i("terminating; too few slides: "+h.length);else{var p=r(u,d,h,f,o);if(!1!==p){var m=p.continuous?10:a(h[p.currSlide],h[p.nextSlide],p,!p.backwards);m&&((m+=p.delay||0)<10&&(m=10),n("first timeout: "+m),this.cycleTimeout=setTimeout(function(){l(h,p,0,!f.backwards)},m))}}}})},e.fn.cycle.resetState=function(t,n){n=n||t.fx,t.before=[],t.after=[],t.cssBefore=e.extend({},t.original.cssBefore),t.cssAfter=e.extend({},t.original.cssAfter),t.animIn=e.extend({},t.original.animIn),t.animOut=e.extend({},t.original.animOut),t.fxFn=null,e.each(t.original.before,function(){t.before.push(this)}),e.each(t.original.after,function(){t.after.push(this)});var i=e.fn.cycle.transitions[n];e.isFunction(i)&&i(t.$cont,e(t.elements),t)},e.fn.cycle.updateActivePagerLink=function(t,n,i){e(t).each(function(){e(this).children().removeClass(i).eq(n).addClass(i)})},e.fn.cycle.next=function(e){f(e,1)},e.fn.cycle.prev=function(e){f(e,0)},e.fn.cycle.createPagerAnchor=function(t,i,s,o,r){var a;if(e.isFunction(r.pagerAnchorBuilder)?(a=r.pagerAnchorBuilder(t,i),n("pagerAnchorBuilder("+t+", el) returned: "+a)):a='<a href="#">'+(t+1)+"</a>",a){var f=e(a);if(0===f.parents("body").length){var u=[];s.length>1?(s.each(function(){var t=f.clone(!0);e(this).append(t),u.push(t[0])}),f=e(u)):f.appendTo(s)}r.pagerAnchors=r.pagerAnchors||[],r.pagerAnchors.push(f);var d=function(n){n.preventDefault(),r.nextSlide=t;var i=r.$cont[0],c=i.cycleTimeout;c&&(clearTimeout(c),i.cycleTimeout=0);var s=r.onPagerEvent||r.pagerClick;e.isFunction(s)&&s(r.nextSlide,o[r.nextSlide]),l(o,r,1,r.currSlide<t)};/mouseenter|mouseover/i.test(r.pagerEvent)?f.hover(d,function(){}):f.bind(r.pagerEvent,d),/^click/.test(r.pagerEvent)||r.allowPagerClickBubble||f.bind("click.cycle",function(){return!1});var h=r.$cont[0],p=!1;r.pauseOnPagerHover&&f.hover(function(){p=!0,h.cyclePause++,c(h,!0,!0)},function(){p&&h.cyclePause--,c(h,!0,!0)})}},e.fn.cycle.hopsFromLast=function(e,t){var n=e.lastSlide,i=e.currSlide;return t?i>n?i-n:e.slideCount-n:i<n?n-i:n+e.slideCount-i},e.fn.cycle.commonReset=function(t,n,i,c,s,o){e(i.elements).not(t).hide(),void 0===i.cssBefore.opacity&&(i.cssBefore.opacity=1),i.cssBefore.display="block",i.slideResize&&!1!==c&&n.cycleW>0&&(i.cssBefore.width=n.cycleW),i.slideResize&&!1!==s&&n.cycleH>0&&(i.cssBefore.height=n.cycleH),i.cssAfter=i.cssAfter||{},i.cssAfter.display="none",e(t).css("zIndex",i.slideCount+(!0===o?1:0)),e(n).css("zIndex",i.slideCount+(!0===o?0:1))},e.fn.cycle.custom=function(t,n,i,c,s,o){var r=e(t),l=e(n),a=i.speedIn,f=i.speedOut,u=i.easeIn,d=i.easeOut,h=i.animInDelay,p=i.animOutDelay;l.css(i.cssBefore),o&&(a=f="number"==typeof o?o:1,u=d=null);var m=function(){l.delay(h).animate(i.animIn,a,u,function(){c()})};r.delay(p).animate(i.animOut,f,d,function(){r.css(i.cssAfter),i.sync||m()}),i.sync&&m()},e.fn.cycle.transitions={fade:function(t,n,i){n.not(":eq("+i.currSlide+")").css("opacity",0),i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.cssBefore.opacity=0}),i.animIn={opacity:1},i.animOut={opacity:0},i.cssBefore={top:0,left:0}}},e.fn.cycle.ver=function(){return"3.0.3"},e.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:!1,animIn:null,animInDelay:0,animOut:null,animOutDelay:0,aspect:!1,autostop:0,autostopCount:0,backwards:!1,before:null,center:null,cleartype:!e.support.opacity,cleartypeNoBg:!1,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:!0,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:!0,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:!1,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:t,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}}(jQuery),function(e){"use strict";e.fn.cycle.transitions.none=function(t,n,i){i.fxFn=function(t,n,i,c){e(n).show(),e(t).hide(),c()}},e.fn.cycle.transitions.fadeout=function(t,n,i){n.not(":eq("+i.currSlide+")").css({display:"block",opacity:1}),i.before.push(function(t,n,i,c,s,o){e(t).css("zIndex",i.slideCount+(!0!==o?1:0)),e(n).css("zIndex",i.slideCount+(!0!==o?0:1))}),i.animIn.opacity=1,i.animOut.opacity=0,i.cssBefore.opacity=1,i.cssBefore.display="block",i.cssAfter.zIndex=0},e.fn.cycle.transitions.scrollUp=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.height();i.cssBefore.top=c,i.cssBefore.left=0,i.cssFirst.top=0,i.animIn.top=0,i.animOut.top=-c},e.fn.cycle.transitions.scrollDown=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.height();i.cssFirst.top=0,i.cssBefore.top=-c,i.cssBefore.left=0,i.animIn.top=0,i.animOut.top=c},e.fn.cycle.transitions.scrollLeft=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.width();i.cssFirst.left=0,i.cssBefore.left=c,i.cssBefore.top=0,i.animIn.left=0,i.animOut.left=0-c},e.fn.cycle.transitions.scrollRight=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.width();i.cssFirst.left=0,i.cssBefore.left=-c,i.cssBefore.top=0,i.animIn.left=0,i.animOut.left=c},e.fn.cycle.transitions.scrollHorz=function(t,n,i){t.css("overflow","hidden").width(),i.before.push(function(t,n,i,c){i.rev&&(c=!c),e.fn.cycle.commonReset(t,n,i),i.cssBefore.left=c?n.cycleW-1:1-n.cycleW,i.animOut.left=c?-t.cycleW:t.cycleW}),i.cssFirst.left=0,i.cssBefore.top=0,i.animIn.left=0,i.animOut.top=0},e.fn.cycle.transitions.scrollVert=function(t,n,i){t.css("overflow","hidden"),i.before.push(function(t,n,i,c){i.rev&&(c=!c),e.fn.cycle.commonReset(t,n,i),i.cssBefore.top=c?1-n.cycleH:n.cycleH-1,i.animOut.top=c?t.cycleH:-t.cycleH}),i.cssFirst.top=0,i.cssBefore.left=0,i.animIn.top=0,i.animOut.left=0},e.fn.cycle.transitions.slideX=function(t,n,i){i.before.push(function(t,n,i){e(i.elements).not(t).hide(),e.fn.cycle.commonReset(t,n,i,!1,!0),i.animIn.width=n.cycleW}),i.cssBefore.left=0,i.cssBefore.top=0,i.cssBefore.width=0,i.animIn.width="show",i.animOut.width=0},e.fn.cycle.transitions.slideY=function(t,n,i){i.before.push(function(t,n,i){e(i.elements).not(t).hide(),e.fn.cycle.commonReset(t,n,i,!0,!1),i.animIn.height=n.cycleH}),i.cssBefore.left=0,i.cssBefore.top=0,i.cssBefore.height=0,i.animIn.height="show",i.animOut.height=0},e.fn.cycle.transitions.shuffle=function(t,n,i){var c,s=t.css("overflow","visible").width();for(n.css({left:0,top:0}),i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!0,!0)}),i.speedAdjusted||(i.speed=i.speed/2,i.speedAdjusted=!0),i.random=0,i.shuffle=i.shuffle||{left:-s,top:15},i.els=[],c=0;c<n.length;c++)i.els.push(n[c]);for(c=0;c<i.currSlide;c++)i.els.push(i.els.shift());i.fxFn=function(t,n,i,c,s){i.rev&&(s=!s);var o=e(s?t:n);e(n).css(i.cssBefore);var r=i.slideCount;o.animate(i.shuffle,i.speedIn,i.easeIn,function(){for(var n=e.fn.cycle.hopsFromLast(i,s),l=0;l<n;l++)s?i.els.push(i.els.shift()):i.els.unshift(i.els.pop());if(s)for(var a=0,f=i.els.length;a<f;a++)e(i.els[a]).css("z-index",f-a+r);else{var u=e(t).css("z-index");o.css("z-index",parseInt(u,10)+1+r)}o.animate({left:0,top:0},i.speedOut,i.easeOut,function(){e(s?this:t).hide(),c&&c()})})},e.extend(i.cssBefore,{display:"block",opacity:1,top:0,left:0})},e.fn.cycle.transitions.turnUp=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1),i.cssBefore.top=n.cycleH,i.animIn.height=n.cycleH,i.animOut.width=n.cycleW}),i.cssFirst.top=0,i.cssBefore.left=0,i.cssBefore.height=0,i.animIn.top=0,i.animOut.height=0},e.fn.cycle.transitions.turnDown=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1),i.animIn.height=n.cycleH,i.animOut.top=t.cycleH}),i.cssFirst.top=0,i.cssBefore.left=0,i.cssBefore.top=0,i.cssBefore.height=0,i.animOut.height=0},e.fn.cycle.transitions.turnLeft=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0),i.cssBefore.left=n.cycleW,i.animIn.width=n.cycleW}),i.cssBefore.top=0,i.cssBefore.width=0,i.animIn.left=0,i.animOut.width=0},e.fn.cycle.transitions.turnRight=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0),i.animIn.width=n.cycleW,i.animOut.left=t.cycleW}),e.extend(i.cssBefore,{top:0,left:0,width:0}),i.animIn.left=0,i.animOut.width=0},e.fn.cycle.transitions.zoom=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!1,!0),i.cssBefore.top=n.cycleH/2,i.cssBefore.left=n.cycleW/2,e.extend(i.animIn,{top:0,left:0,width:n.cycleW,height:n.cycleH}),e.extend(i.animOut,{width:0,height:0,top:t.cycleH/2,left:t.cycleW/2})}),i.cssFirst.top=0,i.cssFirst.left=0,i.cssBefore.width=0,i.cssBefore.height=0},e.fn.cycle.transitions.fadeZoom=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!1),i.cssBefore.left=n.cycleW/2,i.cssBefore.top=n.cycleH/2,e.extend(i.animIn,{top:0,left:0,width:n.cycleW,height:n.cycleH})}),i.cssBefore.width=0,i.cssBefore.height=0,i.animOut.opacity=0},e.fn.cycle.transitions.blindX=function(t,n,i){var c=t.css("overflow","hidden").width();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.animIn.width=n.cycleW,i.animOut.left=t.cycleW}),i.cssBefore.left=c,i.cssBefore.top=0,i.animIn.left=0,i.animOut.left=c},e.fn.cycle.transitions.blindY=function(t,n,i){var c=t.css("overflow","hidden").height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.animIn.height=n.cycleH,i.animOut.top=t.cycleH}),i.cssBefore.top=c,i.cssBefore.left=0,i.animIn.top=0,i.animOut.top=c},e.fn.cycle.transitions.blindZ=function(t,n,i){var c=t.css("overflow","hidden").height(),s=t.width();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.animIn.height=n.cycleH,i.animOut.top=t.cycleH}),i.cssBefore.top=c,i.cssBefore.left=s,i.animIn.top=0,i.animIn.left=0,i.animOut.top=c,i.animOut.left=s},e.fn.cycle.transitions.growX=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0),i.cssBefore.left=this.cycleW/2,i.animIn.left=0,i.animIn.width=this.cycleW,i.animOut.left=0}),i.cssBefore.top=0,i.cssBefore.width=0},e.fn.cycle.transitions.growY=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1),i.cssBefore.top=this.cycleH/2,i.animIn.top=0,i.animIn.height=this.cycleH,i.animOut.top=0}),i.cssBefore.height=0,i.cssBefore.left=0},e.fn.cycle.transitions.curtainX=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0,!0),i.cssBefore.left=n.cycleW/2,i.animIn.left=0,i.animIn.width=this.cycleW,i.animOut.left=t.cycleW/2,i.animOut.width=0}),i.cssBefore.top=0,i.cssBefore.width=0},e.fn.cycle.transitions.curtainY=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1,!0),i.cssBefore.top=n.cycleH/2,i.animIn.top=0,i.animIn.height=n.cycleH,i.animOut.top=t.cycleH/2,i.animOut.height=0}),i.cssBefore.height=0,i.cssBefore.left=0},e.fn.cycle.transitions.cover=function(t,n,i){var c=i.direction||"left",s=t.css("overflow","hidden").width(),o=t.height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.cssAfter.display="","right"==c?i.cssBefore.left=-s:"up"==c?i.cssBefore.top=o:"down"==c?i.cssBefore.top=-o:i.cssBefore.left=s}),i.animIn.left=0,i.animIn.top=0,i.cssBefore.top=0,i.cssBefore.left=0},e.fn.cycle.transitions.uncover=function(t,n,i){var c=i.direction||"left",s=t.css("overflow","hidden").width(),o=t.height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!0,!0),"right"==c?i.animOut.left=s:"up"==c?i.animOut.top=-o:"down"==c?i.animOut.top=o:i.animOut.left=-s}),i.animIn.left=0,i.animIn.top=0,i.cssBefore.top=0,i.cssBefore.left=0},e.fn.cycle.transitions.toss=function(t,n,i){var c=t.css("overflow","visible").width(),s=t.height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!0,!0),i.animOut.left||i.animOut.top?i.animOut.opacity=0:e.extend(i.animOut,{left:2*c,top:-s/2,opacity:0})}),i.cssBefore.left=0,i.cssBefore.top=0,i.animIn.left=0},e.fn.cycle.transitions.wipe=function(t,n,i){var c=t.css("overflow","hidden").width(),s=t.height();i.cssBefore=i.cssBefore||{};var o;if(i.clip)if(/l2r/.test(i.clip))o="rect(0px 0px "+s+"px 0px)";else if(/r2l/.test(i.clip))o="rect(0px "+c+"px "+s+"px "+c+"px)";else if(/t2b/.test(i.clip))o="rect(0px "+c+"px 0px 0px)";else if(/b2t/.test(i.clip))o="rect("+s+"px "+c+"px "+s+"px 0px)";else if(/zoom/.test(i.clip)){var r=parseInt(s/2,10),l=parseInt(c/2,10);o="rect("+r+"px "+l+"px "+r+"px "+l+"px)"}i.cssBefore.clip=i.cssBefore.clip||o||"rect(0px 0px 0px 0px)";var a=i.cssBefore.clip.match(/(\d+)/g),f=parseInt(a[0],10),u=parseInt(a[1],10),d=parseInt(a[2],10),h=parseInt(a[3],10);i.before.push(function(t,n,i){if(t!=n){var o=e(t),r=e(n);e.fn.cycle.commonReset(t,n,i,!0,!0,!1),i.cssAfter.display="block";var l=1,a=parseInt(i.speedIn/13,10)-1;!function e(){var t=f?f-parseInt(l*(f/a),10):0,n=h?h-parseInt(l*(h/a),10):0,i=d<s?d+parseInt(l*((s-d)/a||1),10):s,p=u<c?u+parseInt(l*((c-u)/a||1),10):c;r.css({clip:"rect("+t+"px "+p+"px "+i+"px "+n+"px)"}),l++<=a?setTimeout(e,13):o.css("display","none")}()}}),e.extend(i.cssBefore,{display:"block",opacity:1,top:0,left:0}),i.animIn={left:0},i.animOut={left:0}}}(jQuery);
