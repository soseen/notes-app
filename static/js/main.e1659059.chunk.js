(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),l=(a(10),a(4)),s=a(1),i=(a(11),function(e){var t=e.addNote,a=Object(n.useState)(0),c=Object(s.a)(a,2),r=c[0],l=c[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],p=u[1];return o.a.createElement("div",{className:"add-note-container"},o.a.createElement("form",{className:"note-form",onSubmit:function(e){e.preventDefault(),m.length>0&&/\S/.test(m)&&(t(m),p(""),l(0))}},o.a.createElement("p",null,"Characters: ",r,"/30"),o.a.createElement("input",{className:"note-input",type:"textarea",onChange:function(e){p(e.target.value),l(e.target.value.length)},maxlength:30,value:m})))}),u=(a(12),function(){var e=Object(n.useState)(["Posprzatac pokoj"]),t=Object(s.a)(e,2),a=t[0],c=t[1];return o.a.createElement("div",{className:"board-container"},o.a.createElement("h1",null,"My Notes"),o.a.createElement("div",{className:"notes-board"},a.map((function(e){return o.a.createElement("div",{key:e,className:"note"},o.a.createElement("span",{className:"pin"}),o.a.createElement("h3",null,"#Note"),o.a.createElement("p",null,e))}))),o.a.createElement("h2",null,"New Note"),o.a.createElement(i,{addNote:function(e){var t=[].concat(Object(l.a)(a),[e]);c(t)}}))});a(13);var m=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.e1659059.chunk.js.map