(this.webpackJsonpgithubsearch=this.webpackJsonpgithubsearch||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),l=(a(9),a(1));a(10),a(11);var s=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"GitSearch"))};a(12);var u=function(e){return c.a.createElement("form",null,c.a.createElement("input",{type:"text",id:"fusername",name:"fusername",className:"input",placeholder:"usu\xe1rio do github",onChange:e.handleSearch}),c.a.createElement("input",{type:"button",value:"Buscar",className:"button",onClick:e.handleSubmit}))};a(13);var i=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"profile-img",style:{backgroundImage:"url(".concat(e.avatar,")")}}),c.a.createElement("div",{className:"flex"},c.a.createElement("h2",{className:"username"},e.login),c.a.createElement("a",{href:"https://github.com/".concat(e.login),target:"_blank",className:"profile-link"},"Ver perfil")),c.a.createElement("p",null,"reposit\xf3rios - ",e.repos),c.a.createElement("p",null,"seguidores - ",e.followers),c.a.createElement("p",{className:"last-p"},"seguindo - ",e.following))};var m=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),m=Object(l.a)(o,2),h=m[0],f=m[1],b=Object(n.useState)(""),p=Object(l.a)(b,2),g=p[0],d=p[1],v=Object(n.useState)(""),E=Object(l.a)(v,2),j=E[0],O=E[1],w=Object(n.useState)(""),S=Object(l.a)(w,2),N=S[0],k=S[1],y=Object(n.useState)(""),x=Object(l.a)(y,2),B=x[0],_=x[1],C=Object(n.useState)(""),I=Object(l.a)(C,2),J=I[0],W=I[1],G=Object(n.useState)(null),V=Object(l.a)(G,2),$=V[0],q=V[1];Object(n.useEffect)((function(){fetch("https://api.github.com/users/example").then((function(e){return e.json()})).then((function(e){z(e)}))}),[]);var z=function(e){var t=e.name,a=e.login,n=e.followers,c=e.following,o=e.public_repos,l=e.avatar_url;r(t),f(a),d(n),O(c),k(o),_(l)};return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"cursor"}),c.a.createElement(s,null),c.a.createElement(u,{handleSearch:function(e){W(e.target.value)},handleSubmit:function(){fetch("https://api.github.com/users/".concat(J)).then((function(e){return e.json()})).then((function(e){e.message?(q("N\xe3o encontrado"),console.log(e.message)):(z(e),q(null))}))}}),$?c.a.createElement("h1",{className:"error"},$):c.a.createElement(i,{name:a,login:h,followers:g,following:j,repos:N,avatar:B}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.e9e98d25.chunk.js.map