import{l as P,u as Q,j as W,d as u,n as X,p as Y,r as n,o as s,e as l,f as c,a as o,w as e,b as g,t as i,h as d,c as v,g as h,F as B,i as I,I as A,v as L}from"./index-B_-3D1y9.js";const ee={class:"flex justify-start items-center gap-5 mt-5"},te={class:"font-normal"},se={class:"font-bold"},ae={class:"my-5"},oe={class:"opacity-50 ml-2"},le={key:0,class:"font-bold"},ne={key:0},ce={key:0,class:"ml-2"},re={key:1},ue={key:2,class:"ml-2"},ie={key:3,class:"ml-2"},de=c("div",{class:"h-full w-full flex justify-center items-center"},[c("p",null," Select a response to see its details ")],-1),ve={class:"flex justify-between items-center"},_e=c("p",null," Responses ",-1),ye={__name:"Responses",setup(pe){const m=P(),z=Q(),D={hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short",year:"numeric"},F={day:"2-digit",month:"short",year:"numeric"},{mdAndUp:R}=W(),y=u(!1),V=u([]),w=u(!1),O=u(m.params.surveyId),U=u(!1),r=u(""),f=u(m.query.response),k=u(""),E=async()=>{w.value=!0;try{const a=await I.get(`/response/of/${O.value}`,{params:{sortBy:"createdAt:desc"}});V.value=a.data.results}catch(a){console.log(a)}finally{w.value=!1}},M=async()=>{U.value=!0;try{const a=await I.get(`/response/${f.value}`);r.value=a.data}catch(a){console.log(a)}finally{U.value=!1}},T=async()=>{w.value=!0;try{const a=await I.get(`survey/${m.params.surveyId}`);k.value=a.data}catch(a){console.log(a)}finally{w.value=!1}},$=a=>{window.history.replaceState(null,"",`?response=${a}`),f.value=a};X(async()=>{await T(),await E()}),Y(f,()=>{M()},{deep:!0,immediate:!0});const Z=()=>z.go(-1);return(a,_)=>{const C=n("v-btn"),N=n("v-list-item"),j=n("v-virtual-scroll"),x=n("v-card-text"),S=n("v-card"),q=n("v-col"),G=n("v-rating"),H=n("v-row"),J=n("v-card-title"),K=n("v-dialog");return s(),l(B,null,[c("div",null,[c("div",ee,[o(C,{onClick:Z,icon:"",variant:"tonal",size:"small",color:"primary",class:""},{default:e(()=>[o(d(A),{icon:"ph:caret-left",class:"text-primary",width:"25"})]),_:1}),c("h1",te,[g(" Responses of "),c("span",se,' "'+i(k.value.title)+'" ',1)])]),o(H,{class:"mt-5"},{default:e(()=>[d(R)?(s(),v(q,{key:0,cols:"0",md:"4"},{default:e(()=>[o(S,null,{default:e(()=>[o(x,null,{default:e(()=>[o(j,{class:"max-h-[70vh]",items:V.value},{default:e(({item:t})=>[(s(),v(N,{key:d(m).query.response,onClick:()=>$(t.id),color:"primary",active:f.value===t.id},{default:e(()=>[g(" Response on "+i(new Date(t.createdAt).toLocaleString("en-US",D)),1)]),_:2},1032,["onClick","active"]))]),_:1},8,["items"])]),_:1})]),_:1})]),_:1})):h("",!0),d(R)?h("",!0):(s(),v(C,{key:1,class:"w-full",flat:"",color:"primary",onClick:_[0]||(_[0]=t=>y.value=!0)},{default:e(()=>[g(" Responses ")]),_:1})),o(q,{cols:"12",md:"8"},{default:e(()=>[o(S,null,{default:e(()=>[k.value&&r.value?(s(),v(x,{key:0},{default:e(()=>[(s(!0),l(B,null,L(k.value.fields,(t,p)=>(s(),l("div",ae,[c("p",oe,[g(i(t.label)+" ",1),t.required?(s(),l("span",le," * ")):h("",!0)]),r.value.answers[p].value.length>0||t.type==="rating"?(s(),l("div",ne,[t.type==="date"?(s(),l("p",ce,i(new Date(r.value.answers[p].value).toLocaleString("en-NZ",F)),1)):t.type==="rating"?(s(),l("div",re,[o(G,{readonly:"",modelValue:r.value.answers[p].value,"onUpdate:modelValue":b=>r.value.answers[p].value=b,"active-color":"primary",color:"grey-lighten-1"},null,8,["modelValue","onUpdate:modelValue"])])):t.type==="checkbox"?(s(),l("div",ue,[(s(!0),l(B,null,L(r.value.answers[p].value,b=>(s(),l("span",null,i(b)+", ",1))),256))])):(s(),l("p",ie,i(r.value.answers[p].value),1))])):h("",!0)]))),256))]),_:1})):(s(),v(x,{key:1},{default:e(()=>[de]),_:1}))]),_:1})]),_:1})]),_:1})]),d(R)?h("",!0):(s(),v(K,{key:0,modelValue:y.value,"onUpdate:modelValue":_[2]||(_[2]=t=>y.value=t)},{default:e(()=>[o(S,null,{default:e(()=>[o(J,null,{default:e(()=>[c("div",ve,[_e,o(C,{icon:"",variant:"text",size:"x-small",onClick:_[1]||(_[1]=t=>y.value=!1)},{default:e(()=>[o(d(A),{icon:"ph:x",width:"20"})]),_:1})])]),_:1}),o(x,null,{default:e(()=>[o(j,{class:"max-h-[70vh]",items:V.value},{default:e(({item:t})=>[(s(),v(N,{key:d(m).query.response,onClick:()=>{$(t.id),y.value=!1},color:"primary",active:f.value===t.id},{default:e(()=>[g(" Response on "+i(new Date(t.createdAt).toLocaleString("en-US",D)),1)]),_:2},1032,["onClick","active"]))]),_:1},8,["items"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))],64)}}};export{ye as default};
