(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-727ce9d6"],{"0418":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myHeader"},[t._v(" "+t._s(t.backStatus)+" "),r("van-nav-bar",{attrs:{title:t.title,border:!1,fixed:"","left-arrow":t.backStatus},on:{"click-left":t.goBack}})],1)},n=[],i=(r("b0c0"),r("ade3")),s=(r("5246"),r("6b41")),o={name:"MyHeader",props:{backStatus:{type:Boolean,default:!0},title:{type:String},bgColor:{type:String,default:"#FAAD14"}},data:function(){return{}},components:Object(i["a"])({},s["a"].name,s["a"]),methods:{goBack:function(){this.backStatus&&window.history.go(-1)}}},c=o,l=(r("1646"),r("2877")),u=Object(l["a"])(c,a,n,!1,null,"a759e202",null);e["a"]=u.exports},1646:function(t,e,r){"use strict";var a=r("c04a"),n=r.n(a);n.a},5246:function(t,e,r){"use strict";r("68ef"),r("9d70"),r("3743"),r("8a0b")},"6b41":function(t,e,r){"use strict";var a=r("d282"),n=r("b1d2"),i=r("ad06"),s=Object(a["a"])("nav-bar"),o=s[0],c=s[1];e["a"]=o({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(i["a"],{class:c("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:c("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:c("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[c({fixed:this.fixed}),(t={},t[n["a"]]=this.border,t)]},[e("div",{class:c("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[c("title"),"van-ellipsis"]},[this.slots("title")||this.title]),e("div",{class:c("right"),on:{click:this.onClickRight}},[this.genRight()])])},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:c("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},"72cf":function(t,e,r){},"8a0b":function(t,e,r){},"91d5":function(t,e,r){"use strict";r("68ef"),r("72cf")},bae5:function(t,e,r){"use strict";var a=r("dae3"),n=r.n(a);n.a},bf39:function(t,e,r){"use strict";r.r(e);var a,n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"switchStore"},[r("My-Header",{attrs:{title:"选择店铺"}}),[r("div",{staticClass:"list"},t._l(t.list,(function(e,a){return r("div",{key:a,staticClass:"list-item flex-contain flex-cross-center",on:{click:function(e){t.chose=a}}},[r("van-image",{attrs:{round:"",width:"72",height:"72",src:e.shopAvatar}}),r("dl",[r("dt",[t._v(t._s(e.name))])]),r("div",{staticClass:"chose",class:{active:a==t.chose}})],1)})),0),r("div",{staticClass:"switchBtn flex-contain flex-main-center"},[r("van-button",{staticClass:"button",attrs:{type:"primary",round:"",color:"#FAAD14",block:""},on:{click:t.switchShop}},[t._v("确认切换")])],1)]],2)},i=[],s=(r("b0c0"),r("ac1f"),r("5319"),r("96cf"),r("1da1")),o=r("ade3"),c=(r("91d5"),r("f0ca")),l=(r("66b9"),r("b650")),u=r("0418"),h={name:"",data:function(){return{chose:null,list:[]}},computed:{userInfo:function(){return this.$store.state.userInfo}},components:(a={MyHeader:u["a"]},Object(o["a"])(a,l["a"].name,l["a"]),Object(o["a"])(a,c["a"].name,c["a"]),a),created:function(){this.getShop(),console.log(this.$router)},methods:{getShop:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$post("/personal/staffShops");case 2:r=e.sent,200==r.status&&(t.list=r.payload);case 4:case"end":return e.stop()}}),e)})))()},switchShop:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("SET_MERCHANTID",t.list[t.chose].id),e.next=3,t.getUserInfo();case 3:t.$toast("选择成功"),1==t.userInfo.staffType?t.$router.replace("/".concat(t.$store.state.tenantId,"/writeoff")):t.$router.replace("/".concat(t.$store.state.tenantId,"/"));case 5:case"end":return e.stop()}}),e)})))()},getUserInfo:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get("/auth/getLoginUserInfo");case 2:r=e.sent,200==r.status&&(a=r.payload,t.$store.commit("SET_USERINFO",a));case 4:case"end":return e.stop()}}),e)})))()}}},f=h,d=(r("bae5"),r("2877")),g=Object(d["a"])(f,n,i,!1,null,"568c9675",null);e["default"]=g.exports},c04a:function(t,e,r){},dae3:function(t,e,r){},f0ca:function(t,e,r){"use strict";var a=r("d282"),n={render:function(){var t=arguments[0],e=function(e,r,a){return t("stop",{attrs:{"stop-color":e,offset:r+"%","stop-opacity":a}})};return t("svg",{attrs:{viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg"}},[t("defs",[t("linearGradient",{attrs:{id:"c",x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"}},[e("#FFF",0,.5),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:"d",x1:"64.022%",y1:"96.956%",x2:"64.022%",y2:"0%"}},[e("#F2F3F5",0,.3),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:"h",x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"}},[e("#EBEDF0",0),e("#DCDEE0",100,0)]),t("linearGradient",{attrs:{id:"i",x1:"100%",y1:"0%",x2:"100%",y2:"100%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"k",x1:"100%",y1:"100%",x2:"100%",y2:"0%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"m",x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"n",x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("radialGradient",{attrs:{id:"g",cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"}},[e("#EBEDF0",0),e("#FFF",100,0)])]),t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{opacity:".8"}},[t("path",{attrs:{d:"M0 124V46h20v20h14v58H0z",fill:"url(#c)",transform:"matrix(-1 0 0 1 36 7)"}}),t("path",{attrs:{d:"M40.5 5a8.504 8.504 0 018.13 6.009l.12-.005L49 11a8 8 0 11-1 15.938V27H34v-.174a6.5 6.5 0 11-1.985-12.808A8.5 8.5 0 0140.5 5z",fill:"url(#d)",transform:"translate(2 7)"}}),t("path",{attrs:{d:"M96.016 0a4.108 4.108 0 013.934 2.868l.179-.004c2.138 0 3.871 1.71 3.871 3.818 0 2.109-1.733 3.818-3.871 3.818-.164 0-.325-.01-.484-.03v.03h-6.774v-.083a3.196 3.196 0 01-.726.083C90.408 10.5 89 9.111 89 7.398c0-1.636 1.284-2.976 2.911-3.094a3.555 3.555 0 01-.008-.247c0-2.24 1.842-4.057 4.113-4.057z",fill:"url(#d)",transform:"translate(2 7)"}}),t("path",{attrs:{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:"url(#c)",transform:"translate(2 7)"}})]),t("path",{attrs:{fill:"url(#g)",d:"M0 139h160v21H0z"}}),t("path",{attrs:{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:"url(#h)","fill-rule":"nonzero",transform:"translate(43 36)"}}),t("g",{attrs:{opacity:".6","stroke-linecap":"round","stroke-width":"7"}},[t("path",{attrs:{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#i)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#i)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#k)",transform:"rotate(-180 76.483 42.257)"}}),t("path",{attrs:{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#k)",transform:"rotate(-180 89.791 42.146)"}})]),t("g",{attrs:{transform:"translate(31 105)","fill-rule":"nonzero"}},[t("rect",{attrs:{fill:"url(#m)",width:"98",height:"34",rx:"2"}}),t("rect",{attrs:{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"}}),t("rect",{attrs:{fill:"url(#n)",x:"15",y:"12",width:"18",height:"6",rx:"1.114"}})])])])}},i=Object(a["a"])("empty"),s=i[0],o=i[1],c=["error","search","default"];e["a"]=s({props:{description:String,image:{type:String,default:"default"}},methods:{genImageContent:function(){var t=this.$createElement,e=this.slots("image");if(e)return e;if("network"===this.image)return t(n);var r=this.image;return-1!==c.indexOf(r)&&(r="https://img.yzcdn.cn/vant/empty-image-"+r+".png"),t("img",{attrs:{src:r}})},genImage:function(){var t=this.$createElement;return t("div",{class:o("image")},[this.genImageContent()])},genDescription:function(){var t=this.$createElement,e=this.slots("description")||this.description;if(e)return t("p",{class:o("description")},[e])},genBottom:function(){var t=this.$createElement,e=this.slots();if(e)return t("div",{class:o("bottom")},[e])}},render:function(){var t=arguments[0];return t("div",{class:o()},[this.genImage(),this.genDescription(),this.genBottom()])}})}}]);