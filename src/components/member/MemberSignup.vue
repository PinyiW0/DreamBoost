<template>
  <div class="d-flex justify-content-center align-items-end mb-11">
    <img
      src="/images/member/signLogo.svg"
      alt="logo icon"
      class="img-fluid me-3"
    />
    <p class="fs-18 text-primary mb-0">讓夢想不再只是夢想</p>
  </div>
  <div class="px-6 px-xl-11">
    <div class="d-flex align-items-end column-gap-2 mb-6">
      <h2 class="text-primary fw-medium fs-2 lh-base mb-0">會員註冊</h2>
      <p class="text-primary-light fw-regular fs-5 mb-1">Sign Up</p>
    </div>
    <!-- 註冊表單 -->
    <VForm class="row gy-md-14" v-slot="{ errors }" @submit="submit" ref="signupForm">
      <div class="col-md-6 border-end-md">
        <div class="pe-lg-2 pe-xl-8">
          <div class="row gy-8">
            <div class="col-12">
              <label
                for="signUpName"
                class="form-label mb-1 fs-5 lh-md required"
                >使用者名稱
                <span class="text-danger"> * </span>
              </label>
              <VField
                type="text"
                class="form-control fs-6 p-3"
                placeholder="請輸入真實姓名"
                id="signUpName"
                name="姓名"
                :class="{ 'is-invalid': errors['姓名'] }"
                v-model="userData.name"
                rules="required"
              ></VField>
              <ErrorMessage
                class="invalid-feedback position-absolute"
                name="姓名"
              ></ErrorMessage>
            </div>
            <div class="col-12">
              <label
                for="signUpEmail"
                class="form-label mb-1 fs-5 lh-md required"
                >電子信箱
                <span class="text-danger"> * </span>
              </label>
              <VField
                type="text"
                class="form-control fs-6 p-3"
                placeholder="請輸入 Email"
                id="signUpEmail"
                name="電子信箱"
                :class="{ 'is-invalid': errors['電子信箱'] }"
                v-model="userData.username"
                rules="required|email"
              ></VField>
              <ErrorMessage
                class="invalid-feedback position-absolute"
                name="電子信箱"
              ></ErrorMessage>
            </div>
            <div class="col-12">
              <label for="signUpPwd" class="form-label mb-1 fs-5 lh-md required"
                >密碼
                <span class="text-danger"> * </span>
              </label>
              <VField
                type="password"
                class="form-control fs-6 p-3"
                placeholder="密碼至少6個字元"
                id="signUpPwd"
                name="註冊密碼"
                :class="{ 'is-invalid': errors['註冊密碼'] }"
                v-model="userData.password"
                :rules="passwordRule"
              ></VField>
              <ErrorMessage
                class="invalid-feedback position-absolute mt-1"
                name="註冊密碼"
              ></ErrorMessage>
            </div>
            <div class="col-12">
              <label
                for="signUpPwdCheck"
                class="form-label mb-1 fs-5 lh-md required"
                >請再次輸入密碼
                <span class="text-danger"> * </span>
              </label>
              <VField
                type="password"
                class="form-control fs-6 p-3"
                placeholder="需與密碼相同"
                id="signUpPwdCheck"
                name="密碼確認"
                :class="{ 'is-invalid': errors['密碼確認'] }"
                :rules="checkPassword"
              ></VField>
              <ErrorMessage
                class="invalid-feedback position-absolute"
                name="密碼確認"
              ></ErrorMessage>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="ps-lg-2 ps-xl-8">
          <button
            type="button"
            class="btn btn-paper-outline btn-hover justify-content-center w-100 px-2 mt-10 mt-md-6 mb-6"
          >
            <span
              class="d-flex align-items-center justify-content-center fs-18"
            >
              <slot name="twitter"></slot>
              使用 twitter 註冊
            </span>
          </button>
          <button
            type="button"
            class="btn btn-paper-outline btn-hover w-100 px-2 mt-0 mt-md-6 my-6"
          >
            <span
              class="d-flex align-items-center justify-content-center fs-18"
            >
              <slot name="google"></slot>
              使用 Google 註冊
            </span>
          </button>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-md-end align-items-center">
        <RouterLink
          to="/forgetpassord"
          class="text-decoration-underline d-none d-md-block fs-6 me-8"
          >忘記密碼？
        </RouterLink>
        <div class="d-block w-100 w-md-auto text-center">
          <button
            type="submit"
            class="btn btn-primary btn-hover mb-4 mb-md-2 py-3 px-lg-18 w-100 w-md-auto lh-md"
          >
            註冊會員
          </button>
          <div
            class="d-flex justify-content-between justify-content-md-center align-items-center"
          >
            <a
              href="#"
              class="d-md-none text-decoration-underline fs-14"
              @click.prevent="$emit('toggle-view')"
              >會員登入
            </a>
            <p class="fs-12 mb-0 text-gray-500">
              註冊會員即表示同意網站使用條款
            </p>
          </div>
        </div>
      </div>
    </VForm>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import memberStore from '@/stores/memberStore';

import mixinVeeValidate from '@/mixins/mixinVeeValidate';

export default {
  emits: ['toggle-view'],
  mixins: [mixinVeeValidate],

  methods: {
    ...mapActions(memberStore, ['postSignup']),

    async submit() {
      await this.postSignup();
      this.$refs.signupForm.resetForm();
    },
  },

  computed: {
    ...mapState(memberStore, ['userData']),
  },
};
</script>
