!function(a){"use strict";function b(b,c){var d=a(b);d.css({position:"relative",display:"inline-block"}),d.prepend('<div class="cursor" style="right: initial; left:0;"></div>'),d=d.find(".text-js");var e=d.text().trim().split(""),f=e.length,g="";d.text(""),setTimeout(function(){d.css("opacity",1),d.prev().removeAttr("style"),d.text("");for(var a=0;a<f;a++)!function(a,b){setTimeout(function(){g+=b,d.text(g)}.bind(a+1,e[a]),a*c)}(a+1,e[a])},500)}a(document).ready(function(){b(".type-js",27)})}(window.jQuery);