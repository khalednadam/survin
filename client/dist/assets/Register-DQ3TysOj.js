import{u as I,y as N,d as S,e as w,j as C,r as _,o as m,f as j,a as t,w as c,g as a,i as r,c as h,I as y,b as x}from"./index-EPunruHw.js";import{u as E,a as p}from"./vee-validate.esm-C5vn0DaY.js";const F=a("h1",{class:"text-7xl mb-10 text-primary"},"Register",-1),L=a("div",null,[a("p",null,"Name")],-1),T=a("div",null,[a("p",null,"Username")],-1),$=a("div",null,[a("p",null,"Email")],-1),q=a("div",{class:"w-full flex justify-between"},[a("p",null,"Password")],-1),D=a("div",{class:"w-full flex justify-between"},[a("p",null,"Confirm password")],-1),G={class:"underline cursor-pointer"},W={__name:"Register",setup(H){const P=I(),A=N(),b=S(),k=[e=>!!e||"Required.",e=>e&&e.length>=8||"Min 8 characters",e=>/\d/.test(e)&&/[a-zA-Z]/.test(e)||"Password must contain at least one letter and one number"],{handleSubmit:U,handleReset:J,isSubmitting:K}=E({validationSchema:{name(e){return(e==null?void 0:e.length)>=2?!0:"Please enter your full name"},username(e){return(e==null?void 0:e.length)>=2&&/^[a-zA-Z0-9](?!.*[._]{2})[a-zA-Z0-9._]{0,28}[a-zA-Z0-9]$/i.test(e)?!0:"Please enter a valid username"},password(e){return(e==null?void 0:e.length)>=2?!0:"Please enter a valid password"},confirmPassword(e){return e===o.value.value||(e==null?void 0:e.length)<2?!0:"Passwords doesn't match"},email(e){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(e)?!0:"Please enter a valid email"}}}),z=w(),i=p("email"),v=p("name"),f=p("username"),o=p("password"),V=p("confirmPassword"),n=w(!1),u=w(!1),g=w(!1),Z=U(async()=>{if(o!==o)return"password not match";g.value=!0,C.post("/auth/register",{name:v.value.value,username:f.value.value,email:i.value.value,password:o.value.value}).then(e=>{C.post("/auth/login",{email:i.value.value,password:o.value.value},{withCredentials:!0}).then(s=>{z.value=s.session,A.getUser(),P.push("/")}).catch(s=>{b.error("An error occurred")})}).catch(e=>{b.error("An error occurred")}).finally(()=>{g.value=!1})});return(e,s)=>{const d=_("v-text-field"),M=_("router-link"),R=_("v-btn"),B=_("v-form");return m(),j("div",null,[F,t(B,{class:"my-auto flex flex-col"},{default:c(()=>[L,t(d,{autofocus:"",modelValue:r(v).value.value,"onUpdate:modelValue":s[0]||(s[0]=l=>r(v).value.value=l),"error-messages":r(v).errorMessage.value},null,8,["modelValue","error-messages"]),T,t(d,{modelValue:r(f).value.value,"onUpdate:modelValue":s[1]||(s[1]=l=>r(f).value.value=l),"error-messages":r(f).errorMessage.value,prefix:"@"},null,8,["modelValue","error-messages"]),$,t(d,{modelValue:r(i).value.value,"onUpdate:modelValue":s[2]||(s[2]=l=>r(i).value.value=l),"error-messages":r(i).errorMessage.value},null,8,["modelValue","error-messages"]),q,t(d,{rules:k,modelValue:r(o).value.value,"onUpdate:modelValue":s[5]||(s[5]=l=>r(o).value.value=l),"error-messages":r(o).errorMessage.value,type:n.value?"text":"password"},{"append-inner":c(()=>[n.value?(m(),h(r(y),{key:0,onClick:s[3]||(s[3]=()=>n.value=!n.value),icon:"ph:eye-closed-bold",width:"30",class:"cursor-pointer"})):(m(),h(r(y),{key:1,onClick:s[4]||(s[4]=()=>n.value=!n.value),icon:"ph:eye-bold",width:"30",class:"cursor-pointer"}))]),_:1},8,["modelValue","error-messages","type"]),D,t(d,{rules:k,modelValue:r(V).value.value,"onUpdate:modelValue":s[8]||(s[8]=l=>r(V).value.value=l),"error-messages":r(V).errorMessage.value,type:u.value?"text":"password"},{"append-inner":c(()=>[u.value?(m(),h(r(y),{key:0,onClick:s[6]||(s[6]=()=>u.value=!u.value),icon:"ph:eye-closed-bold",width:"30",class:"cursor-pointer"})):(m(),h(r(y),{key:1,onClick:s[7]||(s[7]=()=>u.value=!u.value),icon:"ph:eye-bold",width:"30",class:"cursor-pointer"}))]),_:1},8,["modelValue","error-messages","type"]),a("div",null,[a("p",null,[x(" Already have an account? "),a("span",G,[t(M,{to:"/login"},{default:c(()=>[x(" Login ")]),_:1})])])]),t(R,{class:"self-end",onClick:r(Z),variant:"tonal",color:"primary",loading:g.value,disabled:g.value},{default:c(()=>[x(" Register ")]),_:1},8,["onClick","loading","disabled"])]),_:1})])}}};export{W as default};
