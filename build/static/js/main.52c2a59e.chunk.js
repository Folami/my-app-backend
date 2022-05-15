(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(46)},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),u=(n(25),n(19)),l=n(3),i=n.n(l),s=n(4),m=n(2),f=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onClick},e.text))},p=function(e){var t=e.note.important?"make not important":"make important";return r.a.createElement("li",null,e.note.content,r.a.createElement(f,{onClick:e.toggleImportance,text:t}))},d=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},b=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,o=e.username,c=e.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username",r.a.createElement("input",{value:o,onChange:n})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:c,onChange:a})),r.a.createElement("button",{type:"submit"},"login")))},v=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2022"))},g=Object(a.forwardRef)(function(e,t){var n=Object(a.useState)(!1),o=Object(m.a)(n,2),c=o[0],u=o[1],l={display:c?"none":""},i={display:c?"":"none"},s=function(){u(!c)};return Object(a.useImperativeHandle)(t,function(){return{toggleVisibility:s}}),r.a.createElement("div",null,r.a.createElement("div",{style:l},r.a.createElement("button",{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:s},"cancel")))}),E=function(e){var t=e.createNote,n=Object(a.useState)(""),o=Object(m.a)(n,2),c=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Create a new note"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({content:c,important:Math.random()>.5}),u("")}},r.a.createElement("input",{value:c,onChange:function(e){u(e.target.value)}}),r.a.createElement("button",{type:"submit"},"save")))},h=n(5),w=n.n(h),O=null,j={getAll:function(){return w.a.get("/api/notes").then(function(e){return e.data})},create:function(){var e=Object(s.a)(i.a.mark(function e(t){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,w.a.post("/api/notes",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return w.a.put("".concat("/api/notes","/").concat(e),t).then(function(e){return e.data})},setToken:function(e){O="bearer ".concat(e)}},k={login:function(){var e=Object(s.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!0),l=Object(m.a)(c,2),f=l[0],h=l[1],w=Object(a.useState)(null),O=Object(m.a)(w,2),S=O[0],y=O[1],C=Object(a.useState)(""),N=Object(m.a)(C,2),x=N[0],I=N[1],U=Object(a.useState)(""),L=Object(m.a)(U,2),T=L[0],J=L[1],A=Object(a.useState)(null),D=Object(m.a)(A,2),z=D[0],H=D[1];Object(a.useEffect)(function(){j.getAll().then(function(e){o(e)})},[]),Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);H(t),j.setToken(t.token)}},[]);var M=function(){var e=Object(s.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.login({username:x,password:T});case 4:n=e.sent,H(n),j.setToken(n.token),window.localStorage.setItem("loggedNoteappUser",JSON.stringify(n)),I(""),J(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),y("wrong credentials"),setTimeout(function(){y(null)},5e3);case 16:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),P=f?n:n.filter(function(e){return e.important}),R=Object(a.useRef)();return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(d,{message:S}),null===z?r.a.createElement(g,{buttonLabel:"login"},r.a.createElement(b,{username:x,password:T,handleUsernameChange:function(e){var t=e.target;return I(t.value)},handlePasswordChange:function(e){var t=e.target;return J(t.value)},handleSubmit:M})):r.a.createElement("div",null,r.a.createElement("p",null,z.name," logged in"),r.a.createElement("button",{onClick:function(){localStorage.removeItem("loggedNoteappUser"),window.location.href="/login"}},"Logout"),r.a.createElement(g,{buttonLabel:"new note",ref:R},r.a.createElement(E,{createNote:function(e){R.current.toggleVisibility(),j.create(e).then(function(e){o(n.concat(e))})}}))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return h(!f)}},"show ",f?"important":"all")),r.a.createElement("ul",null,P.map(function(e){return r.a.createElement(p,{key:e.id,note:e,toggleImportance:function(){return function(e){var t=n.find(function(t){return t.id===e}),a=Object(u.a)({},t,{important:!t.important});j.update(e,a).then(function(t){o(n.map(function(n){return n.id!==e?n:t}))}).catch(function(a){y("Note '".concat(t.content,"' was already removed from server")),setTimeout(function(){y(null)},5e3),o(n.filter(function(t){return t.id!==e}))})}(e.id)}})})),r.a.createElement(v,null))},y=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),y)}},[[20,1,2]]]);
//# sourceMappingURL=main.52c2a59e.chunk.js.map