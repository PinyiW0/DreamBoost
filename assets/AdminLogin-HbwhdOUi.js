import{L as u,D as _}from"./DashboardFooter-jm-kNJ3_.js";import{m as h}from"./mixinFullScreenLoading-9dNja2ki.js";import{m as x}from"./mixinSwalToast--n5GZdOL.js";import{_ as g,c as f,a as e,b as n,w as y,u as l,B as c,F as w,e as v,d as r,o as L}from"./index-sWoFWHUv.js";var k={VITE_URL:"https://api.dreamboost.shop",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:D}=k,S={data(){return{userdata:{username:"",password:""}}},components:{LogoIcon:u,DashboardFooter:_},methods:{login(){this.showFullScreenLoading({canCancel:!1,opacity:.2}),this.$http.post(`${D}/dreamboost/administrator/login`,this.userdata).then(s=>{this.hideFullScreenLoading();const{token:o,expired:d}=s.data.data;document.cookie=`dreamboostAdminToken=${o};expires=${new Date(d*1e3)};`,this.$router.push("/admin/home/manageaccount")}).catch(s=>{this.hideFullScreenLoading(),this.addToast({content:s.response.data.message,style:"error"})})}},mounted(){},mixins:[h,x]},F={class:"navbar navbar-expand-md container-fluid border-bottom border-5 border-dark-pr bg-gray-800 p-0"},E={class:"container"},V={class:"container flex-grow-1 d-flex flex-column"},R={class:"flex-grow-1 row justify-content-center align-items-center"},T={class:"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 pt-8"},B={class:"px-4 px-md-10 py-5 py-md-10 py-xxl-16 border border-white bg-gray-700 rounded rounded-3"},I=e("p",{class:"mb-5 fs-3 text-white text-center text-md-start"},[v("管理員登入"),e("span",{class:"lh-1 fs-6 ms-2 text-dark-pr d-none d-md-inline-block"},"Sign In")],-1),U={class:"mb-6"},A=e("label",{for:"adminEmail",class:"form-label text-gray-300"},"帳號",-1),C={class:"mb-8 mb-md-16 mb-xxl-24"},N=e("label",{for:"adminPwd",class:"form-label text-gray-300"},"密碼",-1),P=e("button",{type:"submit",class:"btn btn-dark-pr d-block mx-auto px-21 mb-6"},"登入 ",-1),$=e("p",{class:"fs-6 text-primary text-center user-select-none"},[e("span",{class:"border-bottom border-primary"},"不可能忘記密碼吧！")],-1);function H(s,o,d,M,a,i){const m=r("LogoIcon"),p=r("RouterLink"),b=r("DashboardFooter");return L(),f(w,null,[e("nav",F,[e("div",E,[n(p,{to:"/admin/login",class:"p-0"},{default:y(()=>[n(m,{style:{height:"72px"}})]),_:1})])]),e("div",V,[e("div",R,[e("div",T,[e("div",B,[I,e("form",{onSubmit:o[2]||(o[2]=(...t)=>i.login&&i.login(...t))},[e("div",U,[A,l(e("input",{type:"email",class:"form-control borderl bg-white text-white",style:{"--bs-bg-opacity":".15"},placeholder:"電子郵件",id:"adminEmail","aria-describedby":"emailHelp","onUpdate:modelValue":o[0]||(o[0]=t=>a.userdata.username=t)},null,512),[[c,a.userdata.username]])]),e("div",C,[N,l(e("input",{type:"password",class:"form-control borderl bg-white text-white",style:{"--bs-bg-opacity":".15"},placeholder:"密碼",id:"adminPwd","aria-describedby":"emailHelp","onUpdate:modelValue":o[1]||(o[1]=t=>a.userdata.password=t)},null,512),[[c,a.userdata.password]])]),P,$],32)])])])]),n(b)],64)}const G=g(S,[["render",H]]);export{G as default};
