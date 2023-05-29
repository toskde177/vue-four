(function(){"use strict";var t={4628:function(t,e,n){var o=n(144),r=n(998),i=n(704),s=n(5747),a=n(4324),u=n(5495),c=n(3059),l=n(3687),f=function(){var t=this,e=t._self._c;return e(r.Z,[e(i.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(u.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(u.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(l.Z),e(s.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(a.Z,[t._v("mdi-open-in-new")])],1)],1),e(c.Z,[e("router-view")],1)],1)},d=[],h={name:"App",data:()=>({})},p=h,v=n(1001),m=(0,v.Z)(p,f,d,!1,null,null,null),g=m.exports,y=n(8345),b=function(){var t=this,e=t._self._c;return e("hello-world")},w=[],k=n(266),_=n(2118),x=n(1713),Z=function(){var t=this,e=t._self._c;return e(_.Z,[e(x.Z,{staticClass:"text-center"},[e(k.Z,{attrs:{cols:"12"}},[e(u.Z,{staticClass:"my-3",attrs:{src:n(9574),contain:"",height:"200"}})],1),e(k.Z,{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to the Vuetify Playground ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(k.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),e(x.Z,{attrs:{justify:"center"}},t._l(t.whatsNext,(function(n,o){return e("a",{key:o,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1),e(k.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),e(x.Z,{attrs:{justify:"center"}},t._l(t.importantLinks,(function(n,o){return e("a",{key:o,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1),e(k.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),e(x.Z,{attrs:{justify:"center"}},t._l(t.ecosystem,(function(n,o){return e("a",{key:o,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1)],1),e(x.Z,[e(k.Z,{attrs:{cols:"12"}},[e("div",[t._v("Also visit the "),e("a",{attrs:{href:"#/about"}},[t._v("About page")])])])],1)],1)},j=[],C={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},O=C,A=(0,v.Z)(O,Z,j,!1,null,null,null),P=A.exports,E={name:"home-page",components:{HelloWorld:P}},L=E,N=(0,v.Z)(L,b,w,!1,null,null,null),T=N.exports;o.ZP.use(y.ZP);const W=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5268))}],S=new y.ZP({routes:W});var F=S,q=n(8864);o.ZP.use(q.Z);var M=new q.Z({}),V=n(5205);const B=t=>{confirm("A new version of the app is available. Would you like to update?",(()=>{t.postMessage({action:"skipWaiting"})}))};var D;(0,V.z)("/vue-four/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),B("waiting")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),navigator.serviceWorker.addEventListener("controllerchange",(function(){D||(window.location.reload(),D=!0)})),self.addEventListener("message",(t=>{"skipWaiting"==t.data.action&&self.skipWaiting()})),o.ZP.config.productionTip=!1,new o.ZP({router:F,vuetify:M,render:t=>t(g)}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"img/logo.4d6033c9.svg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(a=!1,i<s&&(s=i));if(a){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.9bc1868f.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-four:";n.l=function(o,r,i,s){if(t[o])t[o].push(r);else{var a,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+i){a=f;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=o),t[o]=[r];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(h);var r=t[o];if(delete t[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/vue-four/"}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var s=n.p+n.u(e),a=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],a=o[1],u=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var l=u(n)}for(e&&e(o);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunkvue_four"]=self["webpackChunkvue_four"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4628)}));o=n.O(o)})();
//# sourceMappingURL=app.5e3d8826.js.map