import{_ as b,N as w,P as _,y as f,g,h as k,m as I,z as y,k as P,c as r,a as i,i as c,w as n,A as x,l as S,r as a,o as s,F as M,d as V,b as C}from"./index-QbPLaDgz.js";import{e as l}from"./exploreStore-rYEja-bd.js";import{P as E}from"./PlanCard-v2btrMDC.js";/* empty css                   */import{m as v}from"./mixinFullScreenLoading-9dNja2ki.js";import"./CheckIcon-XPtWJgvA.js";import"./RightArrow-t0vVcAn4.js";import"./StarHollow-qf5rJUc1.js";import"./StarFull-nQ84elKi.js";var F={VITE_URL:"https://api.dreamboost.shop",VITE_WEIKEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJ1c2VySUQiOiIzYTU4MjBhZi1iN2JlLTRkODMtOWM2My1kNmY1MWI2YmExMDEiLCJpYXQiOjE3MDg5Mzk5MDcsImV4cCI6MTcxMTUzMTkwN30.BbIXGVkQOU2HqsiCg6UcwFZx-kBd7kdOP24kUD21c1M",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:B}=F,D={props:{feedbacks:Object},data(){return{modules:[w,_,f],test:{proposalFeedbacks:{}}}},components:{PlanCard:E,Swiper:g,SwiperSlide:k},computed:{...I(l,["singleProposal"]),...y("exploreStore",["getProposalID"])},mixins:[v],async created(){await this.showFullScreenLoading(),await this.getProposals(),setTimeout(()=>{this.hideFullScreenLoading()},800)},mounted(){},methods:{...P(l,["getProposals"]),async getProposals(){const o=this.$route.params.id;await this.$http.get(`${B}/dreamboost/proposal/guest/inActiveProposals`).then(e=>{e.data.success&&(this.test=e.data.data.result[o])}).catch(e=>{throw new Error(e)})}}},O=S('<section class="container mb6"><div class="bg-bgc-paper d-flex align-items-center justify-content-center mt-8"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-info-circle text-primary me-2" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path></svg><p class="text-primary py-2 mb-0 me-3">請選擇您想要贊助的金額與回饋</p></div></section>',1),L={class:"container pb-20 overflow-hidden"};function N(o,e,U,R,t,T){const p=a("PlanCard"),d=a("swiper-slide"),m=a("swiper");return s(),r("main",null,[O,i("section",null,[i("div",L,[t.test&&t.test.proposalFeedbacks?(s(),c(m,{key:0,ref:"swiper",modules:t.modules,"space-between":24,"centered-slides":!0,pagination:{type:"progressbar"},slidesPerView:1,breakpoints:{768:{slidesPerView:1},992:{slidesPerView:3}},autoplay:{delay:6e3,disableOnInteraction:!1},class:"mySwiper row container"},{default:n(()=>[(s(!0),r(M,null,V(t.test.proposalFeedbacks,(u,h)=>(s(),c(d,{class:"pt-10 mb-6 d-flex",key:h},{default:n(()=>[C(p,{feedbacks:u,class:"col"},null,8,["feedbacks"])]),_:2},1024))),128))]),_:1},8,["modules"])):x("",!0)])])])}const Z=b(D,[["render",N]]);export{Z as default};