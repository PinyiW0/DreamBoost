import{_ as u,o as h,c as p,a as t,f as d,e as _,b,s as i,A as m,B as g,r as x}from"./index-TdGDtMhl.js";import{m as y}from"./mixinFullScreenLoading-9dNja2ki.js";import{m as I}from"./mixinSwalToast-gFddruI-.js";const v={},k={style:{"margin-bottom":"2px"},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-cloud-arrow-up-fill",viewBox:"0 0 16 16"},U=t("path",{d:"M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"},null,-1),w=[U];function M(o,e){return h(),p("svg",k,w)}const E=u(v,[["render",M]]);var $={VITE_URL:"https://api.dreamboost.shop",VITE_WEIKEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJ1c2VySUQiOiIzYTU4MjBhZi1iN2JlLTRkODMtOWM2My1kNmY1MWI2YmExMDEiLCJpYXQiOjE3MDg5Mzk5MDcsImV4cCI6MTcxMTUzMTkwN30.BbIXGVkQOU2HqsiCg6UcwFZx-kBd7kdOP24kUD21c1M",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:r}=$,T={components:{UpLoad:E},data(){return{userMail:"",placeholderText:"abc@mail.com",userInfo:{userTelephone:"09123456789",userGender:"",userAvatarImage:"",userBirthday:"",customizeProperty:{contactEmail:""}}}},mixins:[y,I],mounted(){this.showFullScreenLoading(),this.checkUser(),this.getUserData(),setTimeout(()=>{this.hideFullScreenLoading()},1500)},methods:{checkUser(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=o,this.$http.post(`${r}/dreamboost/checktoken`).then(e=>{e.data.success&&(this.userMail=e.data.data.result.username)}).catch(()=>{this.$router.push({name:"member"})})},userUploadImage(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=o;const e=document.createElement("input");e.type="file",e.style.display="none",e.addEventListener("change",c=>{const n=c.target.files[0],s=new FormData;s.append("image",n),this.$http.post(`${r}/dreamboost/upload`,s,{Authorization:o}).then(a=>{a.data.success&&(this.userInfo.userAvatarImage=a.data.data.result,this.addToast({content:"修改成功",timer:2e3}))}).catch(a=>{console.log(a,"沒有上傳成功")})}),e.click()},updateUserProfile(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=o,this.$http.post(`${r}/dreamboost/user/normal/userprofile`,this.userInfo).then(e=>{e.data.success?(console.log(e.data),this.addToast({content:"修改成功",timer:2e3})):console.error("更新使用者資料失敗：",e.data.message)}).catch(e=>{console.error("更新使用者資料失敗：",e)})},getUserData(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=o,this.$http.get(`${r}/dreamboost/user/normal/userprofile`).then(e=>{e.data.success?(this.userInfo=e.data.data.result,this.userInfo.customizeProperty?console.warn("取得既有的使用者資料失敗：",e):(this.userInfo.customizeProperty={contactEmail:""},this.placeholderText=this.userInfo.customizeProperty.contactEmail)):console.error("更新使用者資料失敗：",e.data.message)}).catch(e=>{console.error("更新使用者資料失敗：",e)})}}},V={class:"container pt-20 mx-auto"},z={class:"col-7 d-flex flex-column flex-lg-row align-items-center justify-content-center mx-auto mb-14"},B=["src"],D={class:"d-flex flex-column justify-content-center align-items-center align-items-lg-start"},L=t("div",{class:"d-flex flex-column flex-lg-row align-items-center align-items-lg-baseline"},[t("h1",{class:"fs-3 text-primary mb-0 mb-lg-20 me-0 me-lg-2"},"個人資料"),t("p",{class:"fs-5 text-primary-light mb-5 mb-lg-0"},"Personal Information")],-1),P=t("p",{class:"mb-0"},"請上傳 2MB 以內的 JPEG 或 PNG 檔",-1),C={class:"container col-11 col-lg-6 mx-auto"},A={class:"col-12 col-lg-10 mb-9 mx-auto"},S=t("label",{for:"addressee",class:"form-label fw-medium text-gray-500"}," 註冊信箱 ",-1),O=["placeholder"],R=t("p",{class:"fs-6 text-gray-500 mt-1"},"此為您的登入帳號",-1),F={class:"col-12 col-lg-10 mb-6 mb-lg-11 mx-auto"},J=t("label",{for:"contact-email",class:"form-label fw-medium"}," 聯絡信箱 ",-1),N=["placeholder"],G={class:"col-12 col-lg-10 mb-17 mx-auto"},j={class:"row gy-3"},W={class:"col-12 col-lg-6 mb-6"},Y=t("label",{for:"start-time",class:"form-label lh-md fw-medium"}," 生日 ",-1),Q={class:"col-12 col-lg-6"},X=t("label",{for:"gender",class:"form-label fw-medium lh-md"},"性別",-1),Z=t("option",{selected:"",disabled:"",value:"choose"},"請選擇",-1),q=t("option",{value:"male"},"男性",-1),H=t("option",{value:"female"},"女性",-1),K=[Z,q,H],ee={class:"col-12 col-lg-6 mb-25 mx-auto"};function te(o,e,c,n,s,a){const f=x("UpLoad");return h(),p("main",null,[t("section",V,[t("div",z,[t("img",{src:s.userInfo.userAvatarImage,id:"userAvatarImage",class:"rounded-circle img-fluid object-fit-cover d-block me-0 me-lg-14 mb-6 mb-lg-0",style:{width:"180px",height:"180px"},alt:"會員自行上傳的圖像"},null,8,B),t("div",D,[L,t("button",{type:"button",class:"btn border-0 fs-4 fs-lg-5 fw-medium text-primary ps-0 pe-1 py-0 mb-2",onClick:e[0]||(e[0]=d((...l)=>a.userUploadImage&&a.userUploadImage(...l),["prevent"]))},[_(" 上傳圖片 "),t("span",null,[b(f,{class:"upload-hover"})])]),P])])]),t("section",C,[t("div",A,[S,t("input",{class:"form-control fs-6 border-primary-light py-2",id:"addressee",placeholder:s.userMail,disabled:""},null,8,O),R]),t("div",F,[J,i(t("input",{class:"form-control fs-6 border-primary-light text-gray-500 py-2",id:"contact-email","onUpdate:modelValue":e[1]||(e[1]=l=>s.userInfo.customizeProperty.contactEmail=l),placeholder:s.placeholderText},null,8,N),[[m,s.userInfo.customizeProperty.contactEmail]])]),t("div",G,[t("div",j,[t("div",W,[Y,i(t("input",{type:"date",class:"form-control border-primary-light text-gray-500",id:"birth","onUpdate:modelValue":e[2]||(e[2]=l=>s.userInfo.userBirthday=l)},null,512),[[m,s.userInfo.userBirthday]])]),t("div",Q,[X,i(t("select",{class:"form-select border-primary-light fs-6 text-gray-500 py-2","aria-label":"male-or-female",id:"ID-gender","onUpdate:modelValue":e[3]||(e[3]=l=>s.userInfo.userGender=l)},K,512),[[g,s.userInfo.userGender]])])])]),t("div",ee,[t("button",{type:"submit",class:"btn btn-primary w-100",onClick:e[4]||(e[4]=d((...l)=>a.updateUserProfile&&a.updateUserProfile(...l),["prevent"]))}," 修改並儲存 ")])])])}const le=u(T,[["render",te]]);export{le as default};
