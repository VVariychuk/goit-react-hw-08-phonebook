(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{88:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(34),l=a(35),i=a(37),r=a(36),o=a(0),c=a(9),h=a(8),b=a(1),u={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},m=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(s.a)(this,a);for(var l=arguments.length,i=new Array(l),r=0;r<l;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.target,s=a.name,l=a.value;e.setState(Object(n.a)({},s,l))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,style:u.form,autoComplete:"off",children:[Object(b.jsxs)("label",{style:u.label,children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(b.jsxs)("label",{style:u.label,children:["Email",Object(b.jsx)("input",{type:"email",name:"email",value:a,onChange:this.handleChange})]}),Object(b.jsxs)("label",{style:u.label,children:["Password",Object(b.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(b.jsx)("button",{type:"submit",children:"Register"})]})]})}}]),a}(o.Component),p={onRegister:h.a.register};t.default=Object(c.b)(null,p)(m)}}]);
//# sourceMappingURL=6.c7b1c479.chunk.js.map