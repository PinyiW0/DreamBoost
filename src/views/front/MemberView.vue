<template>
  <!-- 1400px以上畫面 -->
  <div class="bg-bgc-default pt-lg-25 pb-lg-27 d-none d-xxl-block">
    <div class="container">
      <div class="row g-0 justify-content-around">
        <div class="col-lg-9 bg-white rounded-4">
          <div
            class="row g-0 position-relative overflow-hidden rounded-4 border border-gray-700 sign-shadow"
            :class="{ 'loginMove': loginMove }">
            <div class="col-lg-4 animationArea">
              <div class="img-area h-100 position-absolute">
                <button
                  type="button"
                  class="btn btn-outline-light position-absolute z-1 px-8 px-lg-13 py-lg-3 logInUpBtn shadow"
                  @click="moveLogin">
                  {{ loginMove ? '會員註冊' : '會員登入' }}
                </button>
              </div>
            </div>
            <!-- 會員登入 -->
            <main class="col-lg-8 bg-white py-lg-10 signIn z-1">
              <!-- logo -->
              <div class="d-flex align-items-center justify-content-center mb-lg-10 rounded-start-4">
                <img src="/images/member/signLogo.svg"
                  alt="logo icon" class="img-fluid me-3"/>
                <p class="fs-lg-6 text-primary mb-0 mt-3">讓夢想不再只是夢想</p>
              </div>
              <div class="row g-0 justify-content-center">
                <div class="col-8">
                  <h2 class="text-primary fw-medium fs-lg-3 lh-base mb-4">會員登入<span class="text-primary-light fw-regular fs-lg-6 ms-2">Sign In</span></h2>
                </div>
              </div>
              <v-form v-slot="{ errors }" class="row g-0" @submit="signIn">
                <div class="col-12">
                  <div class="row g-0 justify-content-center">
                    <div class="d-flex flex-column align-items-center">
                      <div class="col-8 mb-6">
                        <label for="signInEmail" class="form-label mb-1 fs-5 lh-md required">電子信箱</label>
                        <v-field type="email" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors['電子信箱'] }" id="signInEmail" name="電子信箱" placeholder="請輸入註冊電子信箱" v-model="user.username"
                        rules="required|email"></v-field>
                        <error-message class="invalid-feedback position-absolute m-0" name="電子信箱"></error-message>
                      </div>
                      <div class="col-8 mb-6">
                        <label for="signInPwd" class="form-label mb-1 fs-5 lh-md required">密碼</label>
                        <v-field type="password" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors['登入密碼'] }" id="signInPwd" name="登入密碼" placeholder="密碼至少6個字元" v-model="user.password"
                        :rules="isPwd"></v-field>
                        <error-message class="invalid-feedback position-absolute m-0" name="登入密碼"></error-message>
                      </div>
                    </div>
                    <!-- 第三方登入 -->
                    <div class="col-8">
                      <button type="button" class="btn btn-paper-outline signup-icon justify-content-center w-100 mt-lg-7 mb-lg-6">
                        <span class="d-flex align-items-center justify-content-center fs-5">
                          <TwitterIcon class="me-2" style="width:24px;"></TwitterIcon>
                          使用 twitter 登入
                        </span>
                      </button>
                      <button type="button" class="btn btn-paper-outline signup-icon w-100 mb-lg-9">
                        <span class="d-flex align-items-center justify-content-center fs-5">
                          <GoogleIcon class="fs-3 me-2" style="width:24px;"></GoogleIcon>
                          使用 Google 登入
                        </span>
                      </button>
                      <button type="submit" class="btn btn-primary w-100 mb-2 py-3 px-lg-18 text-white mb-8 fs-5">登入</button>
                      <div class="col-12 d-flex align-items-center justify-content-center">
                        <a href="" class="text-decoration-underline fs-14">忘記密碼？</a>
                      </div>
                    </div>
                  </div>
                </div>
              </v-form>
            </main>
            <!-- 會員註冊 -->
            <main class="col-lg-8 bg-white pt-lg-10 pb-lg-13 signUp">
              <!-- logo -->
              <div class="d-flex align-items-center justify-content-center mb-lg-10">
                <img src="/images/member/signLogo.svg"
                  alt="logo icon" class="img-fluid me-3"/>
                <p class="fs-lg-6 text-primary mb-0 mt-3">讓夢想不再只是夢想</p>
              </div>
              <div class="row g-0 justify-content-center">
                <div class="col-11">
                  <h1 class=" text-primary fw-medium fs-3 lh-base mb-4 ps-7">會員註冊<span class="text-primary-light lh-1 fs-lg-6 ms-2">Sign Up</span></h1>
                </div>
              </div>
              <v-form v-slot="{ errors }" @submit="signUp">
                <div class="row g-0">
                  <div class="col-lg-6 border-1 border-end border-primary-light">
                    <div class="row g-0">
                      <div class="d-flex flex-column align-items-center">
                        <div class="col-8 mb-6">
                          <label for="signUpName" class="form-label mb-1 fs-5 lh-md required">使用者名稱</label>
                          <v-field type="text" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors['姓名'] }" id="signUpName" name="姓名" placeholder="請輸入真實姓名" v-model="user.name"
                          rules="required"></v-field>
                          <error-message class="invalid-feedback position-absolute m-0" name="姓名"></error-message>
                        </div>
                        <div class="col-8 mb-6">
                          <label for="signUpEmail" class="form-label mb-1 fs-5 lh-md required">電子信箱</label>
                          <v-field type="text" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors['電子信箱'] }" id="signUpEmail" name="電子信箱" placeholder="請輸入 Email" v-model="user.username"
                          rules="required|email"></v-field>
                          <error-message class="invalid-feedback position-absolute m-0" name="電子信箱"></error-message>
                        </div>
                        <div class="col-8 mb-6">
                          <label for="signUpPwd" class="form-label mb-1 fs-5 lh-md required">密碼</label>
                          <v-field type="password" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors['註冊密碼'] }" id="signUpPwd" name="註冊密碼" placeholder="密碼至少6個字元" v-model="user.password"
                          :rules="isPwd"></v-field>
                          <error-message class="invalid-feedback position-absolute m-0" name="註冊密碼"></error-message>
                        </div>
                        <div class="col-8 mb-6">
                          <label for="signUpPwdCheck" class="form-label mb-1 fs-5 lh-md required">請再次輸入密碼</label>
                          <v-field type="password" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors.pwdCheck }" id="signUpPwdCheck" name="pwdCheck" placeholder="需與密碼相同"
                          :rules="checkPwd"></v-field>
                          <error-message class="invalid-feedback position-absolute m-0" name="pwdCheck"></error-message>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 第三方註冊 -->
                  <div class="col-lg-6">
                    <button type="button" class="btn btn-paper-outline signup-icon px-6 py-3 col-8 d-block mx-auto mt-lg-8 mb-lg-8">
                      <span class="d-flex align-items-center justify-content-center">
                        <TwitterIcon class="fs-3 me-2" style="width:24px;"></TwitterIcon>
                        使用 twitter 註冊
                      </span>
                    </button>
                    <button type="button" class="btn btn-paper-outline signup-icon px-6 py-3 col-8 d-block mx-auto">
                      <span class="d-flex align-items-center justify-content-center">
                        <GoogleIcon class="fs-3 me-2" style="width:24px;"></GoogleIcon>
                        使用 Google 註冊
                      </span>
                    </button>
                  </div>
                </div>
                <div class="row g-0 justify-content-around">
                  <div class="col-10 d-flex align-items-center justify-content-end">
                    <router-link to="forgetpassord" class="text-decoration-underline fs-6 me-8">忘記密碼？</router-link>
                    <div class="d-inline-block">
                      <button type="submit" class="btn btn-primary mb-2 py-3 px-lg-18 lh-md">註冊會員</button>
                      <p class="fs-12 mb-0 text-gray-500 text-center">註冊會員即表示同意網站使用條款</p>
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
  <!-- mob、pad 畫面 -->
  <!-- 會員登入 -->
  <div class="bg-bgc-default pt-lg-25 pb-lg-27 d-block d-xxl-none">
    <div class="py-15">
      <div class="col-11 col-md-8 col-lg-7 d-flex flex-column mx-auto justify-content-center align-items-center border border-gray-500 rounded-4 bg-white sign-shadow">
        <div class="d-flex align-items-center justify-content-between mt-12 mb-8">
          <!-- logo -->
          <div class="d-flex align-items-center justify-content-between rounded-start-4">
            <img src="/images/member/signLogo.svg"
              alt="logo icon" class="img-fluid me-3"/>
            <p class="fs-18 text-primary mb-0 mt-3">讓夢想不再只是夢想</p>
          </div>
        </div>
        <!-- 會員登入標題 -->
        <div class="justify-content-center mb-2">
          <h2 class="text-primary text-center fw-medium fs-2 lh-base mb-0">會員登入</h2>
          <p class="text-primary-light fw-regular text-center fs-5">Sign In</p>
        </div>
        <!-- 登入資料填寫 -->
        <v-form v-slot="{ errors }" class="row g-0" @submit="signIn">
          <div class="col-12">
            <div class="row g-0 justify-content-center">
              <div class="d-flex flex-column align-items-center">
                <div class="col-8 mb-6">
                  <label for="signInEmail" class="form-label mb-1 fs-18 lh-md required">電子信箱</label>
                  <v-field type="email" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors['電子信箱'] }" id="signInEmail" name="電子信箱" placeholder="請輸入註冊電子信箱" v-model="user.username"
                  rules="required|email"></v-field>
                  <error-message class="invalid-feedback position-absolute m-0" name="電子信箱"></error-message>
                </div>
                <div class="col-8 mb-6">
                  <label for="signInPwd" class="form-label mb-1 fs-18 lh-md required">密碼</label>
                  <v-field type="password" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors['登入密碼'] }" id="signInPwd" name="登入密碼" placeholder="密碼至少6個字元" v-model="user.password"
                  :rules="isPwd"></v-field>
                  <error-message class="invalid-feedback position-absolute m-0" name="登入密碼"></error-message>
                </div>
              </div>
              <!-- 第三方登入 -->
              <div class="col-8">
                <button type="button" class="btn btn-paper-outline signup-icon justify-content-center w-100 px-2 my-6">
                  <span class="d-flex align-items-center justify-content-center fs-18">
                    <TwitterIcon class="fs-3 me-2" style="width:24px;"></TwitterIcon>
                      使用 twitter 登入
                  </span>
                </button>
                <button type="button" class="btn btn-paper-outline signup-icon w-100 px-2 my-6">
                  <span class="d-flex align-items-center justify-content-center fs-18">
                    <GoogleIcon class="fs-18 me-2" style="width:24px;"></GoogleIcon>
                    使用 Google 登入
                  </span>
                </button>
                <button type="submit" class="btn btn-primary fs-18 mt-4 w-100 mb-2 py-3 px-lg-18 text-white mb-8">登入</button>
                <div class="col-12 d-flex align-items-center justify-content-center mb-12">
                  <a href="" class="forget-hover text-decoration-underline fs-18 me-6">忘記密碼？</a>
                  <button class="btn signinout-hover text-decoration-underline fs-18 px-6">會員註冊</button>
                </div>
              </div>
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </div>
  <!-- 會員註冊 -->
   <div class="bg-bgc-default pt-lg-25 pb-lg-27 d-block d-xxl-none">
      <div class="py-15">
        <div class="col-11 col-md-8 col-lg-7 d-flex flex-column mx-auto justify-content-center align-items-center border border-gray-500 rounded-4 bg-white sign-shadow">
          <div class="d-flex align-items-center justify-content-between mt-12 mb-8">
            <!-- logo -->
            <div class="d-flex align-items-center justify-content-between rounded-start-4">
              <img src="/images/member/signLogo.svg"
                alt="logo icon" class="img-fluid me-3"/>
              <p class="fs-18 text-primary mb-0 mt-3">讓夢想不再只是夢想</p>
            </div>
          </div>
          <!-- 會員註冊標題 -->
          <div class="justify-content-center mb-2">
            <h2 class="text-primary text-center fw-medium fs-2 lh-base mb-0">會員註冊</h2>
            <p class="text-primary-light fw-regular text-center fs-5">Sign Up</p>
          </div>
          <!-- 登入資料填寫 -->
          <v-form v-slot="{ errors }" class="row g-0" @submit="signIn">
            <div class="col-12">
              <div class="row g-0 justify-content-center">
                <div class="d-flex flex-column align-items-center">
                  <div class="col-8 mb-6">
                    <label for="signUpName" class="form-label mb-1 fs-5 lh-md required">使用者名稱</label>
                    <v-field type="text" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors['姓名'] }" id="signUpName" name="姓名" placeholder="請輸入真實姓名" v-model="user.name"
                    rules="required"></v-field>
                    <error-message class="invalid-feedback position-absolute m-0" name="姓名"></error-message>
                  </div>
                  <div class="col-8 mb-6">
                    <label for="signUpEmail" class="form-label mb-1 fs-5 lh-md required">電子信箱</label>
                    <v-field type="text" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors['電子信箱'] }" id="signUpEmail" name="電子信箱" placeholder="請輸入 Email" v-model="user.username"
                    rules="required|email"></v-field>
                    <error-message class="invalid-feedback position-absolute m-0" name="電子信箱"></error-message>
                  </div>
                  <div class="col-8 mb-6">
                    <label for="signUpPwd" class="form-label mb-1 fs-5 lh-md required">密碼</label>
                    <v-field type="password" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors['註冊密碼'] }" id="signUpPwd" name="註冊密碼" placeholder="密碼至少6個字元" v-model="user.password"
                    :rules="isPwd"></v-field>
                    <error-message class="invalid-feedback position-absolute m-0" name="註冊密碼"></error-message>
                  </div>
                  <div class="col-8 mb-6">
                    <label for="signUpPwdCheck" class="form-label mb-1 fs-5 lh-md required">請再次輸入密碼</label>
                    <v-field type="password" class="form-control fs-6 p-3 border-primary-light mb-1" :class="{ 'is-invalid': errors.pwdCheck }" id="signUpPwdCheck" name="pwdCheck" placeholder="需與密碼相同"
                    :rules="checkPwd"></v-field>
                    <error-message class="invalid-feedback position-absolute m-0" name="pwdCheck"></error-message>
                  </div>
                </div>
                <!-- 第三方登入 -->
                <div class="col-8">
                  <button type="button" class="btn btn-paper-outline signup-icon justify-content-center w-100 px-2 my-6">
                    <span class="d-flex align-items-center justify-content-center fs-18">
                      <TwitterIcon class="fs-3 me-2" style="width:24px;"></TwitterIcon>
                        使用 twitter 註冊
                    </span>
                  </button>
                  <button type="button" class="btn btn-paper-outline signup-icon w-100 px-2 my-6">
                    <span class="d-flex align-items-center justify-content-center fs-18">
                      <GoogleIcon class="fs-18 me-2" style="width:24px;"></GoogleIcon>
                      使用 Google 註冊
                    </span>
                  </button>
                  <button type="submit" class="btn btn-primary fs-18 mt-4 w-100 mb-2 py-3 px-lg-18 text-white mb-8">註冊</button>
                  <div class="col-12 d-flex align-items-center justify-content-center mb-12">
                    <button class="btn signinout-hover text-decoration-underline fs-18 px-6">會員登入</button>
                  </div>
                </div>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  <!-- footer 區域 -->
  <UserFooter></UserFooter>
</template>

<style lang="scss">
// 忘記密碼
.forget-hover {
  color: var(--bs-gray-500);
  &:hover {
    color: var(--bs-primary);
    transform: translate3d(0, -.125rem, 0);
    transition: opacity 0.3s, transform 0.3s;
  }
}
// 登入註冊
.signinout-hover {
  color: var(--bs-primary);
  &:hover {
    font-weight: bold;
    color: var(--bs-primary);
    transform: translate3d(0, -.125rem, 0);
    transition: opacity 0.3s, transform 0.3s;
  }
}
// 登入註冊區塊陰影
.sign-shadow {
  box-shadow: 2px 4px 10px rgba(57, 87, 132, 0.2);
}
// 按鈕icon hover效果
.signup-icon {
  color: var(--bs-primary);
  &:hover {
    color: var(--bs-white);
    transform: translate3d(0, -.125rem, 0);
    transition: opacity 0.3s, transform 0.3s;
  }
}

// 登入註冊切換按鈕
.logInUpBtn {
  transition: all 0.8s ease-in-out;
  left: 80px;
  top: 462px;
}
// 必填＊
label.required {
  &::after {
    content: '*';
    color: var(--bs-danger);
    margin-left: 2px;
  }
}
// 區塊移動
.loginMove .img::after,
.loginMove .logInUpBtn,
.loginMove main {
  transform: translate3d(647px, 0, 0);
}
//滑動區塊
.animationArea {
  width: 972px;
  height: 670px;
}

.img-area {
  left: 0;
  top: 0;
  width: 325px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    min-width: 972px;
    height: 100%;
    background: url(/images/member/signInUp.jpg) center center no-repeat;
    background-size: cover;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.8s ease-in-out;
    z-index: -3;
  }
}

main {
  position: absolute;
  width: 647px;
  transition: all 0.8s ease-in-out;

  &.signIn {
    left: -647px;
  }

  &.signUp {
    left: 325px;
  }
}</style>

<script>
import GoogleIcon from '@/components/icons/GoogleIcon.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
import MixinVeeValidate from '../../js/mixins/mixinVeeValidate';

const apiUrl = import.meta.env.VITE_URL;

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
      this.user = {
        name: '',
        username: '',
        password: '',
      };
    },
    async signUp(value) {
      this.user = {};
      this.user.name = value['姓名'];
      this.user.username = value['電子信箱'];
      this.user.password = value['註冊密碼'];
      try {
        const result = (await this.axios.post(`${apiUrl}/dreamboost/signup`, this.user)).data;
        console.log(result);
        this.user = {
          name: '',
          username: '',
          password: '',
        };
      } catch (err) {
        console.log(err);
      }
    },
    async signIn(value) {
      this.user = {};
      this.user.username = value['電子信箱'];
      this.user.password = value['登入密碼'];
      try {
        const result = (await this.axios.post(`${apiUrl}/dreamboost/login`, this.user)).data;
        console.log(result);
        this.user = {
          name: '',
          username: '',
          password: '',
        };
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {
    GoogleIcon,
    TwitterIcon,
  },
};
</script>

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
