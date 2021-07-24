(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{86:function(t,n,e){t.exports={form:"AddContactsForm_form__3vXjX",btnAdd:"AddContactsForm_btnAdd__1gV3-"}},87:function(t,n,e){t.exports={contactsList:"ContactsList_contactsList__16pH3"}},88:function(t,n,e){t.exports={contact:"ContactsListItm_contact__2MbEu"}},92:function(t,n,e){"use strict";e.r(n);var c=e(35),a=e(36),r=e(38),o=e(37),s=e(0),i=e(9),u=e(34),l=e(33),b=e(52),d=e(1),j=function(t){var n=t.title,e=t.children;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:n}),e]})},h=e(3),m=e(86),f=e.n(m),p=function(t){Object(r.a)(e,t);var n=Object(o.a)(e);function e(){var t;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))).state={name:"",number:""},t.handleChange=function(n){t.setState(Object(h.a)({},n.currentTarget.name,n.currentTarget.value))},t.handleSubmit=function(n){n.preventDefault();var e=t.props.contacts,c=t.state.name;t.checkUniq(e,c),t.setState({name:"",number:""})},t.checkUniq=function(n,e){var c=t.props.onSubmit;return n.some((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):c(t.state.name,t.state.number)},t}return Object(a.a)(e,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form,children:[Object(d.jsxs)("label",{children:["Name",Object(d.jsx)("input",{className:f.a.input,value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{children:["Number",Object(d.jsx)("input",{value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{type:"submit",className:f.a.btnAdd,children:"Add contact"})]})}}]),e}(s.Component),O=Object(i.b)((function(t){return{contacts:l.a.getAllContacts(t)}}),(function(t){return{onSubmit:function(n,e){return t(u.a.addContact(n,e))}}}))(p),C=e(5);var x=Object(i.b)((function(t){return{value:l.a.getFilter(t)}}),(function(t){return{onChange:function(n){return t(Object(C.d)(n.target.value))}}}))((function(t){var n=t.value,e=t.onChange;return Object(d.jsxs)("label",{children:["Find contacts by name",Object(d.jsx)("input",{type:"text",value:n,onChange:e})]})})),g=e(87),v=e.n(g),y=e(88),k=e.n(y);function A(t){var n=t.name,e=t.number,c=t.onClickHendler;return Object(d.jsxs)("li",{className:k.a.contact,children:[Object(d.jsxs)("span",{children:[n,": "]}),Object(d.jsx)("span",{children:e}),Object(d.jsx)("button",{typy:"button",onClick:c,children:"Delete"})]})}var _=Object(i.b)((function(t){return{contacts:l.a.getFilteredContacts(t)}}),(function(t){return{onDeleteContact:function(n){return t(u.a.deleteContact(n))}}}))((function(t){var n=t.contacts,e=t.onDeleteContact;return Object(d.jsx)(d.Fragment,{children:n.length?Object(d.jsx)("ul",{className:v.a.contactsList,children:n.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(d.jsx)(A,{name:c,number:a,onClickHendler:function(){return e(n)}},n)}))}):Object(d.jsx)("p",{children:"No contacts added"})})})),L=function(t){Object(r.a)(e,t);var n=Object(o.a)(e);function e(){return Object(c.a)(this,e),n.apply(this,arguments)}return Object(a.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,n=t.isLoadingContacts,e=t.contacts;return Object(d.jsxs)(b.a,{children:[Object(d.jsx)(j,{title:"Phonebook",children:Object(d.jsx)(O,{})}),Object(d.jsx)(j,{title:"Contacts",children:n?Object(d.jsx)("h1",{children:"Loading..."}):Object(d.jsxs)(d.Fragment,{children:[e.length>1&&Object(d.jsx)(x,{}),Object(d.jsx)(_,{})]})})]})}}]),e}(s.Component);n.default=Object(i.b)((function(t){return{contacts:l.a.getFilteredContacts(t),isLoadingContacts:l.a.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t(u.a.fetchContacts())}}}))(L)}}]);
//# sourceMappingURL=3.6d917f5e.chunk.js.map