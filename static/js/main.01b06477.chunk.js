(this.webpackJsonphansa=this.webpackJsonphansa||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(10),a=n.n(r),s=(n(17),n(18),n(19),n(20),n(11)),u=n(8),o=n(24),j=n(1),l=function(e){var t=e.setItem,n=Object(c.useState)(""),i=Object(u.a)(n,2),r=i[0],a=i[1];return Object(j.jsxs)("div",{className:"textField",children:[Object(j.jsx)("input",{className:"input",type:"text",value:r,onChange:function(e){return a(e.target.value)},placeholder:"Enter Items"}),Object(j.jsx)(o.a,{className:"btn",onClick:function(){t(r),a("")},children:"Add"})]})},d=function(e){var t=e.itemName,n=e.indexNum,c=e.deleteItem;return Object(j.jsxs)("div",{className:"item",children:[t,Object(j.jsx)("button",{onClick:function(){return c(n)},style:{float:"right",backgroundColor:"red",color:"white"},children:"Delete"})]})},b=n(23),f=function(){return Object(j.jsx)(b.a,{className:"header",fluid:!0,children:Object(j.jsx)("h1",{children:"To-Do-List"})})},h=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],r=function(e){var t=n.filter((function(t,n){return e!==n}));return i(t)};return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsx)(l,{setItem:function(e){i([].concat(Object(s.a)(n),[e]))}}),n.map((function(e,t){return Object(j.jsx)(d,{itemName:e,indexNum:t,deleteItem:r})}))]})};var m=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),O()}},[[22,1,2]]]);
//# sourceMappingURL=main.01b06477.chunk.js.map