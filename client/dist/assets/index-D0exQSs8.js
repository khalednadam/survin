import{O as b,o as d,c as x,w as s,b as p,t as u,P as B,r as a,f as n,a as r,e as f,F as g,v as W,_ as D,j as T,h as y,g as S}from"./index-D6D7VyKe.js";const k=(t,e)=>{const o=t.__vccOpts||t;for(const[l,i]of e)o[l]=i;return o};async function c(t){return new Promise(e=>setTimeout(e,t))}const N=b({name:"AutoTyperVue",emits:["finished"],props:{componentTag:{type:String,default:"span",validator(t){return/^(span)|(h\d)|(p)|(a)$/.test(t)}},beginningWord:{type:String,default:""},writtenBeginningWord:{type:String,default:""},text:{type:[String,Array],required:!0,validator(t){return typeof t=="string"?t.length>0:t.every(e=>typeof e=="string"&&e.length>0)}},startDelay:{type:Number,default:500,validator(t){return t>=0}},betweenWordDelay:{type:Number,default:500,validator(t){return t>=0}},typingDelay:{type:Number,default:150,validator(t){return t>=0}},deletingDelay:{type:Number,default:100,validator(t){return t>=0}},waitBeforeDeleteDelay:{type:Number,default:500,validator(t){return t>=0}},startByDefault:{type:Boolean,default:!0},repeat:{type:Boolean,default:!0},removeAfterRepeat:{type:Boolean,default:!1}},data(){return{currentText:"",typedBeginningWord:"",textFeed:[]}},mounted(){this.startByDefault&&this.begin()},methods:{async begin(){typeof this.text=="string"?this.textFeed=[this.text]:this.textFeed=[...this.text],await c(this.startDelay),await this.writeBeginningWord(),this.autoType()},async writeBeginningWord(){if(this.writtenBeginningWord.length)for(let t of[...this.writtenBeginningWord])this.typedBeginningWord+=t,await c(this.typingDelay)},async autoType(){for(let t of this.textFeed){if(await this.writeWord(t),await c(this.waitBeforeDeleteDelay),!this.repeat&&!this.removeAfterRepeat&&this.textFeed.indexOf(t)===this.textFeed.length-1)break;await this.removeWord(t),await c(this.betweenWordDelay)}this.repeat?this.autoType():this.$emit("finished")},async writeWord(t){for(let e of[...t])this.currentText+=e,await c(this.typingDelay)},async removeWord(t){for(let e=0;e<t.length;e++)this.currentText=this.currentText.slice(0,-1),await c(this.deletingDelay)}}});function F(t,e,o,l,i,_){return d(),x(B(t.componentTag),{class:"auto-typer-vue blink"},{default:s(()=>[p(u(t.beginningWord)+u(t.typedBeginningWord)+u(t.currentText),1)]),_:1})}const $=k(N,[["render",F]]),A={class:"absolute text-[10rem] font-bold opacity-10 text-primary -top-14 right-0"},C={class:"font-bold text-xl"},j={__name:"Step",props:{number:Number,text:String},setup(t){return(e,o)=>{const l=a("v-card-text"),i=a("v-card");return d(),x(i,{variant:"tonal",color:"primary",height:"200"},{default:s(()=>[n("p",A,u(t.number),1),r(l,{class:"absolute bottom-10 font-bold"},{default:s(()=>[n("p",C,u(t.text),1)]),_:1})]),_:1})}}},V=n("div",{class:"text-center"},[n("div",{class:"my-5"},[n("h2",{class:"text-center text-3xl"},[p(" We handle surveys "),n("span",{class:"text-primary"},"efficiently"),p(" for you ")]),n("p",null," We make creating, sharing and managing surveys much easier ")])],-1),O={__name:"WhatIsSurvin",setup(t){const e=["Create an account","Add a survey and copy the link","Share it with anyone","See who responded"];return(o,l)=>{const i=a("v-col"),_=a("v-row");return d(),f(g,null,[V,r(_,null,{default:s(()=>[(d(),f(g,null,W(e,(m,h)=>r(i,{cols:"12",md:"3"},{default:s(()=>[r(j,{number:h+1,text:m},null,8,["number","text"])]),_:2},1024)),64))]),_:1})],64)}}},I={class:"h-[60vh] w-full bg-primary flex md:flex-row rounded-lg justify-between items-center"},P={class:"w-full flex items-center gap-5 justify-center flex-col"},R={class:"md:text-5xl text-4xl md:max-w-[90%] font-normal text-white text-center md:text-start"},q={key:0},z={class:"mt-3"},E={class:"flex justify-center -mt-20 w-10/12 self-center justify-self-center mx-auto h-full gap-2 items-start"},G={class:"bg-white md:p-10 p-3 rounded-lg w-full"},L={class:"mt-10"},U={__name:"index",setup(t){const{mdAndUp:e}=T();let o=["easier.","simpler.","faster."];return(l,i)=>{const _=a("v-btn"),m=a("router-link"),h=a("v-col"),v=a("v-row"),w=a("v-img");return d(),f("div",null,[n("div",I,[r(v,{class:""},{default:s(()=>[r(h,{cols:"12"},{default:s(()=>[n("div",P,[n("h1",R,[p(" Surveys made "),y(e)?S("",!0):(d(),f("br",q)),r(y($),{componentTag:"span",class:"font-bold",text:y(o)},null,8,["text"])]),n("div",z,[r(m,{to:"/register"},{default:s(()=>[r(_,{color:"white",size:"x-large",variant:"tonal"},{default:s(()=>[p(" Get started ")]),_:1})]),_:1})])])]),_:1})]),_:1})]),n("div",E,[n("div",G,[r(w,{src:"/inapp.webp",rounded:"lg",class:"w-full"})])]),n("div",L,[r(O)])])}}},J=D(U,[["__scopeId","data-v-880fffde"]]);export{J as default};