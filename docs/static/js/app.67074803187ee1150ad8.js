webpackJsonp([0],{GDRc:function(t,e){},MuH6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("295d"),s=n.n(i),r=n("sHmK"),l={name:"HeaderMenu",components:{Slide:r.Slide},data:function(){return{items:[{mainTitle:"ホーム",subTitle:"HOME",path:"/"},{mainTitle:"企業情報",subTitle:"COMPANY",path:"/company"},{mainTitle:"事業紹介",subTitle:"BUSINESS",path:"/business"},{mainTitle:"お問い合わせ",subTitle:"CONTACT",path:"/contact"}]}},created:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){window.innerWidth<800?(document.getElementById("navPc").style.display="none",document.getElementById("navSp").style.display="block"):(document.getElementById("navPc").style.display="block",document.getElementById("navSp").style.display="none")}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[t._m(0),t._v(" "),n("nav",{attrs:{id:"navPc"}},[n("ul",t._l(t.items,function(e,a){return n("li",{key:a},[n("router-link",{attrs:{to:e.path,exact:""}},[t._v("\n          "+t._s(e.mainTitle)+"\n          "),n("small",{staticClass:"subTitle",attrs:{lang:"en"}},[t._v(t._s(e.subTitle))])])],1)}),0)]),t._v(" "),n("Slide",{attrs:{id:"navSp",right:"",noOverlay:""}},t._l(t.items,function(e,a){return n("router-link",{key:a,attrs:{to:e.path,exact:""}},[t._v("\n      "+t._s(e.mainTitle)+"\n    ")])}),1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"logo"}},[e("div",{staticClass:"logo-test"},[e("small",{attrs:{lang:"en"}},[this._v("logo"),e("br"),this._v("sample")])])])}]};var c=n("VU/8")(l,o,!1,function(t){n("fcjy"),n("fNMK")},"data-v-9fed3978",null).exports,u={name:"FooterMenu",data:function(){return{items:[{mainTitle:"サイトマップ",path:"/sitemap"},{mainTitle:"プライバシーポリシー",path:"/privacy"},{mainTitle:"サイトご利用規約",path:"/attention"}],date:(new Date).getFullYear()}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("ul",{staticClass:"footer-nav"},[n("li",[n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:750,offset:-50},expression:"{ duration: 750, offset: -50 }"}],attrs:{href:"#app"}},[t._v("\n        ページトップ\n      ")])]),t._v(" "),t._l(t.items,function(e,a){return n("li",{key:a},[n("router-link",{attrs:{to:e.path}},[t._v("\n        "+t._s(e.mainTitle)+"\n      ")])],1)})],2),t._v(" "),n("div",{staticClass:"copyright",attrs:{lang:"en"}},[t._v("\n    ©2009 - "+t._s(t.date)+" "),n("strong",[t._v("B-ASSA, Inc.")])])])},staticRenderFns:[]};var p=n("VU/8")(u,d,!1,function(t){n("ZkBT")},"data-v-4c4a60e6",null).exports;a.a.use(s.a);var v={name:"App",components:{HeaderMenu:c,FooterMenu:p}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header-menu"),this._v(" "),e("router-view",{attrs:{id:"wrapper"}}),this._v(" "),e("footer-menu")],1)},staticRenderFns:[]};var h=n("VU/8")(v,m,!1,function(t){n("GDRc")},null,null).exports,f=n("/ocq"),_=n("ACsF"),y=n.n(_);a.a.component(y.a.name,y.a);var g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("carousel",{attrs:{data:this.slides,lang:"en"}})],1)},staticRenderFns:[]};var w=n("VU/8")({data:function(){return{slides:['<div class="carousel-slide">Slide 1</div>','<div class="carousel-slide">Slide 2</div>','<div class="carousel-slide">Slide 3</div>']}}},g,!1,function(t){n("PZCw")},null,null).exports,T={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"wrapper-heading"},[this._v("\n  企業情報\n")])},staticRenderFns:[]};var C=n("VU/8")({},T,!1,function(t){n("Soz0")},null,null).exports,E={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"wrapper-heading"},[this._v("\n  事業紹介\n")])},staticRenderFns:[]};var S=n("VU/8")({},E,!1,function(t){n("mOs8")},null,null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"wrapper-heading"},[this._v("\n  お問い合わせ\n")])},staticRenderFns:[]};var b=n("VU/8")({},R,!1,function(t){n("v9iS")},null,null).exports,F={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"wrapper-heading"},[this._v("\n  サイトマップ\n")])},staticRenderFns:[]};var k=n("VU/8")({},F,!1,function(t){n("sd9t")},null,null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"wrapper-heading"},[this._v("\n  プライバシーポリシー\n")])},staticRenderFns:[]};var M=n("VU/8")({},x,!1,function(t){n("MuH6")},null,null).exports,U={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"wrapper-heading"},[this._v("\n  サイトご利用規約\n")])},staticRenderFns:[]};var $=n("VU/8")({},U,!1,function(t){n("uaku")},null,null).exports;a.a.use(f.a);var V=new f.a({mode:"history",routes:[{path:"/",name:"Home",component:w},{path:"/company",name:"Company",component:C},{path:"/business",name:"Business",component:S},{path:"/contact",name:"Contact",component:b},{path:"/sitemap",name:"Sitemap",component:k},{path:"/privacy",name:"Privacy",component:M},{path:"/attention",name:"Attention",component:$}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:V,components:{App:h},template:"<App/>"})},PZCw:function(t,e){},Soz0:function(t,e){},ZkBT:function(t,e){},fNMK:function(t,e){},fcjy:function(t,e){},mOs8:function(t,e){},sd9t:function(t,e){},uaku:function(t,e){},v9iS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.67074803187ee1150ad8.js.map