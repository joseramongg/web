"use strict";jQuery(function(t){var e={onlyVisible:!1};t(".jqUIButton").livequery(function(){var a=t(this),n=t.extend({},e,a.data(),a.metadata());a.removeClass("jqUIButton").button(n)}),t(".jqUIButtonset").livequery(function(){var a=t(this),n=t.extend({},e,a.data(),a.metadata());a.removeClass("jqUIButtonset").buttonset(n)})});
