var require={baseUrl:"/js/lib",paths:{app:"/app",jquery:"jquery-3.6.0",bootstrap:"bootstrap-5.1.3",underscore:"underscore-1.13.1",text:"text-2.0.16",router:"router-0.8.0",moment:"moment",async:"async",common:"jquery.prac.common",form:"jquery.prac.com.m.form",action:"jquery.prac.com.m.action",nav:"jquery.prac.com.m.nav",biz:"jquery.prac.com.m.biz"},shim:{}};function Prac(){return{config:function(e){if(e.paths)for(var r in e.paths)require.paths[r]=e.paths[r];if(e.shim)for(var r in e.shim)require.shim[r]=e.shim[r];var t=document.createElement("script");t.onload=function(){var f;f=e,require(["router","underscore","jquery","common"],function(n,t,i){function o(e,r){var t=i.localStorage.get(i.uri(),"back");t&&(t=JSON.parse(t),e.find("a[p-router='back']").attr("href",t.uri)),e.find("a[p-router]").off("click"),e.find("a[p-router]").on("click",function(e){e.preventDefault(),"push"==i(this).attr("p-router")?a(i(this).attr("href"),r,i(this).attr("title")):a(i(this).attr("href"),null,i(this).attr("title"))})}function a(e,r,t){r&&i.localStorage.put(i.uri(e),JSON.stringify({uri:i.uri(),name:r}),"back"),history.pushState({},t||"",e),n.fire("statechange")}var c,p;function u(r,t,n,o){var i=0;function a(){var e;i<r.length?(e=r[i++],n.splice(4,1,function(){a()}),e.apply(t,n)):o&&o()}a()}!function(){i.ajaxSetup({complete:function(e,r){u(f.interceptor&&f.interceptor.request?f.interceptor.request.complete:[],i,[e,r,i])}});var r=t.template;t.template=function(){var e=r.apply(t,arguments);return function(){try{return e.apply(t,arguments)}catch(e){console.error(e),u(f.interceptor&&f.interceptor.page?f.interceptor.page.error:[],t,[e,i])}}}}(),c=i("[p-content]"),n.registerRoutes(f.routes).on("routeload",function(t,e){p=i.pageLoading(),u(f.interceptor&&f.interceptor.page?f.interceptor.page.before:[],t,[t.name,location.pathname,e,i],function(){i("body>.content").removeAttr("style"),t.render(c,e,function(e){var r;t.init(e),(r=c).find("input[p-integer]").integer(),r.find("input[p-decimal]").decimal(),i.each(r.find("[p-form]"),function(e,r){i(r).form()}),i.each(r.find("[p-swipe]"),function(e,r){i(r).swipeCell()}),o(c,t.name),u(f.interceptor&&f.interceptor.page?f.interceptor.page.after:[],t,[t.name,location.pathname,e,i]),p.stop(),p=null})})}).on("statechange",function(){}).init(),o(i("body")),window.route=a,window.back=function(e){if(e){var r,t=i.localStorage.all("back");for(r in t){var n=JSON.parse(t[r]);if(n.name==e){a(n.uri);break}}}else{var o=i.localStorage.get(i.uri(),"back");o&&a(JSON.parse(o).uri)}},f.interceptor.init&&f.interceptor.init(i)})},t.src="/js/lib/require.js",document.head.appendChild(t)}}}var prac=new Prac;
//# sourceMappingURL=prac-m.js.map