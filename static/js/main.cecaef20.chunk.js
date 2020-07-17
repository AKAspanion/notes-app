(this["webpackJsonpiarani-test"]=this["webpackJsonpiarani-test"]||[]).push([[0],{59:function(e,t,a){e.exports=a(74)},69:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),r=a.n(l),o=a(47),i=a(34),s=a(18),m=(a(69),a(70),a(71),a(72),a(16)),u=a(12),d=a(79),E=a(84),p=a(78),f=a(49);var v=function(){return c.a.createElement("div",{style:{flexGrow:1}})},b=a(85),h=a(77),g=a(21),N=a.n(g),O=a(22),y=a(76),j=a(81),S=a(82),x=a(86);var w=function(e){var t=e.notes,a=e.isEdit,n=e.onEdit,l=e.onShow,r=e.onDelete,o=e.onSearch,i=e.emptyState,s=t.length;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mb-4 d-flex align-items-center"},c.a.createElement(y.a,null,c.a.createElement(y.a.Prepend,null,c.a.createElement(y.a.Text,{className:"px-3"},c.a.createElement(N.a,{path:O.a,size:.9}))),c.a.createElement(j.a.Control,{placeholder:"Search",onChange:function(e){return o(e.target.value)}}))),!!s&&c.a.createElement(S.a,{className:"note-list"},c.a.createElement(b.a,{style:{borderRadius:"0.25rem"}},t.map((function(e){return c.a.createElement(h.a,{key:e.id,timeout:500,classNames:"note"},c.a.createElement(S.a.Item,{className:"px-3 note-list-item"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("div",{role:"button",title:e.title,onClick:function(){return l(e)},className:"text-left text-primary note-list-title"},c.a.createElement("span",null,e.title)),c.a.createElement(v,null),c.a.createElement("div",{className:"text-nowrap mr-3 font-weight-light small"},(e.date||"").slice(4,10)),c.a.createElement(x.a,{size:"sm",className:"mr-2",onClick:function(){return n(e)}},c.a.createElement(N.a,{path:O.b,size:.7})),c.a.createElement(x.a,{size:"sm",variant:"danger",disabled:a,onClick:function(){return r(e)}},c.a.createElement(N.a,{path:O.d,size:.7})))))})))),!s&&c.a.createElement(z,Object.assign({className:"note-empty-state"},i)))},D=a(56),C=a(83);var T=function(e){var t=e.date,a=e.title,n=e.active,l=e.isEdit,r=e.onOpen,o=e.content,i=e.onChange,s=e.onSubmit,m=e.onDiscard,u=e.validated;return c.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center"},c.a.createElement(E.a,{style:{maxWidth:"350px",minWidth:"100%",overflow:"hidden"}},c.a.createElement(C.a,{activeKey:n},c.a.createElement(C.a.Toggle,{role:"button",eventKey:"active",as:E.a.Header,onClick:r,className:"text-left px-3 px-sm-3 ".concat("active"!==n?"border-bottom-0":"")},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("span",null,"Add Note"),c.a.createElement(v,null),c.a.createElement(N.a,{path:O.c,size:.8}))),c.a.createElement(C.a.Collapse,{eventKey:"active"},c.a.createElement(E.a.Body,{className:"p-3 py-3 p-sm-3"},c.a.createElement(j.a,{className:"text-left",onSubmit:s},c.a.createElement(j.a.Group,{controlId:"formBasicTitle"},c.a.createElement(j.a.Control,{type:"text",value:a,placeholder:"Title",onChange:function(e){return i("Title",e.target.value)}})),c.a.createElement(j.a.Group,{controlId:"formBasicContent"},c.a.createElement(j.a.Control,{type:"text",as:"textarea",value:o,placeholder:"Content",onChange:function(e){return i("Content",e.target.value)}})),c.a.createElement(p.a,{className:"px-3"},c.a.createElement(x.a,{className:"mr-2",onClick:m,variant:"outline-secondary"},"Discard"),c.a.createElement(v,null),c.a.createElement(x.a,{variant:"primary",type:"submit",disabled:!u},l?"Update":"Save"))))))),c.a.createElement(E.a,{className:"text-center mt-3 mt-sm-4 border-none",style:{width:"330px",overflow:"hidden"}},c.a.createElement(C.a,{activeKey:n},c.a.createElement(C.a.Collapse,{eventKey:"active"},c.a.createElement(D.a,{value:t,className:"card",minDate:new Date,onChange:function(e){return i("Date",e)}})))))},k=a(57),_=a(80);var I=function(e){var t=e.date,a=e.title,n=e.onHide,l=e.content,r=Object(k.a)(e,["date","title","onHide","content"]);return c.a.createElement(_.a,Object.assign({},r,{size:"lg",centered:!0,"aria-labelledby":"contained-modal-title-vcenter"}),c.a.createElement(_.a.Header,{closeButton:!0,onHide:n},c.a.createElement(_.a.Title,{id:"contained-modal-title-vcenter"},a)),c.a.createElement(_.a.Body,null,l),c.a.createElement(_.a.Footer,null,c.a.createElement("div",{className:"h6 px-0"},t),c.a.createElement(v,null),c.a.createElement(x.a,{onClick:n},"Close")))};var z=function(e){var t=e.subtitle,a=e.className,n=e.title,l=void 0===n?"No data found":n,r=e.img,o=void 0===r?"images/empty-state.svg":r;return c.a.createElement(E.a,{className:"d-flex align-items-center justify-content-center full-width ".concat(a)},c.a.createElement("div",{className:"text-center pb-4 mb-5",style:{maxWidth:"250px"}},c.a.createElement("img",{alt:"empty state",src:o}),!!l&&c.a.createElement("div",{className:"h5"},l),!!t&&c.a.createElement("div",{className:"font-weight-light"},t)))};var B=Object(i.b)((function(e){return{notes:e.notes.notes}}),{addNoteToState:function(e){return{type:"ADD_NOTE",payload:e}},updateNoteInState:function(e){return{type:"UPDATE_NOTE",payload:e}},deleteNoteInState:function(e){return{type:"DELETE_NOTE",payload:e}}})((function(e){var t=e.notes,a=e.addNoteToState,l=e.updateNoteInState,r=e.deleteNoteInState,o=Object(n.useState)(""),i=Object(u.a)(o,2),s=i[0],b=i[1],h=Object(n.useState)(""),g=Object(u.a)(h,2),N=g[0],O=g[1],y=Object(n.useState)(""),j=Object(u.a)(y,2),S=j[0],x=j[1],D=Object(n.useState)(!1),C=Object(u.a)(D,2),k=C[0],_=C[1],z=Object(n.useState)(new Date),B=Object(u.a)(z,2),A=B[0],H=B[1],W=Object(n.useState)("active"),K=Object(u.a)(W,2),L=K[0],J=K[1],P=Object(n.useState)(""),U=Object(u.a)(P,2),F=U[0],G=U[1],M=Object(n.useState)(!1),R=Object(u.a)(M,2),X=R[0],V=R[1],$=Object(n.useState)(!1),q=Object(u.a)($,2),Q=q[0],Y=q[1],Z=Object(n.useState)({}),ee=Object(u.a)(Z,2),te=ee[0],ae=ee[1];Object(n.useEffect)((function(){V(!(!N||!A))}),[N,S,A]);var ne=function(e,t){Y(e),ae(e&&t?Object(m.a)({},t):{})},ce=function(){b(""),O(""),x(""),_(!1),H(new Date)},le=function(e,t){switch(e){case"Date":H(t);break;case"Title":O(t);break;case"Content":x(t);break;case"Id":b(t)}};return c.a.createElement(d.a,{className:"p-3 p-sm-4"},c.a.createElement(I,Object.assign({},te,{show:Q,onHide:function(){return ne(!1)}})),c.a.createElement(E.a,null,c.a.createElement("div",{className:"d-flex px-3 pt-3 px-sm-4"},c.a.createElement("h2",{className:"pb-1"},"Notes"),c.a.createElement(v,null)),c.a.createElement("hr",{className:"mt-1"}),c.a.createElement(p.a,{className:"px-3 px-sm-4"},c.a.createElement(f.a,{xs:12,lg:"auto",className:"pb-3 pt-sm-2 pb-sm-4"},c.a.createElement(T,{date:A,title:N,active:L,isEdit:k,content:S,validated:X,onOpen:function(){J("active"===L?null:"active")},onChange:le,onSubmit:function(e){e.preventDefault&&e.preventDefault(),X&&(k?l({title:N,content:S,date:A.toDateString(),id:s}):a({title:N,content:S,date:A.toDateString(),id:"_"+Math.random().toString(36).substr(2,9)}),ce())},onDiscard:function(){ce()}})),c.a.createElement("hr",{className:"d-sm-none full-width ".concat("active"===L?"mt-0":"mt-n3")}),c.a.createElement(f.a,{xs:12,lg:"auto",className:"flex-grow-1 pb-3 pt-sm-2 pb-sm-4"},c.a.createElement(w,{isEdit:k,onEdit:function(e){_(!0),J("active"),function(e){var t=e.date,a=e.title,n=e.content,c=e.id;le("Id",c),le("Title",a),le("Content",n),le("Date",new Date(t))}(e)},onDelete:function(e){k||r(e)},onSearch:function(e){G((e||"").toLowerCase())},emptyState:function(){var e={title:"No Notes Found",subtitle:"When you are ready, go ahead and add a note"};return F&&t.length&&(e.img="images/empty-search.svg",e.subtitle="To widen your search, change or remove filters"),e}(),onShow:function(e){return ne(!0,e)},notes:t.filter((function(e){return e.title.toLowerCase().includes(F)}))})))))}));var A=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(38),W=Object(s.c)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NOTE":return Object(m.a)(Object(m.a)({},e),{},{notes:[].concat(Object(H.a)(e.notes),[t.payload])});case"UPDATE_NOTE":return Object(m.a)(Object(m.a)({},e),{},{notes:Object(H.a)(e.notes.map((function(e){return e.id===t.payload.id?Object(m.a)({},t.payload):e})))});case"DELETE_NOTE":return Object(m.a)(Object(m.a)({},e),{},{notes:Object(H.a)(e.notes.filter((function(e){return e.id!==t.payload.id})))});default:return e}}}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,L=function(){try{var e=localStorage.getItem("state");if(!e)return;return JSON.parse(e)}catch(t){return}}(),J=Object(s.e)(W,L,K(Object(s.a)(o.a)));J.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.error(a)}}(J.getState())})),r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:J},c.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.cecaef20.chunk.js.map