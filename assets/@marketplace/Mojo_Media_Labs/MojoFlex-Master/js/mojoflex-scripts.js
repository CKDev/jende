$(document).ready((function(){$(".navbar-toggle, .navbar-close").click((function(){$(".navbar-collapse").hasClass("active")?$(".navbar-collapse").removeClass("active"):$(".navbar-collapse").addClass("active"),$(".navbar-toggle").hasClass("active")?$(".navbar-toggle").removeClass("active"):$(".navbar-toggle").addClass("active")})),$(".team-item.action").click((function(event){$(this).hasClass("active")?$(this).removeClass("active"):($(".team-item.action").removeClass("active"),$(this).addClass("active"))})),$(".nav .hs-menu-wrapper > ul > li.hs-item-has-children > a").parent().addClass("arrow"),$(".off-canvas-inner .nav .hs-menu-wrapper > ul > li.hs-item-has-children > a").click((function(event){var parentEl=$(this).parent(),hasClass=parentEl.hasClass("drop");parentEl.find("ul").length>0&&(event.preventDefault(),event.stopPropagation(),hasClass?parentEl.removeClass("drop"):parentEl.addClass("drop"))})),$(".nav.standard .hs-menu-wrapper > ul > li.hs-item-has-children > a").click((function(event){var parentEl=$(this).parent(),hasClass=parentEl.hasClass("drop");parentEl.find("ul").length>0&&(event.preventDefault(),event.stopPropagation(),$(".nav.standard .hs-menu-wrapper > ul > li.drop").removeClass("drop"),hasClass?parentEl.removeClass("drop"):parentEl.addClass("drop"),hasClass||parentEl.addClass("drop"))})),$("body").on("click",(function(event){$(".nav.standard .hs-menu-wrapper > ul > li.drop").removeClass("drop")})),$(".footer-nav li.hs-menu-depth-1.hs-item-has-children > a").click((function(event){event.preventDefault(),event.stopPropagation()})),sessionStorage.getItem("alertHide")||$(".alert-bar").removeClass("hide"),$(".alert-bar-close").click((function(){sessionStorage.setItem("alertHide","true"),$(".alert-bar").addClass("hide")}));var mainHeader=$(".header");$(".ha-waypoint").waypoint((function(direction){"down"===direction?mainHeader.addClass("sticky-header"):"up"===direction&&mainHeader.removeClass("sticky-header")}),{offset:"-25px"}),$(".lang-switch").appendTo(".lang-switch-wrapper"),AOS.init({once:!0,easing:"ease-out-sine",disable:"mobile",disable:function(){return window.innerWidth<768}})}));