(this.webpackJsonphotwager=this.webpackJsonphotwager||[]).push([[0],{143:function(e,t,a){e.exports=a(228)},148:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(23),i=a.n(o),s=(a(148),a(17)),l=a(35),u=a(27),p=a(26),d=a(28),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).instance=void 0,a.setRef=function(e){a.instance=e},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.botName,a=e.buttonSize,n=void 0===a?"medium":a,r=e.cornerRadius,o=e.requestAccess,i=void 0===o?"write":o,s=e.usePic,l=void 0!==s&&s,u=e.onLogin,p=void 0===u?function(e){return console.log(e)}:u;if(!t)return c.a.createElement("div",null,"bot name is undefined");window.TelegramLoginWidget={dataOnauth:function(e){return p(e)}};var d=document.createElement("script");d.src="https://telegram.org/js/telegram-widget.js?4",d.setAttribute("data-telegram-login",t),d.setAttribute("data-size",n),r&&d.setAttribute("data-radius",r.toString()),d.setAttribute("data-request-access",i),d.setAttribute("data-userpic",l.toString()),d.setAttribute("data-onauth","TelegramLoginWidget.dataOnauth(user)"),d.async=!0,this.instance.appendChild(d)}},{key:"render",value:function(){return c.a.createElement("div",{className:this.props.className,ref:this.setRef},this.props.children)}}]),t}(c.a.Component),h=a(247),f=a(251),m=a(252),O=a(253),j=a(254),g=a(255),v=a(256),y=a(260),w=a(257),E=a(258),k=a(69),S=a(259),x=a(248),A=a(250),z=a(249),B=a(56),C=Object(B.b)("accountsStore","dappStore")(n=Object(B.c)(n=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleTelegramResponse=function(e){console.log(a.props.accountsStore.updateUser(e).address)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.accountsStore.user,t=this.props.dappStore,a=t.k1,n=t.k2,r=t.story,o=t.chooseEvent,i=t.withdraw,s=t.load;return c.a.createElement(h.a,{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:"20px"},container:!0,spacing:6,justify:"space-between",alignItems:"center"},c.a.createElement(h.a,{item:!0,xs:6},c.a.createElement(x.a,{avatar:e?c.a.createElement(A.a,{alt:"Ted talk",src:e.photo_url}):c.a.createElement(z.a,{variant:"circle",width:40,height:40}),subheader:e?e.address:c.a.createElement(z.a,{height:6,width:"40%"}),title:e?c.a.createElement("div",null,"balance:\xa0",e.balance,"\xa0waves"):c.a.createElement(z.a,{height:6,width:"80%"})})),c.a.createElement(h.a,{item:!0,xs:6},c.a.createElement(b,{botName:"HotWagerBot",onLogin:this.handleTelegramResponse,usePic:!0})),c.a.createElement(h.a,{item:!0,xs:6},c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement(P,{title:"Event 1",k:a,user:e,chooseEvent:o,load:s}),c.a.createElement(I,{title:"Event 2",k:n,user:e,chooseEvent:o,load:s})),c.a.createElement("div",{style:{display:"flex",marginTop:"50px",justifyContent:"center"}},c.a.createElement(f.a,{disabled:s||!e||!e.seed,onClick:function(){return i(e.seed||"")},variant:"contained",color:"secondary"},"Withdraw"))),r&&c.a.createElement(h.a,{item:!0,xs:6},c.a.createElement(m.a,{"aria-label":"simple table",style:{width:"unset"}},c.a.createElement(O.a,null,c.a.createElement(j.a,null,c.a.createElement(g.a,{align:"right"},"Index"),c.a.createElement(g.a,{align:"right"},"Coefficient 1"),c.a.createElement(g.a,{align:"right"},"Coefficient 2"),c.a.createElement(g.a,null,"Your choose"))),c.a.createElement(v.a,null,r.map((function(e){var t=e.k1,a=e.k2,n=e.i,r=e.e;return c.a.createElement(j.a,{key:n},c.a.createElement(g.a,{component:"th",scope:"row"},n),c.a.createElement(g.a,{align:"right"},t/100),c.a.createElement(g.a,{align:"right"},a/100),c.a.createElement(g.a,{align:"right"},r))}))))))}}]),t}(c.a.Component))||n)||n,P=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.k,n=e.user,r=e.chooseEvent,o=e.load;return c.a.createElement(y.a,{style:{width:"250px",margin:"20px"}},c.a.createElement(w.a,null,c.a.createElement(E.a,null,c.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),c.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h3"},a&&a/100),c.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))),c.a.createElement(S.a,null,c.a.createElement(f.a,{disabled:o||!n||!n.seed,onClick:function(){return r(1,n.seed||"")},variant:"contained",color:"primary"},"Choose event")))}}]),t}(c.a.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.k,n=e.user,r=e.chooseEvent,o=e.load;return c.a.createElement(y.a,{style:{width:"250px",margin:"20px"}},c.a.createElement(w.a,null,c.a.createElement(E.a,null,c.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),c.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h3"},a&&a/100),c.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))),c.a.createElement(S.a,null,c.a.createElement(f.a,{disabled:o||!n||!n.seed,onClick:function(){return r(2,n.seed||"")},variant:"contained",color:"primary"},"Choose event")))}}]),t}(c.a.Component),T=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W,q,D,N,U,_,L,J,R,H,X,Y=a(25),F=a(24),G=a.n(F),M=a(49),V=a(20),$=a(21),K=(a(85),function e(t){Object(s.a)(this,e),this.rootStore=t}),Q=a(7),Z=a(9),ee=a(46),te=a.n(ee),ae="3N3AeA5FWm7EHheHoik8BBEA3GXXJosnVY8",ne="https://testnode1.wavesnodes.com",re=(W=function(e){function t(e,a){var n;return Object(s.a)(this,t),n=Object(u.a)(this,Object(p.a)(t).call(this,e)),Object(Y.a)(n,"user",q,Object(V.a)(n)),n.serialize=function(){return{tgUser:n.user}},Object(Y.a)(n,"deserialize",D,Object(V.a)(n)),null!=a&&n.deserialize(a),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateUser",value:function(e){return this.user&&this.user.id===e.id||(e.seed=Object(Z.randomSeed)(),e.address=Object(Z.address)(e.seed,"T"),this.user=e),this.user}},{key:"updateBalance",value:function(){var e=Object(M.a)(G.a.mark((function e(){var t,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.user||!this.user.address){e.next=6;break}return e.next=3,te.a.get("".concat(ne,"/addresses/balance/").concat(this.user.address));case 3:t=e.sent,a=t.data.balance,this.user.balance=a/1e8;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(K),q=Object($.a)(W.prototype,"user",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object($.a)(W.prototype,"updateUser",[Q.d],Object.getOwnPropertyDescriptor(W.prototype,"updateUser"),W.prototype),Object($.a)(W.prototype,"updateBalance",[Q.d],Object.getOwnPropertyDescriptor(W.prototype,"updateBalance"),W.prototype),D=Object($.a)(W.prototype,"deserialize",[Q.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){t.tgUser&&(e.user=t.tgUser)}}}),W),ce=a(83),oe=a(82),ie=a(58);function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(a,!0).forEach((function(t){Object(oe.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ue=(N=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(u.a)(this,Object(p.a)(t).call(this,e)),Object(Y.a)(a,"k1",U,Object(V.a)(a)),Object(Y.a)(a,"k2",_,Object(V.a)(a)),Object(Y.a)(a,"count1",L,Object(V.a)(a)),Object(Y.a)(a,"count2",J,Object(V.a)(a)),Object(Y.a)(a,"story",R,Object(V.a)(a)),Object(Y.a)(a,"load",H,Object(V.a)(a)),a.startWatchState=function(){return Object(Q.e)((function(e){return a.updateStateAndBalance()}),{scheduler:function(e){return setInterval(e,5e3)}})},Object(Y.a)(a,"updateStateAndBalance",X,Object(V.a)(a)),a.chooseEvent=function(){var e=Object(M.a)(G.a.mark((function e(t,n){var r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.load=!0,r={dApp:ae,feeAssetId:null,call:{function:"bet",args:[{type:"integer",value:t}]},payment:[{assetId:null,amount:1e8}],chainId:"T"},c=Object(ie.invokeScript)(r,n),e.next=5,Object(ie.broadcast)(c,ne).then((function(e){return console.log(e.id)})).catch((function(e){return alert(e)})).then((function(){return a.load=!1}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.withdraw=function(){var e=Object(M.a)(G.a.mark((function e(t){var n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={dApp:ae,feeAssetId:null,call:{function:"withdraw",args:[]},payment:[],chainId:"T"},r=Object(ie.invokeScript)(n,t),Object(ie.broadcast)(r,ne).then((function(e){return console.log(e.id)})).catch((function(e){return alert(e)})).then((function(){return a.load=!1}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.updateStateAndBalance(),a.startWatchState(),a}return Object(d.a)(t,e),t}(K),U=Object($.a)(N.prototype,"k1",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=Object($.a)(N.prototype,"k2",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=Object($.a)(N.prototype,"count1",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=Object($.a)(N.prototype,"count2",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=Object($.a)(N.prototype,"story",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=Object($.a)(N.prototype,"load",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),X=Object($.a)(N.prototype,"updateStateAndBalance",[Q.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(M.a)(G.a.mark((function t(){var a,n,r,c,o;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.rootStore.accountsStore.user&&e.rootStore.accountsStore.user.address){t.next=2;break}return t.abrupt("return");case 2:return a=e.rootStore.accountsStore.user.address,e.rootStore.accountsStore.updateBalance(),t.next=6,te.a.get("".concat(ne,"/addresses/data/").concat(ae));case 6:n=t.sent,r=n.data,c=function(e,t){var a=t.key,n=t.value;return le({},e,Object(oe.a)({},a,n))},o=r.reduce(c,{}),e.k1=o.q1_next,e.k2=o.q2_next,e.count1=o.n,e.count2=o.m,e.story=Object.entries(o).filter((function(e){var t=Object(ce.a)(e,2);t[0];return t[1]===a})).map((function(e){return Object(ce.a)(e,1)[0].split("_")[0]})).map((function(e){return{e:o["".concat(e,"_event")],k1:o["".concat(e,"_qoef1")],k2:o["".concat(e,"_qoef2")],i:+e}}));case 15:case"end":return t.stop()}}),t)})))}}),N),pe=new function e(t){var a=this;Object(s.a)(this,e),this.accountsStore=void 0,this.dappStore=void 0,this.serialize=function(){return{accountsStore:a.accountsStore.serialize()}},null==t&&(t={}),this.accountsStore=new re(this,t.accountsStore),this.dappStore=new ue(this)}(function(){try{return JSON.parse(localStorage.getItem("store"))||void 0}catch(e){return void console.log(e)}}());Object(Q.e)((function(){var e;console.dir(pe),e=pe.serialize(),localStorage.setItem("store",JSON.stringify(e))}),{delay:1e3}),i.a.render(c.a.createElement(B.a,pe,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t){}},[[143,1,2]]]);
//# sourceMappingURL=main.38567068.chunk.js.map