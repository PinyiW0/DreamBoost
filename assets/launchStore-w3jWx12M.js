import{q as c}from"./index-QbPLaDgz.js";import{s as i}from"./sweetAlert2Store-IPT1tDKT.js";var l={VITE_URL:"https://api.dreamboost.shop",VITE_WEIKEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJ1c2VySUQiOiIzYTU4MjBhZi1iN2JlLTRkODMtOWM2My1kNmY1MWI2YmExMDEiLCJpYXQiOjE3MDg5Mzk5MDcsImV4cCI6MTcxMTUzMTkwN30.BbIXGVkQOU2HqsiCg6UcwFZx-kBd7kdOP24kUD21c1M",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{successAlert:o,errorAlert:n}=i(),{VITE_URL:e}=l,u={proposalTitle:"",proposalMainImage:"",proposalCategory:"",proposalTargetMoney:5e3,proposalArticle:"",proposalSummary:"",proposalStartTime:"",proposalEndTime:"",proposalFAQs:[{question:"",answer:""}],proposalImages:["temp"],customizeProperty:{userName:"",userEmail:"",userTel:"",userLeader:"",userIdentity:"",userImage:"",userRepresent:"",registerName:"",displayName:"",introduction:"",fanPage:"",projectPage:""}},I=c("launchStore",{state:()=>({launchData:"",launchState:""}),persist:{storage:sessionStorage,paths:["launchData"]},actions:{async postLaunch(){let t;try{const a=await this.$http.post(`${e}/dreamboost/proposal/normal/proposal`,this.launchData),{message:s,success:r}=a.data;sessionStorage.setItem("launchID",a.data.data.proposalID),o(s),t=r}catch(a){n(a.response.data.message)}return t},async putLaunch(t){let a;try{const s=await this.$http.put(`${e}/dreamboost/proposal/admin/proposal/${t}`,this.launchData),{message:r,success:p}=s.data;o(r),a=p}catch(s){n(s.response.data.message)}return a},async getLaunch(t){try{const a=await this.$http.get(`${e}/dreamboost/proposal/normal/proposal/${t}`);this.launchData=a.data.data.result}catch(a){throw new Error(a)}},async submitLaunch(){let t;const a=sessionStorage.getItem("launchID");try{t=(await this.$http.post(`${e}/dreamboost/proposal/admin/changeToReview`,{proposalID:a})).data.success,o("提案已提交審核"),sessionStorage.removeItem("launchID"),this.resetLaunchData()}catch(s){n(s.response.data.message)}return t},resetLaunchData(){this.launchData=JSON.parse(JSON.stringify(u))},setUserEmail(t){this.launchData.customizeProperty.userEmail=t}}});export{I as l};