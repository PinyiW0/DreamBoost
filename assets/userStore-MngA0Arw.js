import{A as s}from"./index-sWoFWHUv.js";var t={VITE_URL:"https://api.dreamboost.shop",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:r}=t,o=s("userStore",{state:()=>({userData:{userAvatarImage:"",userBirthday:"",userGender:"",userTelephone:""},isUser:!1}),actions:{getUserData(){this.$http.get(`${r}/dreamboost/user/normal/userprofile`).then(e=>{this.userData=e.data.data.result}).catch(()=>{throw new Error("資料未新增")})},changeUser(){this.isUser=!this.isUser}},persist:{storage:localStorage,paths:["isUser"]}});export{o as u};
