import{d as p,j as x,r as o,o as g,f as h,a as l,w as m,B as b,i as e,g as r,b as w}from"./index-EPunruHw.js";import{u as S,a as V}from"./vee-validate.esm-C5vn0DaY.js";const y=r("h1",{class:"text-7xl mb-10 text-primary"},"Forgot Passowrd",-1),C=r("div",null,[r("p",null,"Email")],-1),E={__name:"ForgotPassword",setup(k){const n=p(),{handleSubmit:c,isSubmitting:s}=S({validationSchema:{email(t){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(t)?!0:"Please enter a valid email"}}}),a=V("email"),i=c(async()=>{s.value=!0,x.post("/auth/forgot-password",{email:a.value.value},{withCredentials:!0}).then(t=>{n.success("Email was sent"),a.value.value=""}).catch(t=>{n.error("An error occurred")}).finally(()=>{s.value=!1})});return(t,u)=>{const d=o("v-text-field"),v=o("v-btn"),_=o("v-form");return g(),h("div",null,[y,l(_,{class:"my-auto flex flex-col",onSubmit:b(e(i),["prevent"])},{default:m(()=>[C,l(d,{autofocus:"",modelValue:e(a).value.value,"onUpdate:modelValue":u[0]||(u[0]=f=>e(a).value.value=f),"error-messages":e(a).errorMessage.value},null,8,["modelValue","error-messages"]),l(v,{class:"self-end",onClick:e(i),variant:"tonal",loading:e(s),color:"primary"},{default:m(()=>[w(" Submit ")]),_:1},8,["onClick","loading"])]),_:1},8,["onSubmit"])])}}};export{E as default};
