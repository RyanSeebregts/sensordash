(this.webpackJsonpsensordash=this.webpackJsonpsensordash||[]).push([[0],{200:function(e,t,n){},210:function(e,t){},212:function(e,t){},222:function(e,t){},224:function(e,t){},249:function(e,t){},250:function(e,t){},255:function(e,t){},257:function(e,t){},264:function(e,t){},283:function(e,t){},410:function(e,t,n){"use strict";n.r(t);var a,c=n(3),i=n.n(c),r=n(186),s=n.n(r),l=(n(200),n(16)),o=n.n(l),u=n(25),d=n(11),p=n(12),j=n(13),b=n(187),h=n(22),x=Object(b.a)({apiKey:"AIzaSyArcHR-u520-pvwa75P9dTqmn9Q-0xuQfk",authDomain:"testsensor-50e80.firebaseapp.com",databaseURL:"https://testsensor-50e80-default-rtdb.europe-west1.firebasedatabase.app",projectId:"testsensor-50e80",storageBucket:"testsensor-50e80.appspot.com",messagingSenderId:"15455856559",appId:"1:15455856559:web:2b0ce1e3f3a8fd206b315a"}),f=Object(h.b)(x),g=n(4),m=j.a.input(a||(a=Object(p.a)(["\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: transparent;\n  border: 2px solid darkgrey;\n  border-radius: 5px;\n  padding: 5px 7px;\n  margin: 0px;\n"])));var O,v=function(e){return Object(g.jsx)(m,{value:e.value,placeholder:e.placeholder,type:e.type,onChange:e.setValue})},y=j.a.div(O||(O=Object(p.a)(["\n  padding: 7px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n"])));var w,k,S,C=function(e){return Object(g.jsx)(y,{onClick:e.clicked,style:{background:e.color||"lightgrey",color:e.textColor||"black"},children:e.value})},F={primary:"#FF6F3C",darkPurple:"#3E2F5B",purple:"#E8C7DE",darkBlue:"#345995",blue:"#86BBD8",green:"#DCF2B0",red:"#880D1E",yellow:"#FFCF00",pink:"#CC59D2",black:"#262626",lightRed:"#EF2917"},I=n(204),D=j.a.div(w||(w=Object(p.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),T=j.a.div(k||(k=Object(p.a)(["\n  padding: 20px 20px;\n  min-width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]))),E=j.a.div(S||(S=Object(p.a)(["\n  position: relative;\n  padding: 20px 20px;\n  min-width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])));var B,R=function(e){var t=Object(c.useState)(!0),n=Object(d.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),l=s[0],p=s[1],j=Object(c.useState)(""),b=Object(d.a)(j,2),x=b[0],m=b[1],O=Object(c.useState)(""),y=Object(d.a)(O,2),w=y[0],k=y[1],S=Object(c.useState)(""),B=Object(d.a)(S,2),R=B[0],V=B[1],z=Object(c.useState)(""),L=Object(d.a)(z,2),W=L[0],A=L[1],N=Object(c.useState)(""),P=Object(d.a)(N,2),U=P[0],M=P[1],J=Object(c.useState)(""),Q=Object(d.a)(J,2),Y=Q[0],q=Q[1],G=Object(c.useState)(!1),H=Object(d.a)(G,2),K=H[0],_=H[1],X=Object(c.useState)(!0),Z=Object(d.a)(X,2),$=Z[0],ee=Z[1],te=Object(c.useState)(!1),ne=Object(d.a)(te,2),ae=ne[0],ce=ne[1],ie=null;return Object(c.useEffect)((function(){ie=setTimeout((function(){ee(!1)}),1e3);var e=Object(h.e)(f,"Users/");return Object(h.c)(e,(function(e){if(e.exists()){console.log(e.val());var t=e.val(),n=[];for(var a in t){var c=t[a];n.push(c)}p(n)}})),function(){clearTimeout(ie)}}),[]),Object(g.jsx)(D,{children:a?Object(g.jsxs)(T,{children:[Object(g.jsx)("div",{style:{fontSize:"25px",fontWeight:"bold",marginBottom:"20px"},children:"Login"}),Object(g.jsx)(v,{value:x,setValue:function(e){m(e.target.value)},type:"text",placeholder:"username"}),Object(g.jsx)("div",{style:{height:"20px"}}),Object(g.jsx)(v,{value:w,setValue:function(e){k(e.target.value)},type:"password",placeholder:"password"}),Object(g.jsx)("div",{style:{height:"40px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:R}),Object(g.jsx)(C,{clicked:function(){return re.apply(this,arguments)},value:"login",color:F.primary,textColor:"white"}),Object(g.jsx)("div",{onClick:function(){return i(!1)},style:{cursor:"pointer",marginTop:"10px"},children:"register"}),$&&Object(g.jsx)("div",{style:{top:"0px",position:"absolute",height:"100%",width:"100%",background:"black",opacity:.6}})]}):Object(g.jsxs)(E,{children:[Object(g.jsx)("div",{style:{fontSize:"25px",fontWeight:"bold",marginBottom:"20px"},children:"Register"}),Object(g.jsx)(v,{value:W,setValue:function(e){A(e.target.value)},type:"text",placeholder:"username"}),Object(g.jsx)("div",{style:{height:"20px"}}),Object(g.jsx)(v,{value:U,setValue:function(e){M(e.target.value)},type:"password",placeholder:"password"}),Object(g.jsx)("div",{style:{height:"40px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Y}),Object(g.jsx)(C,{clicked:function(){return se.apply(this,arguments)},value:"register",color:F.primary,textColor:"white"}),Object(g.jsx)("div",{onClick:function(){return i(!0)},style:{cursor:"pointer",marginTop:"10px"},children:"go to login"}),K&&Object(g.jsx)("div",{style:{top:"0px",position:"absolute",height:"100%",width:"100%",background:"black",opacity:.6}}),ae&&Object(g.jsx)("div",{style:{position:"absolute",height:"100%",width:"100%",top:"0px",background:"white",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"25px",fontWeight:"bold"},children:"user registered"})]})});function re(){return(re=Object(u.a)(o.a.mark((function t(){var n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(l),V(""),n=!1,a=0;case 4:if(!(a<l.length)){t.next=17;break}if(l[a].username!==x){t.next=14;break}return t.next=8,ue(w,l[a].salt);case 8:if(c=t.sent,console.log(c),c!==l[a].password){t.next=14;break}return n=!0,e.setLoggedIn(!0),t.abrupt("return");case 14:a++,t.next=4;break;case 17:n||V("username or password incorrect");case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function se(){return(se=Object(u.a)(o.a.mark((function e(){var t,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(!0),q(""),t=!1,l.forEach((function(e){e.username===W&&(t=!0)})),!t){e.next=8;break}return _(!1),q("username used"),e.abrupt("return");case 8:return e.next=10,le();case 10:return n=e.sent,e.next=13,ue(U,n);case 13:a=e.sent,c=Object(h.e)(f,"Users/"),Object(h.d)(c,{username:W,password:a,salt:n}),ce(!0),ie=setTimeout((function(){_(!1),i(!0),ce(!1)}),2e3);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return oe.apply(this,arguments)}function oe(){return(oe=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.genSalt(6);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e,t){return de.apply(this,arguments)}function de(){return(de=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.hash(t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},V=n(194),z=j.a.div(B||(B=Object(p.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));var L,W,A,N,P,U,M,J,Q=function(e){return Object(g.jsx)(z,{children:Object(g.jsx)(V.a,{data:{labels:["current","average"],datasets:[{backgroundColor:[e.color,"lightgrey"],data:[e.value,e.average]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!0,text:e.title}},scales:{y:{min:e.min||0,max:e.max||void 0}}},width:100,height:100})})},Y=n(193),q=j.a.div(L||(L=Object(p.a)(["\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),G=j.a.div(W||(W=Object(p.a)(["\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background: black;\n    opacity: 0.6;\n    z-index: 0;\n"]))),H=j.a.div(A||(A=Object(p.a)(["\n    z-index: 1;\n    height: 300px;\n    max-height: calc(100% - 100px);\n    max-width: calc(100% - 100px);\n    width: 500px;\n    background: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 10px;\n"]))),K=j.a.div(N||(N=Object(p.a)(["\n    height: 20%;\n    font-size: 25px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n\n"]))),_=j.a.div(P||(P=Object(p.a)(["\n    width: calc(100% - 100px);\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n\n"]))),X=j.a.div(U||(U=Object(p.a)(["\n    width: calc(50% - 20px);\n    display: flex;\n    flex-direction: column;\n    align-items: center\n"]))),Z=j.a.div(M||(M=Object(p.a)(["\n    margin: 20px 0px;\n"]))),$=j.a.div(J||(J=Object(p.a)(["\n    width: calc(100% - 20px);\n"]))),ee=[["time","CO2","NIR","Clear","F1 415nm","F2 445nm","F3 480nm","F4 515nm","F5 555nm","F6 590nm","F7 630nm","F8 680nm"]];var te,ne,ae,ce,ie,re,se,le=function(e){var t=new Date,n=Object(c.useState)(t),a=Object(d.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)(t),l=Object(d.a)(s,2),o=l[0],u=l[1],p=Object(c.useState)(""),j=Object(d.a)(p,2),b=j[0],x=j[1],m=Object(c.useState)(ee),O=Object(d.a)(m,2),y=O[0],w=O[1],k=Object(c.useState)(!1),S=Object(d.a)(k,2),F=S[0],I=S[1];return Object(g.jsxs)(q,{children:[Object(g.jsx)(G,{onClick:e.close}),Object(g.jsxs)(H,{children:[Object(g.jsx)(K,{children:"Download CSV"}),Object(g.jsxs)(_,{children:[Object(g.jsxs)(X,{children:[Object(g.jsx)(Z,{children:"from"}),Object(g.jsx)($,{children:Object(g.jsx)(v,{value:D(i),placeholder:"dd/mm/yy",type:"date",setValue:function(e){console.log(o.getFullYear()+"-"+o.getMonth()+"-"+o.getDate());var t=new Date(e.target.value);r(t)}})})]}),Object(g.jsx)("div",{style:{width:"40px"}}),Object(g.jsxs)(X,{children:[Object(g.jsx)(Z,{children:"to"}),Object(g.jsx)($,{children:Object(g.jsx)(v,{value:D(o),placeholder:"dd/mm/yy",type:"date",setValue:function(e){console.log(e.target.value);var t=new Date(e.target.value);console.log(t),u(t)}})})]})]}),Object(g.jsx)("div",{style:{marginTop:"10px"},children:b}),Object(g.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px"},children:Object(g.jsx)(C,{value:"download csv",clicked:function(){return function(){var e=Object(h.e)(f,"Sensors/");if(I(!1),i>o)return void x("start date must be before end date");Object(h.a)(e).then((function(e){if(e.exists()){x(""),console.log(e.val());var t=e.val(),n=[].concat(ee);for(var a in console.log(n),t){var c=t[a].Time.split(","),r=new Date("20"+c[0]);if(console.log(r),r<=o&&r>=i){var s=t[a]["Carbon dioxide"],l=100*t[a].NIR,u=100*t[a].Clear,d=100*t[a]["F1 415nm"],p=100*t[a]["F2 445nm"],j=100*t[a]["F3 480nm"],b=100*t[a]["F4 515nm"],h=100*t[a]["F5 555nm"],f=100*t[a]["F6 590nm"],g=100*t[a]["F7 630nm"],m=100*t[a]["F8 680nm"],O=[t[a].Time,s,l,u,d,p,j,b,h,f,g,m];n.push(O)}}console.log(n.length),n.length>1?(w(n),I(!0)):x("no data in this time period")}else x("server error")}))}()},color:"lightgrey"})})]}),F&&Object(g.jsx)(Y.CSVDownload,{data:y,target:"_blank",filename:"wavedata.csv"})]});function D(e){var t=e.getFullYear(),n="".concat(parseInt(e.getMonth().toString())+1),a=e.getDate().toString();parseInt(n)<10&&(n="0"+n),parseInt(a)<10&&(a="0"+a);var c=t+"-"+n+"-"+a;return console.log(c),c}},oe=[F.darkPurple,F.purple,F.blue,F.green,F.darkBlue,F.primary,F.lightRed,F.red,"black","black"],ue=j.a.div(te||(te=Object(p.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]))),de=j.a.div(ne||(ne=Object(p.a)(["\n  height: 60px;\n  width: 100%;\n  display: flex;\n  background: #eeeeee;\n  flex-shrink: 0;\n  justify-content: flex-end;\n  align-items: center;\n"]))),pe=j.a.div(ae||(ae=Object(p.a)(["\n  height: 100%;\n  width: calc(100% / 3);\n  display: flex;\n  align-items: center;\n"]))),je=j.a.div(ce||(ce=Object(p.a)(["\n    background: #eeeeee;\n    width: 100%;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n"]))),be=j.a.div(ie||(ie=Object(p.a)(["\n    width: calc(100% - 40px);\n    height: calc(100% - 0px);\n    background: white;\n    display: flex;\n    flex-shrink: 0;\n    display: flex;\n    flex-wrap:wrap;\n    justify-content: flex-start;\n    align-items: center;\n"]))),he=j.a.div(re||(re=Object(p.a)(["\n    width: calc(100% - 50px);\n    height: calc(100% - 50px);\n    flex-shrink: 0;\n"]))),xe=j.a.div(se||(se=Object(p.a)(["\n  position: relative;\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n    font-size: 25px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    fle-direction: column;\n    align-items: center;\n    transition: all 0.3s ease;\n    &:hover {\n        color: white;\n        background: ",";\n    }\n \n"])),F.primary);var fe=function(e){var t,n=Object(c.useState)(!1),a=Object(d.a)(n,2),i=a[0],r=a[1];return Object(g.jsxs)(ue,{children:[Object(g.jsxs)(de,{children:[Object(g.jsx)(pe,{style:{justifyContent:"flex-start",paddingLeft:"20px",fontWeight:"bold"},children:"Last updated: ".concat(e.lastUpdated)}),Object(g.jsx)(pe,{style:{justifyContent:"center",fontWeight:"bold"},children:"Current time: ".concat((t=e.currentTime,t.toISOString().substring(0,10)))}),Object(g.jsx)(pe,{style:{justifyContent:"flex-end",paddingRight:"20px"},children:Object(g.jsx)(C,{value:"logout",clicked:e.logout,color:F.primary,textColor:"white"})})]}),Object(g.jsx)(je,{children:Object(g.jsxs)(be,{children:[e.waveSamples.map((function(t,n){return Object(g.jsx)("div",{style:{width:"calc(100% / 4)",height:"calc(100% / 3)",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(g.jsx)(he,{children:Object(g.jsx)(Q,{title:t.name,average:t.average,value:t.samples[0],color:oe[n],min:0,max:1.1*e.largestWave})})})})),Object(g.jsx)("div",{style:{width:"calc(100% / 4)",height:"calc(100% / 3)",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(g.jsx)(he,{children:Object(g.jsx)(Q,{title:"CO2 Graph",average:e.coAverage,value:e.coSamples[0],color:F.primary})})}),Object(g.jsx)("div",{style:{width:"calc(100% / 4)",height:"calc(100% / 3)",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(g.jsx)(he,{children:Object(g.jsxs)(xe,{onClick:function(){return r(!0)},children:[Object(g.jsx)("div",{children:"Download"}),Object(g.jsx)("div",{children:"CSV"})]})})})]})}),Object(g.jsx)("div",{style:{width:"100%",height:"30px",display:"flex",alignItems:"center",background:"#eeeeee"},children:Object(g.jsx)("div",{style:{marginLeft:"20px",fontSize:"15px"},children:"* all averages calculated using last 10 samples"})}),i&&Object(g.jsx)(le,{close:function(){return r(!1)}})]})},ge=[{name:"415nm",samples:[],average:0},{name:"445nm",samples:[],average:0},{name:"480nm",samples:[],average:0},{name:"515nm",samples:[],average:0},{name:"555nm",samples:[],average:0},{name:"590nm",samples:[],average:0},{name:"630nm",samples:[],average:0},{name:"680nm",samples:[],average:0},{name:"Clear",samples:[],average:0},{name:"NIR",samples:[],average:0}];var me=function(){var e=new Date,t=Object(c.useState)(!1),n=Object(d.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),l=s[0],p=s[1],j=Object(c.useState)(0),b=Object(d.a)(j,2),x=b[0],m=b[1],O=Object(c.useState)(ge),v=Object(d.a)(O,2),y=v[0],w=v[1],k=Object(c.useState)(0),S=Object(d.a)(k,2),C=S[0],F=S[1],I=Object(c.useState)(""),D=Object(d.a)(I,2),T=D[0],E=D[1],B=Object(c.useState)(e),V=Object(d.a)(B,2),z=V[0];return V[1],Object(c.useEffect)((function(){var e=Object(h.e)(f,"Sensors/");Object(h.c)(e,function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c,i,r,s,u,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.exists()){e.next=35;break}n=t.val(),a=0,c=[].concat(l),i=[].concat(y),e.t0=o.a.keys(n);case 8:if((e.t1=e.t0()).done){e.next=28;break}if(r=e.t1.value,10!==a){e.next=12;break}return e.abrupt("break",28);case 12:0===a&&(s=L(n[r].Time),console.log(s),E(s)),u=n[r]["Carbon dioxide"],c.push(u),i[0].samples.push(n[r]["F1 415nm"]),i[1].samples.push(n[r]["F2 445nm"]),i[2].samples.push(n[r]["F3 480nm"]),i[3].samples.push(n[r]["F4 515nm"]),i[4].samples.push(n[r]["F5 555nm"]),i[5].samples.push(n[r]["F6 590nm"]),i[6].samples.push(n[r]["F7 630nm"]),i[7].samples.push(n[r]["F8 680nm"]),i[8].samples.push(n[r].Clear),i[9].samples.push(n[r].NIR),a++,e.next=8;break;case 28:A(i),d=C,i.forEach((function(e,t){e.samples.forEach((function(e,t){e>d&&(d=e)}))})),F(d),W(c),e.next=36;break;case 35:console.log("No data available");case 36:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),a?Object(g.jsx)(fe,{coAverage:x,coSamples:l,waveSamples:y,logout:function(){i(!1)},currentTime:z,lastUpdated:T,largestWave:C}):Object(g.jsx)(R,{setLoggedIn:i});function L(e){var t=e.split(","),n=t[1].split("+");return new Date("20"+t[0]).toISOString().substring(0,10)+"  at  "+n[0]}function W(e){var t=0;e.forEach((function(e){t+=e}));var n=t/e.length;p(e),m(n)}function A(e){var t=[0,0,0,0,0,0,0,0];e.forEach((function(e,n){var a=0;e.samples.forEach((function(e,t){a+=e})),t[n]=a/e.samples.length}));for(var n=[].concat(e),a=0;a<n.length;a++)n[a].average=t[a];w(n)}},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,411)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(me,{})}),document.getElementById("root")),Oe()}},[[410,1,2]]]);
//# sourceMappingURL=main.76dc8793.chunk.js.map