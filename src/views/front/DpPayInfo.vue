<template>
  <main>
    <section class="container pt-14">
      <div class="row d-flex justify-content-center">
        <!-- 方案卡 -->
        <div class="col-12 col-lg-4">
          <!-- 方案卡 -->
          <!-- <PlanCard /> -->
          <PlanCard :feedbacks="singleFeedback" :feedback-payment="true" />
          <!-- 結帳金額計算 -->
          <div class="mt-8 px-3">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="fs-18 mb-0">選項金額</p>
              <p class="fs-18 mb-0">
                NT$ {{ singleFeedback?.feedbackSettingMoney }}
              </p>
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
          <hr class="border-2 border-gray-700 mb-5" />
          <div
            class="px-3 d-flex justify-content-between align-items-center mb-8"
          >
            <h3 class="mb-0">總金額</h3>
            <p class="fs-28 fw-bold text-primary mb-0">
              NT$ {{ singleFeedback?.feedbackSettingMoney }}
            </p>
          </div>
        </div>
        <!-- 付款流程開始 -->
        <div class="col-12 col-lg-6 ps-lg-10 mt-10 mt-lg-1 mb-15 mb-lg-28">
          <h4 class="mb-4">付款方式</h4>
          <!-- 信用卡付款 -->
          <h5 class="mb-3 fw-medium">
            信用卡付款 <span class="text-danger">*</span>
          </h5>
          <p class="mb-3">
            指定信用卡可享 3 期 / 零利率、可用銀聯卡、可用國外卡
          </p>
          <!-- 表單開始 -->
          <VForm @submit="nextStep" ref="form" v-slot="{ errors }">
            <div class="mb-8">
              <div class="mb-3">
                <div class="form-check form-check-inline me-11">
                  <VField
                    type="radio"
                    id="payoff"
                    name="payment"
                    class="form-check-input"
                    :class="{ 'is-invalid': errors['payment'] }"
                    v-model="
                      transactionsData.customizeProperty.transactionPayment
                    "
                    rules="required"
                    value="一次付清"
                  ></VField>
                  <label
                    class="form-check-label fs-6 text-gray-500"
                    for="payoff"
                  >
                    一次付清
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <VField
                    type="radio"
                    id="installment"
                    name="payment"
                    class="form-check-input"
                    :class="{ 'is-invalid': errors['payment'] }"
                    v-model="
                      transactionsData.customizeProperty.transactionPayment
                    "
                    rules="required"
                    value="分3期"
                  ></VField>
                  <label
                    class="form-check-label fs-6 text-gray-500"
                    for="installment"
                  >
                    分 3 期
                  </label>
                </div>
                <span class="d-block invalid-feedback" v-if="errors['payment']"
                  >付款方式 為必填</span
                >
              </div>
              <div class="bg-bgc-paper rounded-3 col-12 mb-6">
                <p class="fs-6 text-primary-dark px-8 py-4">
                  您了解您的贊助是支持創意專案的一種方式，也了解創意實踐過程中充滿變數，專案不一定能確保回饋。
                </p>
              </div>
              <!-- 加碼和折扣 -->
              <div class="row d-flex mb-6">
                <div class="col d-flex flex-column">
                  <label for="sponsors" class="form-label fw-medium"
                    >加碼贊助<span class="text-gray-500">（選填）</span></label
                  >
                  <input
                    id="sponsors"
                    class="form-control fs-6 border-primary-light"
                    placeholder="小小金額是大大的肯定"
                    list="datalistOptions"
                    v-model="
                      transactionsData.customizeProperty.transactionBonus
                    "
                  />
                  <datalist id="datalistOptions">
                    <option value="100"></option>
                    <option value="200"></option>
                    <option value="500"></option>
                  </datalist>
                </div>
                <div class="col">
                  <label for="discount" class="form-label fw-medium"
                    >請輸入折扣碼</label
                  >
                  <input
                    id="sponsors"
                    class="form-control fs-6 border-primary-light"
                    v-model="transactionsData.transactionCouponCode"
                  />
                </div>
              </div>
              <!-- 收件地點 -->
              <div class="row mb-6">
                <div class="col-6">
                  <label for="discount" class="form-label fw-medium"
                    >收件地點
                  </label>
                  <select
                    class="form-select border-primary-light fs-6 text-gray-500"
                    aria-label="inTwOrOut"
                    v-model="
                      transactionsData.customizeProperty.transactionLocation
                    "
                  >
                    <option selected value="main-island">台灣（本島）</option>
                    <option value="outer-lslands">
                      台灣（外島）需付額外運費
                    </option>
                  </select>
                </div>
              </div>
              <div class="row flex-column">
                <div class="col-6 d-flex">
                  <div class="col me-2">
                    <label for="postal-code" class="mb-2 fw-medium"
                      >收件地址</label
                    >
                    <VField
                      type="number"
                      id="area-num"
                      name="郵遞區號"
                      class="form-control fs-6"
                      :class="{ 'is-invalid': errors['郵遞區號'] }"
                      v-model="
                        transactionsData.customizeProperty.receiverAreaCode
                      "
                      rules="required"
                      placeholder="郵遞區號"
                    ></VField>
                    <ErrorMessage
                      class="invalid-feedback"
                      name="郵遞區號"
                    ></ErrorMessage>
                  </div>
                  <div class="col mt-2">
                    <label for="choose-area"></label>
                    <VField
                      id="area"
                      name="選擇縣市"
                      class="form-select fs-6 text-gray-500"
                      :class="{ 'is-invalid': errors['選擇縣市'] }"
                      v-model="transactionsData.customizeProperty.receiverCity"
                      rules="required"
                      as="select"
                    >
                      <option selected disabled value="">選擇縣市</option>
                      <option
                        v-for="(city, index) in cities"
                        :key="index"
                        :value="city"
                      >
                        {{ city }}
                      </option>
                    </VField>
                    <ErrorMessage
                      class="invalid-feedback"
                      name="選擇縣市"
                    ></ErrorMessage>
                  </div>
                </div>
                <div class="col me-2">
                  <label for="address" class="mb-2"></label>
                  <VField
                    type="text"
                    id="address"
                    name="地址"
                    class="form-control fs-6"
                    :class="{ 'is-invalid': errors['地址'] }"
                    v-model="transactionsData.customizeProperty.receiverAddress"
                    rules="required"
                    placeholder="請輸入正確地址以免造成您的權益受損"
                  ></VField>
                  <ErrorMessage
                    class="invalid-feedback"
                    name="地址"
                  ></ErrorMessage>
                </div>
              </div>
              <!-- 收件人姓名 -->
              <div class="col mb-6">
                <label
                  for="addressee"
                  class="form-label fw-medium position-relative"
                >
                  收件人姓名
                  <span class="text-danger"
                    >*
                    <button
                      type="button"
                      class="btn px-1 py-0 border-0"
                      ref="name"
                      data-bs-toggle="tooltip-name"
                      data-bs-placement="right"
                      data-bs-custom-class="customTooltip"
                      data-bs-title="寄送贊助回饋使用，若不正確可能造成投遞失敗。"
                    >
                      <span class="" style="width: 20px">
                        <img
                          src="/images/explore/info.svg"
                          class="img-fluid"
                          style="margin-top: -6px"
                          alt="驚嘆號提示"
                        />
                      </span>
                    </button>
                  </span>
                </label>
                <VField
                  type="text"
                  id="name"
                  name="姓名"
                  class="form-control fs-6"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  v-model="transactionsData.transactionSponsorName"
                  rules="required"
                  placeholder="請輸入真實姓名"
                ></VField>
                <ErrorMessage
                  class="invalid-feedback"
                  name="姓名"
                ></ErrorMessage>
              </div>
              <div class="col mb-6">
                <label for="phone" type="text" class="form-label fw-medium">
                  行動電話
                  <span class="text-danger"
                    >*
                    <button
                      type="button"
                      class="btn px-1 py-0 border-0"
                      ref="phone"
                      data-bs-toggle="tooltip-phone"
                      data-bs-placement="right"
                      data-bs-custom-class="customTooltip"
                      data-bs-title="寄送人聯絡及付款確認使用。請填寫全碼，如 0912123456"
                    >
                      <span class="" style="width: 20px">
                        <img
                          src="/images/explore/info.svg"
                          class="img-fluid"
                          style="margin-top: -6px"
                          alt="驚嘆號提示"
                        />
                      </span>
                    </button>
                  </span>
                </label>
                <VField
                  type="tel"
                  id="phone"
                  name="行動電話"
                  class="form-control fs-6"
                  :class="{ 'is-invalid': errors['行動電話'] }"
                  v-model="transactionsData.transactionSponsorTelephone"
                  rules="required"
                  placeholder="請輸入聯絡電話"
                ></VField>
                <ErrorMessage
                  class="invalid-feedback"
                  name="行動電話"
                ></ErrorMessage>
              </div>
              <!-- 發票資訊-個人 -->
              <div class="col bg-bgc-paper rounded-3 p-6 mb-6">
                <h5 class="mb-3 fw-medium">
                  發票資訊 <span class="text-danger">*</span>
                </h5>
                <div class="mb-3">
                  <div class="form-check form-check-inline me-11">
                    <input
                      type="radio"
                      id="personalticket"
                      name="invoice"
                      class="form-check-input"
                      v-model="transactionsData.transactionrInvoice"
                      value="personalticket"
                    />
                    <label
                      class="form-check-label fs-6 text-gray-500"
                      for="personalticket"
                    >
                      個人發票
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      id="bsticket"
                      name="invoice"
                      class="form-check-input"
                      v-model="transactionsData.transactionrInvoice"
                      value="bsticket"
                    />
                    <label
                      class="form-check-label fs-6 text-gray-500"
                      for="bsticket"
                    >
                      公司發票
                    </label>
                  </div>
                </div>
                <div
                  class="col-6"
                  v-if="
                    transactionsData.transactionrInvoice === 'personalticket'
                  "
                >
                  <label for="phoneticket" class="form-label fs-6">
                    手機載具
                    <span class="text-danger"> * </span>
                  </label>
                  <VField
                    id="phoneticket"
                    name="手機載具"
                    class="form-control fs-6"
                    :class="{ 'is-invalid': errors['手機載具'] }"
                    v-model="transactionsData.customizeProperty.cloudInvoice"
                    rules="required"
                    placeholder="例：/AB1CD23"
                  ></VField>
                  <ErrorMessage
                    class="invalid-feedback"
                    name="手機載具"
                  ></ErrorMessage>
                </div>
                <!-- 發票資訊-公司 -->
                <div class="row" v-else>
                  <div class="col-6">
                    <label for="compiled" class="form-label fs-6">
                      統一編號
                      <span class="text-danger"> * </span>
                    </label>
                    <VField
                      id="compiled"
                      name="統一編號"
                      class="form-control fs-6"
                      :class="{ 'is-invalid': errors['統一編號'] }"
                      v-model="transactionsData.customizeProperty.VATNumber"
                      rules="required"
                      placeholder="例：12345678"
                    ></VField>
                    <ErrorMessage
                      class="invalid-feedback"
                      name="統一編號"
                    ></ErrorMessage>
                  </div>
                  <div class="col-6">
                    <label for="bsname" class="form-label fs-6">
                      發票抬頭
                      <span class="text-danger"> * </span>
                    </label>
                    <VField
                      id="bsname"
                      name="發票抬頭"
                      class="form-control fs-6"
                      :class="{ 'is-invalid': errors['發票抬頭'] }"
                      v-model="transactionsData.customizeProperty.invoiceTitle"
                      rules="required"
                      placeholder="組織名稱"
                    ></VField>
                    <ErrorMessage
                      class="invalid-feedback"
                      name="發票抬頭"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
              <!-- 備註 -->
              <div class="col mb-6">
                <h5>備註<span class="text-gray-500">（選填）</span></h5>
                <div class="form-floating">
                  <textarea
                    id="floatingTextarea"
                    class="form-control"
                    v-model="transactionsData.customizeProperty.transactionNote"
                    placeholder="Leave a comment here"
                  ></textarea>
                  <label for="floatingTextarea">請留言</label>
                </div>
              </div>
            </div>
            <!-- 同意隱私政策 -->
            <div class="form-check mb-8">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="agreement"
                checked
              />
              <label class="form-check-label text-primary fs-6" for="agreement">
                我已閱讀並同意 DreamBoost 服務條款與隱私權政策
              </label>
            </div>
            <button type="submit" class="btn btn-primary mb-9 col-12 col-lg-7">
              立即贊助<span>NT${{ singleFeedback?.feedbackSettingMoney }}</span>
            </button>
            <p class="fs-6 text-gray-500">
              提案人有權決定是否接受贊助。<br />
              如提案人因故決定不接受贊助，將會取消贊助並主動退還贊助款項。
            </p>
          </VForm>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss"></style>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import exploreStore from '@/stores/exploreStore';
import transactionsStore from '@/stores/transactionsStore';
import sweetAlert2Store from '@/stores/sweetAlert2Store';

import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import mixinVeeValidate from '@/mixins/mixinVeeValidate';
import PlanCard from '@/components/cards/PlanCard.vue';

export default {
  components: {
    PlanCard,
  },
  data() {
    return {
      feedbacks: Object,
      tooltipName: '', // 賦予狀態然後用ref去監聽取
      tooltipPhone: '',
      test: {
        proposalFeedbacks: {},
      },
      selectedCity: null,
      cities: [
        '台北市',
        '新北市',
        '桃園市',
        '台中市',
        '台南市',
        '高雄市',
        '基隆市',
        '新竹市',
        '嘉義市',
        '新竹縣',
        '苗栗縣',
        '彰化縣',
        '南投縣',
        '雲林縣',
        '嘉義縣',
        '屏東縣',
        '宜蘭縣',
        '花蓮縣',
        '台東縣',
        '澎湖縣',
        '金門縣',
        '連江縣',
      ],
    };
  },
  mixins: [mixinVeeValidate, mixinFullScreenLoading],

  methods: {
    ...mapActions(transactionsStore, ['setDataId', 'postTransaction']),
    ...mapActions(sweetAlert2Store, ['confirmAlert']),

    nextStep() {
      this.confirmAlert('資料是否正確').then(async (res) => {
        if (res.isConfirmed) {
          this.showFullScreenLoading();
          await this.postTransaction();
          this.hideFullScreenLoading();
          this.$router.push(`/product/${this.$route.params.id}/choose/${this.$route.params.item}/payinfo/cardpay`);
        }
      });
    },
  },

  mounted() {
    this.showFullScreenLoading();
    setTimeout(() => {
      this.hideFullScreenLoading();
    }, 800);
    this.setDataId();
    this.tooltipName = new this.$bs.Tooltip(this.$refs.name);
    this.tooltipPhone = new this.$bs.Tooltip(this.$refs.phone);
  },

  computed: {
    ...mapState(exploreStore, ['singleFeedback']),
    ...mapWritableState(transactionsStore, ['transactionsData']),
  },
};
</script>
