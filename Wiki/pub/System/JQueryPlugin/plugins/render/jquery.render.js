!function(e,t){var n=t.jQuery;"object"==typeof exports?module.exports=n?e(t,n):function(n){if(n&&!n.fn)throw"Provide jQuery or null";return e(t,n)}:"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t,!1)}(function(e,t){"use strict";function n(e,t){return function(){var n,r=this.base;return this.base=e,n=t.apply(this,arguments),this.base=r,n}}function r(e,t){return J(t)&&((t=n(e?e._d?e:n(o,e):o,t))._d=1),t}function i(e,t){for(var n in t.props)fe.test(n)&&(e[n]=r(e[n],t.props[n]))}function s(e){return e}function o(){return""}function a(e){this.name=(t.link?"JsViews":"JsRender")+" Error",this.message=e||this.name}function d(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t,n){return e?K(e)?l.apply(U,e):(D.delimiters=[e,t,ee=n?n.charAt(0):ee],G=e.charAt(0),W=e.charAt(1),X=t.charAt(0),Y=t.charAt(1),e="\\"+G+"(\\"+ee+")?\\"+W,t="\\"+X+"\\"+Y,I="(?:(\\w+(?=[\\/\\s\\"+X+"]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"+X+"]|\\"+X+"(?!\\"+Y+"))*?)",H.rTag="(?:"+I+")",I=new RegExp("(?:"+e+I+"(\\/)?|\\"+G+"(\\"+ee+")?\\"+W+"(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))"+t,"g"),H.rTmpl=new RegExp("<.*>|([^\\\\]|^)[{}]|"+e+".*"+t),z):D.delimiters}function u(){var e=this.get("item");return e?e.index:void 0}function p(){return this.index}function c(e,t,n,r,i,s,o,a){var d,l,p,c="array"===t;this.content=a,this.views=c?[]:{},this.parent=n,this.type=t||"top",this.data=r,this.tmpl=i,p=this._={key:0,useKey:c?0:1,id:""+ve++,onRender:o,bnds:{}},this.linked=!!o,n?(d=n.views,(l=n._).useKey?(d[p.key="_"+l.useKey++]=this,this.index=ye,this.getIndex=u):d.length===(p.key=this.index=s)?d.push(this):d.splice(s,0,this),this.ctx=e||n.ctx):this.ctx=e}function f(e,n,r,i){function s(n){var s,a;if(""+n===n||n.nodeType>0&&(o=n)){if(!o)if(/^\.\/[^\\:*?"<>]*$/.test(n))(a=P[e=e||n])?n=a:o=document.getElementById(n);else if(t.fn&&!H.rTmpl.test(n))try{o=t(document).find(n)[0]}catch(e){}o&&(i?n=o.innerHTML:((s=o.getAttribute(_e))?s!==be?(n=P[s],delete P[s]):t.fn&&(n=t.data(o)[be]):n=f(e=e||(t.fn?be:n),o.innerHTML,r,i),n.tmplName=e=e||s,e!==be&&(P[e]=n),o.setAttribute(_e,e),t.fn&&t.data(o,be,n))),o=void 0}else n.fn||(n=void 0);return n}var o,a,l=n=n||"";if(0===i&&(i=void 0,l=s(l)),i=i||(n.markup?n:{}),i.tmplName=e,r&&(i._parentTmpl=r),!l&&n.markup&&(l=s(n.markup))&&l.fn&&(l=l.markup),void 0!==l)return l.fn||n.fn?l.fn&&(a=l):(n=v(l,i),j(l.replace(de,"\\$&"),n)),a||function(e){var t,n,r;for(t in Te)e[n=t+"s"]&&(r=e[n],e[n]={},U[n](r,e))}(a=d(function(){return a.render.apply(a,arguments)},n)),e&&!r&&e!==be&&(ke[e]=a),a}function g(e,n){return t.isFunction(e)?e.call(n):e}function h(e){var t,n=[],r=e.length;for(t=0;t<r;t++)n.push(e[t].unmap());return n}function v(e,n){var r,i=Z._wm||{},s=d({tmpls:[],links:{},bnds:[],_is:"template",render:_},n);return s.markup=e,n.htmlTag||(r=pe.exec(e),s.htmlTag=r?r[1].toLowerCase():""),(r=i[s.htmlTag])&&r!==i.div&&(s.markup=t.trim(s.markup)),s}function m(e,t){function n(i,s,o){var a,d,l,u;if(i&&typeof i===xe&&!i.nodeType&&!i.markup&&!i.getTgt&&!("viewModel"===e&&i.getters||i.extend)){for(l in i)n(l,i[l],s);return s||U}return void 0===s&&(s=i,i=void 0),i&&""+i!==i&&(o=s,s=i,i=void 0),u=o?"viewModel"===e?o:o[r]=o[r]||{}:n,d=t.compile,null===s?i&&delete u[i]:(s=d?d.call(u,i,s,o,0):s,i&&(u[i]=s)),d&&s&&(s._is=e),s&&(a=H.onStore[e])&&a(i,s,d),s}var r=e+"s";U[r]=n}function w(e){z[e]=function(t){return arguments.length?(D[e]=t,z):D[e]}}function x(e){return J(e)&&(e={getTgt:e}),e.baseMap&&(e=d(d({},e.baseMap),e)),e.map=function(t,n){return new function(t,n){this.tgt=e.getTgt(t,n)}(t,n)},e}function _(e,t,n,r,i,s){var o,a,d,l,u,p,c,f,g=r,h="";if(!0===t?(n=t,t=void 0):typeof t!==xe&&(t=void 0),(d=this.tag)?(u=this,l=(g=g||u.view).getTmpl(d.template||u.tmpl),arguments.length||(e=g)):l=this,l){if(!r&&e&&"view"===e._is&&(g=e),g&&e===g&&(e=g.data),p=!g,ne=ne||p,g||((t=t||{}).root=e),!ne||Z.useViews||l.useViews||g&&g!==O)h=b(l,e,t,n,g,i,s,d);else{if(g?(c=g.data,f=g.index,g.index=ye):((g=O).data=e,g.ctx=t),K(e)&&!n)for(o=0,a=e.length;o<a;o++)g.index=o,g.data=e[o],h+=l.fn(e[o],g,H);else g.data=e,h+=l.fn(e,g,H);g.data=c,g.index=f}p&&(ne=void 0)}return h}function b(e,t,n,r,i,s,o,a){function l(e){(b=d({},n))[_]=e}var u,p,f,g,h,v,m,w,x,_,b,y,j="";if(a&&(x=a.tagName,y=a.tagCtx,n=n?$(n,a.ctx):a.ctx,e===i.content?m=e!==i.ctx._wrp?i.ctx._wrp:void 0:e!==y.content?e===a.template?(m=y.tmpl,n._wrp=y.content):m=y.content||i.content:m=i.content,!1===y.props.link&&((n=n||{}).link=!1),(_=y.props.itemVar)&&("~"!==_.charAt(0)&&k("Use itemVar='~myItem'"),_=_.slice(1))),i&&(o=o||i._.onRender,n=$(n,i.ctx)),!0===s&&(v=!0,s=0),o&&(n&&!1===n.link||a&&a._.noVws)&&(o=void 0),w=o,!0===o&&(w=void 0,o=i._.onRender),n=e.helpers?$(e.helpers,n):n,b=n,K(t)&&!r)for(f=v?i:void 0!==s&&i||new c(n,"array",i,t,e,s,o,m),i&&i._.useKey&&(f._.bnd=!a||a._.bnd&&a),_&&(f.it=_),_=f.it,u=0,p=t.length;u<p;u++)_&&l(t[u]),g=new c(b,"item",f,t[u],e,(s||0)+u,o,f.content),h=e.fn(t[u],g,H),j+=f._.onRender?f._.onRender(h,g):h;else _&&l(t),f=v?i:new c(b,x||"data",i,t,e,s,o,m),a&&!a.flow&&(f.tag=a,a.view=f),j+=e.fn(t,f,H);return w?w(j,f):j}function y(e){throw new H.Err(e)}function k(e){y("Syntax error\n"+e)}function j(e,t,n,r,i){function s(t){(t-=g)&&v.push(e.substr(g,t).replace(oe,"\\n"))}function o(t,n){t&&(t+="}}",k((n?"{{"+n+"}} block has {{/"+t+" without {{"+t:"Unmatched or missing {{/"+t)+", in template:\n"+e))}var a,d,l,u,p,c=D.allowCode||t&&t.allowCode||!0===z.allowCode,f=[],g=0,h=[],v=f,m=[,,f];if(c&&t._is&&(t.allowCode=c),n&&(void 0!==r&&(e=e.slice(0,-r.length-2)+X),e=G+e+Y),o(h[0]&&h[0][2].pop()[0]),e.replace(I,function(a,d,p,f,w,x,_,b,y,j,C,A){(_&&d||y&&!p||b&&":"===b.slice(-1)||j)&&k(a),x&&(w=":",f=we),y=y||n&&!i;var R=(d||n)&&[[]],$="",M="",E="",N="",F="",S="",I="",O="",U=!y&&!w;p=p||(b=b||"#data",w),s(A),g=A+a.length,_?c&&v.push(["*","\n"+b.replace(/^:/,"ret+= ").replace(ae,"$1")+";\n"]):p?("else"===p&&(ue.test(b)&&k('for "{{else if expr}}" use "{{else expr}}"'),R=m[7]&&[[]],m[8]=e.substring(m[8],A),m=h.pop(),v=m[2],U=!0),b&&V(b.replace(oe," "),R,t).replace(le,function(e,t,n,r,i,s,o,a){return r="'"+i+"':",o?(M+=s+",",N+="'"+a+"',"):n?(E+=r+"j._cp("+s+',"'+a+'",view),',S+=r+"'"+a+"',"):t?I+=s:("trigger"===i&&(O+=s),$+=r+s+",",F+=r+"'"+a+"',",u=u||fe.test(i)),""}).slice(0,-1),R&&R[0]&&R.pop(),l=[p,f||!!r||u||"",U&&[],T(N||(":"===p?"'#data',":""),F,S),T(M||(":"===p?"data,":""),$,E),I,O,R||0],v.push(l),U&&(h.push(m),(m=l)[8]=g)):C&&(o(C!==m[0]&&"else"!==m[0]&&C,m[0]),m[8]=e.substring(m[8],A),m=h.pop()),o(!m&&C),v=m[2]}),s(e.length),(g=f[f.length-1])&&o(""+g!==g&&+g[8]===g[8]&&g[0]),n){for(d=R(f,e,n),p=[],a=f.length;a--;)p.unshift(f[a][7]);C(d,p)}else d=R(f,t);return d}function C(e,t){var n,r,i=0,s=t.length;for(e.deps=[],e.paths=[];i<s;i++){e.paths.push(r=t[i]);for(n in r)"_jsvto"!==n&&r.hasOwnProperty(n)&&r[n].length&&!r[n].skp&&(e.deps=e.deps.concat(r[n]))}}function T(e,t,n){return[e.slice(0,-1),t.slice(0,-1),n.slice(0,-1)]}function A(e,t){return"\n\t"+(t?t+":{":"")+"args:["+e[0]+"]"+(e[1]||!t?",\n\tprops:{"+e[1]+"}":"")+(e[2]?",\n\tctx:{"+e[2]+"}":"")}function V(e,t,n){var r,i,s,o,a,d=t&&t[0],l={bd:d},u={0:l},p=0,c=(n?n.links:d&&(d.links=d.links||{}))||O.tmpl.links,f=0,g={},h={},v=(e+(n?" ":"")).replace(se,function(v,m,w,x,_,b,y,C,T,A,V,R,$,M,E,N,F,S,I,O){x&&!C&&(_=x+_),b=b||"",w=w||m||R,_=_||T;var U,q,J,K,P,B=")";if("["===(A=A||F||"")&&(A="[j._sq(",B=")]"),!y||a||o){if(d&&N&&!a&&!o&&(!r||s||i)&&(U=h[f-1],O.length-1>I-(U||0))){if(U=O.slice(U,I+v.length),!0!==q)if(J=i||u[f-1].bd,(K=J[J.length-1])&&K.prm){for(;K.sb&&K.sb.prm;)K=K.sb;P=K.sb={path:K.sb,bnd:K.bnd}}else J.push(P={path:J.pop()});(q=c[N=W+":"+U+" onerror=''"+X])||(c[N]=!0,c[N]=q=j(N,n,!0)),!0!==q&&P&&(P._jsv=q,P.prm=l.bd,P.bnd=P.bnd||P.path&&P.path.indexOf("^")>=0)}return a?(a=!$)?v:R+'"':o?(o=!M)?v:R+'"':(w?(h[f]=I++,l=u[++f]={bd:[]},w):"")+(S?f?"":(p=O.slice(p,I),(r?(r=s=i=!1,"\b"):"\b,")+p+(p=I+v.length,d&&t.push(l.bd=[]),"\b")):C?(f&&k(e),d&&t.pop(),r=_,s=x,p=I+v.length,d&&(d=l.bd=t[r]=[],d.skp=!x),_+":"):_?_.split("^").join(".").replace(ie,function(e,n,s,o,a,u,p,c){var g="."===s;if(s&&(_=_.slice(n.length),/^\.?constructor$/.test(c||_)&&k(e),g||(e=(o?'view.hlp("'+o+'")':a?"view":"data")+(c?(u?"."+u:o?"":a?"":"."+s)+(p||""):(c=o?"":a?u||"":s,"")),e=n+("view.data"===(e+=c?"."+c:"").slice(0,9)?e.slice(5):e)),d)){if(J="linkTo"===r?i=t._jsvto=t._jsvto||[]:l.bd,K=g&&J[J.length-1]){if(K._jsv){for(;K.sb;)K=K.sb;K.bnd&&(_="^"+_.slice(1)),K.sb=_,K.bnd=K.bnd||"^"===_.charAt(0)}}else J.push(_);h[f]=I+(g?1:0)}return e})+(A?(l=u[++f]={bd:[]},g[f]=B,A):b):b||(E?(E=g[f]||E,g[f]=!1,l=u[--f],E+(A?(l=u[++f],g[f]=B,A):"")):V?(g[f]||k(e),","):m?"":(a=$,o=M,'"')))}k(e)});return!f&&v||k(e)}function R(e,t,n){var r,i,s,o,a,d,l,u,p,c,f,g,h,m,w,x,_,b,y,j,T,V,$,M,E,N,F,S,I,O=0,U=Z.useViews||t.useViews||t.tags||t.templates||t.helpers||t.converters,q="",J={},K=e.length;for(""+t===t?(_=n?'data-link="'+t.replace(oe," ").slice(1,-1)+'"':t,t=0):(_=t.tmplName||"unnamed",t.allowCode&&(J.allowCode=!0),t.debug&&(J.debug=!0),c=t.bnds,x=t.tmpls),r=0;r<K;r++)if(""+(i=e[r])===i)q+='\n+"'+i+'"';else if("*"===(s=i[0]))q+=";\n"+i[1]+"\nret=ret";else{if(o=i[1],j=!n&&i[2],a=A(i[3],"params")+"},"+A(g=i[4]),F=i[5],I=i[6],T=i[8]&&i[8].replace(ae,"$1"),(M="else"===s)?f&&f.push(i[7]):(O=0,c&&(f=i[7])&&(f=[f],O=c.push(1))),U=U||g[1]||g[2]||f||/view.(?!index)/.test(g[0]),(E=":"===s)?o&&(s=o===we?">":o+s):(j&&((b=v(T,J)).tmplName=_+"/"+s,b.useViews=b.useViews||U,R(j,b),U=b.useViews,x.push(b)),M||(y=s,U=U||s&&(!Q[s]||!Q[s].flow),$=q,q=""),V=(V=e[r+1])&&"else"===V[0]),S=F?";\ntry{\nret+=":"\n+",h="",m="",E&&(f||I||o&&o!==we)){if(N=new Function("data,view,j,u"," // "+_+" "+O+" "+s+"\nreturn {"+a+"};"),N._er=F,N._tag=s,n)return N;C(N,f),p=!0,h=(w='c("'+o+'",view,')+O+",",m=")"}if(q+=E?(n?(F?"try{\n":"")+"return ":S)+(p?(p=void 0,U=u=!0,w+(f?(c[O-1]=N,O):"{"+a+"}")+")"):">"===s?(l=!0,"h("+g[0]+")"):(!0,"((v="+g[0]+")!=null?v:"+(n?"null)":'"")'))):(d=!0,"\n{view:view,tmpl:"+(j?x.length:"0")+","+a+"},"),y&&!V){if(q="["+q.slice(0,-1)+"]",w='t("'+y+'",view,this,',n||f){if(q=new Function("data,view,j,u"," // "+_+" "+O+" "+y+"\nreturn "+q+";"),q._er=F,q._tag=y,f&&C(c[O-1]=q,f),n)return q;h=w+O+",undefined,",m=")"}q=$+S+w+(O||q)+")",f=0,y=0}F&&(U=!0,q+=";\n}catch(e){ret"+(n?"urn ":"+=")+h+"j._err(e,view,"+F+")"+m+";}"+(n?"":"ret=ret"))}q="// "+_+"\nvar v"+(d?",t=j._tag":"")+(u?",c=j._cnvt":"")+(l?",h=j._html":"")+(n?";\n":',ret=""\n')+(J.debug?"debugger;":"")+q+(n?"\n":";\nreturn ret;"),!1!==D.debugMode&&(q="try {\n"+q+"\n}catch(e){\nreturn j._err(e, view);\n}");try{q=new Function("data,view,j,u",q)}catch(e){k("Compiled template code:\n\n"+q+'\n: "'+e.message+'"')}return t&&(t.fn=q,t.useViews=!!U),q}function $(e,t){return e&&e!==t?t?d(d({},t),e):e:t&&d({},t)}function M(e){return me[e]||(me[e]="&#"+e.charCodeAt(0)+";")}function E(e,n,r){var i=this.jquery&&(this[0]||y("Unknown template")),s=i.getAttribute(_e);return _.call(s?t.data(i)[be]:P(i),e,n,r)}function N(e){return void 0!=e?ce.test(e)&&(""+e).replace(he,M)||e:""}var F=!1===t;t=t&&t.fn?t:e.jQuery;var S,I,O,U,q,J,K,P,B,L,Q,H,D,Z,z,G,W,X,Y,ee,te,ne,re="v0.9.83",ie=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,se=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,oe=/[ \t]*(\r\n|\n|\r)/g,ae=/\\(['"])/g,de=/['"\\]/g,le=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,ue=/^if\s/,pe=/<(\w+)[>\s]/,ce=/[\x00`><\"'&=]/,fe=/^on[A-Z]|^convert(Back)?$/,ge=/^\#\d+_`[\s\S]*\/\d+_`$/,he=/[\x00`><"'&=]/g,ve=0,me={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;","=":"&#61;"},we="html",xe="object",_e="data-jsv-tmpl",be="jsvTmpl",ye="For #index in nested block use #getIndex().",ke={},je=e.jsrender,Ce=je&&t&&!t.render,Te={template:{compile:f},tag:{compile:function(e,t,n){function i(){this._={inline:!0,unlinked:!0},this.tagName=e}var s,o,a,l=new H._tg;if(J(t)?t={depends:t.depends,render:t}:""+t===t&&(t={template:t}),o=t.baseTag){t.flow=!!t.flow,t.baseTag=o=""+o===o?n&&n.tags[o]||Q[o]:o,l=d(l,o);for(a in t)l[a]=r(o[a],t[a])}else l=d(l,t);return void 0!==(s=l.template)&&(l.template=""+s===s?P[s]||P(s):s),!1!==l.init&&((i.prototype=l).constructor=l._ctr=i),n&&(l._parentTmpl=n),l}},viewModel:{compile:function(e,n){function r(e){l.apply(this,e)}function i(){return new r(arguments)}function s(e,t){var n,r,i,s,o,a=p.length;for(n=0;n<a;n++)r=void 0,(s=p[n])+""!==s&&(s=(r=s).getter),void 0===(o=e[s])&&r&&void 0!==(i=r.defaultVal)&&(o=g(i,e)),t(o,r&&u[r.type],s)}function o(e){e=e+""===e?JSON.parse(e):e;var t,n,r,o,a,d,l,u,p,c,g=this;if(K(g)){for(u={},c=[],r=e.length,o=g.length,t=0;t<r;t++){for(p=e[t],l=!1,n=0;n<o&&!l;n++)u[n]||(d=g[n],f&&(u[n]=l=f+""===f?p[f]&&(b[f]?d[f]():d[f])===p[f]:f(d,p)));l?(d.merge(p),c.push(d)):c.push(i.map(p))}_?_(g).refresh(c,!0):g.splice.apply(g,[0,g.length].concat(c))}else{s(e,function(e,t,n){t?g[n]().merge(e):g[n](e)});for(a in e)a===q||b[a]||(g[a]=e[a])}}function a(){var e,n,r,i,s,o;if(K(this))return h(this);for(e={},i=p.length,r=0;r<i;r++)s=void 0,(n=p[r])+""!==n&&(n=(s=n).getter),o=this[n](),e[n]=s&&o&&u[s.type]?K(o)?h(o):o.unmap():o;for(n in this)"_is"===n||b[n]||n===q||"_"===n.charAt(0)&&b[n.slice(1)]||t.isFunction(this[n])||(e[n]=this[n]);return e}var d,l,u=this,p=n.getters,c=n.extend,f=n.id,v=t.extend({_is:e||"unnamed",unmap:a,merge:o},c),m="",w="",x=p?p.length:0,_=t.observable,b={};for(r.prototype=v,d=0;d<x;d++)!function(e){e=e.getter||e,b[e]=d+1;var t="_"+e;m+=(m?",":"")+e,w+="this."+t+" = "+e+";\n",v[e]=v[e]||function(n){if(!arguments.length)return this[t];_?_(this).setProperty(e,n):this[t]=n},_&&(v[e].set=v[e].set||function(e){this[t]=e})}(p[d]);return l=new Function(m,w.slice(0,-1)),l.prototype=v,v.constructor=l,i.map=function(t){var n,r,i,d=t=t+""===t?JSON.parse(t):t,l=[];if(K(t)){for(r=(t=t||[]).length,n=0;n<r;n++)l.push(this.map(t[n]));return l._is=e,l.unmap=a,l.merge=o,l}if(t){s(t,function(e,t){t&&(e=t.map(e)),l.push(e)}),d=this.apply(this,l);for(i in t)i===q||b[i]||(d[i]=t[i])}return d},i.getters=p,i.extend=c,i.id=f,i}},helper:{},converter:{}};if(U={jsviews:re,sub:{View:c,Err:a,tmplFn:j,parse:V,extend:d,extendCtx:$,syntaxErr:k,onStore:{},addSetting:w,settings:{allowCode:!1},advSet:o,_ths:i,_tg:function(){},_cnvt:function(e,t,n,r){var s,o,a="number"==typeof n&&t.tmpl.bnds[n-1],l=t.linkCtx;return void 0!==r?n=r={props:{},args:[r]}:a&&(n=a(t.data,t,H)),o=n.args[0],(e||a)&&((s=l&&l.tag)||(s=d(new H._tg,{_:{inline:!l,bnd:a,unlinked:!0},tagName:":",cvt:e,flow:!0,tagCtx:n}),l&&(l.tag=s,s.linkCtx=l),n.ctx=$(n.ctx,(l?l.view:t).ctx)),s._er=r&&o,i(s,n),n.view=t,s.ctx=n.ctx||s.ctx||{},n.ctx=void 0,o=s.cvtArgs("true"!==e&&e)[0],o=a&&t._.onRender?t._.onRender(o,t,s):o),void 0!=o?o:""},_tag:function(e,n,r,s,o,a){var d,l,u,p,c,f,g,h,v,m,w,x,k,j,C,T,A,V,R="",M=(n=n||O).linkCtx||0,E=n.ctx,N=r||n.tmpl,F="number"==typeof s&&n.tmpl.bnds[s-1];for("tag"===e._is?(e=(d=e).tagName,s=d.tagCtxs,d.template):(l=n.getRsc("tags",e)||y("Unknown tag: {{"+e+"}} ")).template,void 0!==a?(R+=a,s=a=[{props:{},args:[]}]):F&&(s=F(n.data,n,H)),g=s.length,f=0;f<g;f++)v=s[f],(!M||!M.tag||f&&!M.tag._.inline||d._er)&&((w=N.tmpls&&v.tmpl)&&(w=v.content=N.tmpls[w-1]),v.index=f,v.tmpl=w,v.render=_,v.view=n,v.ctx=$(v.ctx,E)),(r=v.props.tmpl)&&(v.tmpl=n.getTmpl(r)),d||(x=!!(d=new l._ctr).init,d.parent=c=E&&E.tag,d.tagCtxs=s,A=d.dataMap,M&&(d._.inline=!1,M.tag=d,d.linkCtx=M),(d._.bnd=F||M.fn)?d._.arrVws={}:d.dataBoundOnly&&y("{^{"+e+"}} tag must be data-bound")),s=d.tagCtxs,A=d.dataMap,v.tag=d,A&&s&&(v.map=s[f].map),d.flow||(m=v.ctx=v.ctx||{},u=d.parents=m.parentTags=E&&$(m.parentTags,E.parentTags)||{},c&&(u[c.tagName]=c),u[d.tagName]=m.tag=d);if(!(d._er=a)){for(i(d,s[0]),d.rendering={},f=0;f<g;f++)T=(v=d.tagCtx=s[f]).props,C=d.cvtArgs(),(k=T.dataMap||A)&&(C.length||T.dataMap)&&((j=v.map)&&j.src===C[0]&&!o||(j&&j.src&&j.unmap(),j=v.map=k.map(C[0],T,void 0,!d._.bnd)),C=[j.tgt]),d.ctx=v.ctx,f||(x&&(d.template,d.init(v,M,d.ctx),x=void 0),M&&(M.attr=d.attr=M.attr||d.attr),p=d.attr,d._.noVws=p&&p!==we),h=void 0,d.render&&(h=d.render.apply(d,C),n.linked&&h&&d.linkedElem&&!ge.test(h)&&(h=b(t.templates(h),C[0],void 0,void 0,n,void 0,void 0,d))),C.length||(C=[n]),void 0===h&&(V=C[0],d.contentCtx&&(V=d.contentCtx(V)),h=v.render(V,!0)||(o?void 0:"")),R=R?R+(h||""):h;d.rendering=void 0}return d.tagCtx=s[0],d.ctx=d.tagCtx.ctx,d._.noVws&&d._.inline&&(R="text"===p?B.html(R):""),F&&n._.onRender?n._.onRender(R,n,d):R},_er:y,_err:function(e,t,n){var r=void 0!==n?J(n)?n.call(t.data,e,t):n||"":"{Error: "+e.message+"}";return D.onError&&void 0!==(n=D.onError.call(t.data,e,n&&r,t))&&(r=n),t&&!t.linkCtx?B.html(r):r},_html:N,_cp:s,_sq:function(e){return"constructor"===e&&k(""),e}},settings:{delimiters:l,advanced:function(e){return e?(d(Z,e),H.advSet(),z):Z}},getCtx:s,map:x},(a.prototype=new Error).constructor=a,u.depends=function(){return[this.get("item"),"index"]},p.depends="index",c.prototype={get:function(e,t){t||!0===e||(t=e,e=void 0);var n,r,i,s,o=this,a=!t||"root"===t;if(e){if(!(s=t&&o.type===t&&o))if(n=o.views,o._.useKey){for(r in n)if(s=t?n[r].get(e,t):n[r])break}else for(r=0,i=n.length;!s&&r<i;r++)s=t?n[r].get(e,t):n[r]}else if(a)for(;o.parent;)s=o,o=o.parent;else for(;o&&!s;)s=o.type===t?o:void 0,o=o.parent;return s},getIndex:p,getRsc:function(e,t){for(var n,r,i=this;void 0===n&&i;)n=(r=i.tmpl&&i.tmpl[e])&&r[t],i=i.parent;return n||U[e][t]},getTmpl:function(e){return e&&(e.fn?e:this.getRsc("templates",e)||P(e))},hlp:function(t,n){var r,i,s=this,o=s.ctx;if(o&&(o=o[t]),void 0===o&&(o=L[t]),o&&o._cp){if(n)return(i=H._ceo(o[1].deps)).unshift(o[0]),i._cp=!0,i;o=U.getCtx(o)}return o&&J(o)&&!o._wrp&&((r=function(){return o.apply(this&&this!==e?this:s,arguments)})._wrp=s,d(r,o)),r||o},_is:"view"},H=U.sub,z=U.settings,!(je||t&&t.render)){for(S in Te)m(S,Te[S]);B=U.converters,L=U.helpers,Q=U.tags,H._tg.prototype={baseApply:function(e){return this.base.apply(this,e)},cvtArgs:function(e){var t=this.tagCtx,n=t.view,r=t.args;return e=e||this.convert,e=e&&(""+e===e?n.getRsc("converters",e)||y("Unknown converter: '"+e+"'"):e),r=r.length||t.index?e?r.slice():r:[n.data],e&&(e.depends&&(this.depends=H.getDeps(this.depends,this,e.depends,e)),r[0]=e.apply(this,r)),r}},O=H.topView=new c,t?(t.fn.render=E,q=t.expando,t.observable&&(d(H,t.views.sub),U.map=t.views.map)):(t={},F&&(e.jsrender=t),t.renderFile=t.__express=t.compile=function(){throw"Node.js: use npm jsrender, or jsrender-node.js"},t.isFunction=function(e){return"function"==typeof e},t.isArray=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},H._jq=function(e){e!==t&&(d(e,t),(t=e).fn.render=E,delete t.jsrender,q=t.expando)},t.jsrender=re),(D=H.settings).allowCode=!1,J=t.isFunction,t.render=ke,t.views=U,t.templates=P=U.templates;for(te in D)w(te);(z.debugMode=function(e){return void 0===e?D.debugMode:(D.debugMode=e,D.onError=e+""===e?new Function("","return '"+e+"';"):J(e)?e:void 0,z)})(!1),Z=D.advanced={useViews:!1,_jsv:!1},Q({if:{render:function(e){var t=this.tagCtx;return this.rendering.done||!e&&(arguments.length||!t.index)?"":(this.rendering.done=!0,this.selected=t.index,t.render(t.view,!0))},flow:!0},for:{render:function(e){var t,n=!arguments.length,r=this.tagCtx,i="",s=0;return this.rendering.done||(void 0!==(t=n?r.view.data:e)&&(i+=r.render(t,n),s+=K(t)?t.length:1),(this.rendering.done=s)&&(this.selected=r.index)),i},flow:!0},props:{baseTag:"for",dataMap:x(function(e){var t,n,r=[];if(typeof e===xe)for(t in e)n=e[t],t!==q&&e.hasOwnProperty(t)&&!J(n)&&r.push({key:t,prop:n});return r}),flow:!0},include:{flow:!0},"*":{render:s,flow:!0},":*":{render:s,flow:!0},dbg:L.dbg=B.dbg=function(e){try{throw console.log("JsRender dbg breakpoint: "+e),"dbg breakpoint"}catch(e){}return this.base?this.baseApply(arguments):e}}),B({html:N,attr:N,url:function(e){return void 0!=e?encodeURI(""+e):null===e?e:""}})}return D=H.settings,K=(t||je).isArray,z.delimiters("{{","}}","^"),Ce&&je.views.sub._jq(t),t||je},window);
