import{r as M,v as G,J as le,i as re,o as v,k as y,F as U,n as j,e as h,O as J,l as Q,q as se,a as k,P as ie,b as o,w as i,d as V,Q as de,u as B,I as K,t as Y,m as ue,c as ee,R as ce}from"./index-CRmaKmvz.js";import{u as fe}from"./index-Dxw-y4zj.js";import"./helper-CEVJtdqE.js";const te=200,ve=800,me=.1,pe=.3,ne=.5,ye=.5,_e=12,he=800,ge=1600,be=150,xe=3500,Ce=["#FFC700","#FF0000","#2E3191","#41BBC7"];var X={props:{particleCount:{type:Number,default:be},particleSize:{type:Number,default:_e},duration:{type:Number,default:xe},colors:{type:Array,default:Ce},force:{type:Number,default:ye},stageHeight:{type:Number,default:he},stageWidth:{type:Number,default:ge},shouldDestroyAfterDone:{type:Boolean,default:!0}},setup(t){const p=M(!0),l=(e,a)=>{c(e,{degree:a})},n=G(()=>R(t.particleCount,t.colors));le(()=>{t.particleCount>300&&console.log("[VUE-CONFETTI-EXPLOSION] That's a lot of confetti, you sure about that? A lesser number like 200 will still give off the party vibes while still not bricking the device 😉")});const _=G(()=>x(t.particleCount,t.duration,t.colors,t.particleSize,t.force,t.stageHeight,t.stageWidth));re(async()=>{await T(t.duration),t.shouldDestroyAfterDone&&(p.value=!1)});const R=(e,a)=>{const r=360/e;return Array.from({length:e},(m,u)=>({color:a[u%a.length],degree:u*r}))},T=e=>new Promise(a=>setTimeout(a,e));function g(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return Math.round((e+Number.EPSILON)*10**a)/10**a}function b(e,a){if(e===a)return!0;if(e==null||a==null||e.length!==a.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==a[r])return!1;return!0}const A=(e,a,r,m,u)=>(e-a)*(u-m)/(r-a)+m,L=(e,a)=>{const r=e+a;return r>360?r-360:r},H=()=>Math.random()>.5,Z=[0,0,1],F=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],Z],$=e=>!b(F[e],Z)&&H(),S=e=>typeof e>"u",E=e=>{console.error(e)};function x(e,a,r,m,u,C,I){const w=Number.isSafeInteger;return!S(e)&&w(e)&&e<0?(E("particleCount must be a positive integer"),!1):!S(a)&&w(a)&&a<0?(E("duration must be a positive integer"),!1):!S(r)&&!Array.isArray(r)?(E("colors must be an array of strings"),!1):!S(m)&&w(m)&&m<0?(E("particleSize must be a positive integer"),!1):!S(u)&&w(u)&&(u<0||u>1)?(E("force must be a positive integer and should be within 0 and 1"),!1):!S(C)&&typeof C=="number"&&w(C)&&C<0?(E("floorHeight must be a positive integer"),!1):!S(I)&&typeof I=="number"&&w(I)&&I<0?(E("floorWidth must be a positive integer"),!1):!0}function c(e,a){let{degree:r}=a;const m=A(Math.abs(L(r,90)-180),0,180,-t.stageWidth/2,t.stageWidth/2),u=Math.random()*(ve-te)+te,C=Math.round(Math.random()*(F.length-1)),I=t.duration-Math.round(Math.random()*1e3),w=Math.random()<me,z=$(C),D=w?g(Math.random()*pe,2):0,W=D*-1,d=D,O=g(Math.abs(A(Math.abs(L(r,90)-180),0,180,-1,1)),4),s=g(Math.random()*ne,4),N=g(Math.random()*t.force*(H()?1:-1),4),P=ne,q=g(Math.max(A(Math.abs(r-180),0,180,t.force,-t.force),0),4),f=(ae,oe)=>e==null?void 0:e.style.setProperty(ae,oe+"");f("--x-landing-point",`${m}px`),f("--duration-chaos",`${I}ms`),f("--x1",`${D}`),f("--x2",`${W}`),f("--x3",`${d}`),f("--x4",`${O}`),f("--y1",`${s}`),f("--y2",`${N}`),f("--y3",`${P}`),f("--y4",`${q}`),f("--width",`${z?t.particleSize:Math.round(Math.random()*4)+t.particleSize/2}px`),f("--height",(z?t.particleSize:Math.round(Math.random()*2)+t.particleSize)+"px"),f("--rotation",`${F[C].join()}`),f("--rotation-duration",`${u}ms`),f("--border-radius",`${z?"50%":"0"}`)}return{isVisible:p,isValid:_,stageHeight:t.stageHeight,particles:n,setItemRef:l}}};function we(t,p,l,n,_,R){return n.isVisible&&n.isValid?(v(),y("div",{key:0,class:"confetti-container",style:J(`--floor-height: ${n.stageHeight}px;`)},[(v(!0),y(U,null,j(n.particles,T=>{let{color:g,degree:b}=T;return v(),y("div",{key:b,class:"particle",ref:A=>n.setItemRef(A,b)},[h("div",{style:J(`--bgcolor: ${g};`)},null,4)],512)}),128))],4)):Q("",!0)}function ke(t,p){p===void 0&&(p={});var l=p.insertAt;if(!(!t||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],_=document.createElement("style");_.type="text/css",l==="top"&&n.firstChild?n.insertBefore(_,n.firstChild):n.appendChild(_),_.styleSheet?_.styleSheet.cssText=t:_.appendChild(document.createTextNode(t))}}var Ve=`
@keyframes y-axis-4ff796ae {
to {
    transform: translate3d(0, var(--floor-height), 0);
}
}
@keyframes x-axis-4ff796ae {
to {
    transform: translate3d(var(--x-landing-point), 0, 0);
}
}
@keyframes rotation-4ff796ae {
to {
    transform: rotate3d(var(--rotation), 360deg);
}
}
.confetti-container[data-v-4ff796ae] {
  width: 0;
  height: 0;
  overflow: visible;
  position: relative;
  transform: translate3d(var(--x, 0), var(--y, 0), 0);
  z-index: 1200;
}
.confetti-container > .particle[data-v-4ff796ae] {
  animation: x-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--x1), var(--x2), var(--x3), var(--x4));
}
.confetti-container > .particle div[data-v-4ff796ae] {
  position: absolute;
  top: 0;
  left: 0;
  animation: y-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--y1), var(--y2), var(--y3), var(--y4));
  width: var(--width);
  height: var(--height);
}
.confetti-container > .particle div[data-v-4ff796ae]:before {
  display: block;
  height: 100%;
  width: 100%;
  content: "";
  background-color: var(--bgcolor);
  animation: rotation-4ff796ae var(--rotation-duration) infinite linear;
  border-radius: var(--border-radius);
}
`;ke(Ve);X.render=we;X.__scopeId="data-v-4ff796ae";var Se=(()=>{const t=X;return t.install=p=>{p.component("ConfettiExplosion",t)},t})();const Ee={class:"mt-5"},Ie={class:"my-2"},Ne=h("p",null," Fields ",-1),Me={key:0},Te={class:"ml-10"},Ae={class:"list-disc"},Oe={class:"w-full flex justify-end"},Re={key:0},Fe={key:0},$e=h("p",{class:"my-2"}," Options ",-1),ze={class:"flex space-x-1"},De={key:1,class:"h-[300px] flex flex-col justify-center items-center"},Pe=h("p",null," Select a field to preview its options ",-1),Be=[Pe],Ue={class:"flex flex-row justify-between items-center w-full"},Le=h("p",null," Your survey is ready ",-1),Ze={__name:"CreateSurvey",setup(t){const p=M(),l=M([]),n=M(null),_=se(),R=M(0),T=M(""),g=M(!1),b=M(""),{text:A,copy:L,copied:H,isSupported:Z}=fe({link:b}),F=()=>{R.value++,l.value.push({order:R.value,label:"",type:"",options:[]})},$=x=>{n.value=x},S=()=>{l.value=l.value.filter(x=>n.value!==x.order),$(null)},E=async()=>{try{const x=await ue.post("/survey/",{title:p.value,fields:l.value});T.value=x.data._id,g.value=!0,b.value=`https://survin.onrender.com/survey/${T.value}`}catch(x){console.log(x),_.error("Please fill all the fields")}};return(x,c)=>{const e=k("v-card-title"),a=k("v-text-field"),r=k("v-card-text"),m=k("v-card"),u=k("v-btn"),C=k("v-col"),I=k("v-select"),w=k("v-row"),z=k("router-link"),D=k("v-dialog"),W=ie("click-outside");return v(),y(U,null,[h("div",Ee,[o(w,{class:""},{default:i(()=>[o(C,{cols:"12",md:"8"},{default:i(()=>[o(m,null,{default:i(()=>[o(e,null,{default:i(()=>[V(" Your new survey ")]),_:1}),o(r,{class:"mt-2"},{default:i(()=>[o(a,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=d=>p.value=d),label:"Survey Title"},null,8,["modelValue"]),de((v(),y("div",Ie,[Ne,(v(!0),y(U,null,j(l.value,d=>(v(),ee(m,{key:d.order,variant:n.value===d.order?"flat":"outlined",color:"primary",class:"my-1",onClick:()=>$(d.order)},{default:i(()=>[o(r,null,{default:i(()=>[h("h3",{class:ce(d.label.length<=0?"opacity-50":"opacity-100")},Y(d.label.length>0?d.label:"No Label"),3),h("p",null," type: "+Y(d.type),1),d.options.length>0?(v(),y("div",Me,[V(" Options: "),h("ul",Te,[(v(!0),y(U,null,j(d.options,O=>(v(),y("li",Ae,Y(O),1))),256))])])):Q("",!0)]),_:2},1024)]),_:2},1032,["variant","onClick"]))),128))])),[[W,()=>{}]]),o(u,{color:"primary",variant:"tonal",onClick:F},{default:i(()=>[o(B(K),{icon:"ph:plus"}),V(" Add a field ")]),_:1}),h("div",Oe,[o(u,{color:"primary",variant:"flat",onClick:E,disabled:l.value.length===0},{default:i(()=>[V(" Create ")]),_:1},8,["disabled"])])]),_:1})]),_:1})]),_:1}),o(C,{cols:"12",md:"4"},{default:i(()=>[o(m,null,{default:i(()=>[o(e,null,{default:i(()=>[V(" Options ")]),_:1}),o(r,null,{default:i(()=>{var d,O;return[n.value?(v(),y("div",Re,[o(a,{label:"Label",modelValue:l.value.find(s=>s.order===n.value).label,"onUpdate:modelValue":c[1]||(c[1]=s=>l.value.find(N=>N.order===n.value).label=s)},null,8,["modelValue"]),o(I,{label:"Type",items:["text","textarea","radio","checkbox","dropdown","rating","date","file","email","number","phone number"],modelValue:l.value.find(s=>s.order===n.value).type,"onUpdate:modelValue":c[2]||(c[2]=s=>l.value.find(N=>N.order===n.value).type=s)},null,8,["modelValue"]),l.value.find(s=>s.order===n.value).type==="radio"||l.value.find(s=>s.order===n.value).type==="checkbox"||l.value.find(s=>s.order===n.value).type==="dropdown"?(v(),y("div",Fe,[$e,(v(!0),y(U,null,j(l.value.find(s=>s.order===n.value).options,(s,N)=>(v(),ee(a,{label:"option",modelValue:l.value.find(P=>P.order===n.value).options[N],"onUpdate:modelValue":P=>l.value.find(q=>q.order===n.value).options[N]=P},null,8,["modelValue","onUpdate:modelValue"]))),256)),o(u,{disabled:((O=l.value.find(s=>s.order===n.value).options[((d=l.value.find(s=>s.order===n.value).options)==null?void 0:d.length)-1])==null?void 0:O.length)<0,color:"primary",onClick:c[3]||(c[3]=()=>l.value.find(s=>s.order===n.value).options.push("")),variant:"tonal"},{default:i(()=>[V(" Add option ")]),_:1},8,["disabled"])])):Q("",!0),h("div",ze,[o(u,{color:"primary",flat:"",class:"mt-5",onClick:c[4]||(c[4]=()=>$(null))},{default:i(()=>[V(" Done ")]),_:1}),o(u,{color:"error",flat:"",class:"mt-5",onClick:S},{default:i(()=>[V(" Delete ")]),_:1})])])):(v(),y("div",De,Be))]}),_:1})]),_:1})]),_:1})]),_:1})]),o(D,{persistent:"",modelValue:g.value,"onUpdate:modelValue":c[7]||(c[7]=d=>g.value=d),class:"md:max-w-[35vw] w-full"},{default:i(()=>[o(B(Se)),o(m,null,{default:i(()=>[o(e,null,{default:i(()=>[h("div",Ue,[Le,o(z,{to:"/"},{default:i(()=>[o(u,{icon:"",size:"x-small",variant:"text"},{default:i(()=>[o(B(K),{icon:"ph:x",width:"20"})]),_:1})]),_:1})])]),_:1}),o(r,null,{default:i(()=>[V(" You can share it with whoever you want :) "),o(a,{readonly:"",modelValue:b.value,"onUpdate:modelValue":c[6]||(c[6]=d=>b.value=d)},{append:i(()=>[o(u,{size:"large",flat:"",color:"primary",onClick:c[5]||(c[5]=d=>B(L)(b.value))},{default:i(()=>[V(Y(B(H)?"Copied":"Copy"),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}};export{Ze as default};