"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[179],{7216:function(m,g,r){var D=r(6992),K=r(1539),C=r(8674),S=r(8783),I=r(3948),B=r(578),y=r(6071),M=r(5538),h=r(7294),A=r(3935),j=r(8718),p=r(3942),W=r(3727),E=r(5977),L=r(2222),T=r(4268),t=r(3339);function n(i,v,P){return v in i?Object.defineProperty(i,v,{value:P,enumerable:!0,configurable:!0,writable:!0}):i[v]=P,i}var a=[t.X6.middleware];if(!1)var f,c,o;var l=(0,T.xC)({middleware:function(v){return v().concat(a)},devTools:!1,reducer:n({helloWorld:t.ZP},t.X6.reducerPath,t.X6.reducer)}),u=l,d=function(){return useDispatch()},e=r(5893);B.Z.use(j.Db).use(y.Z).use(M.Z).init({debug:!0,fallbackLng:"en",load:"currentOnly",interpolation:{escapeValue:!1},backend:{loadPath:"/over-design/locales/{{lng}}/{{ns}}.json"}});var x=h.lazy(function(){return Promise.all([r.e(63),r.e(826)]).then(r.bind(r,4826))}),O=h.lazy(function(){return r.e(921).then(r.bind(r,9527))});A.render((0,e.jsx)(h.StrictMode,{children:(0,e.jsx)(p.zt,{store:u,children:(0,e.jsx)(h.Suspense,{fallback:"Loading...",children:(0,e.jsx)(W.VK,{basename:"/over-design",children:(0,e.jsxs)(E.rs,{children:[(0,e.jsx)(E.AW,{path:"/",exact:!0,children:(0,e.jsx)(x,{})}),(0,e.jsx)(E.AW,{path:"/data-url",children:(0,e.jsx)(O,{})})]})})})})}),document.querySelector("#root"))},3339:function(m,g,r){r.d(g,{X6:function(){return E}});var D=r(1539),K=r.n(D),C=r(8674),S=r.n(C),I=r(5666),B=r.n(I),y=r(4268),M=r(2105),h=r(9669),A=r.n(h);function j(t,n,a,f,c,o,l){try{var u=t[o](l),d=u.value}catch(e){a(e);return}u.done?n(d):Promise.resolve(d).then(f,c)}function p(t){return function(){var n=this,a=arguments;return new Promise(function(f,c){var o=t.apply(n,a);function l(d){j(o,f,c,l,u,"next",d)}function u(d){j(o,f,c,l,u,"throw",d)}l(void 0)})}}var W=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{baseUrl:""},a=n.baseUrl;return function(){var f=p(regeneratorRuntime.mark(function c(o){var l,u,d,e,x,O,i,v,P,R,U;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=o.url,u=o.method,d=o.data,e=o.__disableNotification,s.prev=1,s.next=4,A()({url:a+l,method:u,data:d});case 4:return x=s.sent,s.abrupt("return",{data:x.data});case 8:return s.prev=8,s.t0=s.catch(1),v=s.t0,e&&alert((P=(R=v.response)===null||R===void 0||(U=R.data)===null||U===void 0?void 0:U.message)!==null&&P!==void 0?P:"Operation failed."),s.abrupt("return",{error:{status:(O=v.response)===null||O===void 0?void 0:O.status,data:(i=v.response)===null||i===void 0?void 0:i.data}});case 13:case"end":return s.stop()}},c,null,[[1,8]])}));return function(c){return f.apply(this,arguments)}}()},E=(0,M.LC)({reducerPath:"helloWorldAPI",baseQuery:W({baseUrl:"https://httpstat.us"}),endpoints:function(n){return{getASuccessAPI:n.query({query:function(){return{url:"/200"}}}),getAFailedAPI:n.query({query:function(){return{url:"/400"}}})}}}),L=(0,y.oM)({name:"helloWorld",initialState:{json:{},loading:!1},reducers:{setJSON:function(n,a){n.json=a.payload}},extraReducers:function(){}}),T=L.actions.setJSON;g.ZP=L.reducer}},function(m){var g=function(D){return m(m.s=D)};m.O(0,[216],function(){return g(7216)});var r=m.O()}]);
