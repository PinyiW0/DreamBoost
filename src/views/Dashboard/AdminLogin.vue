<template>
  <div class="bg-gray-800 min-vh-100">
    <nav class="navbar navbar-expand-md sticky-top container-fluid border-bottom border-5 border-dark-pr bg-gray-800 p-0">
      <div class="container">
        <RouterLink to="/admin/login" class="p-0">
          <LogoIcon :style="{ height: '72px' }"></LogoIcon>
        </RouterLink>
      </div>
    </nav>
    <div class="container">
      <div class="row justify-content-center vl-parent"
      ref="formContainer">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div class="px-15 pt-16 border border-white mt-29 bg-gray-700 rounded rounded-3 mb-28">
            <p class="mb-5 fs-3 text-white">管理員登入<span class="lh-1 fs-6 ms-2 text-dark-pr">Sign In</span></p>
            <form @submit="onSubmit" @keydown.enter="onSubmit">
              <div class="mb-6">
                <label for="adminEmail" class="form-label text-gray-300">帳號</label>
                <input type="email" class="form-control borderl bg-white text-white" style="--bs-bg-opacity: .15;"
                  placeholder="電子郵件" id="adminEmail" aria-describedby="emailHelp">
              </div>
              <div class="mb-24">
                <label for="adminPwd" class="form-label text-gray-300">密碼</label>
                <input type="password" class="form-control borderl bg-white text-white" style="--bs-bg-opacity: .15;"
                  placeholder="密碼" id="adminPwd" aria-describedby="emailHelp">
              </div>
              <button type="submit" class="btn btn-dark-pr d-block mx-auto px-21 mb-6">登入
              </button>
              <p class="fs-6 text-primary text-center mb-30 user-select-none"><span
                  class="border-bottom border-primary">不可能忘記密碼吧！</span></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LogoIcon from '@/components/icons/AdminLogo.vue';
import LoadingComponent from '@/mixins/FullScreenLoading';

export default {
  data() {
    return {
    };
  },
  components: {
    LogoIcon,
  },
  methods: {
    onSubmit() {
      this.showFullScreenLoading({ backgroundColor: '#FAA', loader: 'dots' });
    },
  },
  mounted() {
  },
  mixins: [LoadingComponent],
};
</script>
<style lang="scss">
.form-control::placeholder{
  color:#98A2B3;
}
</style>
