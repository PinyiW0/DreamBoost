import{_ as d,o as t,c as a,a as e,q as f,t as i,F as m,r as b,e as w,b as x,j as $,d as h}from"./index-sWoFWHUv.js";import{m as v}from"./mixinFullScreenLoading-9dNja2ki.js";import{m as y}from"./mixinSwalToast--n5GZdOL.js";const A={},S={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},D=e("path",{d:"M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z",fill:"currentColor"},null,-1),L=[D];function I(o,s){return t(),a("svg",S,L)}const U=d(A,[["render",I]]),k={props:["messageData"],data(){return{collapseInstance:"",isShown:!1}},methods:{initCollapse(){this.collapseInstance=new this.$bs.Collapse(this.$refs.collapseArea,{toggle:!1}),this.$refs.collapseArea.addEventListener("show.bs.collapse",()=>{this.isShown=!0}),this.$refs.collapseArea.addEventListener("hide.bs.collapse",()=>{this.isShown=!1})},hide(){this.collapseInstance.hide()},show(){this.collapseInstance.show()},toggle(){this.collapseInstance.toggle()}},mounted(){this.initCollapse()}},C={class:"accordion-item border-0 border-bottom border-primary-light rounded-0"},E={class:"accordion-header"},M={ref:"collapseArea",class:"accordion-collapse collapse","data-bs-parent":"#messageAccordion"},T={class:"accordion-body"},B={class:"fs-6 text-gray-500 mt-6 mb-0"};function F(o,s,n,p,r,c){return t(),a("div",C,[e("h2",E,[e("button",{class:f(["accordion-button bg-transparent text-primary shadow-none",{collapsed:!r.isShown}]),type:"button","data-bs-toggle":"collapse",onClick:s[0]||(s[0]=(...l)=>c.toggle&&c.toggle(...l))},[e("span",null,i(n.messageData.messageTitle),1)],2)]),e("div",M,[e("div",T,[e("span",null,i(n.messageData.messageContent),1),e("p",B,i(new Date(n.messageData.messageTime)),1)])],512)])}const V=d(k,[["render",F],["__scopeId","data-v-29920b8d"]]);var N={VITE_URL:"https://api.dreamboost.shop",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:R}=N,z={data(){return{apiUserMessages:""}},computed:{messagesSorted(){return this.apiUserMessages.slice().sort((o,s)=>s.messageTime-o.messageTime)}},methods:{getUserMessages(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/,"$1");this.showFullScreenLoading({canCancel:!1}),this.$http.get(`${R}/dreamboost/message/normal/messages`,{headers:{Authorization:o}}).then(s=>{this.apiUserMessages=Object.values(s.data.data.result),this.hideFullScreenLoading()}).catch(()=>{this.hideFullScreenLoading()})}},components:{AnglesDown:U,AccordionItem:V},mounted(){this.getUserMessages()},mixins:[y,v]},O={class:"container"},j={class:"rounded-3 py-14 px-20 my-20 shadow"},q=e("div",{class:"d-flex flex-column mb-7"},[e("h1",{class:"fs-3 text-primary mb-0"},"最新通知"),e("p",{class:"fs-6 text-primary-light mb-0"},"News for you")],-1),P={class:"accordion p-4 pb-11 border border-primary-light rounded-3",id:"messageAccordion"},G={class:"d-flex flex-column mt-5"},H={type:"button",class:"btn border-0 angle-down"},J={class:"d-flex flex-column align-items-center fs-5 fw-blod"},K={key:1};function Q(o,s,n,p,r,c){const l=h("AccordionItem"),_=h("AnglesDown");return t(),a("main",null,[e("section",O,[e("div",j,[q,r.apiUserMessages?(t(),a(m,{key:0},[e("div",P,[(t(!0),a(m,null,b(c.messagesSorted,(g,u)=>(t(),$(l,{key:`${u}-AccordionList`,"message-data":g},null,8,["message-data"]))),128))]),e("div",G,[e("button",H,[e("span",J,[w("載入更多 "),x(_,{class:"mb-0",style:{width:"18px"}})])])])],64)):(t(),a("p",K,"目前沒有任何通知"))])])])}const Z=d(z,[["render",Q]]);export{Z as default};
