<template>
  <div class="bgc-f0 pt-lg-25 pb-lg-27">
    <div class="container">
      <div class="row g-0 justify-content-around">
        <div class="col-lg-9 bgc-ff rounded-2">
          <div class="row g-0 position-relative overflow-hidden" :class="{'loginMove': loginMove}">
            <main class="col-lg-8 bgc-ff py-lg-15 signIn z-1">
              <div class="row g-0 align-items-center justify-content-center mb-lg-10">
                <img src="../../../public/images/member/logo.png"
                  alt="logo icon" class="me-3 w-auto"/>
                <h1 class="fs-lg-6 text-primary mb-0 lh-base w-auto">讓夢想不再只是夢想</h1>
              </div>
              <div class="row g-0 justify-content-center">
                <div class="col-8">
                  <h2 class=" text-primary fw-medium fs-lg-3 lh-base mb-4">會員登入<span class="text-span lh-1 fs-lg-6 ms-2">Sign In</span></h2>
                </div>
              </div>
              <v-form v-slot="{ errors }" class="row g-0" @submit="signIn">
                <div class="col-12">
                  <div class="row g-0 justify-content-center">
                    <div class="d-flex flex-column align-items-center">
                      <div class="col-8 mb-4">
                        <label for="email" class="form-label mb-1 fs-6 lh-md required">電子信箱</label>
                        <v-field type="email" class="form-control fs-6 p-3" :class="{'is-invalid': errors['電子信箱']}" id="email" name="電子信箱" placeholder="請輸入註冊電子信箱"
                        rules="required|email"></v-field>
                        <error-message class="invalid-feedback position-absolute m-0" name="電子信箱"></error-message>
                      </div>
                      <div class="col-8 mb-4">
                        <label for="pwd" class="form-label mb-1 fs-6 lh-md required">密碼</label>
                        <v-field type="password" class="form-control fs-6 p-3" :class="{'is-invalid': errors['密碼']}" id="pwd" name="密碼" placeholder="密碼至少6個字元" v-model="user.password"
                        :rules="isPwd"></v-field>
                        <error-message class="invalid-feedback position-absolute m-0" name="密碼"></error-message>
                      </div>
                    </div>
                    <div class="col-8">
                      <button type="button" class="btn btn-outline-primary px-6 py-3 lh-md w-100 mt-lg-7 mb-lg-6">
                        <img class="me-2" src="../../../public/images/member/twitter.png" alt="twitter icon">
                        使用 twitter 註冊
                      </button>
                      <button type="button" class="btn btn-outline-primary px-6 py-3 lh-md w-100 mb-lg-9">
                        <img class="me-2" src="../../../public/images/member/google.png" alt="google icon">
                        使用 Google 註冊
                      </button>
                      <button type="submit" class="btn btn-primary w-100 mb-2 py-3 px-lg-18 text-white lh-md">登入</button>
                      <div class="col-10 d-flex align-items-center justify-content-end">
                        <span class="me-8"><a href="" class="text-decoration-underline fs-6">忘記密碼？</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </v-form>
            </main>
            <div class="col-lg-4 animationTime">
              <div class="img position-absolute">
              <button type="button" class="btn btn-outline-light
              position-absolute z-1 lh-md px-lg-13 py-lg-3 logInUpBtn"
              @click="moveLogin">{{ loginMove? '會員註冊' : '會員登入' }}</button>
            </div>
            </div>
            <main class="col-lg-8 bgc-ff pt-lg-10 pb-lg-13 signUp">
              <v-form v-slot="{ errors }" @submit="signUp">
                <div class="row g-0 align-items-center justify-content-center mb-lg-10">
                  <img src="../../../public/images/member/logo.png"
                    alt="logo icon" class="me-3 w-auto"/>
                  <h1 class="fs-lg-6 text-primary mb-0 lh-base w-auto">讓夢想不再只是夢想</h1>
                </div>
                <div class="row g-0 justify-content-center">
                  <div class="col-11">
                    <h2 class=" text-primary fw-medium fs-lg-3 lh-base mb-4">會員註冊<span class="text-span lh-1 fs-lg-6 ms-2">Sign Up</span></h2>
                  </div>
                </div>
                <div class="row g-0">
                  <div class="col-lg-6 border-1 border-end border-9dd">
                    <div class="row g-0">
                      <div class="d-flex flex-column align-items-center">
                        <div class="col-8 mb-4">
                          <label for="name" class="form-label mb-1 fs-6 lh-md required">使用者名稱</label>
                          <v-field type="text" class="form-control fs-6 p-3" :class="{'is-invalid': errors['姓名']}" id="name" name="姓名" placeholder="請輸入真實姓名"
                          rules="required"></v-field>
                          <error-message class="invalid-feedback position-absolute m-0" name="姓名"></error-message>
                        </div>
                        <div class="col-8 mb-4">
                          <label for="email" class="form-label mb-1 fs-6 lh-md required">電子信箱</label>
                          <v-field type="text" class="form-control fs-6 p-3" :class="{'is-invalid': errors['電子信箱']}" id="email" name="電子信箱" placeholder="請輸入 Email"
                          rules="required|email"></v-field>
                          <error-message class="invalid-feedback position-absolute m-0" name="電子信箱"></error-message>
                        </div>
                        <div class="col-8 mb-4">
                          <label for="pwd" class="form-label mb-1 fs-6 lh-md required">密碼</label>
                          <v-field type="text" class="form-control fs-6 p-3" :class="{'is-invalid': errors['密碼']}" id="pwd" name="密碼" placeholder="密碼至少6個字元" v-model="user.password"
                          :rules="isPwd"></v-field>
                          <error-message class="invalid-feedback position-absolute m-0" name="密碼"></error-message>
                        </div>
                        <div class="col-8 mb-4">
                          <label for="pwdCheck" class="form-label mb-1 fs-6 lh-md required">請再次輸入密碼</label>
                          <v-field type="text" class="form-control fs-6 p-3" :class="{'is-invalid': errors.pwdCheck}" id="pwdCheck" name="pwdCheck" placeholder="需與密碼相同"
                          :rules="checkPwd"></v-field>
                          <error-message class="invalid-feedback position-absolute m-0" name="pwdCheck"></error-message>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <button type="button" class="btn btn-outline-primary px-6 py-3 lh-md d-block mx-auto mt-lg-8 mb-lg-8">
                      <img class="me-2" src="../../../public/images/member/twitter.png" alt="twitter icon">
                      使用 twitter 註冊
                    </button>
                    <button type="button" class="btn btn-outline-primary px-6 py-3 lh-md d-block mx-auto">
                      <img class="me-2" src="../../../public/images/member/google.png" alt="google icon">
                      使用 Google 註冊
                    </button>
                  </div>
                </div>
                <div class="row g-0 justify-content-around">
                  <div class="col-10 d-flex align-items-center justify-content-end">
                    <span class="me-8"><a href="" class="text-decoration-underline fs-6">忘記密碼？</a></span>
                    <div class="d-inline-block">
                      <button type="submit" class="btn btn-primary mb-2 py-3 px-lg-18 text-white lh-md">註冊會員</button>
                      <p class="fs-12 mb-0 text-gray500 text-center">註冊會員即表示同意網站使用條款</p>
                    </div>
                  </div>
                </div>
              </v-form>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MixinVeeValidate from '../../js/mixins/mixinVeeValidate';

export default {
  data() {
    return {
      user: {
        name: '',
        username: '',
        password: '',
      },
      loginMove: false,
    };
  },
  mixins: [MixinVeeValidate],
  methods: {
    isPwd(value) {
      const reg = /^[\d\w]{6,}$/;
      return reg.test(value) ? true : '密碼最少 6 個字元！';
    },
    checkPwd(value) {
      return value === this.user.password ? true : '與密碼不符！！！';
    },
    moveLogin() {
      this.loginMove = !this.loginMove;
    },
    async signUp(value) {
      this.user.name = value['姓名'];
      this.user.username = value['電子信箱'];
      this.user.password = value['密碼'];
      console.log(this.user);
    },
    async signIn(value) {
      this.user.username = value['電子信箱'];
      this.user.password = value['密碼'];
      console.log(this.user);
    },
  },
};
</script>
<style lang="scss">
.bgc-f0{
  background-color: #f0f0f0;
}
.bgc-ff{
  background-color: #fff;
}
.logInUpBtn{
  transition: all 0.8s ease-in-out;
  left: 73px;
  top: 462px;
}
.text-span{
  color: #9DD4D1;
}
.border-9dd{
  border-color: #9DD4D1;
}
label.required{
  &::after{
    content: '*';
    color: #ff0000;
    margin-left: 2px;
  }
}
.text-gray500{
  color: #667085;
}
.loginMove{
  .img::after{
    transform: translate3d(647px, 0, 0);
  }
  .logInUpBtn{
    transform: translate3d(647px, 0, 0);
  }
  main{
    transform: translate3d(647px, 0, 0);
  }
}
.animationTime{
  width: 972px;
  height: 640px;
}
.img{
  // overflow: hidden;
  left: 0;
  top: 0;
  height: 100%;
  width: 325px;
  &::before{
    width: 972px;
    height: 100%;
    background: url(/public/images/member/signInUp.jpg) center center no-repeat;
    position: absolute;
    content: '';
    left: 0;
    top: 0;
  }
  &::after {
    transition: all 0.8s ease-in-out;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.3);
  }
}
main{
  transition: all 0.8s ease-in-out;
  position: absolute;
  width: 647px;
  &.signIn{
    left: -647px;
  }
  &.signUp{
    left: 325px;
  }
}
</style>
<!--  vee-validate example -->
<!--
  <template>
    <div class="container">
      <h1>member</h1>
      <v-form v-slot="{ errors }">
        {{ errors }}
        <div class="col-md-4">
          <label for="name" class="form-label">First name</label>
          <v-field type="text" class="form-control" id="name"
          :class="{'is-invalid': errors.name}" name="name" rules="required"></v-field>
          <error-message class="invalid-feedback" name="name"></error-message>
        </div>
      </v-form>
    </div>
</template>
<script>
import MixinVeeValidate from '../../js/mixins/mixinVeeValidate';

export default {
  date() {
    return {

    };
  },
  mixins: [MixinVeeValidate],
};
</script>
 -->
