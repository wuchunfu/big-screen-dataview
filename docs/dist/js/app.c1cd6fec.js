(function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,s=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"000c":function(e,t,n){},"0363":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.create(null),o=n("b834"),a=n("7ad3"),i=n("1a2da");r.install=function(e){e.component("echart",o.default),e.component("image2d",a.default),e.component("image3d",i.default)},t.default=r},"04bf":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23"),o={class:"ui-chart-config"},a=["active"],i=(0,r.createTextVNode)("| "),c=["active"],u=(0,r.createTextVNode)("| "),l=["active"],d={ref:"uiBasicConfig"},f={ref:"uiBorderConfig"},s={ref:"uiChartConfig"};function p(e,t,n,p,v,h){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("nav",null,[(0,r.createElementVNode)("span",{onClick:t[0]||(t[0]=function(t){return e.flag="basic"}),active:"basic"==e.flag?"yes":"no"},"基本",8,a),i,(0,r.createElementVNode)("span",{onClick:t[1]||(t[1]=function(t){return e.flag="border"}),active:"border"==e.flag?"yes":"no"},"边框",8,c),u,(0,r.createElementVNode)("span",{onClick:t[2]||(t[2]=function(t){return e.flag="chart"}),active:"chart"==e.flag?"yes":"no"},"图表",8,l)]),(0,r.withDirectives)((0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("div",d,null,512),(0,r.createElementVNode)("button",{onClick:t[3]||(t[3]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.doUpdateBasic&&e.doUpdateBasic.apply(e,t)})},"更新")],512),[[r.vShow,"basic"==e.flag]]),(0,r.withDirectives)((0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("div",f,null,512),(0,r.createElementVNode)("button",{onClick:t[4]||(t[4]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.doUpdateBorder&&e.doUpdateBorder.apply(e,t)})},"更新")],512),[[r.vShow,"border"==e.flag]]),(0,r.withDirectives)((0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("div",s,null,512),(0,r.createElementVNode)("button",{onClick:t[5]||(t[5]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.doUpdateChart&&e.doUpdateChart.apply(e,t)})},"更新")],512),[[r.vShow,"chart"==e.flag]])])}t.render=p},"0613":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("5502"),o=(0,r.createStore)({state:function(){return{dialogs:[]}},mutations:{openDialog:function(e,t){"boolean"==typeof t.callback&&(t.noShade=t.callback,t.callback=void 0),e.dialogs.push({id:t.id,data:t.initdata,callback:t.callback,shade:t.noShade||!1})},closeDialog:function(e,t){var n=e.dialogs.pop();"function"===typeof n.callback&&n.callback(t)}}});t.default=o},"0f3a":function(e,t,n){"use strict";n.r(t);var r=n("93a4"),o=n("36ff");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var i=n("6b0d"),c=n.n(i);const u=c()(o["default"],[["render",r["render"]]]);t["default"]=u},"13bc":function(e,t,n){"use strict";n.r(t);var r=n("51bf"),o=n("9bf6");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var i=n("6b0d"),c=n.n(i);const u=c()(o["default"],[["render",r["render"]]]);t["default"]=u},1404:function(e,t,n){"use strict";n.r(t);var r=n("8e15"),o=n("8051");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("60f5");var i=n("6b0d"),c=n.n(i);const u=c()(o["default"],[["render",r["render"]],["__scopeId","data-v-1cd0ac4d"]]);t["default"]=u},"14ed":function(e,t,n){"use strict";n.r(t),t["default"]=function(e){return e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日 "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+" 星期"+["天","一","二","三","四","五","六"][e.getDay()]}},"1a2da":function(e,t,n){"use strict";var r=n("dbce").default,o=r(n("7a23"));Object.defineProperty(t,"__esModule",{value:!0});var a=n("7a23"),i=n("90e7"),c=n("4c29"),u=n("1d50");t.default=(0,a.defineComponent)({props:{shader:{type:Object},draw:{type:Function,default:function(){return function(){}}}},setup:function(e){var t,n=(0,a.ref)(),r=(0,a.ref)();return(0,a.onMounted)((function(){var o=new u(r.value,{"vertex-shader":e.shader.vertex,"fragment-shader":e.shader.fragment,depth:!0}),a=function(){var t=c.default.size(n.value);c.default.setStyles(r.value,{width:t.width+"px",height:t.height+"px"}),e.draw(o,t.width,t.height)};a(),t=(0,i.default)(n.value,(function(){a()}))})),(0,a.onBeforeUnmount)((function(){t()})),function(){return o.createVNode("div",{ref:n,style:{width:"100%",height:"100%"}},[o.createVNode("canvas",{ref:r},[o.createTextVNode("非常抱歉，您的浏览器不支持canvas!")])])}}})},"1b6d":function(e,t,n){"use strict";n.r(t);var r=n("a438"),o=n("5d46");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("eb35");var i=n("6b0d"),c=n.n(i);const u=c()(o["default"],[["render",r["render"]],["__scopeId","data-v-55f878f4"]]);t["default"]=u},"216d":function(e,t,n){"use strict";n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default={warning:function(){return Promise.resolve().then((function(){return n("729a")}))}}},"22ff":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23");t.default=(0,r.defineComponent)({props:["is","data"],setup:function(e){var t=(0,r.ref)(null),n=function(e){e().then((function(e){t.value=e.default}))};n(e.is),(0,r.watch)((function(){return e.is}),(function(e){n(e)}));var o=(0,r.ref)(e.data);return(0,r.watch)((function(){return e.data}),(function(e){o.value=e})),{instance:t,data:o}}})},2341:function(e,t,n){"use strict";var r=n("a5f9");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},"27a9":function(e,t,n){},"36ff":function(e,t,n){"use strict";n.r(t);var r=n("22ff"),o=n.n(r);for(var a in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a)},"3dfd":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=function(e){return Object(r["pushScopeId"])("data-v-42414b4d"),e=e(),Object(r["popScopeId"])(),e},a={class:"rootApp"},i={class:"ui-main"},c=o((function(){return Object(r["createElementVNode"])("a",{href:"https://github.com/hai2007/big-screen-dataview",target:"_blank"},"Fork Me on Github",-1)})),u={class:"ui-dialog"};function l(e,t,n,o,l,d){var f=Object(r["resolveComponent"])("router-view"),s=Object(r["resolveComponent"])("lazy-component");return Object(r["openBlock"])(),Object(r["createElementBlock"])("ul",a,[Object(r["createElementVNode"])("li",i,[Object(r["createVNode"])(f),c]),Object(r["createElementVNode"])("li",u,[e.$store.state.dialogs.length>0&&!e.$store.state.dialogs[e.$store.state.dialogs.length-1].shade?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:0,onClick:t[0]||(t[0]=Object(r["withModifiers"])((function(t){return e.$store.commit("closeDialog")}),["stop"])),class:"view shade"})):Object(r["createCommentVNode"])("",!0),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.$store.state.dialogs,(function(e,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"view",defType:"dialogFrame",key:n},[Object(r["createElementVNode"])("div",{onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){return d.doIt()}),["stop"]))},[Object(r["createVNode"])(s,{is:l.all_dialog[e.id],data:e.data},null,8,["is","data"])])])})),128))])])}var d=n("216d"),f=n.n(d),s=n("0f3a"),p={data:function(){return{all_dialog:f.a}},components:{lazyComponent:s["default"]},methods:{doIt:function(){}}},v=(n("feba"),n("6b0d")),h=n.n(v);const b=h()(p,[["render",l],["__scopeId","data-v-42414b4d"]]);t["default"]=b},4916:function(e,t,n){"use strict";n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0});var r=n("4c29");t.default={mounted:function(e,t){"close"!=t.arg&&r.default.bind(e,"mousedown",(function(t){e.setCapture&&e.setCapture();while(e.parentNode&&"dialogFrame"!=e.getAttribute("defType"))e=e.parentNode;var n=t.clientX,o=t.clientY,a=r.default.getStyle(e,"left").replace("px",""),i=r.default.getStyle(e,"top").replace("px","");function c(t){e.style.left=a- -t.clientX-n+"px",e.style.top=i- -t.clientY-o+"px"}r.default.bind(document,"mousemove",c),r.default.bind(document,"mouseup",(function(t){return r.default.unbind(document,"mousemove",c),e.releaseCapture&&e.releaseCapture(),!1}))}))}}},"51bf":function(e,t,n){"use strict";var r=n("e269");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},"5d46":function(e,t,n){"use strict";n.r(t);var r=n("b97a"),o=n.n(r);for(var a in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a)},"5ddd":function(e,t,n){"use strict";var r=n("6510");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},"5e62":function(e,t,n){"use strict";n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0});var r=n("6c02"),o=[{path:"/",name:"Editor",component:function(){return Promise.resolve().then((function(){return n("83fc")}))}}],a=(0,r.createRouter)({history:(0,r.createWebHashHistory)(),routes:o});t.default=a},"60f5":function(e,t,n){"use strict";n("99a8")},6465:function(e,t,n){},6510:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23"),o=function(e){return(0,r.pushScopeId)("data-v-00a7b2f4"),e=e(),(0,r.popScopeId)(),e},a={class:"title"},i=o((function(){return(0,r.createElementVNode)("span",{class:"left"},[(0,r.createElementVNode)("i"),(0,r.createTextVNode)("本项目由 "),(0,r.createElementVNode)("a",{href:"https://hai2007.gitee.io/sweethome/",target:"_blank"},"你好2007"),(0,r.createTextVNode)(" 设计并开发")],-1)})),c={class:"center"},u={class:"right"};function l(e,t,n,o,l,d){return(0,r.openBlock)(),(0,r.createElementBlock)("div",a,[i,(0,r.createElementVNode)("span",c,(0,r.toDisplayString)(e.title),1),(0,r.createElementVNode)("span",u,(0,r.toDisplayString)(e.nowadays),1)])}t.render=l},"729a":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"warning"},a=["innerHTML"],i={class:"btlist"},c=["value"],u=["value"];function l(e,t,n,l,d,f){var s=Object(r["resolveDirective"])("move");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createElementBlock"])("h2",null,[Object(r["createTextVNode"])(Object(r["toDisplayString"])(n.data[2]),1)])),[[s]]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("div",{class:"content",innerHTML:n.data[1]},null,8,a),Object(r["createElementVNode"])("div",i,[Object(r["createElementVNode"])("input",{type:"button",class:"yes",value:n.data[3],onClick:t[0]||(t[0]=function(t){return e.$store.commit("closeDialog","yes")})},null,8,c),"confirm"==n.data[0]?(Object(r["openBlock"])(),Object(r["createElementBlock"])("input",{key:0,type:"button",class:"no",value:n.data[4],onClick:t[1]||(t[1]=function(t){return e.$store.commit("closeDialog","no")})},null,8,u)):Object(r["createCommentVNode"])("",!0)])])])}var d={props:["data"]},f=(n("b0ed"),n("6b0d")),s=n.n(f);const p=s()(d,[["render",l],["__scopeId","data-v-211c0eb6"]]);t["default"]=p},"74e3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23");t.default=(0,r.defineComponent)({props:{data:{type:Object}},setup:function(e){var t=e.data.title,n=(0,r.ref)(null);return(0,r.watch)((function(){return e.data}),(function(e){t=e.title,n.value.doUpdate()})),{mychart:n,draw:function(e,n,r){e.config({textAlign:"center",fillStyle:"white","font-size":10}).fillText(t,.5*n,10),e.config({strokeStyle:"#76adfd"}).beginPath().moveTo(120,20).lineTo(n-120,20).stroke().beginPath().moveTo(120,r-10).lineTo(n-120,r-10).stroke().beginPath().moveTo(100,r-10).lineTo(60,r-10).lineTo(10,r-60).lineTo(10,60).lineTo(60,20).lineTo(100,20).stroke().beginPath().moveTo(n-100,r-10).lineTo(n-60,r-10).lineTo(n-10,r-60).lineTo(n-10,60).lineTo(n-60,20).lineTo(n-100,20).stroke(),e.config({strokeStyle:"#aac9e7",lineWidth:3}).beginPath().moveTo(30,50).lineTo(60,25).lineTo(100,25).stroke().beginPath().moveTo(n-30,50).lineTo(n-60,25).lineTo(n-100,25).stroke().beginPath().moveTo(30,r-45).lineTo(60,r-15).lineTo(100,r-15).stroke().beginPath().moveTo(n-30,r-45).lineTo(n-60,r-15).lineTo(n-100,r-15).stroke()}}}})},"7ad3":function(e,t,n){"use strict";var r=n("dbce").default,o=r(n("7a23"));Object.defineProperty(t,"__esModule",{value:!0});var a=n("7a23"),i=n("90e7"),c=n("4c29"),u=n("acfc");t.default=(0,a.defineComponent)({props:{draw:{type:Function,default:function(){return function(){}}}},setup:function(e,t){var n,r,l=t.expose,d=(0,a.ref)(),f=(0,a.ref)();return(0,a.onMounted)((function(){var t=u(f.value);n=function(){var n=c.default.size(d.value);t.css({width:n.width+"px",height:n.height+"px"}),e.draw(t.painter().clearRect(),n.width,n.height)},n(),r=(0,i.default)(d.value,(function(){n()}))})),(0,a.onBeforeUnmount)((function(){r()})),l({doUpdate:function(){n()}}),function(){return o.createVNode("div",{ref:d,style:{width:"100%",height:"100%"}},[o.createVNode("canvas",{ref:f},[o.createTextVNode("非常抱歉，您的浏览器不支持canvas!")])])}}})},"7c43":function(e,t,n){"use strict";n.r(t);var r=n("deac"),o=n.n(r);for(var a in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a)},"7f27":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),o=n("3b12"),a=n("8bc0");t.default=(0,r.defineComponent)({props:{background:a.default},setup:function(e,t){var n=(0,r.ref)(null),a=(0,r.ref)(e.background.type),i=(0,r.ref)(e.background.color),c=(0,r.ref)(e.background.image);function u(){t.emit("update:background",{type:a.value,color:i.value,image:c.value})}return(0,r.onMounted)((function(){o(n.value,e.background.color,"选择颜色").then((function(e){i.value=e,u()}))})),{type:a,color:i,image:c,colorBtn:n,setImage:function(e){var t=e.target.files[0],n=new FileReader;n.onload=function(){c.value=n.result,u()},n.readAsDataURL(t)}}}})},8051:function(e,t,n){"use strict";n.r(t);var r=n("7f27"),o=n.n(r);for(var a in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a)},"83fc":function(e,t,n){"use strict";n.r(t);var r=n("d253"),o=n("7c43");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var i=n("6b0d"),c=n.n(i);const u=c()(o["default"],[["render",r["render"]]]);t["default"]=u},8418:function(e,t,n){"use strict";n.r(t);var r=n("74e3"),o=n.n(r);for(var a in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a)},"84de":function(e,t,n){},"8bc0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e}();t.default=r},"8e15":function(e,t,n){"use strict";var r=n("d06d");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},"8fe2":function(e,t,n){"use strict";n.r(t);var r=n("5ddd"),o=n("cc60");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("d2a5");var i=n("6b0d"),c=n.n(i);const u=c()(o["default"],[["render",r["render"]],["__scopeId","data-v-00a7b2f4"]]);t["default"]=u},"90e7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=!0;function o(e,t){var n=null,o=!1,a=!1,i=function(){if(o)a=!0;else{o=!0;var e=window.setInterval((function(){a||(window.clearInterval(e),o=!1,t()),a=!1}),100)}};try{n=new ResizeObserver(i),n.observe(e)}catch(c){r&&(console.error("ResizeObserver undefined!"),r=!1),i(),window.addEventListener("resize",i,!1)}return function(){n&&n.disconnect()}}t.default=o},"93a4":function(e,t,n){"use strict";var r=n("ff96");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},"99a8":function(e,t,n){},"9a74":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={background:{type:"color",color:"#000000",image:""},chartlist:[{basic:{width:100,height:8,left:0,top:0},border:{name:"none",options:{}},chart:{type:"define",name:"uiChartType1",options:{title:"· 可视化大屏探索和实践 ·"}}},{basic:{width:40,height:46,left:0,top:10},border:{name:"uiBorderType1",options:{title:"一周收入纪录"}},chart:{type:"echart",options:{grid:{left:70},yAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},xAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}}},{basic:{width:20,height:46,left:40,top:10},border:{name:"uiBorderType2",options:{title:"一周消费记录"}},chart:{type:"echart",options:{angleAxis:{},radiusAxis:{type:"category",data:["Mon","Tue","Wed","Thu"],z:10},polar:{},series:[{type:"bar",data:[1,2,3,4],coordinateSystem:"polar",name:"A",stack:"a",emphasis:{focus:"series"}},{type:"bar",data:[2,4,6,8],coordinateSystem:"polar",name:"B",stack:"a",emphasis:{focus:"series"}},{type:"bar",data:[1,2,3,4],coordinateSystem:"polar",name:"C",stack:"a",emphasis:{focus:"series"}}]}}},{basic:{width:40,height:46,left:60,top:10},border:{name:"uiBorderType1",options:{title:"消费类型分布情况"}},chart:{type:"echart",options:{xAxis:{},yAxis:{},series:[{symbolSize:20,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],type:"scatter"}]}}},{basic:{width:33.3,height:45,left:0,top:56},border:{name:"uiBorderType1",options:{title:"不同商品的比例"}},chart:{type:"echart",options:{series:[{name:"Nightingale Chart",type:"pie",radius:[30,70],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:8},data:[{value:40,name:"rose 1"},{value:38,name:"rose 2"},{value:32,name:"rose 3"},{value:30,name:"rose 4"},{value:28,name:"rose 5"},{value:26,name:"rose 6"},{value:22,name:"rose 7"},{value:18,name:"rose 8"}]}]}}},{basic:{width:33.3,height:45,left:33.3,top:56},border:{name:"uiBorderType1",options:{title:"组之间的类比"}},chart:{type:"echart",options:{grid:{left:70},tooltip:{},dataset:{dimensions:["product","2015","2016","2017"],source:[{product:"Matcha Latte",2015:43.3,2016:85.8,2017:93.7},{product:"Milk Tea",2015:83.1,2016:73.4,2017:55.1},{product:"Cheese Cocoa",2015:86.4,2016:65.2,2017:82.5},{product:"Walnut Brownie",2015:72.4,2016:53.9,2017:39.1}]},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]}}},{basic:{width:33.3,height:45,left:66.6,top:56},border:{name:"uiBorderType1",options:{title:"指数变化拟合"}},chart:{type:"echart",options:{grid:{left:70},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}]}}}]};t.default=r},"9bf6":function(e,t,n){"use strict";n.r(t);var r=n("d126"),o=n.n(r);for(var a in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a)},"9eec":function(e,t,n){"use strict";n.r(t);var r=n("2341"),o=n("8418");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var i=n("6b0d"),c=n.n(i);const u=c()(o["default"],[["render",r["render"]]]);t["default"]=u},a438:function(e,t,n){"use strict";var r=n("04bf");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},a4ec:function(e,t,n){"use strict";n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default={uiChartType1:function(){return Promise.resolve().then((function(){return n("8fe2")}))}}},a5f9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23");function o(e,t,n,o,a,i){var c=(0,r.resolveComponent)("image2d");return(0,r.openBlock)(),(0,r.createBlock)(c,{draw:e.draw,ref:"mychart"},null,8,["draw"])}t.render=o},ab10:function(e,t,n){"use strict";n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default={uiBorderType1:function(){return Promise.resolve().then((function(){return n("9eec")}))},uiBorderType2:function(){return Promise.resolve().then((function(){return n("13bc")}))}}},b0ed:function(e,t,n){"use strict";n("efb1")},b81d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={textStyle:{color:"#ffffff"}}},b834:function(e,t,n){"use strict";var r=n("dbce").default,o=r(n("7a23"));n("e9c4"),Object.defineProperty(t,"__esModule",{value:!0});var a=n("7a23"),i=n("313e"),c=n("90e7"),u=n("4c29"),l=n("b81d");t.default=(0,a.defineComponent)({props:{options:{type:Object,default:function(){return{}}}},setup:function(e,t){t.expose;var n,r,d=(0,a.ref)();return(0,a.onMounted)((function(){i.registerTheme("big-screen-dataview",l.default),n=i.init(d.value,"big-screen-dataview"),n.setOption(e.options),r=(0,c.default)(d.value,(function(){var e=JSON.parse(JSON.stringify(n.getOption()));n.clear(),n.resize(u.default.size(d.value)),n.setOption(e)}))})),(0,a.onBeforeUnmount)((function(){n.dispose(),n=null,r()})),(0,a.watch)((function(){return e.options}),(function(e){n.setOption(e)})),function(){return o.createVNode("div",{ref:d,style:{width:"100%",height:"100%"}},null)}}})},b97a:function(e,t,n){"use strict";n("e9c4"),Object.defineProperty(t,"__esModule",{value:!0});var r=n("9ab4"),o=n("7a23"),a=n("4eb3"),i={color:{background:"#ffffff",text:"#000000",number:"#888484",edit:"#eaeaf1",cursor:"#ff0000",select:"#6c6cf1"},shader:["javascript",{text:"#000000",annotation:"#6a9955",insign:"#999999",key:"#ff0000",string:"#ac4c1e",funName:"#1e50b3",execName:"#1e83b1"}]};t.default=(0,o.defineComponent)({props:{chart:{},border:{},basic:{}},setup:function(e,t){var n,c,u,l=(0,o.ref)(null),d=(0,o.ref)(null),f=(0,o.ref)(null);return(0,o.onMounted)((function(){n=new a((0,r.__assign)({el:l.value,content:JSON.stringify(e.chart,null,2)},i)),c=new a((0,r.__assign)({el:d.value,content:JSON.stringify(e.border,null,2)},i)),u=new a((0,r.__assign)({el:f.value,content:JSON.stringify(e.basic,null,2)},i)),(0,o.watch)((function(){return e.chart}),(function(e){n.valueOf(JSON.stringify(e,null,2))})),(0,o.watch)((function(){return e.border}),(function(e){c.valueOf(JSON.stringify(e,null,2))})),(0,o.watch)((function(){return e.basic}),(function(e){u.valueOf(JSON.stringify(e,null,2))}))})),{uiBorderConfig:d,uiChartConfig:l,uiBasicConfig:f,doUpdateBorder:function(){t.emit("update:border",JSON.parse(c.valueOf()))},doUpdateChart:function(){t.emit("update:chart",JSON.parse(n.valueOf()))},doUpdateBasic:function(){t.emit("update:basic",JSON.parse(u.valueOf()))},flag:(0,o.ref)("basic")}}})},c153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),o=n("14ed");t.default=(0,r.defineComponent)({name:"title",props:{data:{type:Object}},setup:function(e){var t=null,n=(0,r.ref)((0,o.default)(new Date));(0,r.onMounted)((function(){t=window.setInterval((function(){n.value=(0,o.default)(new Date)}),1e3)})),(0,r.onUnmounted)((function(){return window.clearInterval(t)}));var a=(0,r.ref)(e.data.title);return(0,r.watch)((function(){return e.data}),(function(e){a.value=e.title})),{nowadays:n,title:a}}})},cc5e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.create(null);r.install=function(e){e.mixin({methods:{$alert:function(e,t,n){e=e||"未知错误",this.$store.commit("openDialog",{id:"warning",initdata:["alert",e,t||"温馨提示","确定"],callback:function(){"function"==typeof n&&n()}})}}})},t.default=r},cc60:function(e,t,n){"use strict";n.r(t);var r=n("c153"),o=n.n(r);for(var a in n.d(t,"default",(function(){return o.a})),r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a)},cd49:function(e,t,n){"use strict";n("e260"),n("e6cf"),n("cca6"),n("a79d"),Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),o=n("3dfd");n("8afe"),n("000c"),n("27a9");var a=n("5e62"),i=n("0363"),c=n("ee2f"),u=n("cc5e"),l=n("da97"),d=n("0613"),f=n("4916"),s=(0,r.createApp)(o.default);s.use(c.default).use(i.default).use(u.default).use(l.default).use(a.default).use(d.default).directive("move",f.default).mount("#app")},d06d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23"),o=function(e){return(0,r.pushScopeId)("data-v-1cd0ac4d"),e=e(),(0,r.popScopeId)(),e},a={class:"ui-view-config"},i=o((function(){return(0,r.createElementVNode)("label",null,"类型：",-1)})),c=(0,r.createTextVNode)("颜色 "),u=(0,r.createTextVNode)("图片 "),l=o((function(){return(0,r.createElementVNode)("label",null,"颜色：",-1)})),d=o((function(){return(0,r.createElementVNode)("label",null,"图片：",-1)}));function f(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",a,[(0,r.createElementVNode)("div",null,[i,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"radio",name:"type","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.type=t}),value:"color"},null,512),[[r.vModelRadio,e.type]]),c,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"radio",name:"type","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.type=t}),value:"image"},null,512),[[r.vModelRadio,e.type]]),u]),(0,r.withDirectives)((0,r.createElementVNode)("div",null,[l,(0,r.createElementVNode)("button",{class:"btn-color",ref:"colorBtn",style:(0,r.normalizeStyle)({backgroundColor:e.color})},null,4)],512),[[r.vShow,"color"==e.type]]),(0,r.withDirectives)((0,r.createElementVNode)("div",null,[d,(0,r.createElementVNode)("input",{type:"file",style:{width:"130px"},onChange:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.setImage&&e.setImage.apply(e,t)}),accept:"image/*"},null,32)],512),[[r.vShow,"image"==e.type]])])}t.render=f},d126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23");t.default=(0,r.defineComponent)({props:{data:{type:Object}},setup:function(e){var t=e.data.title,n=(0,r.ref)(null);return(0,r.watch)((function(){return e.data}),(function(e){t=e.title,n.value.doUpdate()})),{mychart:n,draw:function(e,n,r){e.config({textAlign:"center",fillStyle:"white","font-size":10}).fillText(t,.5*n,10),e.config({strokeStyle:"#62639c"}).beginPath().moveTo(20,20).lineTo(n-20,20).lineTo(n-10,30).lineTo(n-10,r-20).lineTo(n-20,r-10).lineTo(20,r-10).lineTo(10,r-20).lineTo(10,30).closePath().stroke(),e.config({strokeStyle:"white",lineWidth:2}).beginPath().moveTo(n-50,20).lineTo(n-20,20).lineTo(n-10,30).lineTo(n-10,60).stroke().beginPath().moveTo(10,r-50).lineTo(10,r-20).lineTo(20,r-10).lineTo(50,r-10).stroke(),e.config({strokeStyle:"#172878",fillStyle:"#172878",lineWidth:3}).beginPath().moveTo(0,23).lineTo(13,10).lineTo(50,10).stroke().fillCircle(52,10,4).beginPath().moveTo(n,23).lineTo(n-13,10).lineTo(n-50,10).stroke().fillCircle(n-52,10,4)}}}})},d253:function(e,t,n){"use strict";var r=n("f6af");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]}))},d2a5:function(e,t,n){"use strict";n("84de")},da97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.create(null);r.install=function(e){e.mixin({methods:{$confirm:function(e,t,n,r,o,a){if(!e||!t||"function"!==typeof n)throw Error("确认回调为必传参数！");this.$store.commit("openDialog",{id:"warning",initdata:["confirm",t,e,o||"确定",a||"取消"],callback:function(e){"yes"==e?n():"no"==e&&"function"==typeof r&&r()}})}}})},t.default=r},deac:function(e,t,n){"use strict";n("a434"),Object.defineProperty(t,"__esModule",{value:!0});var r=n("7a23"),o=n("1404"),a=n("1b6d"),i=n("9a74"),c=n("0f3a"),u=n("ab10"),l=n("a4ec");t.default=(0,r.defineComponent)({setup:function(){var e=(0,r.reactive)(i.default),t=(0,r.ref)(-1),n=(0,r.ref)(!1),o=null,a=null,c=function(n,r){var i=(n-o[0])/document.body.clientWidth*100,c=(r-o[1])/document.body.clientHeight*100;e.chartlist[t.value].basic.left=a[0]+i,e.chartlist[t.value].basic.top=a[1]+c},d=null,f=null,s=function(n,r){var o=(n-d[0])/document.body.clientWidth*100,a=(r-d[1])/document.body.clientHeight*100;e.chartlist[t.value].basic.width=f[0]+o,e.chartlist[t.value].basic.height=f[1]+a},p=function(){var e=t.value;t.value=-1,setTimeout((function(){t.value=e}))};return{deleteItem:function(t){this.$confirm("温馨提示","是否确定删除当前选中图表?",(function(){e.chartlist.splice(t,1)}))},dataView:e,currentIndex:t,currentConfigShow:n,currentConfig:(0,r.ref)("all"),updateCurrentChart:function(n){e.chartlist[t.value].chart=n},updateCurrentBorder:function(n){e.chartlist[t.value].border=n},updateCurrentBasic:function(n){e.chartlist[t.value].basic=n},borderLazy:(0,r.ref)(u.default),chartLazy:(0,r.ref)(l.default),allConfigShow:(0,r.ref)(!1),addNewChart:function(){e.chartlist.push({basic:{width:30,height:30,left:0,top:0},border:{name:"uiBorderType1",options:{}},chart:{type:"none",name:"",options:{}}})},mousedownMoveChart:function(n,r){t.value=r,o=[n.x,n.y],a=[e.chartlist[t.value].basic.left,e.chartlist[t.value].basic.top]},mousemoveMoveChart:function(e){null!=o&&c(e.x,e.y)},mouseupMoveChart:function(){null!=o&&p(),o=null},mousedownResizeChart:function(n){d=[n.x,n.y],f=[e.chartlist[t.value].basic.width,e.chartlist[t.value].basic.height]},mousemoveResizeChart:function(e){null!=d&&s(e.x,e.y)},mouseupResizeChart:function(){null!=d&&p(),d=null}}},components:{uiViewConfig:o.default,uiChartConfig:a.default,lazyComponent:c.default}})},e269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23");function o(e,t,n,o,a,i){var c=(0,r.resolveComponent)("image2d");return(0,r.openBlock)(),(0,r.createBlock)(c,{draw:e.draw,ref:"mychart"},null,8,["draw"])}t.render=o},eb35:function(e,t,n){"use strict";n("f823")},ee2f:function(e,t,n){"use strict";n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.create(null),o=function(e,t,r){return new Promise((function(o,a){n("fd5e")({method:e,url:t,data:r,header:{},timeout:6e3},(function(e){o(e)}),(function(e){a(e)}))}))};r.install=function(e){e.mixin({methods:{$get:function(e){return o("GET",e)}}})},t.default=r},efb1:function(e,t,n){},f6af:function(e,t,n){"use strict";n("b0c0"),Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23"),o={class:"container"},a=["onMousedown"],i={class:"btn-list"},c=["onClick"],u={class:"fill-view"},l={key:1,class:"fill-view"},d=(0,r.createTextVNode)(" 全局配置 "),f=(0,r.createTextVNode)(" 选中配置 ");function s(e,t,n,s,p,v){var h=(0,r.resolveComponent)("lazy-component"),b=(0,r.resolveComponent)("echart"),m=(0,r.resolveComponent)("ui-view-config"),y=(0,r.resolveComponent)("ui-chart-config"),g=(0,r.resolveDirective)("move");return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"editor-page",onMousemove:t[10]||(t[10]=function(t){e.mousemoveMoveChart(t),e.mousemoveResizeChart(t)}),onMouseup:t[11]||(t[11]=function(t){e.mouseupMoveChart(),e.mouseupResizeChart()})},[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",{style:(0,r.normalizeStyle)({background:"color"==e.dataView.background.type?e.dataView.background.color:"url("+e.dataView.background.image+")"})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.dataView.chartlist,(function(n,o){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:n,style:(0,r.normalizeStyle)([{position:"absolute"},{left:n.basic.left+"%",top:n.basic.top+"%",width:n.basic.width+"%",height:n.basic.height+"%"}]),class:(0,r.normalizeClass)(e.currentIndex==o?"active":""),onMousedown:function(t){return e.mousedownMoveChart(t,o)}},[(0,r.createElementVNode)("div",{class:"resize",onMousedown:t[0]||(t[0]=(0,r.withModifiers)((function(t){return e.mousedownResizeChart(t)}),["stop"]))},null,32),(0,r.withDirectives)((0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("span",{class:"config",onClick:t[1]||(t[1]=(0,r.withModifiers)((function(t){return e.currentConfigShow=!e.currentConfigShow}),["stop"]))},"配置"),(0,r.createElementVNode)("span",{class:"delete",onClick:(0,r.withModifiers)((function(t){return e.deleteItem(o)}),["stop"])},"删除",8,c),(0,r.createElementVNode)("span",{class:"close",onMousedown:t[2]||(t[2]=(0,r.withModifiers)((function(t){return e.currentIndex=-1}),["stop"]))},"关闭",32)],512),[[r.vShow,e.currentIndex==o]]),(0,r.createElementVNode)("div",u,["none"!=n.border.name?((0,r.openBlock)(),(0,r.createBlock)(h,{key:0,is:e.borderLazy[n.border.name],data:n.border.options},null,8,["is","data"])):(0,r.createCommentVNode)("",!0)]),"echart"==n.chart.type?((0,r.openBlock)(),(0,r.createBlock)(b,{key:0,options:n.chart.options},null,8,["options"])):(0,r.createCommentVNode)("",!0),"define"==n.chart.type?((0,r.openBlock)(),(0,r.createElementBlock)("div",l,[(0,r.createVNode)(h,{is:e.chartLazy[n.chart.name],data:n.chart.options},null,8,["is","data"])])):(0,r.createCommentVNode)("",!0)],46,a)})),128))],4)]),(0,r.createElementVNode)("div",{class:"add-btn fixed-btn",title:"点击我新增小图形",onClick:t[3]||(t[3]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.addNewChart&&e.addNewChart.apply(e,t)})}),(0,r.createElementVNode)("div",{class:"config-btn fixed-btn",title:"点击我打卡或关闭全局配置界面",onClick:t[4]||(t[4]=function(t){return e.allConfigShow=!e.allConfigShow})}),(0,r.withDirectives)((0,r.createElementVNode)("div",{class:"config all",defType:"dialogFrame",onMousedown:t[7]||(t[7]=function(t){return e.currentConfig="all"}),style:(0,r.normalizeStyle)({zIndex:"all"==e.currentConfig?3:2})},[(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("h2",null,[d,(0,r.createElementVNode)("span",{onClick:t[5]||(t[5]=function(t){return e.allConfigShow=!1})},"X")])),[[g]]),(0,r.createVNode)(m,{background:e.dataView.background,"onUpdate:background":t[6]||(t[6]=function(t){return e.dataView.background=t})},null,8,["background"])],36),[[r.vShow,e.allConfigShow]]),(0,r.withDirectives)((0,r.createElementVNode)("div",{class:"config chart",defType:"dialogFrame",onMousedown:t[9]||(t[9]=function(t){return e.currentConfig="chart"}),style:(0,r.normalizeStyle)({zIndex:"chart"==e.currentConfig?3:2})},[(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("h2",null,[f,(0,r.createElementVNode)("span",{onClick:t[8]||(t[8]=function(t){return e.currentConfigShow=!1})},"X")])),[[g]]),-1!=e.currentIndex?((0,r.openBlock)(),(0,r.createBlock)(y,{key:0,chart:e.dataView.chartlist[e.currentIndex]&&e.dataView.chartlist[e.currentIndex].chart,"onUpdate:chart":e.updateCurrentChart,border:e.dataView.chartlist[e.currentIndex]&&e.dataView.chartlist[e.currentIndex].border,"onUpdate:border":e.updateCurrentBorder,basic:e.dataView.chartlist[e.currentIndex]&&e.dataView.chartlist[e.currentIndex].basic,"onUpdate:basic":e.updateCurrentBasic},null,8,["chart","onUpdate:chart","border","onUpdate:border","basic","onUpdate:basic"])):(0,r.createCommentVNode)("",!0)],36),[[r.vShow,e.currentConfigShow&&-1!=e.currentIndex]])])],32)}t.render=s},f823:function(e,t,n){},feba:function(e,t,n){"use strict";n("6465")},ff96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n("7a23");function o(e,t,n,o,a,i){return(0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)(e.instance),{data:e.data},null,8,["data"])}t.render=o}});