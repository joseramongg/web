Calendar=function(e,t,a,n){if(this.activeDiv=null,this.currentDateEl=null,this.getDateStatus=null,this.getDateToolTip=null,this.getDateText=null,this.timeout=null,this.onSelected=a||null,this.onClose=n||null,this.dragging=!1,this.hidden=!1,this.minYear=1970,this.maxYear=2050,this.dateFormat=Calendar._TT.DEF_DATE_FORMAT,this.ttDateFormat=Calendar._TT.TT_DATE_FORMAT,this.isPopup=!0,this.weekNumbers=!0,this.firstDayOfWeek="number"==typeof e?e:Calendar._FD,this.showsOtherMonths=!1,this.dateStr=t,this.ar_days=null,this.showsTime=!1,this.time24=!0,this.yearStep=2,this.hiliteToday=!0,this.multiple=null,this.table=null,this.element=null,this.tbody=null,this.firstdayname=null,this.monthsCombo=null,this.yearsCombo=null,this.hilitedMonth=null,this.activeMonth=null,this.hilitedYear=null,this.activeYear=null,this.dateClicked=!1,void 0===Calendar._SDN){void 0===Calendar._SDN_len&&(Calendar._SDN_len=3);for(var l=new Array,r=8;r>0;)l[--r]=Calendar._DN[r].substr(0,Calendar._SDN_len);Calendar._SDN=l,void 0===Calendar._SMN_len&&(Calendar._SMN_len=3),l=new Array;for(r=12;r>0;)l[--r]=Calendar._MN[r].substr(0,Calendar._SMN_len);Calendar._SMN=l}},Calendar._C=null,Calendar.is_ie=/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent),Calendar.is_ie5=Calendar.is_ie&&/msie 5\.0/i.test(navigator.userAgent),Calendar.is_ie7up=Calendar.is_ie&&parseFloat(navigator.userAgent.replace(/.*msie ([0-9]+).*/i,"$1"))>=7,Calendar.is_opera=/opera/i.test(navigator.userAgent),Calendar.is_khtml=/Konqueror|Safari|KHTML/i.test(navigator.userAgent),Calendar.getAbsolutePos=function(e){var t=0,a=0,n=/^div$/i.test(e.tagName);n&&e.scrollLeft&&(t=e.scrollLeft),n&&e.scrollTop&&(a=e.scrollTop);var l={x:e.offsetLeft-t,y:e.offsetTop-a};if(e.offsetParent){var r=this.getAbsolutePos(e.offsetParent);l.x+=r.x,l.y+=r.y}return l},Calendar.isRelated=function(e,t){var a=t.relatedTarget;if(!a){var n=t.type;"mouseover"==n?a=t.fromElement:"mouseout"==n&&(a=t.toElement)}for(;a;){if(a==e)return!0;a=a.parentNode}return!1},Calendar.removeClass=function(e,t){if(e&&e.className){for(var a=e.className.split(" "),n=new Array,l=a.length;l>0;)a[--l]!=t&&(n[n.length]=a[l]);e.className=n.join(" ")}},Calendar.addClass=function(e,t){Calendar.removeClass(e,t),e.className+=" "+t},Calendar.getElement=function(e){for(var t=Calendar.is_ie?window.event.srcElement:e.currentTarget;1!=t.nodeType||/^div$/i.test(t.tagName);)t=t.parentNode;return t},Calendar.getTargetElement=function(e){for(var t=Calendar.is_ie?window.event.srcElement:e.target;1!=t.nodeType;)t=t.parentNode;return t},Calendar.stopEvent=function(e){return e||(e=window.event),Calendar.is_ie?(e.cancelBubble=!0,e.returnValue=!1):(e.preventDefault(),e.stopPropagation()),!1},Calendar.addEvent=function(e,t,a){e.attachEvent?e.attachEvent("on"+t,a):e.addEventListener?e.addEventListener(t,a,!0):e["on"+t]=a},Calendar.removeEvent=function(e,t,a){e.detachEvent?e.detachEvent("on"+t,a):e.removeEventListener?e.removeEventListener(t,a,!0):e["on"+t]=null},Calendar.createElement=function(e,t){var a=null;return a=document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",e):document.createElement(e),void 0!==t&&t.appendChild(a),a},Calendar._add_evs=function(el){with(Calendar)addEvent(el,"mouseover",dayMouseOver),addEvent(el,"mousedown",dayMouseDown),addEvent(el,"mouseout",dayMouseOut),is_ie&&(addEvent(el,"dblclick",dayMouseDblClick),el.setAttribute("unselectable",!0))},Calendar.findMonth=function(e){return void 0!==e.month?e:void 0!==e.parentNode.month?e.parentNode:null},Calendar.findYear=function(e){return void 0!==e.year?e:void 0!==e.parentNode.year?e.parentNode:null},Calendar.showMonthsCombo=function(){if(!(e=Calendar._C))return!1;var e,t=(e=e).activeDiv,a=e.monthsCombo;e.hilitedMonth&&Calendar.removeClass(e.hilitedMonth,"hilite"),e.activeMonth&&Calendar.removeClass(e.activeMonth,"active");var n=e.monthsCombo.getElementsByTagName("div")[e.date.getMonth()];Calendar.addClass(n,"active"),e.activeMonth=n;var l=a.style;if(l.display="block",t.navtype<0)l.left=t.offsetLeft+"px";else{var r=a.offsetWidth;void 0===r&&(r=50),l.left=t.offsetLeft+t.offsetWidth-r+"px"}l.top=t.offsetTop+t.offsetHeight+"px"},Calendar.showYearsCombo=function(e){if(!(t=Calendar._C))return!1;var t,a=(t=t).activeDiv,n=t.yearsCombo;t.hilitedYear&&Calendar.removeClass(t.hilitedYear,"hilite"),t.activeYear&&Calendar.removeClass(t.activeYear,"active"),t.activeYear=null;for(var l=t.date.getFullYear()+(e?1:-1),r=n.firstChild,i=!1,s=12;s>0;--s)l>=t.minYear&&l<=t.maxYear?(r.innerHTML=l,r.year=l,r.style.display="block",i=!0):r.style.display="none",r=r.nextSibling,l+=e?t.yearStep:-t.yearStep;if(i){var o=n.style;if(o.display="block",a.navtype<0)o.left=a.offsetLeft+"px";else{var d=n.offsetWidth;void 0===d&&(d=50),o.left=a.offsetLeft+a.offsetWidth-d+"px"}o.top=a.offsetTop+a.offsetHeight+"px"}},Calendar.tableMouseUp=function(ev){var cal=Calendar._C;if(!cal)return!1;cal.timeout&&clearTimeout(cal.timeout);var el=cal.activeDiv;if(!el)return!1;var target=Calendar.getTargetElement(ev);ev||(ev=window.event),Calendar.removeClass(el,"active"),target!=el&&target.parentNode!=el||Calendar.cellClick(el,ev);var mon=Calendar.findMonth(target),date=null;if(mon)date=new Date(cal.date),mon.month!=date.getMonth()&&(date.setMonth(mon.month),cal.setDate(date),cal.dateClicked=!1,cal.callHandler());else{var year=Calendar.findYear(target);year&&(date=new Date(cal.date),year.year!=date.getFullYear()&&(date.setFullYear(year.year),cal.setDate(date),cal.dateClicked=!1,cal.callHandler()))}with(Calendar)return removeEvent(document,"mouseup",tableMouseUp),removeEvent(document,"mouseover",tableMouseOver),removeEvent(document,"mousemove",tableMouseOver),cal._hideCombos(),_C=null,stopEvent(ev)},Calendar.tableMouseOver=function(e){var t=Calendar._C;if(t){var a=t.activeDiv,n=Calendar.getTargetElement(e);if(n==a||n.parentNode==a?(Calendar.addClass(a,"hilite active"),Calendar.addClass(a.parentNode,"rowhilite")):((void 0===a.navtype||50!=a.navtype&&(0==a.navtype||Math.abs(a.navtype)>2))&&Calendar.removeClass(a,"active"),Calendar.removeClass(a,"hilite"),Calendar.removeClass(a.parentNode,"rowhilite")),e||(e=window.event),50==a.navtype&&n!=a){var l,r=Calendar.getAbsolutePos(a),i=a.offsetWidth,s=e.clientX,o=!0;s>r.x+i?(l=s-r.x-i,o=!1):l=r.x-s,l<0&&(l=0);for(var d=a._range,h=a._current,c=Math.floor(l/10)%d.length,u=d.length;--u>=0&&d[u]!=h;);for(;c-- >0;)o?--u<0&&(u=d.length-1):++u>=d.length&&(u=0);var C=d[u];a.innerHTML=C,t.onUpdateTime()}var m=Calendar.findMonth(n);if(m)m.month!=t.date.getMonth()?(t.hilitedMonth&&Calendar.removeClass(t.hilitedMonth,"hilite"),Calendar.addClass(m,"hilite"),t.hilitedMonth=m):t.hilitedMonth&&Calendar.removeClass(t.hilitedMonth,"hilite");else{t.hilitedMonth&&Calendar.removeClass(t.hilitedMonth,"hilite");var v=Calendar.findYear(n);v&&v.year!=t.date.getFullYear()?(t.hilitedYear&&Calendar.removeClass(t.hilitedYear,"hilite"),Calendar.addClass(v,"hilite"),t.hilitedYear=v):t.hilitedYear&&Calendar.removeClass(t.hilitedYear,"hilite")}return Calendar.stopEvent(e)}},Calendar.tableMouseDown=function(e){if(Calendar.getTargetElement(e)==Calendar.getElement(e))return Calendar.stopEvent(e)},Calendar.calDragIt=function(e){var t=Calendar._C;if(!t||!t.dragging)return!1;var a,n;Calendar.is_ie?(n=window.event.clientY+document.body.scrollTop,a=window.event.clientX+document.body.scrollLeft):(a=e.pageX,n=e.pageY),t.hideShowCovered();var l=t.element.style;return l.left=a-t.xOffs+"px",l.top=n-t.yOffs+"px",Calendar.stopEvent(e)},Calendar.calDragEnd=function(ev){var cal=Calendar._C;if(!cal)return!1;with(cal.dragging=!1,Calendar)removeEvent(document,"mousemove",calDragIt),removeEvent(document,"mouseup",calDragEnd),tableMouseUp(ev);cal.hideShowCovered()},Calendar.dayMouseDown=function(ev){var el=Calendar.getElement(ev);if(el.disabled)return!1;var cal=el.calendar;if(cal.activeDiv=el,Calendar._C=cal,300!=el.navtype)with(Calendar)50==el.navtype?(el._current=el.innerHTML,addEvent(document,"mousemove",tableMouseOver)):addEvent(document,Calendar.is_ie5?"mousemove":"mouseover",tableMouseOver),addClass(el,"hilite active"),addEvent(document,"mouseup",tableMouseUp);else cal.isPopup&&cal._dragStart(ev);return-1==el.navtype||1==el.navtype?(cal.timeout&&clearTimeout(cal.timeout),cal.timeout=setTimeout("Calendar.showMonthsCombo()",250)):-2==el.navtype||2==el.navtype?(cal.timeout&&clearTimeout(cal.timeout),cal.timeout=setTimeout(el.navtype>0?"Calendar.showYearsCombo(true)":"Calendar.showYearsCombo(false)",250)):cal.timeout=null,Calendar.stopEvent(ev)},Calendar.dayMouseDblClick=function(e){Calendar.cellClick(Calendar.getElement(e),e||window.event),Calendar.is_ie&&document.selection.empty()},Calendar.dayMouseOver=function(e){var t=Calendar.getElement(e);return!(Calendar.isRelated(t,e)||Calendar._C||t.disabled)&&(t.ttip&&("_"==t.ttip.substr(0,1)&&(t.ttip=t.caldate.print(t.calendar.ttDateFormat)+t.ttip.substr(1)),t.calendar.tooltips.innerHTML=t.ttip),300!=t.navtype&&(Calendar.addClass(t,"hilite"),t.caldate&&Calendar.addClass(t.parentNode,"rowhilite")),Calendar.stopEvent(e))},Calendar.dayMouseOut=function(ev){with(Calendar){var el=getElement(ev);return!(isRelated(el,ev)||_C||el.disabled)&&(removeClass(el,"hilite"),el.caldate&&removeClass(el.parentNode,"rowhilite"),el.calendar&&(el.calendar.tooltips.innerHTML=_TT.SEL_DATE),stopEvent(ev))}},Calendar.cellClick=function(e,t){function a(e){var t=i.getDate(),a=i.getMonthDays(e);t>a&&i.setDate(a),i.setMonth(e)}var n=e.calendar,l=!1,r=!1,i=null;if(void 0===e.navtype){n.currentDateEl&&(Calendar.removeClass(n.currentDateEl,"selected"),Calendar.addClass(e,"selected"),(l=n.currentDateEl==e)||(n.currentDateEl=e)),n.date.setDateOnly(e.caldate),i=n.date;var s=!(n.dateClicked=!e.otherMonth);s||n.currentDateEl?r=!e.disabled:n._toggleMultipleDate(new Date(i)),s&&n._init(n.firstDayOfWeek,i)}else{if(200==e.navtype)return Calendar.removeClass(e,"hilite"),void n.callCloseHandler();i=new Date(n.date),0==e.navtype&&i.setDateAndTime(new Date),n.dateClicked=!1;var o=i.getFullYear(),d=i.getMonth();switch(e.navtype){case 400:Calendar.removeClass(e,"hilite");var h=Calendar._TT.ABOUT;return void 0!==h?h+=n.showsTime?Calendar._TT.ABOUT_TIME:"":h='Help and about box text is not translated into this language.\nIf you know this language and you feel generous please update\nthe corresponding file in "lang" subdir to match calendar-en.js\nand send it back to <mihai_bazon@yahoo.com> to get it into the distribution  ;-)\n\nThank you!\nhttp://dynarch.com/mishoo/calendar.epl\n',void alert(h);case-2:o>n.minYear&&i.setFullYear(o-1);break;case-1:d>0?a(d-1):o-- >n.minYear&&(i.setFullYear(o),a(11));break;case 1:d<11?a(d+1):o<n.maxYear&&(i.setFullYear(o+1),a(0));break;case 2:o<n.maxYear&&i.setFullYear(o+1);break;case 100:return void n.setFirstDayOfWeek(e.fdow);case 50:for(var c=e._range,u=e.innerHTML,C=c.length;--C>=0&&c[C]!=u;);t&&t.shiftKey?--C<0&&(C=c.length-1):++C>=c.length&&(C=0);var m=c[C];return e.innerHTML=m,void n.onUpdateTime();case 0:if("function"==typeof n.getDateStatus&&n.getDateStatus(i,i.getFullYear(),i.getMonth(),i.getDate()))return!1}i.equalsTo(n.date)?0==e.navtype&&(r=l=!0):(n.setDate(i),r=!0)}r&&t&&n.callHandler(),l&&(Calendar.removeClass(e,"hilite"),t&&n.callCloseHandler())},Calendar.prototype.create=function(e){var t=null;e?(t=e,this.isPopup=!1):(t=document.getElementsByTagName("body")[0],this.isPopup=!0),this.date=this.dateStr?new Date(this.dateStr):new Date;var a=Calendar.createElement("table");this.table=a,a.cellSpacing=0,a.cellPadding=0,a.calendar=this,Calendar.addEvent(a,"mousedown",Calendar.tableMouseDown);var n=Calendar.createElement("div");this.element=n,n.className="calendar",this.isPopup&&(n.style.position="absolute",n.style.display="none"),n.appendChild(a);var l=Calendar.createElement("thead",a),r=null,i=null,s=this,o=function(e,t,a){return r=Calendar.createElement("td",i),r.colSpan=t,r.className="button",0!=a&&Math.abs(a)<=2&&(r.className+=" nav"),Calendar._add_evs(r),r.calendar=s,r.navtype=a,r.innerHTML="<div unselectable='on'>"+e+"</div>",r};i=Calendar.createElement("tr",l);var d=6;this.isPopup&&--d,this.weekNumbers&&++d,o("?",1,400).ttip=Calendar._TT.INFO,this.title=o("",d,300),this.title.className="title",this.isPopup&&(this.title.ttip=Calendar._TT.DRAG_TO_MOVE,this.title.style.cursor="move",o("&#x00d7;",1,200).ttip=Calendar._TT.CLOSE),(i=Calendar.createElement("tr",l)).className="headrow",this._nav_py=o("&#x00ab;",1,-2),this._nav_py.ttip=Calendar._TT.PREV_YEAR,this._nav_pm=o("&#x2039;",1,-1),this._nav_pm.ttip=Calendar._TT.PREV_MONTH,this._nav_now=o(Calendar._TT.TODAY,this.weekNumbers?4:3,0),this._nav_now.ttip=Calendar._TT.GO_TODAY,this._nav_nm=o("&#x203a;",1,1),this._nav_nm.ttip=Calendar._TT.NEXT_MONTH,this._nav_ny=o("&#x00bb;",1,2),this._nav_ny.ttip=Calendar._TT.NEXT_YEAR,(i=Calendar.createElement("tr",l)).className="daynames",this.weekNumbers&&((r=Calendar.createElement("td",i)).className="name wn",r.innerHTML=Calendar._TT.WK);for(var h=7;h>0;--h)r=Calendar.createElement("td",i),h||(r.navtype=100,r.calendar=this,Calendar._add_evs(r));this.firstdayname=this.weekNumbers?i.firstChild.nextSibling:i.firstChild,this._displayWeekdays();var c=Calendar.createElement("tbody",a);for(this.tbody=c,h=6;h>0;--h){i=Calendar.createElement("tr",c),this.weekNumbers&&(r=Calendar.createElement("td",i));for(var u=7;u>0;--u)(r=Calendar.createElement("td",i)).calendar=this,Calendar._add_evs(r)}this.showsTime?((i=Calendar.createElement("tr",c)).className="time",(r=Calendar.createElement("td",i)).className="time",r.colSpan=2,r.innerHTML=Calendar._TT.TIME||"&nbsp;",(r=Calendar.createElement("td",i)).className="time",r.colSpan=this.weekNumbers?4:3,function(){function e(e,t,a,n){var l=Calendar.createElement("span",r);if(l.className=e,l.innerHTML=t,l.calendar=s,l.ttip=Calendar._TT.TIME_PART,l.navtype=50,l._range=[],"number"!=typeof a)l._range=a;else for(var i=a;i<=n;++i){var o;o=i<10&&n>=10?"0"+i:""+i,l._range[l._range.length]=o}return Calendar._add_evs(l),l}var t=s.date.getHours(),a=s.date.getMinutes(),n=!s.time24,l=t>12;n&&l&&(t-=12);var o=e("hour",t,n?1:0,n?12:23),d=Calendar.createElement("span",r);d.innerHTML=":",d.className="colon";var h=e("minute",a,0,59),c=null;(r=Calendar.createElement("td",i)).className="time",r.colSpan=2,n?c=e("ampm",l?"pm":"am",["am","pm"]):r.innerHTML="&nbsp;",s.onSetTime=function(){var e,t=this.date.getHours(),a=this.date.getMinutes();n&&((e=t>=12)&&(t-=12),0==t&&(t=12),c.innerHTML=e?"pm":"am"),o.innerHTML=t<10?"0"+t:t,h.innerHTML=a<10?"0"+a:a},s.onUpdateTime=function(){var e=this.date,t=parseInt(o.innerHTML,10);n&&(/pm/i.test(c.innerHTML)&&t<12?t+=12:/am/i.test(c.innerHTML)&&12==t&&(t=0));var a=e.getDate(),l=e.getMonth(),r=e.getFullYear();e.setHours(t),e.setMinutes(parseInt(h.innerHTML,10)),e.setFullYear(r),e.setMonth(l),e.setDate(a),this.dateClicked=!1,this.callHandler()}}()):this.onSetTime=this.onUpdateTime=function(){};var C=Calendar.createElement("tfoot",a);for((i=Calendar.createElement("tr",C)).className="footrow",(r=o(Calendar._TT.SEL_DATE,this.weekNumbers?8:7,300)).className="ttip",this.isPopup&&(r.ttip=Calendar._TT.DRAG_TO_MOVE,r.style.cursor="move"),this.tooltips=r,n=Calendar.createElement("div",this.element),this.monthsCombo=n,n.className="combo",h=0;h<Calendar._MN.length;++h){var m=Calendar.createElement("div");m.className=Calendar.is_ie?"label-IEfix":"label",m.month=h,m.innerHTML=Calendar._SMN[h],n.appendChild(m)}for(n=Calendar.createElement("div",this.element),this.yearsCombo=n,n.className="combo",h=12;h>0;--h){var v=Calendar.createElement("div");v.className=Calendar.is_ie?"label-IEfix":"label",n.appendChild(v)}this._init(this.firstDayOfWeek,this.date),t.appendChild(this.element)},Calendar._keyEvent=function(e){function t(){var e=l.currentDateEl.pos;o=15&e,d=e>>4,h=l.ar_days[d][o]}function a(){var e=new Date(l.date);e.setDate(e.getDate()-c),l.setDate(e)}function n(){var e=new Date(l.date);e.setDate(e.getDate()+c),l.setDate(e)}var l=window._dynarch_popupCalendar;if(!l||l.multiple)return!1;Calendar.is_ie&&(e=window.event);var r=Calendar.is_ie||"keypress"==e.type,i=e.keyCode;if(e.ctrlKey)switch(i){case 37:r&&Calendar.cellClick(l._nav_pm);break;case 38:r&&Calendar.cellClick(l._nav_py);break;case 39:r&&Calendar.cellClick(l._nav_nm);break;case 40:r&&Calendar.cellClick(l._nav_ny);break;default:return!1}else switch(i){case 32:Calendar.cellClick(l._nav_now);break;case 27:r&&l.callCloseHandler();break;case 37:case 38:case 39:case 40:if(r){var s,o,d,h,c;for(s=37==i||38==i,c=37==i||39==i?1:7,t();;){switch(i){case 37:if(!(--o>=0)){o=6,i=38;continue}h=l.ar_days[d][o];break;case 38:--d>=0?h=l.ar_days[d][o]:(a(),t());break;case 39:if(!(++o<7)){o=0,i=40;continue}h=l.ar_days[d][o];break;case 40:++d<l.ar_days.length?h=l.ar_days[d][o]:(n(),t())}break}h&&(h.disabled?s?a():n():Calendar.cellClick(h))}break;case 13:r&&Calendar.cellClick(l.currentDateEl,e);break;default:return!1}return Calendar.stopEvent(e)},Calendar.prototype._init=function(e,t){var a=new Date,n=a.getFullYear(),l=a.getMonth(),r=a.getDate();this.table.style.visibility="hidden";var i=t.getFullYear();i<this.minYear?(i=this.minYear,t.setFullYear(i)):i>this.maxYear&&(i=this.maxYear,t.setFullYear(i)),this.firstDayOfWeek=e,this.date=new Date(t);var s=t.getMonth(),o=t.getDate();t.getMonthDays();t.setDate(1);var d=(t.getDay()-this.firstDayOfWeek)%7;d<0&&(d+=7),t.setDate(-d),t.setDate(t.getDate()+1);for(var h=this.tbody.firstChild,c=(Calendar._SMN[s],this.ar_days=new Array),u=Calendar._TT.WEEKEND,C=this.multiple?this.datesCells={}:null,m=0;m<6;++m,h=h.nextSibling){var v=h.firstChild;this.weekNumbers&&(v.className="day wn",v.innerHTML=t.getWeekNumber(),v=v.nextSibling),h.className="daysrow";for(var p,f=!1,y=c[m]=[],g=0;g<7;++g,v=v.nextSibling,t.setDate(p+1)){p=t.getDate();var _=t.getDay();v.className="day",v.pos=m<<4|g,y[g]=v;var D=t.getMonth()==s;if(D)v.otherMonth=!1,f=!0;else{if(!this.showsOtherMonths){v.className="emptycell",v.innerHTML="&nbsp;",v.disabled=!0;continue}v.className+=" othermonth",v.otherMonth=!0}if(v.disabled=!1,v.innerHTML=this.getDateText?this.getDateText(t,p):p,C&&(C[t.print("%Y%m%d")]=v),this.getDateStatus){var b=this.getDateStatus(t,i,s,p);if(this.getDateToolTip){var w=this.getDateToolTip(t,i,s,p);w&&(v.title=w)}!0===b?(v.className+=" disabled",v.disabled=!0):(/disabled/i.test(b)&&(v.disabled=!0),v.className+=" "+b)}v.disabled||(v.caldate=new Date(t),v.ttip="_",!this.multiple&&D&&p==o&&this.hiliteToday&&(v.className+=" selected",this.currentDateEl=v),t.getFullYear()==n&&t.getMonth()==l&&p==r&&(v.className+=" today",v.ttip+=Calendar._TT.PART_TODAY),-1!=u.indexOf(_.toString())&&(v.className+=v.otherMonth?" oweekend":" weekend"))}f||this.showsOtherMonths||(h.className="emptyrow")}this.title.innerHTML=Calendar._MN[s]+", "+i,this.onSetTime(),this.table.style.visibility="visible",this._initMultipleDates()},Calendar.prototype._initMultipleDates=function(){if(this.multiple)for(var e in this.multiple){var t=this.datesCells[e];this.multiple[e]&&(t&&(t.className+=" selected"))}},Calendar.prototype._toggleMultipleDate=function(e){if(this.multiple){var t=e.print("%Y%m%d"),a=this.datesCells[t];if(a){this.multiple[t]?(Calendar.removeClass(a,"selected"),delete this.multiple[t]):(Calendar.addClass(a,"selected"),this.multiple[t]=e)}}},Calendar.prototype.setDateToolTipHandler=function(e){this.getDateToolTip=e},Calendar.prototype.setDate=function(e){void 0!==e&&null!==e&&new Date(e)&&(e.equalsTo(this.date)||this._init(this.firstDayOfWeek,e))},Calendar.prototype.refresh=function(){this._init(this.firstDayOfWeek,this.date)},Calendar.prototype.setFirstDayOfWeek=function(e){this._init(e,this.date),this._displayWeekdays()},Calendar.prototype.setDateStatusHandler=Calendar.prototype.setDisabledHandler=function(e){this.getDateStatus=e},Calendar.prototype.setRange=function(e,t){this.minYear=e,this.maxYear=t},Calendar.prototype.callHandler=function(){this.onSelected&&this.onSelected(this,this.date.print(this.dateFormat))},Calendar.prototype.callCloseHandler=function(){this.onClose&&this.onClose(this),this.hideShowCovered()},Calendar.prototype.destroy=function(){this.element.parentNode.removeChild(this.element),Calendar._C=null,window._dynarch_popupCalendar=null},Calendar.prototype.reparent=function(e){var t=this.element;t.parentNode.removeChild(t),e.appendChild(t)},Calendar._checkCalendar=function(e){var t=window._dynarch_popupCalendar;if(!t)return!1;for(var a=Calendar.is_ie?Calendar.getElement(e):Calendar.getTargetElement(e);null!=a&&a!=t.element;a=a.parentNode);return null==a?(window._dynarch_popupCalendar.callCloseHandler(),Calendar.stopEvent(e)):void 0},Calendar.prototype.show=function(){for(var e=this.table.getElementsByTagName("tr"),t=e.length;t>0;){var a=e[--t];Calendar.removeClass(a,"rowhilite");for(var n=a.getElementsByTagName("td"),l=n.length;l>0;){var r=n[--l];Calendar.removeClass(r,"hilite"),Calendar.removeClass(r,"active")}}this.element.style.display="block",this.hidden=!1,this.isPopup&&(window._dynarch_popupCalendar=this,Calendar.addEvent(document,"keydown",Calendar._keyEvent),Calendar.addEvent(document,"keypress",Calendar._keyEvent),Calendar.addEvent(document,"mousedown",Calendar._checkCalendar)),this.hideShowCovered()},Calendar.prototype.hide=function(){this.isPopup&&(Calendar.removeEvent(document,"keydown",Calendar._keyEvent),Calendar.removeEvent(document,"keypress",Calendar._keyEvent),Calendar.removeEvent(document,"mousedown",Calendar._checkCalendar)),this.element.style.display="none",this.hidden=!0,this.hideShowCovered()},Calendar.prototype.showAt=function(e,t){var a=this.element.style;a.left=e+"px",a.top=t+"px",this.show()},Calendar.prototype.showAtElement=function(e,t){var a=this,n=Calendar.getAbsolutePos(e);if(!t||"string"!=typeof t)return this.showAt(n.x,n.y+e.offsetHeight),!0;this.element.style.display="block",Calendar.continuation_for_the_fucking_khtml_browser=function(){var l=a.element.offsetWidth,r=a.element.offsetHeight;a.element.style.display="none";var i=t.substr(0,1),s="l";switch(t.length>1&&(s=t.substr(1,1)),i){case"T":n.y-=r;break;case"B":n.y+=e.offsetHeight;break;case"C":n.y+=(e.offsetHeight-r)/2;break;case"t":n.y+=e.offsetHeight-r}switch(s){case"L":n.x-=l;break;case"R":n.x+=e.offsetWidth;break;case"C":n.x+=(e.offsetWidth-l)/2;break;case"l":n.x+=e.offsetWidth-l}n.width=l,n.height=r+40,a.monthsCombo.style.display="none",function(e){e.x<0&&(e.x=0),e.y<0&&(e.y=0);var t=document.createElement("div"),a=t.style;a.position="absolute",a.right=a.bottom=a.width=a.height="0px",document.body.appendChild(t);var n=Calendar.getAbsolutePos(t);document.body.removeChild(t),Calendar.is_ie&&!Calendar.is_ie7up?(n.y+=document.body.scrollTop,n.x+=document.body.scrollLeft):(n.y+=window.scrollY,n.x+=window.scrollX);var l=e.x+e.width-n.x;l>0&&(e.x-=l),(l=e.y+e.height-n.y)>0&&(e.y-=l)}(n),a.showAt(n.x,n.y)},Calendar.is_khtml?setTimeout("Calendar.continuation_for_the_fucking_khtml_browser()",10):Calendar.continuation_for_the_fucking_khtml_browser()},Calendar.prototype.setDateFormat=function(e){this.dateFormat=e},Calendar.prototype.setTtDateFormat=function(e){this.ttDateFormat=e},Calendar.prototype.parseDate=function(e,t){t||(t=this.dateFormat),this.setDate(Date.parseDate(e,t))},Calendar.prototype.hideShowCovered=function(){function e(e){var t=e.style.visibility;return t||(t=document.defaultView&&"function"==typeof document.defaultView.getComputedStyle?Calendar.is_khtml?"":document.defaultView.getComputedStyle(e,"").getPropertyValue("visibility"):e.currentStyle?e.currentStyle.visibility:""),t}if(Calendar.is_ie||Calendar.is_opera)for(var t=new Array("applet","iframe","select"),a=this.element,n=Calendar.getAbsolutePos(a),l=n.x,r=a.offsetWidth+l,i=n.y,s=a.offsetHeight+i,o=t.length;o>0;)for(var d=document.getElementsByTagName(t[--o]),h=null,c=d.length;c>0;){h=d[--c];var u=(n=Calendar.getAbsolutePos(h)).x,C=h.offsetWidth+u,m=n.y,v=h.offsetHeight+m;this.hidden||u>r||C<l||m>s||v<i?(h.__msh_save_visibility||(h.__msh_save_visibility=e(h)),h.style.visibility=h.__msh_save_visibility):(h.__msh_save_visibility||(h.__msh_save_visibility=e(h)),h.style.visibility="hidden")}},Calendar.prototype._displayWeekdays=function(){for(var e=this.firstDayOfWeek,t=this.firstdayname,a=Calendar._TT.WEEKEND,n=0;n<7;++n){t.className="day name";var l=(n+e)%7;n&&(t.ttip=Calendar._TT.DAY_FIRST.replace("%s",Calendar._DN[l]),t.navtype=100,t.calendar=this,t.fdow=l,Calendar._add_evs(t)),-1!=a.indexOf(l.toString())&&Calendar.addClass(t,"weekend"),t.innerHTML=Calendar._SDN[(n+e)%7],t=t.nextSibling}},Calendar.prototype._hideCombos=function(){this.monthsCombo.style.display="none",this.yearsCombo.style.display="none"},Calendar.prototype._dragStart=function(ev){if(!this.dragging){this.dragging=!0;var posX,posY;Calendar.is_ie?(posY=window.event.clientY+document.body.scrollTop,posX=window.event.clientX+document.body.scrollLeft):(posY=ev.clientY+window.scrollY,posX=ev.clientX+window.scrollX);var st=this.element.style;with(this.xOffs=posX-parseInt(st.left),this.yOffs=posY-parseInt(st.top),Calendar)addEvent(document,"mousemove",calDragIt),addEvent(document,"mouseup",calDragEnd)}},Date._MD=new Array(31,28,31,30,31,30,31,31,30,31,30,31),Date.SECOND=1e3,Date.MINUTE=60*Date.SECOND,Date.HOUR=60*Date.MINUTE,Date.DAY=24*Date.HOUR,Date.WEEK=7*Date.DAY,Date.parseDate=function(e,t){var a=new Date,n=0,l=-1,r=0,i=e.split(/\W+/),s=t.match(/%./g),o=0,d=0,h=0,c=0,u=0,C=0;for(o=0;o<i.length;++o)if(i[o])switch(s[o]){case"%s":C=parseInt(i[o],10);break;case"%d":case"%e":r=parseInt(i[o],10);break;case"%m":l=parseInt(i[o],10)-1;break;case"%Y":case"%y":(n=parseInt(i[o],10))<100&&(n+=n>29?1900:2e3);break;case"%b":case"%B":for(d=0;d<12;++d)if(Calendar._MN[d].substr(0,i[o].length).toLowerCase()==i[o].toLowerCase()){l=d;break}-1==l&&(l=parseInt(i[o],10)-1);break;case"%H":case"%I":case"%k":case"%l":h=parseInt(i[o],10);break;case"%P":case"%p":/pm/i.test(i[o])&&h<12?h+=12:/am/i.test(i[o])&&h>=12&&(h-=12);break;case"%M":c=parseInt(i[o],10);break;case"%S":u=parseInt(i[o],10)}if(isNaN(n)&&(n=a.getFullYear()),isNaN(l)&&(l=a.getMonth()),isNaN(r)&&(r=a.getDate()),isNaN(h)&&(h=a.getHours()),isNaN(c)&&(c=a.getMinutes()),isNaN(u)&&(u=a.getSeconds()),isNaN(C)&&(C=0),C)return new Date(1e3*C);if(0!=n&&-1!=l&&0!=r)return new Date(n,l,r,h,c,u);for(n=0,l=-1,r=0,o=0;o<i.length;++o)if(-1!=i[o].search(/[a-zA-Z]+/)){var m=-1;for(d=0;d<12;++d)if(Calendar._MN[d].substr(0,i[o].length).toLowerCase()==i[o].toLowerCase()){m=d;break}-1!=m&&(-1!=l&&(r=l+1),l=m)}else parseInt(i[o],10)<=12&&-1==l?l=i[o]-1:parseInt(i[o],10)>31&&0==n?(n=parseInt(i[o],10))<100&&(n+=n>29?1900:2e3):0==r&&(r=i[o]);return 0==n&&(n=a.getFullYear()),-1!=l&&0!=r?new Date(n,l,r,h,c,u):a},Date.prototype.getMonthDays=function(e){var t=this.getFullYear();return void 0===e&&(e=this.getMonth()),0!=t%4||0==t%100&&0!=t%400||1!=e?Date._MD[e]:29},Date.prototype.getDayOfYear=function(){var e=new Date(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0)-new Date(this.getFullYear(),0,0,0,0,0);return Math.floor(e/Date.DAY)},Date.prototype.getWeekNumber=function(){var e=new Date(this.getFullYear(),this.getMonth(),this.getDate(),0,0,0),t=e.getDay();e.setDate(e.getDate()-(t+6)%7+3);var a=e.valueOf();return e.setMonth(0),e.setDate(4),Math.round((a-e.valueOf())/6048e5)+1},Date.prototype.equalsTo=function(e){return this.getFullYear()==e.getFullYear()&&this.getMonth()==e.getMonth()&&this.getDate()==e.getDate()&&this.getHours()==e.getHours()&&this.getMinutes()==e.getMinutes()&&this.getSeconds()==e.getSeconds()},Date.prototype.setDateOnly=function(e){var t=new Date(e);this.setDate(1),this.setFullYear(t.getFullYear()),this.setMonth(t.getMonth()),this.setDate(t.getDate()),this.setHours(e.getHours()),this.setMinutes(e.getMinutes()),this.setSeconds(e.getSeconds())},Date.prototype.setDateAndTime=function(e){var t=new Date(e);this.setDate(1),this.setFullYear(t.getFullYear()),this.setMonth(t.getMonth()),this.setDate(t.getDate()),this.setHours(t.getHours()),this.setMinutes(t.getMinutes()),this.setSeconds(t.getSeconds())},Date.prototype.print=function(e){var t=this.getMonth(),a=this.getDate(),n=this.getFullYear(),l=this.getWeekNumber(),r=this.getDay(),i={},s=this.getHours(),o=s>=12,d=o?s-12:s,h=this.getDayOfYear();0==d&&(d=12);var c=this.getMinutes(),u=this.getSeconds();i["%a"]=Calendar._SDN[r],i["%A"]=Calendar._DN[r],i["%b"]=Calendar._SMN[t],i["%B"]=Calendar._MN[t],i["%C"]=1+Math.floor(n/100),i["%d"]=a<10?"0"+a:a,i["%e"]=a,i["%H"]=s<10?"0"+s:s,i["%I"]=d<10?"0"+d:d,i["%j"]=h<100?h<10?"00"+h:"0"+h:h,i["%k"]=s,i["%l"]=d,i["%m"]=t<9?"0"+(1+t):1+t,i["%M"]=c<10?"0"+c:c,i["%n"]="\n",i["%p"]=o?"PM":"AM",i["%P"]=o?"pm":"am",i["%s"]=Math.floor(this.getTime()/1e3),i["%S"]=u<10?"0"+u:u,i["%t"]="\t",i["%U"]=i["%W"]=i["%V"]=l<10?"0"+l:l,i["%u"]=r+1,i["%w"]=r,i["%y"]=(""+n).substr(2,2),i["%Y"]=n,i["%%"]="%";var C=/%./g;if(!Calendar.is_ie5&&!Calendar.is_khtml)return e.replace(C,function(e){return i[e]||e});for(var m=e.match(C),v=0;v<m.length;v++){var p=i[m[v]];p&&(C=new RegExp(m[v],"g"),e=e.replace(C,p))}return e},Date.prototype.__msh_oldSetFullYear=Date.prototype.setFullYear,Date.prototype.setFullYear=function(e){var t=new Date(this);t.__msh_oldSetFullYear(e),t.getMonth()!=this.getMonth()&&this.setDate(28),this.__msh_oldSetFullYear(e)},window._dynarch_popupCalendar=null;
