!function(e){function s(s,a,t,i){function l(s){function a(s){var t=e("<li/>").attr("id",this.id||"").html("<span>"+this.text+"</span>").appendTo(s);if(this.classes&&t.children("span").addClass(this.classes),this.expanded?t.addClass("open"):t.addClass("closed"),this.hasChildren||this.children&&this.children.length){var i=e("<ul/>").appendTo(t);this.hasChildren&&(t.addClass("hasChildren"),a.call({classes:"placeholder",text:"&nbsp;",children:[]},i)),this.children&&this.children.length&&e.each(this.children,a,[i])}}t.empty(),e.each(s,a,[t]),e(i).treeview({add:t})}if(void 0===s.data)e.getJSON(s.url,{root:a},l);else{var h=e.extend({root:a},s.data);e.ajax({url:s.url,dataType:"json",type:"POST",data:h,success:l})}}var a=e.fn.treeview;e.fn.treeview=function(t){if(!t.url)return a.apply(this,arguments);var i=this;i.children().size()||s(t,t.root||"source",this,i);var l=t.toggle;return a.call(this,e.extend({},t,{collapsed:!0,toggle:function(){var a=e(this);if(a.hasClass("hasChildren")){var h=a.removeClass("hasChildren").find("ul");s(t,this.id,h,i)}l&&l.apply(this,arguments)}}))}}(jQuery);
