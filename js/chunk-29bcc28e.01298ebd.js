(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29bcc28e"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1ed7":function(t,e,r){"use strict";var n=r("ecf6"),i=r.n(n);i.a},"228e":function(t,e,r){t.exports=r.p+"img/tic2.88fa67e6.png"},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),a=r("ad6d"),s="toString",c=RegExp.prototype,u=c[s],f=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=s;(f||l)&&n(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ab6":function(t,e,r){t.exports=r.p+"img/tic5.1d96c1b4.png"},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",s=i.set,c=i.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,v,h=i(t),b="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,y=void 0!==g,m=u(h),S=0;if(y&&(g=n(g,p>2?arguments[2]:void 0,2)),void 0==m||b==Array&&a(m))for(e=s(h.length),r=new b(e);e>S;S++)v=y?g(h[S],S):h[S],c(r,S,v);else for(l=m.call(h),d=l.next,r=new b;!(f=d.call(l)).done;S++)v=y?o(l,g,[f.value,S],!0):f.value,c(r,S,v);return r.length=S,r}},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,a,s=String(i(e)),c=n(r),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"81d5":function(t,e,r){"use strict";var n=r("7b0b"),i=r("23cb"),o=r("50c4");t.exports=function(t){var e=n(this),r=o(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,r),c=a>2?arguments[2]:void 0,u=void 0===c?r:i(c,r);while(u>s)e[s++]=t;return e}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),v=r("861d"),h=r("825a"),b=r("7b0b"),p=r("fc6a"),g=r("c04e"),y=r("5c6c"),m=r("7c73"),S=r("df75"),w=r("241c"),A=r("057f"),O=r("7418"),x=r("06cf"),P=r("9bf2"),_=r("d1e7"),L=r("9112"),C=r("6eeb"),N=r("5692"),q=r("f772"),j=r("d012"),E=r("90e3"),T=r("b622"),k=r("e538"),M=r("746f"),$=r("d44e"),W=r("69f3"),R=r("b727").forEach,G=q("hidden"),I="Symbol",V="prototype",D=T("toPrimitive"),F=W.set,H=W.getterFor(I),J=Object[V],X=i.Symbol,B=o("JSON","stringify"),Q=x.f,U=P.f,z=A.f,K=_.f,Y=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),rt=N("wks"),nt=i.QObject,it=!nt||!nt[V]||!nt[V].findChild,ot=s&&f((function(){return 7!=m(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(J,e);n&&delete J[e],U(t,e,r),n&&t!==J&&U(J,e,n)}:U,at=function(t,e){var r=Y[t]=m(X[V]);return F(r,{type:I,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof X},ct=function(t,e,r){t===J&&ct(Z,e,r),h(t);var n=g(e,!0);return h(r),l(Y,n)?(r.enumerable?(l(t,G)&&t[G][n]&&(t[G][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,G)||U(t,G,y(1,{})),t[G][n]=!0),ot(t,n,r)):U(t,n,r)},ut=function(t,e){h(t);var r=p(e),n=S(r).concat(ht(r));return R(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=g(t,!0),r=K.call(this,e);return!(this===J&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,G)&&this[G][e])||r)},dt=function(t,e){var r=p(t),n=g(e,!0);if(r!==J||!l(Y,n)||l(Z,n)){var i=Q(r,n);return!i||!l(Y,n)||l(r,G)&&r[G][n]||(i.enumerable=!0),i}},vt=function(t){var e=z(p(t)),r=[];return R(e,(function(t){l(Y,t)||l(j,t)||r.push(t)})),r},ht=function(t){var e=t===J,r=z(e?Z:p(t)),n=[];return R(r,(function(t){!l(Y,t)||e&&!l(J,t)||n.push(Y[t])})),n};if(c||(X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===J&&r.call(Z,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),ot(this,e,y(1,t))};return s&&it&&ot(J,e,{configurable:!0,set:r}),at(e,t)},C(X[V],"toString",(function(){return H(this).tag})),C(X,"withoutSetter",(function(t){return at(E(t),t)})),_.f=lt,P.f=ct,x.f=dt,w.f=A.f=vt,O.f=ht,k.f=function(t){return at(T(t),t)},s&&(U(X[V],"description",{configurable:!0,get:function(){return H(this).description}}),a||C(J,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:X}),R(S(rt),(function(t){M(t)})),n({target:I,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=X(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:vt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(b(t))}}),B){var bt=!c||f((function(){var t=X();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(v(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,B.apply(null,i)}})}X[V][D]||L(X[V],D,X[V].valueOf),$(X,I),j[G]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},aa0e:function(t,e,r){t.exports=r.p+"img/tic4.d66d45cf.png"},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),o=r("5135"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(o(s,t))return s[t];e||(e={});var r=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,f=o(e,0)?e[0]:c,l=o(e,1)?e[1]:void 0;return s[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,f,l)}))}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),s=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(v,h,b,p){for(var g,y,m=o(v),S=i(m),w=n(h,b,3),A=a(S.length),O=0,x=p||s,P=e?x(v,A):r?x(v,0):void 0;A>O;O++)if((d||O in S)&&(g=S[O],y=w(g,O,m),t))if(e)P[O]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:c.call(P,g)}else if(f)return!1;return l?-1:u||f?f:P}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},cb29:function(t,e,r){var n=r("23e7"),i=r("81d5"),o=r("44d2");n({target:"Array",proto:!0},{fill:i}),o("fill")},d28b:function(t,e,r){var n=r("746f");n("iterator")},d521:function(t,e,r){t.exports=r.p+"img/tic3.31b31c7f.png"},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),a=r("9112"),s=r("b622"),c=s("iterator"),u=s("toStringTag"),f=o.values;for(var l in i){var d=n[l],v=d&&d.prototype;if(v){if(v[c]!==f)try{a(v,c,f)}catch(b){v[c]=f}if(v[u]||a(v,u,l),i[l])for(var h in o)if(v[h]!==o[h])try{a(v,h,o[h])}catch(b){v[h]=o[h]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var v=d.prototype=f.prototype;v.constructor=d;var h=v.toString,b="Symbol(test)"==String(f("test")),p=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(a(l,t))return"";var r=b?e.slice(7,-1):e.replace(p,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ecf6:function(t,e,r){},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"About"},[r("Game")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.stepWinner<2?n("button",{staticClass:"box"},[t._v(" ฉันคือกระดาษแสนฉลาด ผู้ไม่เคยแพ้ ฉันจะเป็น X นะ และฉันจะเริ่มก่อน ")]):t._e(),t.stepWinner>1?n("button",{staticClass:"box"},[t._v(" ฉันมีรูปแบบการเดินที่ทำให้ไม่มีทางแพ้อยู่ ฉันก็แค่เดินตามกฎที่กำหนดไว้ไปที่ละข้อ ถ้าเดินตามกฎนี้ไม่ว่าจะอีกกี่ครั้งก็ไม่มีทางแพ้ ")]):t._e(),n("div",{staticClass:"game"},[n("div",{staticClass:"game-area"},[t._m(0),n("board",{attrs:{squares:t.squares,winner:t.winner},on:{click:t.click}}),n("div",{staticClass:"game-info"},[0===t.stepNumber?n("p",[t._v(" เริ่มเล่นได้ : "),n("b",{class:t.Player},[t._v(t._s(t.Player)+" ")])]):t.winner?n("p",[t._v(" ผู้ชนะได้แก่ : "),n("b",{class:t.aiPlayer},[t._v(t._s(t.aiPlayer))]),t._v("! "),n("button",{on:{click:t.restart}},[t._v("เล่นอีกครั้ง")])]):t.stepNumber>3?n("p",[t._v(" เสมอ! "),n("button",{on:{click:t.restart}},[t._v("เล่นอีกครั้ง")])]):n("p",[t._v(" ตอนนี้ตาของ : "),n("b",{class:t.Player},[t._v(t._s(t.Player))])])])],1),t.stepWinner>1?n("p",{staticClass:"img"},[0==t.stepNumber?n("img",{attrs:{id:"image",src:r("f98b"),alt:"tic1"}}):t._e(),1==t.stepNumber?n("img",{attrs:{id:"image",src:r("228e"),alt:"tic2"}}):t._e(),2==t.stepNumber?n("img",{attrs:{id:"image",src:r("d521"),alt:"tic3"}}):t._e(),3==t.stepNumber?n("img",{attrs:{id:"image",src:r("aa0e"),alt:"tic4"}}):t._e(),4==t.stepNumber?n("img",{attrs:{id:"image",src:r("3ab6"),alt:"tic5"}}):t._e()]):t._e()])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"game-title"},[r("h1",[t._v("กระดาษฉลาดจุง")])])}];r("cb29"),r("d3b7");function s(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0");function c(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)if(r.push(a.value),e&&r.length===e)break}catch(c){i=!0,o=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(i)throw o}}return r}}r("a630"),r("fb6a"),r("b0c0"),r("25f0");function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){if(t){if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,e){return s(t)||c(t,e)||f(t,e)||l()}var v={name:"Game",components:{Board:function(){return r.e("chunk-555ebfb2").then(r.bind(null,"91ea"))}},data:function(){return{squares:Array(9).fill(null),stepNumber:0,Player:"O",aiPlayer:"X",winner:null,stepWinner:0}},mounted:function(){this.aiMove()},methods:{hasWinner:function(){if(this.winner)return!0;for(var t=this.squares,e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<e.length;r++){var n=d(e[r],3),i=n[0],o=n[1],a=n[2];if(t[i]&&t[i]===t[o]&&t[i]===t[a])return this.winner=[i,o,a],!0}return!1},restart:function(){this.squares=Array(9).fill(null),this.stepNumber=0,this.Player="O",this.aiPlayer="X",this.winner=null,this.aiMove(),this.stepWinner=this.stepWinner+1},click:function(t){if(!this.squares[t]&&!this.winner&&(this.$set(this.squares,t,this.Player),this.hasWinner()||(this.stepNumber=this.stepNumber+1),1==this.stepNumber&&("O"==this.squares[0]?this.$set(this.squares,2,this.aiPlayer):this.$set(this.squares,0,this.aiPlayer)),this.stepNumber>=2)){for(var e=[[0,1,2],[6,7,8],[3,4,5],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<e.length;r++){for(var n=0,i=0;i<3;i++)"X"==this.squares[e[r][i]]&&n++;if(2==n)for(var o=0;o<3;o++)if(null==this.squares[e[r][o]])return this.$set(this.squares,e[r][o],this.aiPlayer),void this.hasWinner()}for(var a=0;a<e.length;a++){for(var s=0,c=0;c<3;c++)"O"==this.squares[e[a][c]]&&s++;if(2==s)for(var u=0;u<3;u++)if(null==this.squares[e[a][u]])return this.$set(this.squares,e[a][u],this.aiPlayer),void this.hasWinner()}"O"==this.squares[5]&&this.$set(this.squares,6,this.aiPlayer)}},aiMove:function(){0===this.stepNumber&&this.$set(this.squares,8,this.aiPlayer)}}},h=v,b=(r("1ed7"),r("2877")),p=Object(b["a"])(h,o,a,!1,null,"4a665126",null),g=p.exports,y={name:"About",components:{Game:g}},m=y,S=Object(b["a"])(m,n,i,!1,null,null,null);e["default"]=S.exports},f98b:function(t,e,r){t.exports=r.p+"img/tic1.ffa9f94c.png"},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),v=l("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),b=f("species"),p=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!v||!h},{slice:function(t,e){var r,n,f,l=c(this),d=s(l.length),v=a(t,d),h=a(void 0===e?d:e,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(l,v,h);for(n=new(void 0===r?Array:r)(g(h-v,0)),f=0;v<h;v++,f++)v in l&&u(n,f,l[v]);return n.length=f,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-29bcc28e.01298ebd.js.map