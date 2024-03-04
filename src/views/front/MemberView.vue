<template>
  <main class="py-26" style="background-color: #f0f0f0">
    <section class="container">
      <div
        class="col-xl-10 mx-auto border border-gray-700 rounded-3 overflow-hidden bg-white"
      >
        <div class="row flex-nowrap position-relative" style="z-index: 0">
          <!-- 登入區塊 -->
          <div
            class="login-animation col-md-7 py-10 bg-white"
            :class="{ 'toggle-view': isLogin }"
          >
            <!-- 登入元件 -->
            <MemberSignin @toggle-view="isLogin = !isLogin">
              <template #twitter>
                <TwitterIcon class="fs-3 me-2" style="width: 24px" />
              </template>
              <template #google>
                <GoogleIcon class="fs-3 me-2" style="width: 24px" />
              </template>
            </MemberSignin>
          </div>
          <!-- 切換登入與註冊區塊 -->
          <div
            class="btn-animation d-none d-md-flex justify-content-center align-items-end py-30"
            :class="{ 'toggle-view': isLogin }"
          >
            <button
              type="button"
              class="btn btn-outline-light btn-hover px-8 px-lg-13 py-lg-3 logInUpBtn shadow"
              @click="isLogin = !isLogin"
            >
              {{ isLogin ? '會員登入' : '會員註冊' }}
            </button>
          </div>
          <!-- 註冊區塊 -->
          <div
            class="register-animation col-md-8 py-10 bg-white"
            :class="{ 'toggle-view': isLogin }"
          >
            <!-- 註冊元件 -->
            <MemberSingup @toggle-view="isLogin = !isLogin">
              <template #twitter>
                <TwitterIcon class="fs-3 me-2" style="width: 24px" />
              </template>
              <template #google>
                <GoogleIcon class="fs-3 me-2" style="width: 24px" />
              </template>
            </MemberSingup>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// component 載入
import MemberSignin from '@/components/member/MemberSignin.vue';
import MemberSingup from '@/components/member/MemberSignup.vue';

// icon 載入
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
import GoogleIcon from '@/components/icons/GoogleIcon.vue';

export default {
  data() {
    return {
      isLogin: false,
    };
  },

  components: {
    MemberSignin,
    MemberSingup,
    TwitterIcon,
    GoogleIcon,
  },
};
</script>

<style lang="scss">
.login-animation {
  display: block;
  &.toggle-view {
    display: none;
  }
}

.register-animation {
  display: none;
  &.toggle-view {
    display: block;
  }
}

@media (min-width: 768px) {
  .login-animation {
    transform: translate(0);
    opacity: 1;
    transition: transform 1.1s ease-out, opacity 0.1s ease-in 0.7s;
    &.toggle-view {
      display: block;
      transform: translate(180%);
      opacity: 0;
      transition: transform 1.2s ease-in, opacity 0.1s ease-in 0.3s;
    }
  }

  .register-animation {
    display: block;
    position: relative;
    z-index: -1;
    transform: translate(-250%);
    opacity: 0;
    transition: transform 1.2s ease-in, opacity 0.5s ease-in;
    &.toggle-view {
      transform: translate(-87.7%);
      opacity: 1;
      transition: transform 1.2s ease-out, opacity 0.5s ease-in 0.6s;
    }
  }

  .btn-animation {
    width: 41.66666667%;
    transform: translate(0);
    transition: transform 1.5s ease, width 0.8s ease 0.1s;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: url('/images/member/signInUp.jpg');
      background-size: cover;
      background-position: right;
      transition: background-position 1.5s ease;
    }
    &.toggle-view {
      width: 33.33333333%;
      transform: translate(-172%);
      transition: transform 1.5s ease, width 0.8s ease 0.3s;
      &::before {
        background-position: left;
        transition: background-position 1.5s ease;
      }
    }
  }
}
</style>
