(self["webpackChunkmatic_academy"]=self["webpackChunkmatic_academy"]||[]).push([[442],{3752:function(t,e,n){!function(e,i){t.exports=i(n(6866))}(0,(function(t){return(()=>{"use strict";var e={553:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n}},976:e=>{e.exports=t}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,i),o.exports}i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{i.r(r),i.d(r,{Component:()=>C,Plugin:()=>x,default:()=>P,useLoading:()=>S});var t=i(976);function e(e,n,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=(0,t.h)(e,n,r),c=document.createElement("div");return c.classList.add("vld-container"),i.appendChild(c),(0,t.render)(o,c),o.component}const n="undefined"!=typeof window?window.HTMLElement:Object,o=["aria-busy"],c={class:"vld-icon"},u={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(t){if(!this.isActive)return;if(t.target===this.$refs.root||this.$refs.root.contains(t.target))return;let e=this.container?this.container:this.isFullPage?null:this.$refs.root.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$refs.root.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},a=["width","height","stroke"],s=[(0,t.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)],l=(0,t.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var d=i(553);const f=(0,d.default)(l,[["render",function(e,n,i,r,o,c){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,stroke:e.color},s,8,a)}]]),p=["fill","width","height"],h=[(0,t.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)],m=(0,t.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),g=(0,d.default)(m,[["render",function(e,n,i,r,o,c){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:e.color,width:e.width,height:e.height},h,8,p)}]]),v=["height","width","fill"],y=[(0,t.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)],b=(0,t.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),w={Spinner:f,Dots:g,Bars:(0,d.default)(b,[["render",function(e,n,i,r,o,c){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:e.height,width:e.width,fill:e.color},y,8,v)}]])},_=(0,t.defineComponent)({name:"vue-loading",mixins:[u],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},emits:["hide","update:active"],data(){return{isActive:this.active}},components:w,mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((()=>{const e=this.$refs.root.parentElement;var n,i;(0,t.render)(null,e),void 0!==(n=e).remove?n.remove():null===(i=n.parentNode)||void 0===i||i.removeChild(n)}),150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress(t){27===t.keyCode&&this.cancel()}},watch:{active(t){this.isActive=t},isActive(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),k=(0,d.default)(_,[["render",function(e,n,i,r,u,a){return(0,t.openBlock)(),(0,t.createBlock)(t.Transition,{ref:"root",name:e.transition},{default:(0,t.withCtx)((()=>[(0,t.withDirectives)((0,t.createElementVNode)("div",{tabindex:"0",class:(0,t.normalizeClass)(["vld-overlay is-active",{"is-full-page":e.isFullPage}]),"aria-busy":e.isActive,"aria-label":"Loading",style:(0,t.normalizeStyle)({zIndex:e.zIndex})},[(0,t.createElementVNode)("div",{class:"vld-background",onClick:n[0]||(n[0]=(0,t.withModifiers)((function(){return e.cancel&&e.cancel(...arguments)}),["prevent"])),style:(0,t.normalizeStyle)(e.bgStyle)},null,4),(0,t.createElementVNode)("div",c,[(0,t.renderSlot)(e.$slots,"before"),(0,t.renderSlot)(e.$slots,"default",{},(()=>[((0,t.openBlock)(),(0,t.createBlock)((0,t.resolveDynamicComponent)(e.loader),{color:e.color,width:e.width,height:e.height},null,8,["color","width","height"]))])),(0,t.renderSlot)(e.$slots,"after")])],14,o),[[t.vShow,e.isActive]])])),_:3},8,["name"])}]]),C=k;function S(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{show(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;const o=Object.assign({},t,i,{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0});let c=o.container;o.container||(c=document.body,o.isFullPage=!0);const u=Object.assign({},n,r);return{hide:e(C,o,c,u).ctx.hide}}}}const x=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=S(e,n);t.config.globalProperties.$loading=i,t.provide("$loading",i)};C.install=x;const P=C})(),r})()}))},6866:function(t,e,n){"use strict";n.r(e),n.d(e,{BaseTransition:function(){return i.P$},Comment:function(){return i.sv},EffectScope:function(){return i.Bj},Fragment:function(){return i.HY},KeepAlive:function(){return i.Ob},ReactiveEffect:function(){return i.qq},Static:function(){return i.qG},Suspense:function(){return i.n4},Teleport:function(){return i.lR},Text:function(){return i.xv},Transition:function(){return i.uT},TransitionGroup:function(){return i.W3},VueElement:function(){return i.a2},callWithAsyncErrorHandling:function(){return i.$d},callWithErrorHandling:function(){return i.KU},camelize:function(){return i._A},capitalize:function(){return i.kC},cloneVNode:function(){return i.Ho},compatUtils:function(){return i.ry},compile:function(){return r},computed:function(){return i.Fl},createApp:function(){return i.ri},createBlock:function(){return i.j4},createCommentVNode:function(){return i.kq},createElementBlock:function(){return i.iD},createElementVNode:function(){return i._},createHydrationRenderer:function(){return i.Eo},createPropsRestProxy:function(){return i.p1},createRenderer:function(){return i.Us},createSSRApp:function(){return i.vr},createSlots:function(){return i.Nv},createStaticVNode:function(){return i.uE},createTextVNode:function(){return i.Uk},createVNode:function(){return i.Wm},customRef:function(){return i.ZM},defineAsyncComponent:function(){return i.RC},defineComponent:function(){return i.aZ},defineCustomElement:function(){return i.MW},defineEmits:function(){return i.Bz},defineExpose:function(){return i.WY},defineProps:function(){return i.yb},defineSSRCustomElement:function(){return i.Ah},devtools:function(){return i.mW},effect:function(){return i.cE},effectScope:function(){return i.B},getCurrentInstance:function(){return i.FN},getCurrentScope:function(){return i.nZ},getTransitionRawChildren:function(){return i.Q6},guardReactiveProps:function(){return i.F4},h:function(){return i.h},handleError:function(){return i.S3},hydrate:function(){return i.ZB},initCustomFormatter:function(){return i.Mr},initDirectivesForSSR:function(){return i.Nd},inject:function(){return i.f3},isMemoSame:function(){return i.nQ},isProxy:function(){return i.X3},isReactive:function(){return i.PG},isReadonly:function(){return i.$y},isRef:function(){return i.dq},isRuntimeOnly:function(){return i.of},isShallow:function(){return i.yT},isVNode:function(){return i.lA},markRaw:function(){return i.Xl},mergeDefaults:function(){return i.u_},mergeProps:function(){return i.dG},nextTick:function(){return i.Y3},normalizeClass:function(){return i.C_},normalizeProps:function(){return i.vs},normalizeStyle:function(){return i.j5},onActivated:function(){return i.dl},onBeforeMount:function(){return i.wF},onBeforeUnmount:function(){return i.Jd},onBeforeUpdate:function(){return i.Xn},onDeactivated:function(){return i.se},onErrorCaptured:function(){return i.d1},onMounted:function(){return i.bv},onRenderTracked:function(){return i.bT},onRenderTriggered:function(){return i.Yq},onScopeDispose:function(){return i.EB},onServerPrefetch:function(){return i.vl},onUnmounted:function(){return i.SK},onUpdated:function(){return i.ic},openBlock:function(){return i.wg},popScopeId:function(){return i.Cn},provide:function(){return i.JJ},proxyRefs:function(){return i.WL},pushScopeId:function(){return i.dD},queuePostFlushCb:function(){return i.qb},reactive:function(){return i.qj},readonly:function(){return i.OT},ref:function(){return i.iH},registerRuntimeCompiler:function(){return i.Y1},render:function(){return i.sY},renderList:function(){return i.Ko},renderSlot:function(){return i.WI},resolveComponent:function(){return i.up},resolveDirective:function(){return i.Q2},resolveDynamicComponent:function(){return i.LL},resolveFilter:function(){return i.eq},resolveTransitionHooks:function(){return i.U2},setBlockTracking:function(){return i.qZ},setDevtoolsHook:function(){return i.ec},setTransitionHooks:function(){return i.nK},shallowReactive:function(){return i.Um},shallowReadonly:function(){return i.YS},shallowRef:function(){return i.XI},ssrContextKey:function(){return i.Uc},ssrUtils:function(){return i.G},stop:function(){return i.sT},toDisplayString:function(){return i.zw},toHandlerKey:function(){return i.hR},toHandlers:function(){return i.mx},toRaw:function(){return i.IU},toRef:function(){return i.Vh},toRefs:function(){return i.BK},transformVNodeArgs:function(){return i.C3},triggerRef:function(){return i.oR},unref:function(){return i.SU},useAttrs:function(){return i.l1},useCssModule:function(){return i.fb},useCssVars:function(){return i.sj},useSSRContext:function(){return i.Zq},useSlots:function(){return i.Rr},useTransitionState:function(){return i.Y8},vModelCheckbox:function(){return i.e8},vModelDynamic:function(){return i.YZ},vModelRadio:function(){return i.G2},vModelSelect:function(){return i.bM},vModelText:function(){return i.nr},vShow:function(){return i.F8},version:function(){return i.i8},warn:function(){return i.ZK},watch:function(){return i.YP},watchEffect:function(){return i.m0},watchPostEffect:function(){return i.Rh},watchSyncEffect:function(){return i.yX},withAsyncContext:function(){return i.mv},withCtx:function(){return i.w5},withDefaults:function(){return i.b9},withDirectives:function(){return i.wy},withKeys:function(){return i.D2},withMemo:function(){return i.MX},withModifiers:function(){return i.iM},withScopeId:function(){return i.HX}});var i=n(9242);const r=()=>{0}},6843:function(t,e,n){"use strict";n.d(e,{Z:function(){return k}});var i=n(3396),r=n(7139);const o=t=>((0,i.dD)("data-v-1b08893c"),t=t(),(0,i.Cn)(),t),c={id:"accordion",class:"pl-3 pr-3 mt-5 m-5",style:{"text-align":"center","background-color":"white",border:"2px solid #74B72E","overflow-y":"hidden"}},u={class:"m-3",style:{"overflow-y":"hidden"}},a=o((()=>(0,i._)("h1",null,"FAQs",-1))),s=["id"],l={class:"mb-0"},d=["data-target","aria-controls"],f=o((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-caret-down-fill",viewBox:"0 0 16 16"},[(0,i._)("path",{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"})],-1))),p=["id","aria-labelledby"],h={class:"card-body row p-5"},m={class:"pl-5 pr-5"};function g(t,e,n,o,g,v){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",u,[a,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.Faqs,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"card",style:{border:"none"},key:t.id},[(0,i._)("div",{class:"card-header",id:"heading"+t.id,style:{"background-color":"white !important"}},[(0,i._)("h5",l,[(0,i._)("button",{class:"btn btn-link d-flex align-items-center w-100 justify-content-between no-underline","data-toggle":"collapse","data-target":"#collapse"+t.id,"aria-expanded":"true","aria-controls":"collapse"+t.id,style:{color:"black"}},[(0,i._)("span",null,(0,r.zw)(t.Question),1),f],8,d)])],8,s),(0,i._)("div",{id:"collapse"+t.id,class:"collapse","aria-labelledby":"heading"+t.id,"data-parent":"#accordion"},[(0,i._)("div",h,[(0,i._)("p",m,(0,r.zw)(t.description),1)])],8,p)])))),128))])])}var v=n(6265),y=n.n(v),b={name:"Faqs_",data(){return{Faqs:[]}},mounted(){this.getFaqs()},methods:{getFaqs(){y().get("/api/v1/Faqs/").then((t=>{this.Faqs=t.data})).catch((t=>{console.log(t)}))}}},w=n(89);const _=(0,w.Z)(b,[["render",g],["__scopeId","data-v-1b08893c"]]);var k=_},8442:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Q}});var i=n(3396),r=n(7139);const o={class:"about mb-3"},c={class:"m-5"},u={class:"row m-5"},a={class:"col-lg"},s={class:"mb-6",style:{}},l=["src"],d={class:"col-lg text-left"},f={class:"ml-4"},p=(0,i._)("h2",{class:"heading mt-5"},[(0,i._)("strong",null," Product Details")],-1),h={class:"m-4"},m=(0,i._)("div",{style:{display:"inline-block"}},[(0,i._)("h3",null,[(0,i._)("strong",null," Price :")])],-1),g={style:{display:"inline-block"},class:"ml-4"},v={style:{color:"black"}},y={class:"m-4"},b=(0,i._)("div",{style:{display:"inline-block"}},[(0,i._)("h3",null,[(0,i._)("strong",null," Description :")])],-1),w={style:{display:"inline-block"},class:"ml-4"},_={class:"m-4"},k=(0,i._)("div",{style:{display:"inline-block"}},[(0,i._)("h3",null,[(0,i._)("strong",null," Gift Wrapping : ")])],-1),C={style:{display:"inline-block"},class:"ml-4"},S={class:"m-4"},x=(0,i._)("div",{style:{display:"inline-block"}},[(0,i._)("h3",null,[(0,i._)("strong",null," Size : ")])],-1),P={style:{display:"inline-block"},class:"ml-4"},N={class:"m-4"},D={key:0,class:"mt-3"},B={key:0},T=(0,i._)("br",null,null,-1),q={key:1},M={key:2},E=(0,i._)("br",null,null,-1),R={key:3},F={class:"field has-addons mt-6"},z={class:"control",style:{width:"70%"}},L={class:"control ml-5"},$=(0,i._)("a",{class:"btn btn-success mr-3 mt-3 mb-3",href:"/cart",style:{color:"white"}},"View cart",-1),A={class:"row ml-5 mr-5",style:{"text-align":"left"}},V={class:"m-3 mt-5 pl-5 pr-5"};function I(t,e,n,I,U,j){const W=(0,i.up)("loading"),O=(0,i.up)("strike"),H=(0,i.up)("vue-number-input"),X=(0,i.up)("Faqs");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(W,{active:U.isLoading,"onUpdate:active":e[0]||(e[0]=t=>U.isLoading=t),loader:U.bars,width:U.width,height:U.height,color:U.color,"can-cancel":!0,"is-full-page":U.fullPage},null,8,["active","loader","width","height","color","is-full-page"]),(0,i._)("div",null,[(0,i._)("h1",c,[(0,i._)("strong",null,(0,r.zw)(U.product.name),1)]),(0,i._)("div",u,[(0,i._)("div",a,[(0,i._)("figure",s,[(0,i._)("img",{class:"product-img",src:U.product.get_image,style:{"background-size":"contain","background-repeat":"no-repeat","text-align":"center","overflow-y":"'hidden'"}},null,8,l)])]),(0,i._)("div",d,[(0,i._)("div",f,[p,(0,i._)("div",h,[m,(0,i._)("div",g,[(0,i._)("h4",null,[(0,i._)("strong",v,"$ "+(0,r.zw)(U.product.price),1)])])]),(0,i._)("div",y,[b,(0,i._)("div",w,[(0,i._)("h4",null,(0,r.zw)(U.product.description),1)])]),(0,i._)("div",_,[k,(0,i._)("div",C,[(0,i._)("h4",null,(0,r.zw)(U.product.giftWrapping),1)])]),(0,i._)("div",S,[x,(0,i._)("div",P,[(0,i._)("h4",null,(0,r.zw)(U.product.size),1)])]),(0,i._)("div",N,[this.item_price.price?((0,i.wg)(),(0,i.iD)("div",D,["Consumer"!=U.account_details.account_type&&1==U.account_details.approved?((0,i.wg)(),(0,i.iD)("div",B,[(0,i.Wm)(O,null,{default:(0,i.w5)((()=>[(0,i._)("b",null,[(0,i._)("span",null,"Price: $"+(0,r.zw)(parseInt(this.item_price.price)*this.quantity),1)])])),_:1}),T,(0,i._)("span",null," Discounted Price: $"+(0,r.zw)(parseInt(this.item_price.price)*this.quantity*this.discount),1)])):"Consumer"!=U.account_details.account_type&&0==U.account_details.approved?((0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("b",null,[(0,i._)("span",null,"Price: $"+(0,r.zw)(parseInt(this.item_price.price)*this.quantity),1)])])):1!=U.discount?((0,i.wg)(),(0,i.iD)("div",M,[(0,i.Wm)(O,null,{default:(0,i.w5)((()=>[(0,i._)("b",null,[(0,i._)("span",null,"Price: $"+(0,r.zw)(parseInt(this.item_price.price)*this.quantity),1)])])),_:1}),E,(0,i._)("span",null," Discounted Price: $"+(0,r.zw)(parseInt(this.item_price.price)*this.quantity*this.discount),1)])):((0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("span",null,"Price: $"+(0,r.zw)(parseInt(this.item_price.price)*this.quantity),1)]))])):(0,i.kq)("",!0)]),(0,i._)("div",F,[(0,i._)("div",z,[(0,i.Wm)(H,{controls:"",class:"input",min:"1",modelValue:U.quantity,"onUpdate:modelValue":e[1]||(e[1]=t=>U.quantity=t)},null,8,["modelValue"])]),(0,i._)("div",L,[(0,i._)("a",{class:"button btn btn-success mr-3 mt-3 mb-3 ml-5",style:{color:"white"},onClick:e[2]||(e[2]=t=>j.addToCart())},"Add to cart"),$])])])])]),(0,i._)("div",A,[(0,i._)("p",V,(0,r.zw)(U.product.description2),1)]),(0,i.Wm)(X)])])}var U=n(6843),j=n(6265),W=n.n(j),O=n(3752),H=n.n(O),X=n(2492),K=n.n(X),Z={name:"Product-",data(){return{product:{},allVariations:[],id:this.$route.params.productId,dismissSecs:5,dismissCountDown:0,quantity:1,showDismissibleAlert:!1,item_price:0,isLoading:!0,fullPage:!0,bars:"bars",color:"#07ad31",height:"120",width:"120",account_details:[],discount:1}},components:{Faqs:U.Z,Loading:H()},mounted(){this.getProduct(),this.getProductVariations(),this.getAccountDetails()},methods:{async getProduct(){this.$store.commit("setIsLoading",!0),await W().get("/api/v1/products/"+this.id).then((t=>{this.product=t.data[0],this.isLoading=!1})).catch((t=>{console.log(t)})),this.$store.commit("setIsLoading",!1)},getProductVariations(){W().get("/api/v1/product-variations/"+this.id).then((t=>{this.allVariations=t.data})).catch((t=>{console.log(t)}))},getKeyByValue(t,e){return Object.keys(t).find((n=>t[n]===e))},addToCart(){(isNaN(this.quantity)||this.quantity<1)&&(this.quantity=1);const t={product:this.product,quantity:this.quantity,price:this.product.price,category:this.productsize};this.$store.commit("addToCart",t),K().fire({position:"top-end",icon:"success",title:"Item Added To Cart",showConfirmButton:!1,timer:1500})},getAccountDetails(){W().get(`/api/v1/CustomUser/${localStorage.getItem("userid")}/`).then((t=>{this.account_details=t.data,this.setDiscount()})).catch((t=>{console.log(t)}))},setDiscount(){console.log("hello ",this.account_details.account_type),"Retailer"==this.account_details.account_type?this.discount=.6:"Distributor"==this.account_details.account_type?(console.log("distributor"),this.discount=.4):this.discount=1}}},Y=n(89);const G=(0,Y.Z)(Z,[["render",I]]);var Q=G}}]);
//# sourceMappingURL=442.554faf94.js.map