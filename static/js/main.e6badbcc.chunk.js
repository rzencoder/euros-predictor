(this["webpackJsonpeuros-predictor"]=this["webpackJsonpeuros-predictor"]||[]).push([[0],[,,,function(n){n.exports=JSON.parse('{"teams":[{"name":"Turkey","flag":"TR"},{"name":"Italy","flag":"IT"},{"name":"Wales","flag":"wales"},{"name":"Switzerland","flag":"CH"},{"name":"Denmark","flag":"DK"},{"name":"Finland","flag":"FI"},{"name":"Belgium","flag":"BE"},{"name":"Russia","flag":"RU"},{"name":"Netherlands","flag":"NL"},{"name":"Ukraine","flag":"UA"},{"name":"Austria","flag":"AT"},{"name":"North Macedonia","flag":"MK"},{"name":"England","flag":"england"},{"name":"Croatia","flag":"HR"},{"name":"Scotland","flag":"scotland"},{"name":"Czech Republic","flag":"CZ"},{"name":"Spain","flag":"ES"},{"name":"Sweden","flag":"SE"},{"name":"Poland","flag":"PL"},{"name":"Slovakia","flag":"SK"},{"name":"Hungary","flag":"HU"},{"name":"Portugal","flag":"PT"},{"name":"France","flag":"FR"},{"name":"Germany","flag":"DE"}]}')},,,,,,,,,function(n){n.exports=JSON.parse('{"groups":[{"name":"group a","teams":[],"winner":2,"second":14},{"name":"group b","teams":[],"winner":0,"second":15},{"name":"group c","teams":[],"winner":12,"second":3},{"name":"group d","teams":[],"winner":10,"second":6},{"name":"group e","teams":[],"winner":8,"second":7},{"name":"group f","teams":[],"winner":4,"second":11}],"thirdTeams":[null,null,null,null,null,null],"thirdPositions":[],"secondRound":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"quarters":[null,null,null,null,null,null,null,null],"semis":[null,null,null,null],"final":[null,null],"champions":[null]}')},,,,,function(n,e,t){},function(n,e,t){},,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var a=t(2),c=t.n(a),i=t(10),o=t.n(i),r=(t(17),t(5)),s=t(1),l=t(8),u=t(11),d=t.n(u),m=(t(18),t(0));function h(n){var e=n.champions,t=n.setShowShare;return Object(m.jsxs)("div",{className:"champions",children:[Object(m.jsx)("h2",{children:"Champions"}),Object(m.jsxs)("div",{className:"champions-container",children:[Object(m.jsx)(d.a,{width:270,height:270}),Object(m.jsx)("div",{className:"champions-trophy",children:Object(m.jsx)("img",{src:"./img/trophy.png",alt:"euros trophy"})}),Object(m.jsx)(O,{team:e,width:"80px"}),Object(m.jsx)("div",{className:"champions-name",children:e.name}),Object(m.jsx)("button",{className:"share share-desktop",onClick:function(){return t(!0)},children:"Share Prediction"})]})]})}var j={a:"1234",b:"1243",c:"1324",d:"1342",e:"1423",f:"1432",g:"2134",h:"2143",i:"2314",j:"2341",k:"2413",l:"2431",m:"3124",n:"3142",o:"3214",p:"3241",q:"3412",r:"3421",s:"4123",t:"4132",u:"4213",v:"4231",w:"4312",x:"4321"},f=t(3);t(20);function p(n){var e=n.name,t=n.teams,a=n.positions,c=n.groupIndex,i=n.handleClick;return Object(m.jsxs)("div",{className:"group",children:[Object(m.jsx)("h2",{children:e}),t.map((function(n){var e=function(n,e){var t=e.findIndex((function(e){return e.name===n}))+1;return 0===t&&3===e.length?"out":0===t?"+":1===t?"1st":2===t?"2nd":3===t?"3rd":void 0}(n.name,a.teams);return Object(m.jsxs)("div",{className:"group-team-container",onClick:function(){return i(n,c)},children:[Object(m.jsxs)("div",{className:"group-team",children:[Object(m.jsx)(O,{team:n,width:"40px"}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:n.name})})]}),Object(m.jsx)("div",{className:"group-position",children:Object(m.jsx)("div",{className:"out"===e?"out":"",children:e})})]},"group-stage-".concat(n.name))}))]})}t(21);function g(n){var e=n.matches,t=n.teams,a=n.handleClick;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"info",children:"Select the first, second and third place teams in each group"}),Object(m.jsx)("div",{className:"group-stage",children:e.map((function(n,c){return Object(m.jsx)(p,{name:n.name,groupIndex:c,teams:t[c],positions:e[c],handleClick:a},n.name)}))})]})}t(22);function b(n){var e=n.teams,t=n.handleClick,a=n.nextRound,c=n.title,i=n.roundIndex,o=n.positions,s=function(n){for(var e=[],t=0;t<n.length;t+=2)e.push([n[t],n[t+1]]);return e}(Object(r.a)(e));return Object(m.jsxs)("div",{className:"knockout-stage",children:[Object(m.jsx)("h2",{children:c}),Object(m.jsx)("div",{className:"knockout-round-container bracket-".concat(i),children:s.map((function(n,e){return Object(m.jsxs)("div",{className:"knockout-match bracket-team",children:[Object(m.jsx)("div",{children:n[0]&&n[1]&&Object(m.jsx)(k,{match:n[0],index:e,nextRound:a,round:o,handleClick:t})}),n[0]&&n[1]&&Object(m.jsx)("div",{children:"v"}),Object(m.jsx)("div",{children:n[1]&&n[0]&&Object(m.jsx)(k,{match:n[1],index:e,nextRound:a,round:o,handleClick:t})})]},"knockout-stage-".concat(i,"-").concat(e,"}"))}))})]})}t(23);function x(n){var e=n.teams,t=n.calculateThirdPlaceLeague,a=n.positions,c=function(n,e){var t=e.findIndex((function(e){return!!e&&e.name===n}))+1;return 0===t&&4===e.length?Object(m.jsx)("div",{className:"cross",children:"\u2716"}):0===t?"":t<5?Object(m.jsx)("div",{className:"tick",children:"\u2714"}):Object(m.jsx)("div",{className:"cross",children:"\u2716"})};return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"info",children:"Check you have chosen a team from each group to finish first, second and third. Then select the four third place teams you think will finish with the most points."}),Object(m.jsx)("div",{className:"third-place-league",children:e.map((function(n){return n?Object(m.jsxs)("div",{className:"third-place-container",onClick:function(){return t(n)},children:[Object(m.jsxs)("div",{className:"third-place-team",children:[Object(m.jsx)(O,{team:n,width:"50px"}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:n.name})})]}),Object(m.jsx)("div",{className:"third-place-selector",children:Object(m.jsx)("div",{children:c(n.name,a)})})]},"third-place-league-".concat(n.name)):null}))})]})}t(24);function O(n){var e=n.team,t=n.width,a=void 0===t?"50px":t;return Object(m.jsx)("img",{style:{width:a},src:"./img/flags/".concat(e.flag,".svg"),alt:"".concat(e.name," flag")})}t(25);function v(n){var e=n.setShowShare,t=function(n,e){var t="";return n.groups.forEach((function(n,a){var c="";n.teams.forEach((function(n){var t=e[a].findIndex((function(e){return e.name===n.name}))+1;c+=String(t)}));for(var i=1;i<=4;i++)c.includes(String(i))||(c+=String(i));var o=Object.keys(j).find((function(n){return j[n.toString()]===c}));t+=o})),["thirdPositions","quarters","semis","final","champions"].forEach((function(e){n[e.toString()].forEach((function(n){if(n){var e=f.teams.findIndex((function(e){return e.name===n.name}));t+=String.fromCharCode(e+97)}}))})),"https://rzencoder.github.io/euros-predictor?scenario=".concat(t)}(n.positions,n.teams);return Object(m.jsx)("div",{className:"modal-overlay",onClick:function(){return e(!1)},children:Object(m.jsx)("div",{className:"modal",onClick:function(){return e(!0)},children:Object(m.jsxs)("div",{className:"modal-container",children:[Object(m.jsx)("button",{className:"close",onClick:function(){return e(!1)},children:"\u2716"}),Object(m.jsx)("div",{className:"modal-link",children:t}),Object(m.jsx)("button",{className:"copy",onClick:function(){return navigator.clipboard.writeText(t)},children:"Copy Link"})]})})})}t(26);function k(n){var e=n.match,t=n.index,a=n.round,c=n.nextRound,i=n.handleClick;return Object(m.jsxs)("div",{className:"knockout-team",onClick:function(){return i(e,t,c)},children:[Object(m.jsxs)("div",{className:"knockout-team-name",children:[Object(m.jsx)(O,{team:e,width:"40px"}),Object(m.jsx)("div",{children:e.name})]}),Object(m.jsx)("div",{className:"knockout-selector",children:a.filter((function(n){return null!==n})).find((function(n){return!!n&&n.name===e.name}))&&Object(m.jsx)("div",{children:"\u2714"})})]})}var N=t(12),S=[{group:"1234",knockout:[1,9,5,13]},{group:"1235",knockout:[1,9,5,13]},{group:"1236",knockout:[1,9,5,13]},{group:"1245",knockout:[9,5,1,13]},{group:"1246",knockout:[9,5,1,13]},{group:"1256",knockout:[5,9,1,13]},{group:"1345",knockout:[5,9,13,1]},{group:"1346",knockout:[5,9,13,1]},{group:"1356",knockout:[5,9,1,13]},{group:"1456",knockout:[5,9,1,13]},{group:"2345",knockout:[9,5,13,1]},{group:"2346",knockout:[5,9,13,1]},{group:"2356",knockout:[5,9,13,1]},{group:"2456",knockout:[5,9,13,1]},{group:"3456",knockout:[5,9,13,1]}],C=t(7),w=t.n(C);var R=function(){var n=Object(a.useState)(N),e=Object(l.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)(function(n){for(var e=[],t=0;t<n.length;t+=4)e.push(n.slice(t,t+4));return e}(f.teams)),o=Object(l.a)(i,1)[0],u=Object(a.useState)(!1),d=Object(l.a)(u,2),p=d[0],O=d[1];Object(a.useEffect)((function(){var n=window.location.search,e=new URLSearchParams(n).get("scenario");e&&25===e.length&&function(n,e,t,a,c){var i=n.substring(0,6).split(""),o=n.substring(6,10).split(""),r=[["quarters",n.substring(10,18).split("")],["semis",n.substring(18,22).split("")],["final",n.substring(22,24).split("")],["champions",n.substring(24,25).split("")]],l=i.map((function(n){return j[n.toString()].split("")})),u=[];l.forEach((function(n,a){var c=[];n.forEach((function(n,e){t[a].forEach((function(t,i){n===String(i+1)&&3!==e&&c.push(t),n===String(i+1)&&2===e&&u.push(Object(s.a)(Object(s.a)({},t),{},{groupIndex:a}))}))})),e.groups[a].teams=c,e.thirdTeams=u}));var d=a(e),m=o.map((function(n){var e,a=f.teams[n.charCodeAt(0)-97];return t.forEach((function(n,t){n.forEach((function(n){n.name===a.name&&(e=t)}))})),Object(s.a)(Object(s.a)({},a),{},{groupIndex:e})}));d.thirdPositions=m,r.forEach((function(n){var e=n[1].map((function(n){return f.teams[n.charCodeAt(0)-97]}));d[n[0].toString()]=e})),c(d)}(e,Object(s.a)({},t),o,k,C)}),[]);var k=function(n){return n.groups.forEach((function(e,t){n.secondRound[e.winner]=null,n.secondRound[e.second]=null,n.thirdTeams[t]=null,e.teams.forEach((function(a,c){0===c?n.secondRound[e.winner]=a:1===c?n.secondRound[e.second]=a:2===c&&(n.thirdTeams[t]=Object(s.a)(Object(s.a)({},a),{},{groupIndex:t}))}))})),c(n),n},C=function(n){var e=n.thirdPositions.map((function(n){return n.groupIndex+1})).join(""),t=S.find((function(n){return n.group===e}));t&&n.thirdPositions.map((function(e,a){return n.secondRound[t.knockout[a]]=e})),c(n)},R=function(n,e,a){var i=Object(s.a)({},t);i[a.toString()][e]=n,c(i)};return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("h1",{className:"title",children:["Euro ",Object(m.jsx)("span",{children:"2020"})," Predictor"]}),Object(m.jsx)(w.a,{trigger:"Group Stage",open:!0,children:Object(m.jsx)(g,{matches:t.groups,teams:o,handleClick:function(n,e){var a=Object(r.a)(t.groups[e].teams);a.some((function(e){return e.name===n.name}))?a[a.length-1].name===n.name?a.pop():a.length=0:3===a.length?a.length=0:a.push(n);var c=Object(s.a)({},t);c.groups[e].teams=a,k(c)}})}),Object(m.jsx)(w.a,{trigger:"Third Place Rating",open:!0,children:!t.thirdTeams.some((function(n){return null===n}))&&Object(m.jsx)("div",{children:Object(m.jsx)(x,{calculateThirdPlaceLeague:function(n){var e=Object(r.a)(t.thirdPositions);e.some((function(e){return null!==e&&e.name===n.name}))?e[e.length-1]&&e[e.length-1].name===n.name?e.pop():e.length=0:e.length<4?e.push(n):e.length=0;var a=Object(s.a)({},t);a.secondRound[1]=null,a.secondRound[5]=null,a.secondRound[9]=null,a.secondRound[13]=null,e.length>3?(e.sort((function(n,e){return n.groupIndex-e.groupIndex})),a.thirdPositions=e,C(a)):(a.thirdPositions=e,c(a))},teams:t.thirdTeams,positions:t.thirdPositions})})}),Object(m.jsx)(w.a,{trigger:"Knockout Stage",open:!0,children:Object(m.jsxs)("div",{className:"knockout-container",children:[Object(m.jsx)(b,{teams:t.secondRound,handleClick:R,nextRound:"quarters",title:"Round of 16",roundIndex:"1",positions:t.quarters}),Object(m.jsx)(b,{teams:t.quarters,handleClick:R,nextRound:"semis",title:"Quarter Finals",roundIndex:"2",positions:t.semis}),Object(m.jsx)(b,{teams:t.semis,handleClick:R,title:"Semi Finals",nextRound:"final",roundIndex:"3",positions:t.final}),Object(m.jsx)(b,{teams:t.final,handleClick:R,nextRound:"champions",title:"Final",roundIndex:"4",positions:t.champions}),t.champions[0]&&Object(m.jsx)(h,{champions:t.champions[0],setShowShare:O})]})}),t.champions[0]&&Object(m.jsx)("button",{className:"share share-mobile",onClick:function(){return O(!0)},children:"Share Prediction"}),p&&Object(m.jsx)(v,{setShowShare:O,positions:t,teams:o})]})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.e6badbcc.chunk.js.map