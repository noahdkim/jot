(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(314)},127:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(17),r=a.n(s),c=(a(127),a(21)),i=a(22),l=a(24),d=a(23),u=a(25),h=a(120),p=a.n(h),m=a(110),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).onChange=function(e){return a.props.changeDate(e)},a.state={date:e.date},a.calendarType=e.calendarType,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"calendar"},o.a.createElement(m.Calendar,{onChange:this.onChange,calendarType:this.calendarType,value:this.props.date}))}}]),t}(n.Component),f=a(44),k=a.n(f),g=a(68),E=a.n(g),b=a(117),y=a.n(b),O=a(119),N=a.n(O),j=a(118),C=a.n(j),S=a(113),I=a.n(S),w=a(116),M=a.n(w),D=a(65),x=a.n(D),K=a(111),A=a.n(K),F=a(115),J=a.n(F),L=a(114),Y=a.n(L),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).mouseEnter=function(){a.setState({isMouseInside:!0})},a.mouseLeave=function(){a.setState({isMouseInside:!1})},a.deleteNote=a.props.deleteNote(a.props.id),a.state={isMouseInside:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},o.a.createElement(A.a,null,o.a.createElement(I.a,{checked:this.props.checked,onClick:this.props.checkboxOnClick(this.props.checked,this.props.id)}),o.a.createElement(Y.a,{onKeyPress:function(t){return e.props.handleItemKeypress(t,e.props.id)},onChange:function(t){return e.props.updateItem(t,e.props.id)},value:this.props.content}),o.a.createElement(J.a,null,this.state.isMouseInside?o.a.createElement(x.a,{"aria-label":"Delete",onClick:this.deleteNote},o.a.createElement(M.a,null)):null)))}}]),t}(n.Component),T=a(66),H=a.n(T),W=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.notes[this.props.date].map(function(t,a){return o.a.createElement(B,{id:a,checked:t.checked,handleItemKeypress:e.props.handleItemKeypress,key:a,checkboxOnClick:e.props.checkboxOnClick,updateItem:e.props.updateItem,content:t.content,deleteNote:e.props.deleteNote})});return o.a.createElement("div",{className:"note"},o.a.createElement(y.a,{className:"notesCard",style:{maxHeight:"75vh",backgroundColor:"#FFBBAA",overflow:"auto"}},o.a.createElement(C.a,{title:this.props.date,className:"note-header"}),o.a.createElement(H.a,null,t),o.a.createElement(N.a,null,o.a.createElement(E.a,{size:"small",onClick:this.props.markAllComplete},"Mark all complete"))))}}]),t}(n.Component),z=a(121),P=a.n(z),U=a(67),$=a.n(U);a(308);function q(e){return o.a.createElement("div",{className:"navBar"},o.a.createElement(p.a,{position:"static"},o.a.createElement(P.a,null,o.a.createElement($.a,{variant:"h6",color:"inherit"},"Jot"))))}var G=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).checkboxOnClick=function(e,t){return function(){var n=a.state;n.notes[a.state.date][t].checked=!e,a.setState(n)}},a.deleteNote=function(e){return function(){if(a.state.notes[a.state.date].length>1){var t=a.state;t.notes[a.state.date].splice(e,1),a.setState(t)}}},a.handleItemKeypress=function(e,n){if("Enter"===e.key&&0!==e.target.value.length){var o=t.addNewNote(a.state,a.state.date,n);a.setState(o)}},a.markAllComplete=function(){var e=a.state;e.notes[a.state.date].forEach(function(e){e.content.length>0&&(e.checked=!0)}),a.setState(e)},a.updateDate=function(e){var t=a.state.date;if(t!==[e.getMonth()+1,e.getDate(),e.getFullYear()].join("/")){var n=a.state;n.date=e,a.setState(n),a.updateNotes(t)}},a.updateItem=function(e,t){var n=a.state;n.notes[a.state.date][t].content=e.target.value,a.setState(n)};var n,o=((n=new Date).setHours(0,0,0,0),n);return a.state=t.loadSavedState(o),window.addEventListener("beforeunload",function(e){var t=new Date(a.state.date);a.removeEmptyItems(a.state.date),localStorage.setItem([t.getMonth()+1,t.getFullYear()].join("/"),JSON.stringify(a.state.notes))}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"updateNotes",value:function(e){var a=new Date(e);if(this.removeEmptyItems(e),a.getMonth()===this.state.date.getMonth()&&a.getYear()===this.state.date.getYear()){var n=this.state;return n.date=this.state.date.toLocaleDateString(),n.notes[n.date]?n.notes[n.date].push({checked:!1,content:""}):n.notes[n.date]=[{checked:!1,content:""}],n}localStorage.setItem([a.getMonth()+1,a.getFullYear()].join("/"),JSON.stringify(this.state.notes)),this.setState(t.loadSavedState(this.state.date))}},{key:"removeEmptyItems",value:function(e){for(var t=!0;t;){var a=this.state.notes[e].pop();a?(0!==a.content.length||a.checked)&&(this.state.notes[e].push(a),t=!1):(delete this.state.notes[e],t=!1)}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(q,null),o.a.createElement(k.a,{container:!0},o.a.createElement(k.a,{container:!0,xs:6,justify:"center"},o.a.createElement(v,{calendarType:"US",changeDate:this.updateDate,date:new Date(this.state.date)})),o.a.createElement(k.a,{item:!0,xs:4},o.a.createElement(W,{date:this.state.date,deleteNote:this.deleteNote,notes:this.state.notes,checkboxOnClick:this.checkboxOnClick,handleItemKeypress:this.handleItemKeypress,updateItem:this.updateItem,markAllComplete:this.markAllComplete}))))}}]),t}(n.Component);G.addNewNote=function(e,t,a){var n=e;n.notes[t]||(n.notes[t]=[]),isNaN(a)&&(a=n.notes[t].length-1);return n.notes[t].splice(a+1,0,{checked:!1,content:""}),n},G.loadSavedState=function(e){var t=[e.getMonth()+1,e.getFullYear()].join("/"),a=JSON.parse(localStorage.getItem(t)),n={};return n.date=e.toLocaleDateString(),a||(a={}),n.notes=a,G.addNewNote(n,n.date),n};var Q=G;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,2,1]]]);
//# sourceMappingURL=main.c33aa29a.chunk.js.map