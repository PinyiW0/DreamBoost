import{q as C,_ as x,k as y,m as U,u as F,c as d,a as s,b as o,t as u,w as g,l as M,e as n,r as f,o as m,s as r,A as N,v as p,B as b,D as $,F as E,d as L,G as k}from"./index-QbPLaDgz.js";import{e as A}from"./exploreStore-rYEja-bd.js";import{s as V}from"./sweetAlert2Store-IPT1tDKT.js";import{m as B}from"./mixinFullScreenLoading-9dNja2ki.js";import{m as O}from"./mixinVeeValidate-eJ6nlysG.js";import{P as q}from"./PlanCard-v2btrMDC.js";import"./CheckIcon-XPtWJgvA.js";import"./RightArrow-t0vVcAn4.js";import"./StarHollow-qf5rJUc1.js";import"./StarFull-nQ84elKi.js";var R={VITE_URL:"https://api.dreamboost.shop",VITE_WEIKEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlbWFpbEBnbWFpbC5jb20iLCJ1c2VySUQiOiIzYTU4MjBhZi1iN2JlLTRkODMtOWM2My1kNmY1MWI2YmExMDEiLCJpYXQiOjE3MDg5Mzk5MDcsImV4cCI6MTcxMTUzMTkwN30.BbIXGVkQOU2HqsiCg6UcwFZx-kBd7kdOP24kUD21c1M",BASE_URL:"/DreamBoost/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{successAlert:j}=V(),{VITE_URL:J}=R,D=C("transactionsStore",{state:()=>({transactionsData:{transactionProposalID:"",transactionFeedbackID:"",transactionTime:new Date().getTime(),transactionShipMethod:"黑喵宅急便",transactionStatus:"尚未出貨",transactionSponsorName:"",transactionSponsorTelephone:"",transactionrInvoice:"personalticket",transactionCouponCode:"",customizeProperty:{transactionLocation:"main-island"}}}),actions:{async postTransaction(){try{const t=await this.$http.post(`${J}/dreamboost/transaction/normal/transaction`,this.transactionsData);j(`${t.data.message},前往付款畫面`)}catch(t){throw new Error(t)}},setDataId(){this.transactionsData.transactionProposalID=this.$route.params.id,this.transactionsData.transactionFeedbackID=this.$route.params.item}}}),P="/DreamBoost/images/explore/info.svg",W={components:{PlanCard:q},data(){return{feedbacks:Object,tooltipName:"",tooltipPhone:"",test:{proposalFeedbacks:{}},selectedCity:null,cities:["台北市","新北市","桃園市","台中市","台南市","高雄市","基隆市","新竹市","嘉義市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","台東縣","澎湖縣","金門縣","連江縣"]}},mixins:[O,B],methods:{...y(D,["setDataId","postTransaction"]),...y(V,["confirmAlert"]),nextStep(){this.confirmAlert("資料是否正確").then(async t=>{t.isConfirmed&&(this.showFullScreenLoading(),await this.postTransaction(),this.hideFullScreenLoading(),this.$router.push(`/product/${this.$route.params.id}/choose/${this.$route.params.item}/payinfo/cardpay`))})}},mounted(){this.showFullScreenLoading(),setTimeout(()=>{this.hideFullScreenLoading()},800),this.setDataId(),this.tooltipName=new this.$bs.Tooltip(this.$refs.name),this.tooltipPhone=new this.$bs.Tooltip(this.$refs.phone)},computed:{...U(A,["singleFeedback"]),...F(D,["transactionsData"])}},Y={class:"container pt-14"},G={class:"row d-flex justify-content-center"},Q={class:"col-12 col-lg-4"},X={class:"mt-8 px-3"},Z={class:"d-flex justify-content-between align-items-center mb-4"},H=s("p",{class:"fs-18 mb-0"},"選項金額",-1),K={class:"fs-18 mb-0"},ss=M('<div class="d-flex justify-content-between align-items-center mb-4"><p class="fs-18 mb-0">折扣碼優惠</p><p class="fs-18 text-danger mb-0">-(未知)</p></div><div class="d-flex justify-content-between align-items-center mb-4"><p class="fs-18 mb-0">運費：N/A</p><p class="fs-18 text-danger mb-0">+(未知)</p></div>',2),ts=s("hr",{class:"border-2 border-gray-700 mb-5"},null,-1),es={class:"px-3 d-flex justify-content-between align-items-center mb-8"},as=s("h3",{class:"mb-0"},"總金額",-1),os={class:"fs-28 fw-bold text-primary mb-0"},ns={class:"col-12 col-lg-6 ps-lg-10 mt-10 mt-lg-1 mb-15 mb-lg-28"},is=s("h4",{class:"mb-4"},"付款方式",-1),ls=s("h5",{class:"mb-3 fw-medium"},[n(" 信用卡付款 "),s("span",{class:"text-danger"},"*")],-1),rs=s("p",{class:"mb-3"}," 指定信用卡可享 3 期 / 零利率、可用銀聯卡、可用國外卡 ",-1),cs={class:"mb-8"},ds={class:"mb-3"},ms={class:"form-check form-check-inline me-11"},ps=s("label",{class:"form-check-label fs-6 text-gray-500",for:"payoff"}," 一次付清 ",-1),us={class:"form-check form-check-inline"},fs=s("label",{class:"form-check-label fs-6 text-gray-500",for:"installment"}," 分 3 期 ",-1),bs={key:0,class:"d-block invalid-feedback"},hs=s("div",{class:"bg-bgc-paper rounded-3 col-12 mb-6"},[s("p",{class:"fs-6 text-primary-dark px-8 py-4"}," 您了解您的贊助是支持創意專案的一種方式，也了解創意實踐過程中充滿變數，專案不一定能確保回饋。 ")],-1),_s={class:"row d-flex mb-6"},vs={class:"col d-flex flex-column"},ys=s("label",{for:"sponsors",class:"form-label fw-medium"},[n("加碼贊助"),s("span",{class:"text-gray-500"},"（選填）")],-1),gs=s("datalist",{id:"datalistOptions"},[s("option",{value:"100"}),s("option",{value:"200"}),s("option",{value:"500"})],-1),ks={class:"col"},Ds=s("label",{for:"discount",class:"form-label fw-medium"},"請輸入折扣碼",-1),Vs={class:"row mb-6"},Ps={class:"col-6"},ws=s("label",{for:"discount",class:"form-label fw-medium"},"收件地點 ",-1),Ss=s("option",{selected:"",value:"main-island"},"台灣（本島）",-1),Is=s("option",{value:"outer-lslands"}," 台灣（外島）需付額外運費 ",-1),Ts=[Ss,Is],zs={class:"row flex-column"},Cs={class:"col-6 d-flex"},xs={class:"col me-2"},Us=s("label",{for:"postal-code",class:"mb-2 fw-medium"},"收件地址",-1),Fs={class:"col mt-2"},Ms=s("label",{for:"choose-area"},null,-1),Ns=s("option",{selected:"",disabled:"",value:""},"選擇縣市",-1),$s=["value"],Es={class:"col me-2"},Ls=s("label",{for:"address",class:"mb-2"},null,-1),As={class:"col mb-6"},Bs={for:"addressee",class:"form-label fw-medium position-relative"},Os={class:"text-danger"},qs={type:"button",class:"btn px-1 py-0 border-0",ref:"name","data-bs-toggle":"tooltip-name","data-bs-placement":"right","data-bs-custom-class":"customTooltip","data-bs-title":"寄送贊助回饋使用，若不正確可能造成投遞失敗。"},Rs=s("span",{class:"",style:{width:"20px"}},[s("img",{src:P,class:"img-fluid",style:{"margin-top":"-6px"},alt:""})],-1),js=[Rs],Js={class:"col mb-6"},Ws={for:"phone",type:"text",class:"form-label fw-medium"},Ys={class:"text-danger"},Gs={type:"button",class:"btn px-1 py-0 border-0",ref:"phone","data-bs-toggle":"tooltip-phone","data-bs-placement":"right","data-bs-custom-class":"customTooltip","data-bs-title":"寄送人聯絡及付款確認使用。請填寫全碼，如 0912123456"},Qs=s("span",{class:"",style:{width:"20px"}},[s("img",{src:P,class:"img-fluid",style:{"margin-top":"-6px"},alt:""})],-1),Xs=[Qs],Zs={class:"col bg-bgc-paper rounded-3 p-6 mb-6"},Hs=s("h5",{class:"mb-3 fw-medium"},[n(" 發票資訊 "),s("span",{class:"text-danger"},"*")],-1),Ks={class:"mb-3"},st={class:"form-check form-check-inline me-11"},tt=s("label",{class:"form-check-label fs-6 text-gray-500",for:"personalticket"}," 個人發票 ",-1),et={class:"form-check form-check-inline"},at=s("label",{class:"form-check-label fs-6 text-gray-500",for:"bsticket"}," 公司發票 ",-1),ot={key:0,class:"col-6"},nt=s("label",{for:"phoneticket",class:"form-label fs-6"},[n(" 手機載具 "),s("span",{class:"text-danger"}," * ")],-1),it={key:1,class:"row"},lt={class:"col-6"},rt=s("label",{for:"compiled",class:"form-label fs-6"},[n(" 統一編號 "),s("span",{class:"text-danger"}," * ")],-1),ct={class:"col-6"},dt=s("label",{for:"bsname",class:"form-label fs-6"},[n(" 發票抬頭 "),s("span",{class:"text-danger"}," * ")],-1),mt={class:"col mb-6"},pt=s("h5",null,[n("備註"),s("span",{class:"text-gray-500"},"（選填）")],-1),ut={class:"form-floating"},ft=s("label",{for:"floatingTextarea"},"請留言",-1),bt=s("div",{class:"form-check mb-8"},[s("input",{class:"form-check-input",type:"checkbox",value:"",id:"agreement",checked:""}),s("label",{class:"form-check-label text-primary fs-6",for:"agreement"}," 我已閱讀並同意 DreamBoost 服務條款與隱私權政策 ")],-1),ht={type:"submit",class:"btn btn-primary mb-9 col-12 col-lg-7"},_t=s("p",{class:"fs-6 text-gray-500"},[n(" 提案人有權決定是否接受贊助。"),s("br"),n(" 如提案人因故決定不接受贊助，將會取消贊助並主動退還贊助款項。 ")],-1);function vt(t,a,yt,gt,w,S){var h,_;const I=f("PlanCard"),l=f("VField"),c=f("ErrorMessage"),T=f("VForm");return m(),d("main",null,[s("section",Y,[s("div",G,[s("div",Q,[o(I,{feedbacks:t.singleFeedback,"feedback-payment":!0},null,8,["feedbacks"]),s("div",X,[s("div",Z,[H,s("p",K," NT$ "+u((h=t.singleFeedback)==null?void 0:h.feedbackSettingMoney),1)]),ss]),ts,s("div",es,[as,s("p",os," NT$ "+u((_=t.singleFeedback)==null?void 0:_.feedbackSettingMoney),1)])]),s("div",ns,[is,ls,rs,o(T,{onSubmit:S.nextStep,ref:"form"},{default:g(({errors:i})=>{var v;return[s("div",cs,[s("div",ds,[s("div",ms,[o(l,{type:"radio",id:"payoff",name:"payment",class:r(["form-check-input",{"is-invalid":i.payment}]),modelValue:t.transactionsData.customizeProperty.transactionPayment,"onUpdate:modelValue":a[0]||(a[0]=e=>t.transactionsData.customizeProperty.transactionPayment=e),rules:"required",value:"一次付清"},null,8,["class","modelValue"]),ps]),s("div",us,[o(l,{type:"radio",id:"installment",name:"payment",class:r(["form-check-input",{"is-invalid":i.payment}]),modelValue:t.transactionsData.customizeProperty.transactionPayment,"onUpdate:modelValue":a[1]||(a[1]=e=>t.transactionsData.customizeProperty.transactionPayment=e),rules:"required",value:"分3期"},null,8,["class","modelValue"]),fs]),i.payment?(m(),d("span",bs,"付款方式 為必填")):N("",!0)]),hs,s("div",_s,[s("div",vs,[ys,p(s("input",{id:"sponsors",class:"form-control fs-6 border-primary-light",placeholder:"小小金額是大大的肯定",list:"datalistOptions","onUpdate:modelValue":a[2]||(a[2]=e=>t.transactionsData.customizeProperty.transactionBonus=e)},null,512),[[b,t.transactionsData.customizeProperty.transactionBonus]]),gs]),s("div",ks,[Ds,p(s("input",{id:"sponsors",class:"form-control fs-6 border-primary-light","onUpdate:modelValue":a[3]||(a[3]=e=>t.transactionsData.transactionCouponCode=e)},null,512),[[b,t.transactionsData.transactionCouponCode]])])]),s("div",Vs,[s("div",Ps,[ws,p(s("select",{class:"form-select border-primary-light fs-6 text-gray-500","aria-label":"inTwOrOut","onUpdate:modelValue":a[4]||(a[4]=e=>t.transactionsData.customizeProperty.transactionLocation=e)},Ts,512),[[$,t.transactionsData.customizeProperty.transactionLocation]])])]),s("div",zs,[s("div",Cs,[s("div",xs,[Us,o(l,{type:"number",id:"area-num",name:"郵遞區號",class:r(["form-control fs-6",{"is-invalid":i.郵遞區號}]),modelValue:t.transactionsData.customizeProperty.receiverAreaCode,"onUpdate:modelValue":a[5]||(a[5]=e=>t.transactionsData.customizeProperty.receiverAreaCode=e),rules:"required",placeholder:"郵遞區號"},null,8,["class","modelValue"]),o(c,{class:"invalid-feedback",name:"郵遞區號"})]),s("div",Fs,[Ms,o(l,{id:"area",name:"選擇縣市",class:r(["form-select fs-6 text-gray-500",{"is-invalid":i.選擇縣市}]),modelValue:t.transactionsData.customizeProperty.receiverCity,"onUpdate:modelValue":a[6]||(a[6]=e=>t.transactionsData.customizeProperty.receiverCity=e),rules:"required",as:"select"},{default:g(()=>[Ns,(m(!0),d(E,null,L(w.cities,(e,z)=>(m(),d("option",{key:z,value:e},u(e),9,$s))),128))]),_:2},1032,["class","modelValue"]),o(c,{class:"invalid-feedback",name:"選擇縣市"})])]),s("div",Es,[Ls,o(l,{type:"text",id:"address",name:"地址",class:r(["form-control fs-6",{"is-invalid":i.地址}]),modelValue:t.transactionsData.customizeProperty.receiverAddress,"onUpdate:modelValue":a[7]||(a[7]=e=>t.transactionsData.customizeProperty.receiverAddress=e),rules:"required",placeholder:"請輸入正確地址以免造成您的權益受損"},null,8,["class","modelValue"]),o(c,{class:"invalid-feedback",name:"地址"})])]),s("div",As,[s("label",Bs,[n(" 收件人姓名 "),s("span",Os,[n("* "),s("button",qs,js,512)])]),o(l,{type:"text",id:"name",name:"姓名",class:r(["form-control fs-6",{"is-invalid":i.姓名}]),modelValue:t.transactionsData.transactionSponsorName,"onUpdate:modelValue":a[8]||(a[8]=e=>t.transactionsData.transactionSponsorName=e),rules:"required",placeholder:"請輸入真實姓名"},null,8,["class","modelValue"]),o(c,{class:"invalid-feedback",name:"姓名"})]),s("div",Js,[s("label",Ws,[n(" 行動電話 "),s("span",Ys,[n("* "),s("button",Gs,Xs,512)])]),o(l,{type:"tel",id:"phone",name:"行動電話",class:r(["form-control fs-6",{"is-invalid":i.行動電話}]),modelValue:t.transactionsData.transactionSponsorTelephone,"onUpdate:modelValue":a[9]||(a[9]=e=>t.transactionsData.transactionSponsorTelephone=e),rules:"required",placeholder:"請輸入聯絡電話"},null,8,["class","modelValue"]),o(c,{class:"invalid-feedback",name:"行動電話"})]),s("div",Zs,[Hs,s("div",Ks,[s("div",st,[p(s("input",{type:"radio",id:"personalticket",name:"invoice",class:"form-check-input","onUpdate:modelValue":a[10]||(a[10]=e=>t.transactionsData.transactionrInvoice=e),value:"personalticket"},null,512),[[k,t.transactionsData.transactionrInvoice]]),tt]),s("div",et,[p(s("input",{type:"radio",id:"bsticket",name:"invoice",class:"form-check-input","onUpdate:modelValue":a[11]||(a[11]=e=>t.transactionsData.transactionrInvoice=e),value:"bsticket"},null,512),[[k,t.transactionsData.transactionrInvoice]]),at])]),t.transactionsData.transactionrInvoice==="personalticket"?(m(),d("div",ot,[nt,o(l,{id:"phoneticket",name:"手機載具",class:r(["form-control fs-6",{"is-invalid":i.手機載具}]),modelValue:t.transactionsData.customizeProperty.cloudInvoice,"onUpdate:modelValue":a[12]||(a[12]=e=>t.transactionsData.customizeProperty.cloudInvoice=e),rules:"required",placeholder:"例：/AB1CD23"},null,8,["class","modelValue"]),o(c,{class:"invalid-feedback",name:"手機載具"})])):(m(),d("div",it,[s("div",lt,[rt,o(l,{id:"compiled",name:"統一編號",class:r(["form-control fs-6",{"is-invalid":i.統一編號}]),modelValue:t.transactionsData.customizeProperty.VATNumber,"onUpdate:modelValue":a[13]||(a[13]=e=>t.transactionsData.customizeProperty.VATNumber=e),rules:"required",placeholder:"例：12345678"},null,8,["class","modelValue"]),o(c,{class:"invalid-feedback",name:"統一編號"})]),s("div",ct,[dt,o(l,{id:"bsname",name:"發票抬頭",class:r(["form-control fs-6",{"is-invalid":i.發票抬頭}]),modelValue:t.transactionsData.customizeProperty.invoiceTitle,"onUpdate:modelValue":a[14]||(a[14]=e=>t.transactionsData.customizeProperty.invoiceTitle=e),rules:"required",placeholder:"組織名稱"},null,8,["class","modelValue"]),o(c,{class:"invalid-feedback",name:"發票抬頭"})])]))]),s("div",mt,[pt,s("div",ut,[p(s("textarea",{id:"floatingTextarea",class:"form-control","onUpdate:modelValue":a[15]||(a[15]=e=>t.transactionsData.customizeProperty.transactionNote=e),placeholder:"Leave a comment here"},null,512),[[b,t.transactionsData.customizeProperty.transactionNote]]),ft])])]),bt,s("button",ht,[n(" 立即贊助"),s("span",null,"NT$"+u((v=t.singleFeedback)==null?void 0:v.feedbackSettingMoney),1)]),_t]}),_:1},8,["onSubmit"])])])])])}const xt=x(W,[["render",vt]]);export{xt as default};