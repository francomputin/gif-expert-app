(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(2)),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("submit hecho"),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""))},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})})})},j=n(10),d=n(6),l=n.n(d),f=n(8),b=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=hEy2PAaexCKRoojUvStG5mDerp9pKL8S&q=".concat(encodeURI(t),"&limit=2"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){e.id;var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsxs)("p",{children:[" ",t," "]})]})},p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",t]}),r&&"cargando...",Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(h,Object(j.a)({},e),e.id)}))})]})},g=function(){var e=Object(a.useState)(["Aquaria"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:" My favorite queens "}),Object(o.jsx)(u,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return console.log("aqui"),Object(o.jsx)(p,{category:e},e)}))})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};r.a.render(Object(o.jsx)(g,{}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.d258bc22.chunk.js.map