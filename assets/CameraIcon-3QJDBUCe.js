import{s as l}from"./sweetAlert2Store-GLXo5LTU.js";import{_ as m,o as d,c as p,a as _}from"./index-BUPC07h6.js";var h={VITE_URL:"https://api-dreamboost.vercel.app",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{successAlert:f}=l(),V={methods:{async uploadImage(o){var s;let t="";const{VITE_URL:c}=h;try{const e=(s=document.cookie.split("; ").find(i=>i.startsWith("db")))==null?void 0:s.split("=")[1];this.$http.defaults.headers.common.Authorization=e;const n=o.target.files[0],a=new FormData;a.append("image",n);const r=await this.$http.post(`${c}/dreamboost/upload`,a);t=r.data.data.result,f(r.data.message)}catch(e){throw new Error(e)}return t}}},u={},w={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},g=_("path",{d:"M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z",fill:"currentColor"},null,-1),E=[g];function v(o,t){return d(),p("svg",w,E)}const C=m(u,[["render",v]]);export{C,V as m};