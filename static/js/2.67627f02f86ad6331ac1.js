webpackJsonp([2],{"/vPo":function(n,o,a){o=n.exports=a("FZ+f")(!1),o.push([n.i,".lang-pop[data-v-26fecfad]{width:80%;padding:10px;border-radius:8px}",""])},"19QO":function(n,o,a){var e=a("RStv");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("rjj0").default;i("9bc77dd0",e,!0,{})},"5Q0w":function(n,o,a){"use strict";var e=a("19QO");a.n(e);o.a={name:"settings-page",data:function(){return{versionName:"V 1.0.0",currentLang:this.$i18n.locale,showLangPop:!1,langOptions:{en:"english",zh:"chinese"},versionClickTime:0}},methods:{onVantDocClick:function(){location.href="https://youzan.github.io/vant/mobile.html"},onLangChange:function(n){this.showLangPop=!1,window.localStorage.setItem("language",n),this.$i18n.reload()},onLangClick:function(){this.showLangPop=!0},onVersionClick:function(){this._showToast("20191225 172311 prod"),this.versionClickTime+=1,4==this.versionClickTime&&this._routePush("TestCasePage")}}}},HywY:function(n,o,a){"use strict";a.d(o,"a",function(){return e}),a.d(o,"b",function(){return i});var e=function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",[a("van-nav-bar",{attrs:{"left-arrow":"",title:n.$t("settings"),fixed:"","z-index":10},on:{"click-left":n._routerBack}}),n._v(" "),a("div",{staticClass:"nav-con-16"},[a("van-cell-group",[a("van-cell",{attrs:{title:n.$t("version"),icon:"info-o",value:n.versionName,size:"large"},on:{click:n.onVersionClick}}),n._v(" "),a("van-cell",{attrs:{title:n.$t("language"),icon:"flag-o",value:n.$t(n.langOptions[n.currentLang]),size:"large","is-link":""},on:{click:n.onLangClick}}),n._v(" "),a("van-cell",{attrs:{title:"Vant文档","is-link":"",size:"large"},on:{click:n.onVantDocClick}}),n._v(" "),a("van-cell",{attrs:{title:"手势密码设置",icon:"eye-o",size:"large","is-link":""},on:{click:function(o){return n._routePush("GestureCreate")}}})],1)],1),n._v(" "),a("van-popup",{staticClass:"lang-pop",model:{value:n.showLangPop,callback:function(o){n.showLangPop=o},expression:"showLangPop"}},[a("van-radio-group",{on:{change:n.onLangChange},model:{value:n.currentLang,callback:function(o){n.currentLang=o},expression:"currentLang"}},[a("van-cell",{attrs:{clickable:""},on:{click:function(o){n.currentLang="en"}}},[a("van-radio",{attrs:{name:"en"},on:{click:function(o){n.showLangPop=!1}}},[n._v(n._s(n.$t(n.langOptions.en)))])],1),n._v(" "),a("van-cell",{attrs:{clickable:""},on:{click:function(o){n.currentLang="zh"}}},[a("van-radio",{attrs:{name:"zh"},on:{click:function(o){n.showLangPop=!1}}},[n._v(n._s(n.$t(n.langOptions.zh)))])],1)],1)],1)],1)},i=[]},RStv:function(n,o,a){o=n.exports=a("FZ+f")(!1),o.push([n.i,".van-radio{display:flex;align-items:center;overflow:hidden;user-select:none}.van-radio__icon{flex:none;height:1em;font-size:20px;line-height:1em}.van-radio__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:inherit;text-align:center;border:1px solid #c8c9cc;transition-duration:.2s;transition-property:color,border-color,background-color}.van-radio__icon--round .van-icon{border-radius:100%}.van-radio__icon--checked .van-icon{color:#fff;background-color:#ca4040;border-color:#ca4040}.van-radio__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-radio__icon--disabled.van-radio__icon--checked .van-icon{color:#c8c9cc}.van-radio__label{margin-left:8px;color:#323233;line-height:20px}.van-radio__label--left{margin:0 8px 0 0}.van-radio__label--disabled{color:#c8c9cc}",""])},WYnS:function(n,o,a){var e=a("/vPo");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("rjj0").default;i("5abbd116",e,!0,{})},xQPq:function(n,o,a){"use strict";function e(n){a("WYnS")}Object.defineProperty(o,"__esModule",{value:!0});var i=a("5Q0w"),t=a("HywY"),c=a("XyMi"),r=e,l=Object(c.a)(i.a,t.a,t.b,!1,r,"data-v-26fecfad",null);o.default=l.exports}});