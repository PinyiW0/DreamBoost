<template>
  <main>
    <DpInfo></DpInfo>
    <section class="container pt-14">
      <div class="row d-flex justify-content-center">
        <!-- 方案卡 -->
        <div class="col-12 col-lg-4">
          <!-- 方案卡 -->
          <div class="card border-2 border-primary rounded-3 mb-8">
            <div class="card-body">
              <!-- 價錢 highlight -->
              <div class="d-flex justify-content-between align-items-center bg-primary rounded-1 py-4 px-6 mb-9">
                <p class="text-white mb-0 me-2">早鳥價 48 折</p>
                <div class="d-flex align-items-center">
                  <p class="text-white mb-0 me-2">只要</p>
                  <p class="fs-3 fw-bold text-secondary-light mb-0">NT$2,580</p>
                </div>
              </div>
              <!-- 專案摘要及價錢和份數 -->
              <div class="mx-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h5 class="text-primary mb-0">早鳥價 ｜系列全套組</h5>
                  <div class="border border-danger rounded-pill">
                    <p class="fs-6 fw-bold text-bold text-danger py-1 px-3 mb-0">48 折</p>
                  </div>
                </div>
                <p class="fs-12 text-gray-500 mb-3">
                  預定售價 NT$ 5,290 ，現省 NT$ 2,710
                </p>
                <!-- 數量區 -->
                <div class="d-flex align-items-center mb-7">
                  <div class="d-flex bg-primary border-end border-secondary-light">
                    <p class="fs-12 text-white mb-0 py-1 px-2">
                      剩餘 <span class="fs-6 fw-bold text-secondary-light">7</span> 份
                    </p>
                  </div>
                  <div class="d-flex bg-primary">
                    <p class="fs-12 text-white mb-0 py-1 px-2">
                      已經被贊助 <span class="fs-6 fw-bold text-secondary-light">83</span> / 90 次
                    </p>
                  </div>
                </div>
                <!-- 方案內容 -->
                <div class="mb-8">
                  <h6>【 方案內容 】</h6>
                  <p class="fs-6 text-gray-600 mb-2">˙ 開啟定期提醒和休息計劃功能</p>
                  <p class="fs-6 text-gray-600 mb-2">˙ 提供職場改善方案，降低壓力值</p>
                  <p class="fs-6 text-gray-600 mb-2">˙ 提供舒壓小玩具</p>
                </div>
                <!-- 方案優惠 -->
                <div class="d-flex align-items-center border-top border-bottom border-primary-light py-4 mb-7">
                  <div class="d-flex align-items-center me-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check-circle-fill text-primary me-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <p class="fs-12 text-gray-600 mb-0">台灣本島免運，可寄離島</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check-circle-fill text-primary me-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <p class="fs-12 text-gray-600 mb-0">信用卡享 3 期零利率</p>
                  </div>
                </div>
                <!-- 更改回饋方案btn -->
                <button class="btn btn-primary w-100 mb-1" type="button" style="white-space: nowrap;">
                  更改回饋方案
                </button>
              </div>
            </div>
            <div class="card-footer border-0 bg-white">
              <p class="fs-6 text-gray-500 text-center mb-0 pb-4">預計於 2024 年 9 月實現</p>
            </div>
          </div>
          <!-- 結帳金額計算 -->
          <div class="px-3">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="fs-18 mb-0">選項金額</p>
              <p class="fs-18 mb-0">NT$ 2,580</p>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="fs-18 mb-0">折扣碼優惠</p>
              <p class="fs-18 text-danger mb-0">-(未知)</p>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="fs-18 mb-0">運費：N/A</p>
              <p class="fs-18 text-danger mb-0">+(未知)</p>
            </div>
          </div>
          <hr class="border-2 border-gray-700 mb-5">
          <div class="px-3 d-flex justify-content-between align-items-center mb-8">
            <h3 class="mb-0">總金額</h3>
            <p class="fs-28 fw-bold text-primary mb-0">NT$ 2,580</p>
          </div>
        </div>
        <!-- 付款流程開始 -->
        <div class="col-12 col-lg-6 ps-lg-10 mt-10 mt-lg-1 mb-15 mb-lg-28">
          <h4 class="mb-4">付款方式</h4>
          <!-- 信用卡付款 -->
          <h5 class="mb-3 fw-medium">信用卡付款 <span class="text-danger">*</span></h5>
          <p class="mb-3">指定信用卡可享 3 期 / 零利率、可用銀聯卡、可用國外卡</p>
          <!-- 表單開始 -->
          <form class="mb-8">
            <div class="mb-3">
              <div class="form-check form-check-inline me-11">
                <input class="form-check-input checked" type="radio" name="payoff" id="payoff">
                <label class="form-check-label fs-6 text-gray-500" for="payoff">
                  一次付清
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="installment" id="installment">
                <label class="form-check-label fs-6 text-gray-500" for="installment">
                  分 3 期
                </label>
              </div>
            </div>
            <div class="bg-bgc-paper rounded-3 col-12 mb-6">
              <p class="fs-6 text-primary-dark px-8 py-4">您了解您的贊助是支持創意專案的一種方式，也了解創意實踐過程中充滿變數，專案不一定能確保回饋。</p>
            </div>
            <!-- 加碼和折扣 -->
            <div class="row d-flex mb-6">
              <div class="col d-flex flex-column">
                <label for="sponsors" class="form-label fw-medium">加碼贊助<span class="text-gray-500">（選填）</span></label>
                <input class="form-control fs-6 border-primary-light" list="datalistOptions" id="sponsors" placeholder="小小金額是大大的肯定">
                <datalist id="datalistOptions">
                  <option value="100"></option>
                  <option value="200"></option>
                  <option value="500"></option>
                </datalist>
              </div>
              <div class="col">
                <label for="discount" class="form-label fw-medium">請輸入折扣碼</label>
                <input class="form-control fs-6 border-primary-light" id="sponsors">
              </div>
            </div>
            <!-- 收件地點 -->
            <div class="row mb-6">
              <div class="col-6">
                <label for="discount" class="form-label fw-medium">收件地點</label>
                <select class="form-select border-primary-light fs-6 text-gray-500" aria-label="inTwOrOut">
                  <option selected value="main-island">台灣（本島）</option>
                  <option value="outer-lslands">台灣（外島）需付額外運費</option>
                </select>
              </div>
            </div>
            <div class="row flex-column">
              <div class="col-6 d-flex mb-4">
                <div class="col me-2">
                  <label for="postal-code" class="mb-2 fw-medium">收件地址</label>
                  <input class="form-control fs-6 border-primary-light" id="sponsors" placeholder="郵遞區號">
                </div>
                <div class="col mt-2">
                  <label for="choose-area"></label>
                  <select class="form-select border-primary-light fs-6 text-gray-500" aria-label="area">
                    <option selected disabled value="main-island">選擇縣市</option>
                    <option value="outer-lslands">台北市</option>
                  </select>
                </div>
              </div>
              <div class="col me-2">
                <input class="form-control fs-6 border-primary-light" id="sponsors" placeholder="請輸入正確地址以免造成您的權益受損">
                <label for="postal-code" class="mb-2"></label>
              </div>
            </div>
            <!-- 收件人姓名 -->
            <div class="col mb-6">
              <label for="addressee" class="form-label fw-medium position-relative">
                收件人姓名
                <span class="text-danger">*
                  <button
                    type="button"
                    class="btn px-1 py-0 border-0"
                    ref="name"
                    data-bs-toggle="tooltip-name"
                    data-bs-placement="right"
                    data-bs-custom-class="customTooltip"
                    data-bs-title="寄送贊助回饋使用，若不正確可能造成投遞失敗。">
                    <span class="" style="width: 20px;">
                      <img
                        src="/images/explore/info.svg"
                        class="img-fluid"
                        style="margin-top: -6px;"
                        alt="">
                    </span>
                  </button>
                </span>
              </label>
              <input class="form-control fs-6 border-primary-light" id="addressee" placeholder="請輸入真實姓名">
            </div>
            <div class="col mb-6">
              <label for="phone" type="text" class="form-label fw-medium">
                行動電話
                <span class="text-danger">*
                  <button
                    type="button"
                    class="btn px-1 py-0 border-0"
                    ref="phone"
                    data-bs-toggle="tooltip-phone"
                    data-bs-placement="right"
                    data-bs-custom-class="customTooltip"
                    data-bs-title="寄送人聯絡及付款確認使用。請填寫全碼，如 0912123456">
                    <span class="" style="width: 20px;">
                      <img
                        src="/images/explore/info.svg"
                        class="img-fluid"
                        style="margin-top: -6px;"
                        alt="">
                    </span>
                  </button>
                </span>
                <div></div>
              </label>
              <input class="form-control fs-6 border-primary-light" id="phone" placeholder="請輸入聯絡電話">
            </div>
            <!-- 發票資訊-個人 -->
            <div class="col bg-bgc-paper rounded-3 p-6 mb-6">
              <h5 class="mb-3 fw-medium">發票資訊 <span class="text-danger">*</span></h5>
              <div class="mb-3">
                <div class="form-check form-check-inline me-11">
                  <input class="form-check-input checked" type="radio" name="personalticket" id="personalticket">
                  <label class="form-check-label fs-6 text-gray-500" for="personalticket">
                    個人發票
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="bsticket" id="bsticket">
                  <label class="form-check-label fs-6 text-gray-500" for="bsticket">
                    公司發票
                  </label>
                </div>
              </div>
              <div class="col-6">
                <label for="phoneticket" class="form-label fs-6">
                  手機載具
                  <span class="text-danger">
                    *
                  </span>
                </label>
                <input class="form-control fs-6 border-primary-light" id="phoneticket" placeholder="例：/AB1CD23">
              </div>
            </div>
            <!-- 發票資訊-公司 -->
            <div class="col bg-bgc-paper rounded-3 p-6 mb-6 d-none">
              <h5 class="mb-3 fw-medium">發票資訊 <span class="text-danger">*</span></h5>
              <div class="mb-3">
                <div class="form-check form-check-inline me-11">
                  <input class="form-check-input" type="radio" name="personalticket" id="personalticket">
                  <label class="form-check-label fs-6 text-gray-500" for="personalticket">
                    個人發票
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input checked" type="radio" name="bsticket" id="bsticket">
                  <label class="form-check-label fs-6 text-gray-500" for="bsticket">
                    公司發票
                  </label>
                </div>
              </div>
              <div class="row d-flex">
                <div class="col-6">
                  <label for="compiled" class="form-label fs-6">
                    發票統編
                    <span class="text-danger">
                      *
                    </span>
                  </label>
                  <input class="form-control fs-6 border-primary-light" id="compiled" placeholder="例：12345678">
                </div>
                <div class="col-6">
                  <label for="bsname" class="form-label fs-6">
                    發票抬頭
                    <span class="text-danger">
                      *
                    </span>
                  </label>
                  <input class="form-control fs-6 border-primary-light" id="bsname" placeholder="組織名稱">
                </div>
              </div>
            </div>
            <!-- 備註 -->
            <div class="col mb-6">
              <h5>備註<span class="text-gray-500">（選填）</span></h5>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">請留言</label>
              </div>
            </div>
          </form>
          <!-- 同意隱私政策 -->
          <div class="form-check mb-8">
            <input class="form-check-input" type="checkbox" value="" id="agreement" checked>
            <label class="form-check-label text-primary fs-6" for="agreement">
              我已閱讀並同意 DreamBoost 服務條款與隱私權政策
            </label>
          </div>
          <button class="btn btn-primary mb-9 col-12 col-lg-7" type="button">
            立即贊助<span>NT$2,580</span>
          </button>
          <p class="fs-6 text-gray-500">
            提案人有權決定是否接受贊助。<br>
            如提案人因故決定不接受贊助，將會取消贊助並主動退還贊助款項。
          </p>
        </div>
      </div>
    </section>
    <InfoIcon />
  </main>
</template>

<style lang="scss">

</style>

<script>
import DpInfo from '@/components/designedproject/DpInfo.vue';
import InfoIcon from '@/components/icons/InfoIcon.vue';
import MixinVeeValidate from '../../mixins/mixinVeeValidate';

export default {
  data() {
    return {
      tooltipName: '', // 賦予狀態然後用ref去監聽取
      tooltipPhone: '',
    };
  },
  mixins: [MixinVeeValidate],
  mounted() {
    this.tooltipName = new this.$bs.Tooltip(this.$refs.name);
    this.tooltipPhone = new this.$bs.Tooltip(this.$refs.phone);
  },
  components: {
    DpInfo,
    InfoIcon,
  },
};
</script>
