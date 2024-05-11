import{O as B,o as c,c as x,w as s,b as p,t as u,P as W,r as o,f as n,a,e as f,F as g,v as D,_ as S,j as T,h as y,g as k,Q as N,R as F}from"./index-CURNFa4I.js";const $=(t,e)=>{const r=t.__vccOpts||t;for(const[l,i]of e)r[l]=i;return r};async function d(t){return new Promise(e=>setTimeout(e,t))}const A=B({name:"AutoTyperVue",emits:["finished"],props:{componentTag:{type:String,default:"span",validator(t){return/^(span)|(h\d)|(p)|(a)$/.test(t)}},beginningWord:{type:String,default:""},writtenBeginningWord:{type:String,default:""},text:{type:[String,Array],required:!0,validator(t){return typeof t=="string"?t.length>0:t.every(e=>typeof e=="string"&&e.length>0)}},startDelay:{type:Number,default:500,validator(t){return t>=0}},betweenWordDelay:{type:Number,default:500,validator(t){return t>=0}},typingDelay:{type:Number,default:150,validator(t){return t>=0}},deletingDelay:{type:Number,default:100,validator(t){return t>=0}},waitBeforeDeleteDelay:{type:Number,default:500,validator(t){return t>=0}},startByDefault:{type:Boolean,default:!0},repeat:{type:Boolean,default:!0},removeAfterRepeat:{type:Boolean,default:!1}},data(){return{currentText:"",typedBeginningWord:"",textFeed:[]}},mounted(){this.startByDefault&&this.begin()},methods:{async begin(){typeof this.text=="string"?this.textFeed=[this.text]:this.textFeed=[...this.text],await d(this.startDelay),await this.writeBeginningWord(),this.autoType()},async writeBeginningWord(){if(this.writtenBeginningWord.length)for(let t of[...this.writtenBeginningWord])this.typedBeginningWord+=t,await d(this.typingDelay)},async autoType(){for(let t of this.textFeed){if(await this.writeWord(t),await d(this.waitBeforeDeleteDelay),!this.repeat&&!this.removeAfterRepeat&&this.textFeed.indexOf(t)===this.textFeed.length-1)break;await this.removeWord(t),await d(this.betweenWordDelay)}this.repeat?this.autoType():this.$emit("finished")},async writeWord(t){for(let e of[...t])this.currentText+=e,await d(this.typingDelay)},async removeWord(t){for(let e=0;e<t.length;e++)this.currentText=this.currentText.slice(0,-1),await d(this.deletingDelay)}}});function C(t,e,r,l,i,_){return c(),x(W(t.componentTag),{class:"auto-typer-vue blink"},{default:s(()=>[p(u(t.beginningWord)+u(t.typedBeginningWord)+u(t.currentText),1)]),_:1})}const j=$(A,[["render",C]]),I={class:"absolute text-[10rem] font-bold opacity-10 text-primary -top-14 right-0"},V={class:"font-bold text-xl"},O={__name:"Step",props:{number:Number,text:String},setup(t){return(e,r)=>{const l=o("v-card-text"),i=o("v-card");return c(),x(i,{variant:"tonal",color:"primary",height:"200"},{default:s(()=>[n("p",I,u(t.number),1),a(l,{class:"absolute bottom-10 font-bold"},{default:s(()=>[n("p",V,u(t.text),1)]),_:1})]),_:1})}}},R=n("div",{class:"text-center"},[n("div",{class:"my-5"},[n("h2",{class:"text-center text-3xl"},[p(" We handle surveys "),n("span",{class:"text-primary"},"efficiently"),p(" for you ")]),n("p",null," We make creating, sharing and managing surveys much easier ")])],-1),P={__name:"WhatIsSurvin",setup(t){const e=["Create an account","Add a survey and copy the link","Share it with anyone","See who responded"];return(r,l)=>{const i=o("v-col"),_=o("v-row");return c(),f(g,null,[R,a(_,null,{default:s(()=>[(c(),f(g,null,D(e,(m,h)=>a(i,{cols:"12",md:"3"},{default:s(()=>[a(O,{number:h+1,text:m},null,8,["number","text"])]),_:2},1024)),64))]),_:1})],64)}}},q=t=>(N("data-v-6fb57453"),t=t(),F(),t),z={class:"h-[60vh] w-full bg-primary flex md:flex-row rounded-lg justify-between items-center"},E={class:"w-full flex items-center gap-5 justify-center flex-col"},G={class:"md:text-5xl text-4xl md:max-w-[90%] font-normal text-white text-center md:text-start"},L={key:0},Q={class:"mt-3"},U={class:"flex justify-center -mt-20 w-10/12 self-center justify-self-center mx-auto h-full gap-2 items-start"},H={class:"bg-white md:p-10 p-3 rounded-lg w-full"},J=q(()=>n("div",{overflow:""},null,-1)),K={class:"mt-10"},M={__name:"index",setup(t){const{mdAndUp:e}=T();let r=["easier.","simpler.","faster."];return(l,i)=>{const _=o("v-btn"),m=o("router-link"),h=o("v-col"),v=o("v-row"),w=o("v-img"),b=o("amp-ad");return c(),f("div",null,[n("div",z,[a(v,{class:""},{default:s(()=>[a(h,{cols:"12"},{default:s(()=>[n("div",E,[n("h1",G,[p(" Surveys made "),y(e)?k("",!0):(c(),f("br",L)),a(y(j),{componentTag:"span",class:"font-bold",text:y(r)},null,8,["text"])]),n("div",Q,[a(m,{to:"/register"},{default:s(()=>[a(_,{color:"white",size:"x-large",variant:"tonal"},{default:s(()=>[p(" Get started ")]),_:1})]),_:1})])])]),_:1})]),_:1})]),n("div",U,[n("div",H,[a(w,{src:"/inapp.webp",rounded:"lg",class:"w-full"})])]),a(b,{width:"100vw",height:"320",type:"adsense","data-ad-client":"ca-pub-1681984016938400","data-ad-slot":"2783266699","data-auto-format":"rspv","data-full-width":""},{default:s(()=>[J]),_:1}),n("div",K,[a(P)])])}}},Y=S(M,[["__scopeId","data-v-6fb57453"]]);export{Y as default};
