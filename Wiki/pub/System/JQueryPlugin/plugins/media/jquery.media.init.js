"use strict";jQuery(function(e){var a=foswiki.getPreference("PUBURLPATH")+"/"+foswiki.getPreference("SYSTEMWEB")+"/JQueryPlugin";e.fn.media.defaults.mp3Player=a+"/plugins/media/mediaplayer/player.swf",e.fn.media.defaults.flvPlayer=a+"/plugins/media/mediaplayer/player.swf",e.fn.media.defaults.params={bgColor:"#000",allowfullscreen:!0},e(".jqMedia:not(.jqInitedMedia)").livequery(function(){var i=e(this),s=e.extend({caption:"",skin:"stormtrooper"},i.data(),i.metadata());s.autoplay&&(s.flashvars=e.extend({},s.flashvars,{autostart:!0})),s.skin&&(s.flashvars=e.extend({},s.flashvars,{skin:a+"/plugins/media/skins/"+s.skin+".zip"})),i.addClass("jqInitedMedia"),i.find("a[href]").each(function(){e(this).media(s)})})});
