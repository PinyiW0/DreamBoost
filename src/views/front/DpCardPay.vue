<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <main>
    <section class="container pt-22">
      <!-- 標題 -->
      <div
        class="d-flex flex-column justify-content-center align-items-center pb-30 position-relative"
      >
        <h1 class="fs-3 text-center">輸入信用卡資料</h1>
        <div class="form-check mb-8">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="agreement"
            checked
          />
          <label class="form-check-label text-gray-600 fs-6" for="remember">
            記住本次持卡人交易資料
          </label>
        </div>
        <div>
          <!-- 信用卡圖 -->
          <img
            src="/images/explore/light-credit-card.png"
            class="img-fluid position-absolute translate-middle top-90"
            alt="信用卡示意圖"
          />
          <div
            class="credit-card fs-3 text-gray-600 bg-white position-absolute top-108 start-22 start-sm-28 start-md-33 start-lg-37 start-xl-39 start-xxl-41"
            v-if="formattedCreditCardNumber"
          >
            <!-- 顯示信用卡卡號 -->
            {{ formattedCreditCardNumber }}
          </div>
        </div>
      </div>
    </section>
    <!-- 信用卡資料輸入區 -->
    <section class="container">
      <VForm @submit="submit" v-slot="{ errors }">
        <div class="row d-flex justify-content-center mb-28">
          <div
            class="col-11 col-sm-8 col-lg-6 px-sm-15 px-xl-27 pt-29 pb-21 border border-2 border-primary rounded-4"
          >
            <div class="row">
              <!-- 信用卡號 -->
              <div class="col-12 mb-7">
                <label for="cardnum" class="form-label position-relative">
                  信用卡號 <span class="text-danger">*</span>
                </label>
                <input
                  id="cardnum"
                  name="信用卡號"
                  class="form-control fs-6"
                  v-model="creditCardNumber"
                  @input="formatCreditCardNumber"
                  inputmode="numeric"
                />
              </div>
              <div class="col-12 mb-7">
                <div class="row">
                  <!-- 有效期限 -->
                  <div class="col-12 col-md-4">
                    <label for="deadlinemon" class="form-label">
                      有效期限
                      <span class="text-danger"> * </span>
                    </label>
                    <VField
                      id="deadlinemon"
                      name="年份"
                      class="form-select fs-6 text-gray-500"
                      :class="{ 'is-invalid': errors['年份'] }"
                      v-model="yearsValue"
                      rules="required"
                      as="select"
                    >
                      <option value="" selected disabled>MM</option>
                      <option
                        v-for="month in months"
                        :key="month"
                        :value="month"
                      >
                        {{ month }}
                      </option>
                    </VField>
                    <ErrorMessage
                      class="invalid-feedback"
                      name="年份"
                    ></ErrorMessage>
                  </div>
                  <div class="col-12 col-md-4">
                    <label for="expiry-year" class="form-label"></label>
                    <VField
                      id="expiry-year"
                      name="月份"
                      class="form-select fs-6 text-gray-500 mt-2"
                      :class="{ 'is-invalid': errors['月份'] }"
                      v-model="expiryYear"
                      rules="required"
                      as="select"
                    >
                      <option value="" selected disabled>YY</option>
                      <option v-for="year in years" :key="year" :value="year">
                        {{ year }}
                      </option>
                    </VField>
                    <ErrorMessage
                      class="invalid-feedback"
                      name="月份"
                    ></ErrorMessage>
                  </div>
                  <!-- 確認碼 -->
                  <div class="col-12 col-md-4 mt-6 mt-md-0">
                    <label for="checknum" class="form-label">
                      確認碼
                      <span class="text-danger"> * </span>
                    </label>
                    <VField
                      type="text"
                      id="checknum"
                      name="確認碼"
                      class="form-control fs-6"
                      :class="{ 'is-invalid': errors['確認碼'] }"
                      rules="required"
                      @input="checkNum"
                    ></VField>
                    <ErrorMessage
                      class="invalid-feedback"
                      name="確認碼"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
              <div class="col-12 mb-13">
                <div class="col-12 mb-4 mt-6 mt-md-0">
                  <label for="cardname" class="form-label">
                    持卡人姓名
                    <span class="text-danger"> * </span>
                  </label>
                  <VField
                    type="text"
                    id="cardname"
                    name="姓名"
                    class="form-control fs-6"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    rules="required"
                    placeholder="請輸入卡片上的姓名"
                  ></VField>
                  <ErrorMessage
                    class="invalid-feedback"
                    name="姓名"
                  ></ErrorMessage>
                </div>
                <p class="text-gray-600 fs-6 fs-md-12 mb-0">
                  注意事項：為維護交易安全，本公司已配合國際組織全面採用信用卡3DS
                  2.0交易授權機制，如遇交易失敗，請洽詢發卡銀行或更換銀行卡片後重新交易。
                </p>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary w-100">
                  確認送出
                </button>
              </div>
            </div>
          </div>
        </div>
      </VForm>
    </section>
  </main>
</template>

<style lang="scss"></style>

<script>
import mixinVeeValidate from '@/mixins/mixinVeeValidate';
import sweetAlert2Store from '@/stores/sweetAlert2Store';
import { mapActions } from 'pinia';

export default {
  mixins: [mixinVeeValidate, sweetAlert2Store],

  data() {
    return {
      creditCardNumber: '',
      formattedCreditCardNumber: '',
      expiryYear: '',
      years: [],
      totalMonth: 'MM',
      months: [],
      checkNumber: '',
      yearsValue: '',
      monthValue: '',
    };
  },
  methods: {
    ...mapActions(sweetAlert2Store, ['successAlert']),

    submit() {
      this.successAlert('購買成功');
      this.$router.push('/');
    },

    formatCreditCardNumber() {
      // 處理信用卡號
      // 移除非number並限制最大長度為16位
      this.creditCardNumber = this.creditCardNumber
        .replace(/\D/g, '')
        .substring(0, 16);

      // 在每四位數字後加一個空格
      this.formattedCreditCardNumber = this.creditCardNumber
        .replace(/\s/g, '')
        .replace(/(.{4})/g, '$1 ');
    },
    // 信用卡月份
    getMonth() {
      for (let month = 1; month <= 12; month += 1) {
        const currentMonth = month < 10 ? `0${month}` : `${month}`;
        this.months.push(currentMonth);
      }
    },
    // 信用卡年份
    getYear() {
      const currentYear = new Date().getFullYear();
      // 生成年份範圍（當前年份正負三年）
      for (let year = currentYear - 3; year <= currentYear + 3; year += 1) {
        this.years.push(year);
      }
    },
    // 確認碼
    checkNum(event) {
      // 移除非數字
      this.checkNumber = this.checkNumber.replace(/\D/g, '');
      // 確保確認碼只有三位數
      if (this.checkNumber.length >= 3) {
        // 截取前三個數字
        this.checkNumber = this.checkNumber.substring(0, 3);
        // 停止輸入
        event.target.blur(); // 失去焦點，停止輸入
      }
    },
  },
  components: {},
  mounted() {
    this.getYear();
    this.getMonth();
    this.checkNum();
  },
};
</script>
