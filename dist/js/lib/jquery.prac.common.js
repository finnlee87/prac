!function(n){"function"==typeof define&&define.amd?define(["jquery","underscore"],n):"object"==typeof exports?n(require("jquery")):n(jQuery)}(function(r,t){function e(n,e){if(0<=n.indexOf(e))return 1;for(var t=0;t<a.length;t++){var o=a[t];if(e>=o[0]&&e<=o[1])return 1}}function n(n){!isNaN(n.val())&&0!=n.val().length||n.val(0);var e=n.attr("min");null!=e&&n.val()<Number(e)&&n.val(e);e=n.attr("max");null!=e&&n.val()>Number(e)&&n.val(e)}var a,o;a=[[48,57],[96,105]],o=[8,9,13,37,39,46,189],r.fn.decimal=function(){r(this).on("keydown",function(n){e(o.concat([190]),n.keyCode)||n.preventDefault()}).on("change",function(){n(r(this))})},r.fn.integer=function(){r(this).on("keydown",function(n){e(o,n.keyCode)||n.preventDefault()}).on("change",function(){n(r(this))})},r.fn.bindDragMove=function(e,t,o,n){n=n||{};var a=r(this),i=0,u={x:0,y:0},c={x:0,y:0},s=!1;a.on("mousedown",function(n){0==n.button&&(n.stopPropagation(),s=!0,e(n,{x:n.pageX,y:n.pageY},a),r(document).on("mousemove",function(n){var e;0==n.button&&(n.stopPropagation(),i=i?(e=(new Date).getTime(),c={x:Math.abs(n.pageX-u.x)/(e-i),y:Math.abs(n.pageY-u.y)/(e-i)},e):(new Date).getTime(),u={x:n.pageX,y:n.pageY},t(n,u,c,a))}))}),r(document).on("mouseup",function(n){0==n.button&&(r(document).unbind("mousemove"),o(n,{x:n.pageX,y:n.pageY},c))}),n.preventBody&&document.body.addEventListener("touchmove",function(n){s&&n.preventDefault()},{passive:!1}),a.on("touchstart",function(n){n.stopPropagation(),s=!0,e(n,{x:n.originalEvent.changedTouches[0].clientX,y:n.originalEvent.changedTouches[0].clientY},a),r(document).on("touchmove",function(n){var e;n.stopPropagation(),i?(e=(new Date).getTime())-i!=0&&(c={x:Math.abs(n.originalEvent.touches[0].clientX-u.x)/(e-i),y:Math.abs(n.originalEvent.touches[0].clientY-u.y)/(e-i)},i=e):i=(new Date).getTime(),u={x:n.originalEvent.touches[0].clientX,y:n.originalEvent.touches[0].clientY},t(n,u,c,a)})}),r(document).on("touchend",function(n){r(document).off("touchmove"),i=0,s&&(s=!1,o(n,{x:n.originalEvent.changedTouches[0].clientX,y:n.originalEvent.changedTouches[0].clientY},c))})},r.fn.bindMouseWheel=function(e){var n=r(this),t=!1;document.body.addEventListener("mousewheel",function(n){t&&n.preventDefault()},{passive:!1}),n.on("mouseover",function(n){t=!0}),n.on("mouseout",function(n){t=!1}),n.on("mousewheel",function(n){e(n,n.originalEvent.wheelDelta)})},r.pageLoading=function(n){n=r.extend(!0,{},{class:"secondary"},n=n||{});var e=r(t.template(`
            <div class="p-page-loading page-loading">
                <button class="btn btn-<%=cfg.class%>" type="button" disabled>
                    <span class="spinner-border spinner-border-sm"></span>
                    <span class="visually-hidden">Loading...</span>
                </button>
            </div>
        `)({cfg:n}));return r("body").append(e),{stop:function(){e.remove()}}},r.remToPixels=function(n){return n*parseFloat(getComputedStyle(document.documentElement).fontSize)}});
//# sourceMappingURL=jquery.prac.common.js.map