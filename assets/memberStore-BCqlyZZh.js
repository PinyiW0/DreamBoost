import{A as i}from"./index-sWoFWHUv.js";import{s as c}from"./sweetAlert2Store-M-KFz2Pq.js";import{l as m}from"./launchStore-vk7OD2Xz.js";import{u as p}from"./userStore-MngA0Arw.js";var d={VITE_URL:"https://api.dreamboost.shop",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{successAlert:a,errorAlert:n}=c(),{setUserEmail:h}=m(),{changeUser:u}=p(),{VITE_URL:r}=d,$=i("memberStore",{state:()=>({userData:{name:"",username:"",password:""}}),actions:{async postLogin(){try{const t=await this.$http.post(`${r}/dreamboost/login`,this.userData),{token:e,expired:s}=t.data.data;document.cookie=`db=${e}; expires=${new Date(s*1e3)};`,a(t.data.message),u(),setTimeout(()=>{this.$router.go(-1)},1800)}catch(t){n(t.response.data.message)}},async postSignup(){let t;try{const e=await this.$http.post(`${r}/dreamboost/signup`,this.userData),{message:s,success:o}=e.data;t=o,a(s)}catch(e){n(e.response.data.message)}return t},async postCheckToken(){var e;const t=(e=document.cookie.split("; ").find(s=>s.startsWith("db")))==null?void 0:e.split("=")[1];this.$http.defaults.headers.common.Authorization=t;try{const o=(await this.$http.post(`${r}/dreamboost/checktoken`)).data.data.result.username;h(o)}catch(s){throw new Error(s)}}}});export{$ as m};
