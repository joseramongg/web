function changeEditBox(e){return!1}function setEditBoxHeight(e){}function initTextAreaStyles(){var e=document.getElementById(IFRAME_ID);if(null!=e)for(var t=e.parentNode;t!=document;){if("TABLE"==t.nodeName){t.style.height="auto";var n,a=t.getElementsByTagName("SELECT"),o=a.length;for(n=0;n<o;++n)a[n].style.marginLeft=a[n].style.marginRight="2px",a[n].style.fontSize="94%";break}t=t.parentNode}}function handleKeyDown(e){e||(e=window.event);var t;return e.keyCode&&(t=e.keyCode),27!=t}function validateMandatoryFields(e){if(foswiki.Pref.validateSuppressed)return!0;for(var t=!0,n=foswiki.getElementsByClassName(document,"foswikiMandatory","select"),a=0;a<n.length;a++){for(var o=!1,i=0;i<n[a].options.length;i++)if(n[a].options[i].selected){o=!0;break}o||(alert("The required form field '"+n[a].name+"' has no value."),t=!1)}for(var r=new Array("input","textarea"),l=0;l<r.length;l++){n=foswiki.getElementsByClassName(document,"foswikiMandatory",r[l]);for(a=0;a<n.length;a++)null!=n[a].value&&0!=n[a].value.length||(alert("The required form field '"+n[a].name+"' has no value."),t=!1)}return t}function suppressSaveValidation(){foswiki.Pref.validateSuppressed=!0}jQuery(document).ready(function(e){e("#save").closest("form").bind("submit",function(t){return!!e("#cancel:focus").length||("object"==typeof tinyMCE&&"object"==typeof tinyMCE.activeEditor&&null!==tinyMCE.activeEditor&&tinyMCE.activeEditor.getParam("fullscreen_is_enabled")?(alert("Please toggle out of full screen mode before attempting to save"),!1):void 0)})});var IFRAME_ID="mce_editor_0";
