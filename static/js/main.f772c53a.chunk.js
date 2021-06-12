(this["webpackJsonpeuros-predictor"]=this["webpackJsonpeuros-predictor"]||[]).push([[0],[,,,,function(n){n.exports=JSON.parse('{"teams":[{"name":"Turkey","flag":"TR"},{"name":"Italy","flag":"IT"},{"name":"Wales","flag":"wales"},{"name":"Switzerland","flag":"CH"},{"name":"Denmark","flag":"DK"},{"name":"Finland","flag":"FI"},{"name":"Belgium","flag":"BE"},{"name":"Russia","flag":"RU"},{"name":"Netherlands","flag":"NL"},{"name":"Ukraine","flag":"UA"},{"name":"Austria","flag":"AT"},{"name":"North Macedonia","flag":"MK"},{"name":"England","flag":"england"},{"name":"Croatia","flag":"HR"},{"name":"Scotland","flag":"scotland"},{"name":"Czech Republic","flag":"CZ"},{"name":"Spain","flag":"ES"},{"name":"Sweden","flag":"SE"},{"name":"Poland","flag":"PL"},{"name":"Slovakia","flag":"SK"},{"name":"Hungary","flag":"HU"},{"name":"Portugal","flag":"PT"},{"name":"France","flag":"FR"},{"name":"Germany","flag":"DE"}]}')},,,,,,,,function(n){n.exports=JSON.parse('{"groups":[{"name":"group a","teams":[],"winner":2,"second":14},{"name":"group b","teams":[],"winner":0,"second":15},{"name":"group c","teams":[],"winner":12,"second":3},{"name":"group d","teams":[],"winner":10,"second":6},{"name":"group e","teams":[],"winner":8,"second":7},{"name":"group f","teams":[],"winner":4,"second":11}],"thirdTeams":[null,null,null,null,null,null],"thirdPositions":[],"secondRound":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"quarters":[null,null,null,null,null,null,null,null],"semis":[null,null,null,null],"final":[null,null],"champions":[null]}')},,,,,function(n,e,t){},function(n,e,t){},,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var c=t(1),a=t.n(c),i=t(10),s=t.n(i),r=(t(17),t(2)),o=t(9),l=t(7),u=t(11),d=t.n(u),m=(t(18),t(0));function h(n){var e=n.champions;return Object(m.jsxs)("div",{className:"champions",children:[Object(m.jsx)("h2",{children:"Champions"}),Object(m.jsxs)("div",{className:"champions-container",children:[Object(m.jsx)(d.a,{width:270,height:270}),Object(m.jsx)("div",{className:"champions-trophy",children:Object(m.jsx)("img",{src:"/euros-predictor/img/trophy.png",alt:"euros trophy"})}),Object(m.jsx)(b,{team:e,width:"80px"}),Object(m.jsx)("div",{className:"champions-name",children:e.name})]})]})}t(20);function j(n){var e=n.name,t=n.teams,c=n.positions,a=n.groupIndex,i=n.handleClick;return Object(m.jsxs)("div",{className:"group",children:[Object(m.jsx)("h2",{children:e}),t.map((function(n){var e=function(n){var e=c.teams.findIndex((function(e){return e.name===n}))+1;return 0===e&&3===c.teams.length?"out":0===e?"+":1===e?"1st":2===e?"2nd":3===e?"3rd":void 0}(n.name);return Object(m.jsxs)("div",{className:"group-team-container",onClick:function(){return i(n,a)},children:[Object(m.jsxs)("div",{className:"group-team",children:[Object(m.jsx)(b,{team:n,width:"40px"}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:n.name})})]}),Object(m.jsx)("div",{className:"group-position",children:Object(m.jsx)("div",{className:"out"===e?"out":"",children:e})})]},"group-stage-".concat(n.name))}))]})}t(21);function f(n){var e=n.matches,t=n.teams,c=n.handleClick;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"info",children:"Select the first, second and third place teams in each group"}),Object(m.jsx)("div",{className:"group-stage",children:e.map((function(n,a){return Object(m.jsx)(j,{name:n.name,groupIndex:a,teams:t[a],positions:e[a],handleClick:c},n.name)}))})]})}t(22);function p(n){var e=n.teams,t=n.handleClick,c=n.nextRound,a=n.title,i=n.roundIndex,s=n.positions,r=function(n){for(var e=[],t=0;t<n.length;t+=2)e.push([n[t],n[t+1]]);return e}(e);return Object(m.jsxs)("div",{className:"knockout-stage",children:[Object(m.jsx)("h2",{children:a}),Object(m.jsx)("div",{className:"knockout-round-container bracket-".concat(i),children:r.map((function(n,e){return Object(m.jsxs)("div",{className:"knockout-match bracket-team",children:[Object(m.jsx)("div",{children:n[0]&&n[1]&&Object(m.jsxs)("div",{className:"knockout-team",onClick:function(){return t(n[0],e,c)},children:[Object(m.jsxs)("div",{className:"knockout-team-name",children:[Object(m.jsx)(b,{team:n[0],width:"40px"}),Object(m.jsx)("div",{children:n[0].name})]}),Object(m.jsx)("div",{className:"knockout-selector",children:s[c].filter((function(n){return null!==n})).find((function(e){return e.name===n[0].name}))&&Object(m.jsx)("div",{children:"\u2714"})})]})}),n[0]&&n[1]&&Object(m.jsx)("div",{children:"v"}),Object(m.jsx)("div",{children:n[1]&&n[0]&&Object(m.jsxs)("div",{className:"knockout-team",onClick:function(){return t(n[1],e,c)},children:[Object(m.jsxs)("div",{className:"knockout-team-name",children:[Object(m.jsx)(b,{team:n[1],width:"40px"}),Object(m.jsx)("div",{children:n[1].name})]}),Object(m.jsx)("div",{className:"knockout-selector",children:s[c].filter((function(n){return null!==n})).find((function(e){return e.name===n[1].name}))&&Object(m.jsx)("div",{children:"\u2714"})})]})})]},"knockout-stage-".concat(i,"-").concat(e,"}"))}))})]})}t(23);function g(n){var e=n.teams,t=n.calculateThirdPlaceLeague,c=n.positions,a=function(n){var e=c.findIndex((function(e){return e.name===n}))+1;return 0===e&&4===c.length?Object(m.jsx)("div",{className:"cross",children:"\u2716"}):0===e?"":e<5?Object(m.jsx)("div",{className:"tick",children:"\u2714"}):Object(m.jsx)("div",{className:"cross",children:"\u2716"})};return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"info",children:"Check you have chosen a team from each group to finish first, second and third. Then select the four third place teams you think will finish with the most points."}),Object(m.jsx)("div",{className:"third-place-league",children:e.map((function(n){return Object(m.jsxs)("div",{className:"third-place-container",onClick:function(){return t(n)},children:[Object(m.jsxs)("div",{className:"third-place-team",children:[Object(m.jsx)(b,{team:n,width:"50px"}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:n.name})})]}),Object(m.jsx)("div",{className:"third-place-selector",children:Object(m.jsx)("div",{children:a(n.name)})})]},"third-place-league-".concat(n.name))}))})]})}t(24);function b(n){var e=n.team,t=n.width,c=void 0===t?"50px":t;return Object(m.jsx)("img",{style:{width:c},src:"euros-predictor/img/flags/".concat(e.flag,".svg"),alt:"".concat(e.name," flag")})}var x=t(4),O=t(12),v=[{group:"1234",knockout:[1,9,5,13]},{group:"1235",knockout:[1,9,5,13]},{group:"1236",knockout:[1,9,5,13]},{group:"1245",knockout:[9,5,1,13]},{group:"1246",knockout:[9,5,1,13]},{group:"1256",knockout:[5,9,1,13]},{group:"1345",knockout:[5,9,13,1]},{group:"1346",knockout:[5,9,13,1]},{group:"1356",knockout:[5,9,1,13]},{group:"1456",knockout:[5,9,1,13]},{group:"2345",knockout:[9,5,13,1]},{group:"2346",knockout:[5,9,13,1]},{group:"2356",knockout:[5,9,13,1]},{group:"2456",knockout:[5,9,13,1]},{group:"3456",knockout:[5,9,13,1]}],k={a:"1234",b:"1243",c:"1324",d:"1342",e:"1423",f:"1432",g:"2134",h:"2143",i:"2314",j:"2341",k:"2413",l:"2431",m:"3124",n:"3142",o:"3214",p:"3241",q:"3412",r:"3421",s:"4123",t:"4132",u:"4213",v:"4231",w:"4312",x:"4321"},N=t(6),w=t.n(N);var C=function(){var n=Object(c.useState)(O),e=Object(l.a)(n,2),t=e[0],a=e[1],i=Object(c.useState)(function(n){for(var e=[],t=0;t<n.length;t+=4)e.push(n.slice(t,t+4));return e}(x.teams)),s=Object(l.a)(i,1)[0],u=Object(c.useState)(!1),d=Object(l.a)(u,2),j=d[0],b=d[1];Object(c.useEffect)((function(){var n=window.location.search,e=new URLSearchParams(n).get("scenario");25===e.length&&I(e)}),[]);var N=function(n){return n.groups.forEach((function(e,t){n.secondRound[e.winner]=null,n.secondRound[e.second]=null,n.thirdTeams[t]=null,e.teams.forEach((function(c,a){0===a?n.secondRound[e.winner]=c:1===a?n.secondRound[e.second]=c:2===a&&(n.thirdTeams[t]=Object(r.a)(Object(r.a)({},c),{},{groupIndex:t}))}))})),a(n),n},C=function(n){var e=n.thirdPositions.map((function(n){return n.groupIndex+1})).join(""),t=v.find((function(n){return n.group===e}));n.thirdPositions.map((function(e,c){return n.secondRound[t.knockout[c]]=e})),a(n)},R=function(n,e,c){var i=Object(r.a)({},t);i[c][e]=n,a(i)},S=function(){var n="";s.forEach((function(e,c){var a="";e.forEach((function(n){var e=t.groups[c].teams.findIndex((function(e){return e.name===n.name}))+1;0===e&&(e=4),a+=String(e)}));var i=Object.keys(k).find((function(n){return k[n]===a}));n+=i}));var e=function(e){t[e].forEach((function(e){var t=x.teams.findIndex((function(n){return n.name===e.name}));n+=String.fromCharCode(t+97)}))};return e("thirdPositions"),e("quarters"),e("semis"),e("final"),e("champions"),"rzencoder.github.io/euros-predictor?scenario=".concat(n)},I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"xxxxxxjnrvvkjsnwrgkswgsgg",e=n.substring(0,6).split(""),c=n.substring(6,10).split(""),a=n.substring(10,18).split(""),i=n.substring(18,22).split(""),o=n.substring(22,24).split(""),l=n.substring(24,25).split(""),u=Object(r.a)({},t),d=e.map((function(n){return k[n].split("")})),m=[];d.forEach((function(n,e){var t=[];n.forEach((function(n,c){s[e].forEach((function(a,i){n===String(i+1)&&3!==c&&t.push(a),n===String(i+1)&&2===c&&m.push(Object(r.a)(Object(r.a)({},a),{},{groupIndex:e}))}))})),u.groups[e].teams=t,u.thirdTeams=m}));var h=N(u),j=c.map((function(n){var e,t=x.teams[n.charCodeAt(0)-97];return s.forEach((function(n,c){n.forEach((function(n){n.name===t.name&&(e=c)}))})),Object(r.a)(Object(r.a)({},t),{},{groupIndex:e})})),f=function(n,e){var t=e.map((function(n){return x.teams[n.charCodeAt(0)-97]}));h[n]=t};f("quarters",a),f("semis",i),f("final",o),f("champions",l),h.thirdPositions=j,C(h)};return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("h1",{className:"title",children:["Euro ",Object(m.jsx)("span",{children:"2020"})," Predictor"]}),Object(m.jsx)(w.a,{trigger:"Group Stage",open:!0,children:Object(m.jsx)(f,{matches:t.groups,teams:s,handleClick:function(n,e){var c=Object(o.a)(t.groups[e].teams);c.some((function(e){return e.name===n.name}))?c[c.length-1].name===n.name?c.pop():c.length=0:3===c.length?c.length=0:c.push(n);var a=Object(r.a)({},t);a.groups[e].teams=c,N(a)}})}),Object(m.jsx)(w.a,{trigger:"Third Place Rating",open:!0,children:!t.thirdTeams.some((function(n){return null===n}))&&Object(m.jsx)("div",{children:Object(m.jsx)(g,{calculateThirdPlaceLeague:function(n){var e=Object(o.a)(t.thirdPositions);e.some((function(e){return e.name===n.name}))?e[e.length-1].name===n.name?e.pop():e.length=0:e.length<4?e.push(n):e.length=0;var c=Object(r.a)({},t);c.secondRound[1]=null,c.secondRound[5]=null,c.secondRound[9]=null,c.secondRound[13]=null,e.length>3?(e.sort((function(n,e){return n.groupIndex-e.groupIndex})),c.thirdPositions=e,C(c)):(c.thirdPositions=e,a(c))},teams:t.thirdTeams,positions:t.thirdPositions})})}),Object(m.jsx)(w.a,{trigger:"Knockout Stage",open:!0,children:Object(m.jsxs)("div",{className:"knockout-container",children:[Object(m.jsx)(p,{teams:t.secondRound,handleClick:R,nextRound:"quarters",title:"Round of 16",roundIndex:"1",positions:t}),Object(m.jsx)(p,{teams:t.quarters,handleClick:R,nextRound:"semis",title:"Quarter Finals",roundIndex:"2",positions:t}),Object(m.jsx)(p,{teams:t.semis,handleClick:R,nextRound:"final",title:"Semi Finals",roundIndex:"3",positions:t}),Object(m.jsx)(p,{teams:t.final,handleClick:R,nextRound:"champions",title:"Final",roundIndex:"4",positions:t}),t.champions[0]&&Object(m.jsx)(h,{champions:t.champions[0]})]})}),t.champions[0]&&Object(m.jsx)("button",{className:"share",onClick:function(){return b(!0)},children:"Share"}),j&&Object(m.jsx)("div",{className:"modal-overlay",onClick:function(){return b(!1)},children:Object(m.jsx)("div",{className:"modal",onClick:function(){return b(!0)},children:Object(m.jsxs)("div",{className:"modal-container",children:[Object(m.jsx)("button",{className:"close",onClick:function(){return b(!1)},children:"\u2716"}),Object(m.jsx)("div",{className:"modal-link",children:S()}),Object(m.jsx)("button",{className:"copy",onClick:function(){return navigator.clipboard.writeText(S())},children:"Copy Link"})]})})})]})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.f772c53a.chunk.js.map