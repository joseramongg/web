!function(e){e(document).ready(function(){e("textarea.commentPluginPromptBox").blur(function(){""==this.value&&(this.value=this.title)}).focus(function(){this.value==this.title&&(this.value="")}).keypress(function(){var t=e(this).parents("form")[0];e(t).find(".commentPluginStatusResponse").html("")});e("input.commentPluginAjax").click(function(t){var i=e(this).parents("form")[0];return e("body").css("cursor","wait"),"undefined"!=typeof StrikeOne&&StrikeOne.submit(i),e.ajax({url:i.action,type:"POST",data:e(i).serialize(),beforeSend:function(){e(i).find("input[type=text], textarea").attr("disabled","disabled"),e(i).find("[type=submit]").attr("disabled","disabled"),e(i).find("[type=submit]").addClass("foswikiButtonDisabled")},success:function(t,n,a){!function(t,i,n){var a;if("TOP"==t)0==(a=e(".patternContent")).length&&(a=e("body")),a.prepend(i),t="";else if("BOTTOM"==t)0==(a=e(".patternContent")).length&&(a=e("body")),a.append(i),t="";else if(n.comment_location)a=e('*:contains("'+n.comment.location.value+'")')[0];else if(n.comment_anchor){var s=n.comment_anchor.value.slice(1);a=e("a[name='"+s+"'],*[id='"+s+"']")}else(a=e(".commentPluginForm")[n.comment_index.value])&&(a=e(a));a&&"BEFORE"==t?a.before(i):a&&"AFTER"==t?a.after(i):""!=t&&e("body").append(i)}(a.getResponseHeader("X-Foswiki-Comment"),t,i),e(i).find("input[type=text], textarea").removeAttr("disabled","disabled"),e(i).find("[type=submit]").removeAttr("disabled","disabled"),e(i).find("[type=submit]").removeClass("foswikiButtonDisabled"),e("body").css("cursor","default"),i.reset()},error:function(t,n,a){t.responseText?alert("Error: "+t.responseText):alert("Error: "+a),e(i).find("input[type=text], textarea").removeAttr("disabled","disabled"),e(i).find("[type=submit]").removeAttr("disabled","disabled"),e(i).find("[type=submit]").removeClass("foswikiButtonDisabled"),e("body").css("cursor","default")},complete:function(t){var i=t.getResponseHeader("X-Foswiki-Validation");i&&e("input[name='validation_key']").each(function(){e(this).val("?"+i)})}}),!1})})}(jQuery);
