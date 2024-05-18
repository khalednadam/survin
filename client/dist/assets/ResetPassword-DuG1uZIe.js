import{n as B,u as S,d as N,e as w,j as R,r as v,o as n,f as I,a as u,w as d,B as M,i as e,g as l,c as i,I as c,b as F}from"./index-EPunruHw.js";import{u as T,a as _}from"./vee-validate.esm-C5vn0DaY.js";const U=l("h1",{class:"text-7xl mb-10 text-primary"},"Reset Passowrd",-1),j=l("div",null,[l("p",null,"New password")],-1),q=l("div",null,[l("p",null,"New password confirmation")],-1),$={__name:"ResetPassword",setup(z){const g=B(),x=S(),f=N(),{handleSubmit:b,isSubmitting:P}=T({validationSchema:{password(o){return(o==null?void 0:o.length)>=2?!0:"Please enter a valid password"},confirmPassword(o){return o===a.value.value||(o==null?void 0:o.length)<2?!0:"Passwords doesn't match"}}}),t=w(!1),r=w(!1),a=_("password"),p=_("confirmPassword"),y=w(g.query.token),h=b(async()=>{R.post("/auth/reset-password",{password:a.value.value},{params:{token:y.value},headers:{Authorization:`Bearer ${y.value}`},withCredentials:!0}).then(o=>{f.success("Password was reset successfully"),x.push("/login")}).catch(o=>{f.error("Resetting password failed")})});return(o,s)=>{const k=v("v-text-field"),C=v("v-btn"),V=v("v-form");return n(),I("div",null,[U,u(V,{class:"my-auto flex flex-col",onSubmit:M(e(h),["prevent"])},{default:d(()=>[j,u(k,{autofocus:"","error-messages":e(a).errorMessage.value,modelValue:e(a).value.value,"onUpdate:modelValue":s[2]||(s[2]=m=>e(a).value.value=m),type:t.value?"text":"password"},{"append-inner":d(()=>[t.value?(n(),i(e(c),{key:0,onClick:s[0]||(s[0]=()=>t.value=!t.value),icon:"ph:eye-closed-bold",width:"30",class:"cursor-pointer"})):(n(),i(e(c),{key:1,onClick:s[1]||(s[1]=()=>t.value=!t.value),icon:"ph:eye-bold",width:"30",class:"cursor-pointer"}))]),_:1},8,["error-messages","modelValue","type"]),q,u(k,{modelValue:e(p).value.value,"onUpdate:modelValue":s[5]||(s[5]=m=>e(p).value.value=m),"error-messages":e(p).errorMessage.value,type:r.value?"text":"password"},{"append-inner":d(()=>[r.value?(n(),i(e(c),{key:0,onClick:s[3]||(s[3]=()=>r.value=!r.value),icon:"ph:eye-closed-bold",width:"30",class:"cursor-pointer"})):(n(),i(e(c),{key:1,onClick:s[4]||(s[4]=()=>r.value=!r.value),icon:"ph:eye-bold",width:"30",class:"cursor-pointer"}))]),_:1},8,["modelValue","error-messages","type"]),u(C,{class:"self-end",onClick:e(h),variant:"tonal",loading:e(P),color:"primary"},{default:d(()=>[F(" Submit ")]),_:1},8,["onClick","loading"])]),_:1},8,["onSubmit"])])}}};export{$ as default};
