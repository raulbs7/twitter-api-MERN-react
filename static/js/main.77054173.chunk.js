(this["webpackJsonptwitter-react-2021"]=this["webpackJsonptwitter-react-2021"]||[]).push([[0],{33:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c(19),a=c.n(s),j=c(44),r=c(10),i=(c(50),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),a(e),j(e)}))}),l=c(11),o=c(107),b=c(100),d=c(101),h=c(83),x=c(84),O=c(85),u=c(86),g=c(87),m=c(88),f=c(22),p=c(23),v={baseURL_API:"https://twitter-api-mern.herokuapp.com/",clientID:"785056267962-ggg7v615fb5tjm59m19vlto28sqpufni.apps.googleusercontent.com"},S=c(2);function y(e){return Object(S.jsxs)(h.a,{color:"primary",light:!0,expand:"md",children:[Object(S.jsxs)(x.a,{children:[Object(S.jsx)(f.a,{color:"white"}),Object(S.jsxs)("span",{className:"text-white",children:[Object(S.jsx)("strong",{children:" Dashboard:"})," ",sessionStorage.getItem("name")]})]}),Object(S.jsx)(O.a,{navbar:!0,children:Object(S.jsxs)(u.a,{className:"ml-auto",navbar:!0,children:[Object(S.jsx)(g.a,{children:Object(S.jsx)(m.a,{href:"#",onClick:function(){return e.onShow(1)},children:Object(S.jsx)("span",{className:"text-white",children:"Todos los Posts"})})}),Object(S.jsx)(g.a,{children:Object(S.jsx)(m.a,{href:"#",onClick:function(){return e.onShow(2)},children:Object(S.jsx)("span",{className:"text-white",children:"Mis Posts"})})}),Object(S.jsx)(g.a,{children:Object(S.jsx)(p.GoogleLogout,{clientId:v.clientID,buttonText:"Logout",theme:"dark",onLogoutSuccess:e.onLogout})})]})})]})}var I=c(6),M=c.n(I),w=(c(33),c(96)),C=c(109),k=c(97),D=c(98),P=c(99),L=c(95),N=c(90),E=c(102),T=c(103),A=c(89),F=c(104),J=c(105),B=c(106),U=c(21),_=c(20),G=c(43),K=c.n(G).a.create({baseURL:v.baseURL_API});var R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],W=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function q(e){return W[e.getDay()]+", "+e.getDate()+" "+R[e.getMonth()]+" "+e.getFullYear()+", "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)}var z=c(91),H=c(92),Y=c(93),Q=c(94);function V(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],a=c[1],j=function(t){"OK"===t&&e.updateMyPosts()};return Object(S.jsx)("div",{children:Object(S.jsxs)(A.a,{body:!0,children:[Object(S.jsx)(N.a,{tag:"h5",children:"A\xf1adir un nuevo post"}),Object(S.jsxs)(z.a,{children:[Object(S.jsxs)(H.a,{children:[Object(S.jsx)(Y.a,{for:"aMensaje",children:"Mensaje"}),Object(S.jsx)(Q.a,{style:{height:"200px"},type:"textarea",name:"message",value:s,id:"aMensaje",placeholder:"Introduce un mensaje",onChange:function(e){return a(e.target.value)}})]}),Object(S.jsx)(L.a,{color:"primary",onClick:function(e){e.preventDefault(),function(e,t,c,n){return K.post("/posts",{email:e,user:t,image:c,message:n}).then((function(e){return e.data}))}(sessionStorage.getItem("email"),sessionStorage.getItem("name"),sessionStorage.getItem("image"),s).then((function(e){return j(e)}))},children:"A\xf1adir"})]})]})})}function X(e){var t=Object(n.useState)(e.post.message),c=Object(l.a)(t,2),s=c[0],a=c[1],j=function(t){"OK"===t&&e.updateMyPosts()};return Object(n.useEffect)((function(){a(e.post.message)}),[e.post]),Object(S.jsx)("div",{children:Object(S.jsxs)(A.a,{body:!0,children:[Object(S.jsx)(N.a,{tag:"h5",children:"Editar post"}),Object(S.jsxs)(z.a,{children:[Object(S.jsxs)(H.a,{children:[Object(S.jsx)(Y.a,{for:"aDescripcion",children:"Mensaje"}),Object(S.jsx)(Q.a,{style:{height:"200px"},type:"textarea",name:"message",id:"aDescripcion",placeholder:"Introduce un mensaje",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(S.jsx)(L.a,{color:"primary",onClick:function(t){t.preventDefault(),function(e,t){return K.put("/posts/"+e,{message:t}).then((function(e){return e.data}))}(e.post._id,s).then((function(e){return j(e)}))},children:"Actualizar"})]})]})})}function Z(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],a=c[1],j=Object(n.useState)(Object(S.jsx)(w.a,{color:"warning",children:"Seleccione editar un post de la lista"})),r=Object(l.a)(j,2),i=r[0],o=r[1],h=Object(n.useState)("1"),x=Object(l.a)(h,2),O=x[0],p=x[1],v=Object(n.useState)(null),y=Object(l.a)(v,2),I=y[0],G=y[1],R=function(){var e;(e=sessionStorage.getItem("email"),K.get("/posts/all/"+e).then((function(e){return e.data}))).then((function(e){a(e)}))},W=function(e){O!==e&&p(e)},z=function(){R()},H=function(e){var t;(t=e._id,K.delete("/posts/"+t).then((function(e){return e.data}))).then((function(e){return Y(e)}))},Y=function(e){"OK"===e&&(G(null),o(Object(S.jsx)(w.a,{color:"warning",children:"Seleccione editar un post de la lista"})),z())};return Object(n.useEffect)((function(){R()}),[]),Object(S.jsxs)("div",{children:[I,Object(S.jsxs)(b.a,{children:[Object(S.jsxs)(d.a,{xs:"7",children:[Object(S.jsx)(N.a,{tag:"center",children:Object(S.jsxs)(w.a,{color:"primary",children:[Object(S.jsx)("strong",{children:"Mis Posts publicados "}),Object(S.jsx)(E.a,{pill:!0,children:s.length})]})}),Object(S.jsx)(T.a,{children:Object(S.jsx)("tbody",{children:s.map((function(t,c){return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{children:[Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{children:Object(S.jsx)(A.a,{children:Object(S.jsxs)(F.a,{children:[Object(S.jsxs)(b.a,{children:[Object(S.jsx)(d.a,{children:Object(S.jsxs)("strong",{children:[Object(S.jsx)("img",{src:t.image,alt:"Img"})," ",t.user]})}),Object(S.jsxs)(d.a,{align:"right",children:[Object(S.jsx)(L.a,{outline:!0,onClick:function(){return function(e){o(Object(S.jsx)(X,{post:e,updateMyPosts:z}))}(t)},children:Object(S.jsx)(f.b,{})})," ",Object(S.jsx)(L.a,{outline:!0,onClick:function(){return function(t){G(Object(S.jsxs)(C.a,{isOpen:"true",className:e.className,children:[Object(S.jsx)(k.a,{children:"Eliminar post"}),Object(S.jsxs)(D.a,{children:["Se va a eliminar el post:",Object(S.jsx)("br",{}),Object(S.jsx)("small",{children:Object(S.jsx)("strong",{children:t.message})})]}),Object(S.jsxs)(P.a,{children:[Object(S.jsx)(L.a,{color:"primary",onClick:function(){return H(t)},children:"Eliminar"})," ",Object(S.jsx)(L.a,{color:"secondary",onClick:function(){return G(null)},children:"Cancelar"})]})]}))}(t)},children:Object(S.jsx)(f.c,{})})]})]}),Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{children:t.message})}),Object(S.jsxs)(b.a,{children:[Object(S.jsx)(d.a,{align:"left",xs:"8",children:Object(S.jsxs)(b.a,{children:[Object(S.jsx)(d.a,{xs:"2",children:Object(S.jsx)(_.a,{})}),Object(S.jsxs)(d.a,{xs:"2",children:[Object(S.jsx)(U.b,{}),Object(S.jsx)("small",{children:Math.floor(10*Math.random()+1)})]}),Object(S.jsxs)(d.a,{xs:"2",children:[Object(S.jsx)(U.a,{}),Object(S.jsx)("small",{children:Math.floor(100*Math.random()+1)})]}),Object(S.jsx)(d.a,{xs:"2",children:Object(S.jsx)(_.b,{})})]})}),Object(S.jsx)(d.a,{align:"right",children:Object(S.jsx)("small",{children:q(new Date(t.publicationdate))})})]})]})})})}),Object(S.jsx)("br",{})]})})}))})})]}),Object(S.jsxs)(d.a,{xs:"5",children:[Object(S.jsxs)(u.a,{tabs:!0,children:[Object(S.jsx)(g.a,{children:Object(S.jsx)(m.a,{href:"#",className:M()({active:"1"===O}),onClick:function(){return W("1")},children:"A\xf1adir"})}),Object(S.jsx)(g.a,{children:Object(S.jsx)(m.a,{href:"#",className:M()({active:"2"===O}),onClick:function(){return W("2")},children:"Editar"})})]}),Object(S.jsxs)(J.a,{activeTab:O,children:[Object(S.jsx)(B.a,{tabId:"1",children:Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{sm:"12",children:Object(S.jsx)(V,{updateMyPosts:z})})})}),Object(S.jsx)(B.a,{tabId:"2",children:Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{sm:"12",children:i})})})]})]})]})]})}function $(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=function(){K.get("/posts").then((function(e){return e.data})).then((function(e){s(e)}))};return Object(n.useEffect)((function(){a()}),[]),Object(S.jsxs)("div",{children:[Object(S.jsx)(N.a,{tag:"center",children:Object(S.jsxs)(w.a,{color:"primary",children:[Object(S.jsx)("strong",{children:"Posts publicados "}),Object(S.jsx)(E.a,{pill:!0,children:c.length})]})}),Object(S.jsx)(T.a,{children:Object(S.jsx)("tbody",{children:c.map((function(e,t){return Object(S.jsxs)("div",{children:[Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{children:Object(S.jsx)(A.a,{children:Object(S.jsxs)(F.a,{children:[Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{children:Object(S.jsxs)("strong",{children:[Object(S.jsx)("img",{src:e.image,alt:"Img"})," ",e.user]})})}),Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{children:e.message})}),Object(S.jsxs)(b.a,{children:[Object(S.jsx)(d.a,{align:"left",xs:"5",children:Object(S.jsxs)(b.a,{children:[Object(S.jsx)(d.a,{xs:"2",children:Object(S.jsx)(_.a,{})}),Object(S.jsxs)(d.a,{xs:"2",children:[Object(S.jsx)(U.b,{}),Object(S.jsx)("small",{children:Math.floor(10*Math.random()+1)})]}),Object(S.jsxs)(d.a,{xs:"2",children:[Object(S.jsx)(U.a,{}),Object(S.jsx)("small",{children:Math.floor(100*Math.random()+1)})]}),Object(S.jsx)(d.a,{xs:"2",children:Object(S.jsx)(_.b,{})})]})}),Object(S.jsx)(d.a,{align:"right",children:Object(S.jsx)("small",{children:q(new Date(e.publicationdate))})})]})]})})})}),Object(S.jsx)("br",{})]})}))})})]})}var ee=c(108),te=c.p+"static/media/bird.7a65b904.png",ce={maxWidth:"85px"};a.a.render(Object(S.jsx)(j.a,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)(r.a,{exact:!0,path:"/",component:function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),s=c[0],a=c[1];return Object(S.jsxs)(o.a,{children:[Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{children:Object(S.jsxs)(h.a,{color:"primary",light:!0,expand:"md",children:[Object(S.jsx)(ee.a,{style:ce,object:!0,src:te,alt:"Bird"}),Object(S.jsx)(x.a,{children:Object(S.jsx)("h4",{className:"text-white",children:"My Twitter Clone"})}),Object(S.jsx)(u.a,{className:"ml-auto",navbar:!0,children:Object(S.jsxs)(g.a,{children:[s,Object(S.jsx)(p.GoogleLogin,{clientId:v.clientID,buttonText:"Login with Google",theme:"dark",onSuccess:function(t){var c=t.getBasicProfile();sessionStorage.setItem("name",c.getName()),sessionStorage.setItem("email",c.getEmail()),sessionStorage.setItem("image",c.getImageUrl()),e.history.push("/home")},onFailure:function(e){a(Object(S.jsx)(w.a,{color:"danger",children:"Inicio de sesi\xf3n incorrecto. Int\xe9ntelo de nuevo"}))}})]})})]})})}),Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{xs:"12",children:Object(S.jsx)($,{})})})]})}}),Object(S.jsx)(r.a,{path:"/home",component:function(e){var t=Object(n.useState)(Object(S.jsx)($,{})),c=Object(l.a)(t,2),s=c[0],a=c[1];if(null!==sessionStorage.getItem("name"))return Object(S.jsxs)(o.a,{children:[Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{children:Object(S.jsx)(y,{onLogout:function(){sessionStorage.clear(),e.history.push("/")},onShow:function(e){1===e?a(Object(S.jsx)($,{})):2===e&&a(Object(S.jsx)(Z,{}))}})})}),Object(S.jsx)(b.a,{children:Object(S.jsx)(d.a,{xs:"12",children:s})})]});e.history.push("/")}})]})}),document.getElementById("root")),i()}},[[82,1,2]]]);
//# sourceMappingURL=main.77054173.chunk.js.map