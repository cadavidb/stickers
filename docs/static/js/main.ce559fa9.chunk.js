(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),l=a(1),m=a(8),u=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(l.a)(a,2),i=c[0],u=c[1],s=function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(m.a)(e))})),u(""))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background"}),r.a.createElement("div",{id:"entrada"},r.a.createElement("form",{onSubmit:s},r.a.createElement("p",null," ",i," "),r.a.createElement("input",{type:"text",value:i,onChange:function(e){u(e.target.value)}}))),r.a.createElement("button",{onClick:s,id:"boton",className:"animate__animated animate__shakeY"},"Buscar Gifs"))},s=a(4),o=a.n(s),d=a(7),f=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,n,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=20&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null," ",t," "))},g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"}," ",t," "),i&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))},E=function(e){var t=e.defaultCategories,a=void 0===t?["kermit memes"]:t,c=Object(n.useState)(a),i=Object(l.a)(c,2),m=i[0],s=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"animate__animated animate__heartBeat"},"Gifs animados"),r.a.createElement(u,{setCategories:s}),r.a.createElement("hr",null),r.a.createElement("ol",null,m.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};a(15);i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ce559fa9.chunk.js.map