(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(5),c=a.n(i),o=(a(23),a(11)),r=a(12),d=a(13),s=a(16),u=a(14),h=a(17),m=a(3),v=(a(25),a(27),a(4)),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={year:2010,modal:!1},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a.toggle=a.toggle.bind(Object(m.a)(Object(m.a)(a))),a.clearChild=a.clearChild.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleClick",value:function(e){if(void 0!==e.datum){var t=e.datum.id,a=e.datum.Population,n=e.datum.Name,l="/api/bar/".concat(this.state.year,"/").concat(t);this.setState({modal:!0,state_pop:a,state_name:n},function(){window.vegaEmbed("#charts",l).then(function(){document.getElementById("charts").scrollIntoView({behavior:"smooth"})})})}else this.clearChild()}},{key:"clearChild",value:function(){this.setState({state_pop:null,state_name:null});for(var e=document.getElementById("charts");e.firstChild;)e.removeChild(e.firstChild)}},{key:"handleSubmit",value:function(e){this.clearChild();var t="/api/map/".concat(this.state.year),a=this.handleClick;window.vegaEmbed("#map",t).then(function(e){e.view.addEventListener("click",function(e,t){a(t)})}).catch(console.error),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v.f,{color:"light",light:!0,expand:"md"},l.a.createElement(v.g,{href:"/"},"US Census"),l.a.createElement(v.d,{className:"ml-auto",navbar:!0},l.a.createElement(v.e,null,l.a.createElement(v.b,{onSubmit:this.handleSubmit},l.a.createElement(v.c,{value:this.state.year,onChange:this.handleChange,type:"select",name:"year"},l.a.createElement("option",{value:"2010"},"2010"),l.a.createElement("option",{value:"2011"},"2011"),l.a.createElement("option",{value:"2012"},"2012"),l.a.createElement("option",{value:"2013"},"2013"),l.a.createElement("option",{value:"2014"},"2014"),l.a.createElement("option",{value:"2015"},"2015"),l.a.createElement("option",{value:"2016"},"2016"),l.a.createElement("option",{value:"2017"},"2017")))),l.a.createElement(v.e,null,l.a.createElement(v.a,{onClick:this.handleSubmit,outline:!0,color:"success"},"Submit")))),l.a.createElement("div",{id:"map"}),l.a.createElement("div",{id:"charts"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.60b38375.chunk.js.map