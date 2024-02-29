<template>
  <div class="d-flex justify-content-center align-items-end mb-11">
    <img
      src="/images/member/signLogo.svg"
      alt="logo icon"
      class="img-fluid me-3"
    />
    <p class="fs-18 text-primary mb-0">讓夢想不再只是夢想</p>
  </div>
  <div class="px-6 px-md-11 px-xl-26">
    <div class="d-flex align-items-end column-gap-2 mb-6">
      <h2 class="text-primary fw-medium fs-2 lh-base mb-0">會員登入</h2>
      <p class="text-primary-light fw-regular fs-5 mb-1">Sign In</p>
    </div>
    <!-- 登入表單 -->
    <VForm class="row gy-8" v-slot="{ errors }" @submit="submit" ref="signinForm">
      <div class="col-12">
        <label for="signInEmail" class="form-label mb-1 fs-5 lh-md required"
          >會員帳號
          <span class="text-danger"> * </span>
        </label>
        <VField
          type="email"
          class="form-control fs-6 p-3"
          placeholder="請輸入會員帳號"
          id="signInEmail"
          name="會員帳號"
          :class="{ 'is-invalid': errors['會員帳號'] }"
          v-model="userData.username"
          rules="required|email"
        ></VField>
        <ErrorMessage
          class="invalid-feedback position-absolute"
          name="會員帳號"
        ></ErrorMessage>
      </div>
      <div class="col-12">
        <label for="signInPwd" class="form-label mb-1 fs-5 lh-md required"
          >密碼
          <span class="text-danger"> * </span>
        </label>
        <VField
          type="password"
          class="form-control fs-6 p-3"
          placeholder="請輸入密碼"
          id="signInPwd"
          name="登入密碼"
          :class="{ 'is-invalid': errors['登入密碼'] }"
          v-model="userData.password"
          :rules="passwordRule"
        ></VField>
        <ErrorMessage
          class="invalid-feedback position-absolute"
          name="登入密碼"
        ></ErrorMessage>
      </div>
      <div class="col-12 mt-11">
        <button
          type="button"
          class="btn btn-paper-outline btn-hover justify-content-center mb-6 px-0 w-100"
        >
          <span class="d-flex align-items-center justify-content-center fs-5">
            <slot name="twitter"></slot>
            使用 twitter 登入
          </span>
        </button>
        <button
          type="button"
          class="btn btn-paper-outline btn-hover px-0 mb-9 w-100"
        >
          <span class="d-flex align-items-center justify-content-center fs-5">
            <slot name="google"></slot>
            使用 Google 登入
          </span>
        </button>
        <button
          type="submit"
          class="btn btn-primary btn-hover w-100 mb-2 py-3 px-lg-18 text-white mb-6 fs-5"
        >
          登入
        </button>
        <div
          class="col-12 d-flex align-items-center justify-content-end justify-content-md-center column-gap-4"
        >
          <RouterLink
            to="/forgetpassord"
            class="text-decoration-underline fs-14"
          >
            忘記密碼？
          </RouterLink>
          <a
            href="#"
            class="d-md-none text-decoration-underline fs-14"
            @click.prevent="$emit('toggle-view')"
          >
            會員註冊
          </a>
        </div>
      </div>
    </VForm>
  </div>
</template>

<script>
// 套件載入
import { mapWritableState, mapActions } from 'pinia';

import memberStore from '@/stores/memberStore';
import mixinVeeValidate from '@/mixins/mixinVeeValidate';

export default {
  emits: ['toggle-view'],
  mixins: [mixinVeeValidate],

  methods: {
    ...mapActions(memberStore, ['postLogin']),

    async submit() {
      await this.postLogin();
      this.$refs.signinForm.resetForm();
    },
  },

  computed: {
    ...mapWritableState(memberStore, ['userData']),
  },
};
</script>
