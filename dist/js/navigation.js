jQuery(document).ready((function(n){n(window).width(),getScrollBarWidth(),n((function(){n("#mobile-menu-button").on("click",(function(o){n("body").hasClass("menu-open")?(n("body").toggleClass("menu-open"),setTimeout((function(){n("#main-navigation > ul.main-menu").css("display","none")}),500)):(n("#main-navigation > ul.main-menu").css("display","block"),n("body").toggleClass("menu-open"))})),n("#main-navigation .menu-item > .menu-button").on("click",(function(o){n(this).next(".sub-menu").addClass("sub-menu-open")})),n("#main-navigation .sub-menu .menu-back-button").on("click",(function(o){n(this).parent("li").parent("ul").removeClass("sub-menu-open")})),n.fn.doubleTapToGo&&n(window).width()+getScrollBarWidth()>=768&&n("#main-navigation").doubleTapToGo()})),n(window).resize((function(o){n(window).width()+getScrollBarWidth()>=768&&(n("body").removeClass("menu-open"),n("#main-navigation > ul.main-menu").removeAttr("style"))}))}));