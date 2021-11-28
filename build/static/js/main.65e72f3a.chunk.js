(this["webpackJsonpbook-shelf"]=this["webpackJsonpbook-shelf"]||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){},153:function(e,t,n){},160:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(51),o=n.n(c),s=(n(149),n(150),n(178)),i=(n(151),n(80)),u=n(10),l=n.n(u),j=n(15),d=n(24),h=n(180),b=n(181),p=n(176),f=n(163),v=n(174),O=n(177),x=n(56),m=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/addBook",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(r=e.sent).error){e.next=9;break}throw r.error;case 9:return e.abrupt("return",r.data);case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bookId,e.prev=1,e.next=4,fetch("/deleteBook/".concat(n),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});case 4:return r=e.sent,e.next=7,r.json();case 7:if(!(a=e.sent).error){e.next=10;break}throw a.error;case 10:return e.abrupt("return",a.data);case 13:throw e.prev=13,e.t0=e.catch(1),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/getBooks",{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(!(n=e.sent).error){e.next=9;break}throw n.error;case 9:return e.abrupt("return",n.data);case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.bookName,e.prev=1,e.next=4,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(encodeURIComponent(n)),{headers:{"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:if(!(a=e.sent).error){e.next=10;break}throw a.error;case 10:return e.abrupt("return",a.items);case 13:throw e.prev=13,e.t0=e.catch(1),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),C=(n(153),n(5));function y(){var e,t,n,a,c,o=Object(r.useState)([]),s=Object(d.a)(o,2),u=s[0],y=s[1],S=Object(r.useState)([]),I=Object(d.a)(S,2),B=I[0],N=I[1],T=Object(r.useState)(""),A=Object(d.a)(T,2),P=A[0],U=A[1],_=Object(r.useState)(null),H=Object(d.a)(_,2),z=H[0],L=H[1];Object(r.useEffect)((function(){D()}),[]);var D=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===P||void 0===P?void 0:P.trim())){e.next=7;break}return e.next=3,g({bookName:null===P||void 0===P?void 0:P.trim()});case 3:t=e.sent,N(t),e.next=8;break;case 7:N([]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y([].concat(Object(i.a)(u),[t])),e.next=3,J(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:n=e.sent,(r=Object(i.a)(u))[z]=n,y(r),L(null);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=Object(i.a)(u)).splice(z,1),y(n),L(null),e.next=6,w({bookId:null===(t=u[z])||void 0===t?void 0:t._id});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(h.a,{children:[Object(C.jsxs)(h.a.Column,{width:10,children:[Object(C.jsx)(b.a,{icon:!0,children:"Inventory Books"}),Object(C.jsxs)(p.a,{celled:!0,striped:!0,children:[Object(C.jsx)(p.a.Header,{children:Object(C.jsxs)(p.a.Row,{children:[Object(C.jsx)(p.a.HeaderCell,{children:"Book Name"}),Object(C.jsx)(p.a.HeaderCell,{children:"Author"}),Object(C.jsx)(p.a.HeaderCell,{children:"Quantity"}),Object(C.jsx)(p.a.HeaderCell,{children:"edit"})]})}),Object(C.jsx)(p.a.Body,{children:u.map((function(e,t){var n;return Object(C.jsxs)(p.a.Row,{children:[Object(C.jsx)(p.a.Cell,{children:e.book_name}),Object(C.jsx)(p.a.Cell,{children:null===(n=e.author)||void 0===n?void 0:n.toString()}),Object(C.jsx)(p.a.Cell,{children:e.quantity||"01"}),Object(C.jsx)(p.a.Cell,{children:Object(C.jsx)(f.a,{onClick:function(e){return L(t)},children:"edit"})})]},e._id)}))})]})]}),Object(C.jsxs)(h.a.Column,{width:6,children:[Object(C.jsx)(v.a,{focus:!0,placeholder:"Search...",onChange:function(e){return U(e.target.value)}}),Object(C.jsx)(f.a,{onClick:E,children:"Search"}),Object(C.jsxs)(p.a,{celled:!0,striped:!0,children:[Object(C.jsx)(p.a.Header,{children:Object(C.jsxs)(p.a.Row,{children:[Object(C.jsx)(p.a.HeaderCell,{children:"Book Name"}),Object(C.jsx)(p.a.HeaderCell,{children:"Author"}),Object(C.jsx)(p.a.HeaderCell,{children:"Status"})]})}),Object(C.jsx)(p.a.Body,{children:B.map((function(e,t){var n,r,a,c,o;return Object(C.jsxs)(p.a.Row,{children:[Object(C.jsx)(p.a.Cell,{children:null===(n=e.volumeInfo)||void 0===n?void 0:n.title}),Object(C.jsx)(p.a.Cell,{children:null===(r=e.volumeInfo)||void 0===r||null===(a=r.authors)||void 0===a?void 0:a.toString()}),Object(C.jsx)(p.a.Cell,{children:(o=null===(c=e.volumeInfo)||void 0===c?void 0:c.title,u.find((function(e){var t;return(null===(t=e.book_name)||void 0===t?void 0:t.trim().toLowerCase())==(null===o||void 0===o?void 0:o.trim().toLowerCase())}))?"Present":Object(C.jsx)(f.a,{onClick:function(t){var n,r;return F({book_name:null===(n=e.volumeInfo)||void 0===n?void 0:n.title,author:null===(r=e.volumeInfo)||void 0===r?void 0:r.authors,google_id:e.id})},children:"+"}))})]},t)}))})]})]}),Object(C.jsxs)(O.a,{basic:!0,onClose:function(){return L(null)},onOpen:function(){return L(!0)},open:null!==z,size:"small",children:[Object(C.jsxs)(b.a,{icon:!0,children:[Object(C.jsx)(x.a,{name:"archive"}),"Edit Book in the Inventory"]}),Object(C.jsxs)(O.a.Content,{children:[Object(C.jsxs)("p",{children:["Book Name: ",null===(e=u[z])||void 0===e?void 0:e.book_name]}),Object(C.jsxs)("p",{children:["Book Authors: ",null===(t=u[z])||void 0===t||null===(n=t.author)||void 0===n?void 0:n.toString()]}),Object(C.jsxs)("p",{children:["Google Id: ",null===(a=u[z])||void 0===a?void 0:a.google_id]}),Object(C.jsxs)("p",{children:["Quantity:",Object(C.jsx)(v.a,{value:Number(null===(c=u[z])||void 0===c?void 0:c.quantity)||1,type:"number",onChange:function(e){var t=Object(i.a)(u);t[z].quantity=e.target.value,y(t)}})]})]}),Object(C.jsxs)(O.a.Actions,{children:[Object(C.jsxs)(f.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return L(null)},children:[Object(C.jsx)(x.a,{name:"remove"})," Cancel"]}),Object(C.jsxs)(f.a,{basic:!0,color:"blue",inverted:!0,onClick:R,children:[Object(C.jsx)(x.a,{name:"remove"})," Delete"]}),Object(C.jsxs)(f.a,{color:"green",inverted:!0,onClick:function(){return J(u[z])},children:[Object(C.jsx)(x.a,{name:"checkmark"})," Save"]})]})]})]})}var S=n(175),I=n(179),B=(n(160),function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(r=e.sent).error){e.next=9;break}throw r.error;case 9:return localStorage.setItem("token",r.info),e.abrupt("return",r.data);case 13:throw e.prev=13,e.t0=e.catch(0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()),N=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/newUser",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(r=e.sent).error){e.next=9;break}throw r.error;case 9:return e.abrupt("return",r.data);case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,e.prev=1,e.next=4,fetch("/checkUsername/".concat(n),{headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});case 4:return r=e.sent,e.next=7,r.json();case 7:if(!(a=e.sent).error){e.next=10;break}throw a.error;case 10:return e.abrupt("return",a.data);case 13:throw e.prev=13,e.t0=e.catch(1),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();function A(){var e=Object(s.d)(),t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],p=i[1],f=Object(r.useState)(""),v=Object(d.a)(f,2),O=v[0],x=v[1],m=Object(r.useState)(""),w=Object(d.a)(m,2),k=w[0],g=w[1],y=Object(r.useState)(""),A=Object(d.a)(y,2),P=A[0],U=A[1],_=Object(r.useState)(""),H=Object(d.a)(_,2),z=H[0],L=H[1],D=Object(r.useState)(null),E=Object(d.a)(D,2),F=E[0],J=E[1],R=Object(r.useState)(null),q=Object(d.a)(R,2),G=q[0],Q=q[1],M=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),O&&k){e.next=3;break}return e.abrupt("return",J("Invalid Username or Password"));case 3:return e.next=5,N({username:O,password:k,first_name:P,last_name:z}).catch((function(e){J(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a&&u){t.next=3;break}return t.abrupt("return",Q("Invalid Username or Password"));case 3:return t.prev=3,t.next=6,B({username:a,password:u});case 6:e.push("/home"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),Q(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}(),V=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,T({username:O}).catch((function(e){x(""),J("Username Taken")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(h.a,{children:[Object(C.jsx)(h.a.Column,{width:8,children:Object(C.jsxs)(S.a,{className:"login-form",error:G,onSubmit:K,children:[Object(C.jsx)(b.a,{as:"h1",children:"Login"}),G&&Object(C.jsx)(I.a,{error:G,content:G}),Object(C.jsx)(S.a.Input,{inline:!0,label:"Username",name:"username",onChange:function(e){return c(e.target.value)}}),Object(C.jsx)(S.a.Input,{inline:!0,label:"Password",type:"password",name:"password",onChange:function(e){return p(e.target.value)}}),Object(C.jsx)(S.a.Button,{type:"submit",children:"Go!"})]})}),Object(C.jsx)(h.a.Column,{width:6,children:Object(C.jsxs)(S.a,{className:"login-form",error:F,onSubmit:M,children:[Object(C.jsx)(b.a,{as:"h1",children:"SignUp"}),F&&Object(C.jsx)(I.a,{error:F,content:F}),Object(C.jsx)(S.a.Input,{inline:!0,label:"First Name",name:"firstname",onChange:function(e){return U(e.target.value)}}),Object(C.jsx)(S.a.Input,{inline:!0,label:"Last Name",name:"lastname",onChange:function(e){return L(e.target.value)}}),Object(C.jsx)(S.a.Input,{inline:!0,label:"Username",name:"newusername",onChange:function(e){return x(e.target.value)}}),Object(C.jsx)(S.a.Button,{onClick:V,children:"Check Username"}),Object(C.jsx)(S.a.Input,{inline:!0,label:"Password",type:"password",name:"newpassword",onChange:function(e){return g(e.target.value)}}),Object(C.jsx)(S.a.Button,{type:"submit",children:"Go!"})]})})]})}var P=function(){return Object(C.jsx)("div",{className:"app-routes",children:Object(C.jsx)(s.a,{children:Object(C.jsxs)(s.c,{children:[Object(C.jsx)(s.b,{path:"/",exact:!0,component:A}),Object(C.jsx)(s.b,{path:"/home",exact:!0,component:y})]})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(P,{})}),document.getElementById("root")),U()}},[[162,1,2]]]);
//# sourceMappingURL=main.65e72f3a.chunk.js.map