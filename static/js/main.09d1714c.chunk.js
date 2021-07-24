(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{33:function(t,e,n){"use strict";var r=n(24),c=function(t){return t.phonebook.filter},a=function(t){return t.phonebook.contacts},o=Object(r.a)([a,c],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}));e.a={getLoading:function(t){return t.phonebook.loading},getFilter:c,getAllContacts:a,getFilteredContacts:o}},34:function(t,e,n){"use strict";var r=n(14),c=n.n(r),a=n(20),o=n(15),u=n.n(o),i=n(5);e.a={fetchContacts:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.i)()),t.prev=1,t.next=4,u.a.get("/contacts");case 4:n=t.sent,r=n.data,e(Object(i.j)(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(i.h)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(n){var r={name:t,number:e};n(Object(i.b)()),u.a.post("/contacts",r).then((function(t){var e=t.data;return n(Object(i.c)(e))})).catch((function(t){return n(Object(i.a)(t))}))}},deleteContact:function(t){return function(e){e(Object(i.f)()),u.a.delete("/contacts/".concat(t)).then((function(){return e(Object(i.g)(t))})).catch((function(t){return e(Object(i.e)(t))}))}}}},5:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return j})),n.d(e,"d",(function(){return d}));var r=n(2),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),o=Object(r.b)("contacts/fetchContactsError"),u=Object(r.b)("contacts/addContactRequest"),i=Object(r.b)("contacts/addContactSuccess"),s=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),l=Object(r.b)("contacts/deleteContactSuccess"),j=Object(r.b)("contacts/deleteContactError"),d=Object(r.b)("contacts/changeFilter")},51:function(t,e,n){t.exports={container:"Container_container__2wgSM"}},52:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(0);var r=n(51),c=n.n(r),a=n(1);function o(t){var e=t.children;return Object(a.jsx)("div",{className:c.a.container,children:e})}},8:function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return L})),n.d(e,"c",(function(){return I}));var r,c,a,o,u=n(2),i=Object(u.b)("auth/registerRequest"),s=Object(u.b)("auth/registerSuccess"),b=Object(u.b)("auth/registerError"),l=Object(u.b)("auth/loginRequest"),j=Object(u.b)("auth/loginSuccess"),d=Object(u.b)("auth/loginError"),O={registerRequest:i,registerSuccess:s,registerError:b,logoutRequest:Object(u.b)("auth/logoutRequest"),logoutSuccess:Object(u.b)("auth/logoutSuccess"),logoutError:Object(u.b)("auth/logoutError"),loginRequest:l,loginSuccess:j,loginError:d,getCurrentUserRequest:Object(u.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(u.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(u.b)("auth/getCurrentUserError")},f=n(3),g=n(7),h={name:null,email:null},p=Object(u.c)(h,(r={},Object(f.a)(r,O.registerSuccess,(function(t,e){return e.payload.user})),Object(f.a)(r,O.loginSuccess,(function(t,e){return e.payload.user})),Object(f.a)(r,O.logoutSuccess,(function(){return h})),Object(f.a)(r,O.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),v=Object(u.c)(null,(c={},Object(f.a)(c,O.registerSuccess,(function(t,e){return e.payload.token})),Object(f.a)(c,O.loginSuccess,(function(t,e){return e.payload.token})),Object(f.a)(c,O.logoutSuccess,(function(){return null})),c)),x=function(t,e){return e.payload},m=Object(u.c)(null,(a={},Object(f.a)(a,O.registerError,x),Object(f.a)(a,O.loginError,x),Object(f.a)(a,O.logoutError,x),Object(f.a)(a,O.getCurrentUserError,x),a)),k=Object(u.c)(!1,(o={},Object(f.a)(o,O.registerSuccess,(function(){return!0})),Object(f.a)(o,O.loginSuccess,(function(){return!0})),Object(f.a)(o,O.getCurrentUserSuccess,(function(){return!0})),Object(f.a)(o,O.registerError,(function(){return!1})),Object(f.a)(o,O.loginError,(function(){return!1})),Object(f.a)(o,O.getCurrentUserError,(function(){return!1})),Object(f.a)(o,O.logoutSuccess,(function(){return!1})),o)),y=Object(g.b)({user:p,isAuthenticated:k,token:v,error:m}),C=n(14),S=n.n(C),A=n(20),w=n(15),E=n.n(w),R=n(21);E.a.defaults.baseURL="https://connections-api.herokuapp.com/";var U=function(t){E.a.defaults.headers.common.Authorization="Bearer ".concat(t)},q=function(){E.a.defaults.headers.common.Authorization=""},L={register:function(t){return function(){var e=Object(A.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O.registerRequest()),e.prev=1,e.next=4,E.a.post("/users/signup",t);case 4:r=e.sent,U(r.data.token),n(O.registerSuccess(r.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(O.registerError(e.t0.message)),R.b.error("Register error! Please try again");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(A.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(O.logoutRequest()),t.prev=1,t.next=4,E.a.post("/users/logout");case 4:q(),e(O.logoutSuccess()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(O.logoutError(t.t0.message)),R.b.error("Something went wrong! Please reload the page!");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(A.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O.loginRequest()),e.prev=1,e.next=4,E.a.post("/users/login",t);case 4:r=e.sent,U(r.data.token),n(O.loginSuccess(r.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(O.loginError(e.t0.message)),R.b.error("Invalid email or password!");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(A.a)(S.a.mark((function t(e,n){var r,c,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return U(c),e(O.getCurrentUserRequest()),t.prev=5,t.next=8,E.a.get("/users/current");case 8:a=t.sent,e(O.getCurrentUserSuccess(a.data)),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(5),e(O.getCurrentUserError(t.t0.message)),q(),R.b.warn("Oops time is out. Log in again");case 17:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},I={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUsername:function(t){return t.auth.user.name}}},85:function(t,e,n){"use strict";n.r(e);var r,c,a=n(0),o=n.n(a),u=n(22),i=n.n(u),s=n(17),b=n(9),l=n(48),j=n(27),d=n(2),O=n(49),f=n.n(O),g=n(18),h=n(50),p=n.n(h),v=(n(34),n(33),n(5)),x=n(3),m=n(7),k=Object(d.c)([],(r={},Object(x.a)(r,v.j,(function(t,e){return e.payload})),Object(x.a)(r,v.c,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(x.a)(r,v.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),y=Object(d.c)(!1,(c={},Object(x.a)(c,v.i,(function(){return!0})),Object(x.a)(c,v.j,(function(){return!1})),Object(x.a)(c,v.h,(function(){return!1})),Object(x.a)(c,v.b,(function(){return!0})),Object(x.a)(c,v.c,(function(){return!1})),Object(x.a)(c,v.a,(function(){return!1})),Object(x.a)(c,v.f,(function(){return!0})),Object(x.a)(c,v.g,(function(){return!1})),Object(x.a)(c,v.e,(function(){return!1})),c)),C=Object(d.c)("",Object(x.a)({},v.d,(function(t,e){return e.payload}))),S=Object(m.b)({contacts:k,filter:C,loading:y}),A=n(8),w={key:"auth",storage:p.a,whitelist:["token"]},E=[].concat(Object(j.a)(Object(d.d)({serializableCheck:{ignoredActions:[g.a,g.f,g.b,g.c,g.d,g.e]}})),[f.a]),R=Object(d.a)({reducer:{auth:Object(g.g)(w,A.b),phonebook:S},middleware:E,devTools:!1}),U={store:R,persistor:Object(g.h)(R)},q=n(35),L=n(36),I=n(38),T=n(37),z=n(6),B=n(21),F=(n(81),n(52),n(1)),W={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},D=Object(b.b)((function(t){return{isAuthenticated:A.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(F.jsxs)("nav",{children:[Object(F.jsx)(s.b,{to:"/",exact:!0,style:W.link,activeStyle:W.activeLink,children:"Home"}),e&&Object(F.jsx)(s.b,{to:"/contacts",style:W.link,activeStyle:W.activeLink,children:"Contacts"})]})})),M=n.p+"static/media/default-avatar.aa563b22.png",_={container:{display:"flex",alignItems:"center",marginRight:15},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}},G={onLogout:A.a.logOut},J=Object(b.b)((function(t){return{name:A.c.getUsername(t),avatar:M}}),G)((function(t){var e=t.avatar,n=t.name,r=t.onLogout;return Object(F.jsxs)("div",{style:_.container,children:[Object(F.jsx)("img",{src:e,alt:"",width:"32",style:_.avatar}),Object(F.jsxs)("span",{style:_.name,children:["Welcome, ",n]}),Object(F.jsx)("button",{type:"button",onClick:r,children:"Logout"})]})})),P={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B",marginRight:15},activeLink:{color:"#E84A5F"}},H=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(s.b,{to:"/register",exact:!0,style:P.link,activeStyle:P.activeLink,children:"Sign Up"}),Object(F.jsx)(s.b,{to:"/login",exact:!0,style:P.link,activeStyle:P.activeLink,children:"Sign In"})]})},N={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}},K=Object(b.b)((function(t){return{isAuthenticated:A.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(F.jsxs)("header",{style:N.header,children:[Object(F.jsx)(D,{}),e?Object(F.jsx)(J,{}):Object(F.jsx)(H,{})]})})),Q=n(19),V=n(28),X=Object(b.b)((function(t){return{isAuthenticated:A.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(V.a)(t,["component","isAuthenticated","redirectTo"]);return Object(F.jsx)(z.b,Object(Q.a)(Object(Q.a)({},c),{},{render:function(t){return n?Object(F.jsx)(e,Object(Q.a)({},t)):Object(F.jsx)(z.a,{to:r})}}))})),Y=Object(b.b)((function(t){return{isAuthenticated:A.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(V.a)(t,["component","isAuthenticated","redirectTo"]);return Object(F.jsx)(z.b,Object(Q.a)(Object(Q.a)({},c),{},{render:function(t){return n&&c.restricted?Object(F.jsx)(z.a,{to:r}):Object(F.jsx)(e,Object(Q.a)({},t))}}))})),Z=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,89))})),$=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,90))})),tt=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,91))})),et=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,92))})),nt=function(t){Object(I.a)(n,t);var e=Object(T.a)(n);function n(){return Object(q.a)(this,n),e.apply(this,arguments)}return Object(L.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(K,{}),Object(F.jsx)(a.Suspense,{fallback:Object(F.jsx)("h1",{children:"Loading..."}),children:Object(F.jsxs)(z.d,{children:[Object(F.jsx)(Y,{exact:!0,path:"/",component:Z}),Object(F.jsx)(Y,{path:"/register",restricted:!0,redirectTo:"/contacts",component:$}),Object(F.jsx)(Y,{path:"/login",restricted:!0,redirectTo:"/contacts",component:tt}),Object(F.jsx)(X,{path:"/contacts",redirectTo:"/login",component:et})]})}),Object(F.jsx)(B.a,{autoClose:3700,position:"top-center"})]})}}]),n}(a.Component),rt={onGetCurrentUser:A.a.getCurrentUser},ct=Object(b.b)(null,rt)(nt);n(84);i.a.render(Object(F.jsx)(o.a.StrictMode,{children:Object(F.jsx)(b.a,{store:U.store,children:Object(F.jsx)(l.a,{loading:null,persistor:U.persistor,children:Object(F.jsx)(s.a,{children:Object(F.jsx)(ct,{})})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.09d1714c.chunk.js.map