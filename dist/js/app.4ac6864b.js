(function(t){function e(e){for(var r,s,i=e[0],l=e[1],u=e[2],c=0,p=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"04979bca"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var u=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"30f1":function(t,e,n){"use strict";n("ab2c")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f5df1");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-header"),n("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header__wrap"},[n("navbar"),n("main-logo"),n("tools")],1)])])},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("svg",{staticClass:"logo__svg",attrs:{width:"471",height:"54",viewBox:"0 0 471 54",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{staticClass:"logo__path",attrs:{d:"M35.55 38L20.71 2.02H0.76V52H13.92V11.96H14.06L29.88 52H41.22L57.04 11.96H57.18V52H70.34V2.02H50.39L35.55 38ZM77.0518 27.01C77.0518 37.44 81.2518 53.4 108.132 53.4C135.012 53.4 139.212 37.44 139.212 27.01C139.212 16.58 135.012 0.619998 108.132 0.619998C81.2518 0.619998 77.0518 16.58 77.0518 27.01ZM91.4718 27.01C91.4718 19.24 95.8118 10.14 108.132 10.14C120.452 10.14 124.792 19.24 124.792 27.01C124.792 34.78 120.452 43.88 108.132 43.88C95.8118 43.88 91.4718 34.78 91.4718 27.01ZM159.535 11.54H173.395C183.755 11.54 187.675 17.28 187.675 26.52C187.675 37.09 183.615 42.48 174.655 42.48H159.535V11.54ZM145.955 52H178.295C193.975 52 201.675 42.06 201.675 27.01C201.675 11.96 194.255 2.02 177.105 2.02H145.955V52ZM251.601 36.88H251.461L225.211 2.02H209.461V52H222.621V17.14H222.761L249.991 52H264.761V2.02H251.601V36.88ZM274.266 52H287.846V2.02H274.266V52ZM310.951 23.51V2.02H297.371V52H310.951V37.16L318.861 30.37L335.871 52H354.211L329.501 22.11L352.461 2.02H334.191L310.951 23.51ZM371.86 23.51V2.02H358.28V52H371.86V37.16L379.77 30.37L396.78 52H415.12L390.41 22.11L413.37 2.02H395.1L371.86 23.51ZM434.868 52H448.448V34.57L470.568 2.02H454.608L441.658 23.79L428.708 2.02H412.748L434.868 34.57V52Z",fill:"white"}})])])},u=[],c=(n("7b20"),n("2877")),f={},p=Object(c["a"])(f,l,u,!1,null,null,null),d=p.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar"},[n("ul",{staticClass:"navbar__list"},[n("li",{staticClass:"navbar__item"},[n("router-link",{staticClass:"navbar__link",attrs:{to:"/new"}},[t._v("New arrivals")])],1),n("li",{staticClass:"navbar__item"},[n("router-link",{staticClass:"navbar__link",attrs:{to:"/shop"}},[t._v("Shop")])],1),n("li",{staticClass:"navbar__item"},[n("router-link",{staticClass:"navbar__link",attrs:{to:"/collections"}},[t._v("Collections")])],1)])])},v=[],m=(n("e715"),{}),h=Object(c["a"])(m,b,v,!1,null,null,null),_=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools"})},H=[],C={},w=Object(c["a"])(C,g,H,!1,null,null,null),y=w.exports,L={components:{Tools:y,Navbar:_,MainLogo:d}},V=L,j=(n("8e73"),Object(c["a"])(V,s,i,!1,null,null,null)),O=j.exports,x={components:{MainHeader:O}},M=x,k=(n("f26c"),Object(c["a"])(M,a,o,!1,null,null,null)),E=k.exports,Z=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("banner",{attrs:{image:t.mainBanner.image}})],1)},S=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banner",style:{backgroundImage:"url("+t.image+")"}})},T=[],B={props:{image:{type:String,default:""}}},A=B,J=(n("30f1"),Object(c["a"])(A,$,T,!1,null,null,null)),N=J.exports,q=n("d15f"),I=n.n(q),z={name:"Home",components:{Banner:N},data:function(){return{mainBanner:{image:I.a}}}},D=z,F=Object(c["a"])(D,P,S,!1,null,null,null),G=F.exports;r["a"].use(Z["a"]);var K=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Q=new Z["a"]({mode:"history",base:"/",routes:K}),R=Q,U=n("2f62");r["a"].use(U["a"]);var W=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:R,store:W,render:function(t){return t(E)}}).$mount("#app")},"7b20":function(t,e,n){"use strict";n("cbcb")},"8e73":function(t,e,n){"use strict";n("f683")},"8f97":function(t,e,n){},ab2c:function(t,e,n){},cbcb:function(t,e,n){},d15f:function(t,e,n){t.exports=n.p+"img/banner1.b604c29c.jpg"},e715:function(t,e,n){"use strict";n("8f97")},e8aa:function(t,e,n){},f26c:function(t,e,n){"use strict";n("e8aa")},f683:function(t,e,n){}});
//# sourceMappingURL=app.4ac6864b.js.map