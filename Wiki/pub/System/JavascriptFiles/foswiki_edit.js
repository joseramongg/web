var EDITBOX_ID="topic",EDITBOX_PREF_ROWS_ID="EditTextareaRows",EDITBOX_CHANGE_STEP_SIZE=4,EDITBOX_MIN_ROWCOUNT=4,EDITBOX_PREF_FONTSTYLE_ID="EditTextareaFontStyle",EDITBOX_FONTSTYLE_MONO="mono",EDITBOX_FONTSTYLE_PROPORTIONAL="proportional",EDITBOX_FONTSTYLE_MONO_STYLE="foswikiEditboxStyleMono",EDITBOX_FONTSTYLE_PROPORTIONAL_STYLE="foswikiEditboxStyleProportional";!function(t){foswiki.Edit={textareaInited:!1,fontStyle:null,validateSuppressed:!1},foswiki.Edit.getFontStyle=function(){if(foswiki.Edit.fontStyle)return foswiki.Edit.fontStyle;var t=foswiki.Pref.getPref(EDITBOX_PREF_FONTSTYLE_ID);return(!t||t!==EDITBOX_FONTSTYLE_PROPORTIONAL&&t!==EDITBOX_FONTSTYLE_MONO)&&(t=EDITBOX_FONTSTYLE_PROPORTIONAL),t},foswiki.Edit.setFontStyle=function(i){i===EDITBOX_FONTSTYLE_MONO&&t("#"+EDITBOX_ID).removeClass(EDITBOX_FONTSTYLE_PROPORTIONAL_STYLE).addClass(EDITBOX_FONTSTYLE_MONO_STYLE),i===EDITBOX_FONTSTYLE_PROPORTIONAL&&t("#"+EDITBOX_ID).removeClass(EDITBOX_FONTSTYLE_MONO_STYLE).addClass(EDITBOX_FONTSTYLE_PROPORTIONAL_STYLE),foswiki.Edit.fontStyle=i,foswiki.Pref.setPref(EDITBOX_PREF_FONTSTYLE_ID,i)},foswiki.Edit.changeEditBox=function(i){var e=t("#"+EDITBOX_ID).attr("rows");return e=parseInt(e),e+=i*EDITBOX_CHANGE_STEP_SIZE,e=e<EDITBOX_MIN_ROWCOUNT?EDITBOX_MIN_ROWCOUNT:e,t("#"+EDITBOX_ID).attr("rows",e),foswiki.Pref.setPref(EDITBOX_PREF_ROWS_ID,e),!1},foswiki.Edit.validateMandatoryFields=function(){if(foswiki.Edit.validateSuppressed)return!0;var i=[];return t("select.foswikiMandatory").each(function(t,e){var O,o=!1;for(O=0;O<e.options.length;O+=1)if(e.options[O].selected){o=!0;break}o||i.push("The required form field '"+e.name+"' has no value.")}),t("textarea.foswikiMandatory, input.foswikiMandatory").each(function(t,e){null!==e.value&&0!==e.value.length||i.push("The required form field '"+e.name+"' has no value.")}),!(i.length>0)||(alert(i.join("\n")),!1)},t(function(){try{document.main.text.focus()}catch(t){}var i=foswiki.Pref.getPref(EDITBOX_PREF_ROWS_ID);i&&t("#"+EDITBOX_ID).attr("rows",parseInt(i,10));var e=foswiki.Edit.getFontStyle();foswiki.Edit.setFontStyle(e),t(document.forms[name="main"]).submit(function(t){return foswiki.Edit.validateMandatoryFields()}),t(".foswikiTextarea").keydown(function(t){var i;return t.keyCode&&(i=t.keyCode),27!==i}),t(".foswikiButtonCancel").click(function(t){foswiki.Edit.validateSuppressed=!0})})}(jQuery);
