<template>
  <nav class="navbar navbar-expand-md container-fluid border-bottom border-5 border-dark-pr bg-gray-800 p-0">
    <div class="container">
      <RouterLink to="/admin/login" class="p-0">
        <LogoIcon :style="{ height: '72px' }"></LogoIcon>
      </RouterLink>
    </div>
  </nav>
  <div class="container flex-grow-1 d-flex">
    <div class="flex-grow-1 row justify-content-center align-items-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 pt-8">
        <div class="px-4 px-md-10 py-5 py-md-10 py-xxl-16  border border-white bg-gray-700 rounded rounded-3">
          <p class="mb-5 fs-3 text-white text-center text-md-start">管理員登入<span
              class="lh-1 fs-6 ms-2 text-dark-pr d-none d-md-block">Sign In</span></p>
          <form @submit="onSubmit" @keydown.enter="onSubmit">
            <div class="mb-6">
              <label for="adminEmail" class="form-label text-gray-300">帳號</label>
              <input type="email" class="form-control borderl bg-white text-white" style="--bs-bg-opacity: .15;"
                placeholder="電子郵件" id="adminEmail" aria-describedby="emailHelp">
            </div>
            <div class="mb-8 mb-md-16 mb-xxl-24">
              <label for="adminPwd" class="form-label text-gray-300">密碼</label>
              <input type="password" class="form-control borderl bg-white text-white" style="--bs-bg-opacity: .15;"
                placeholder="密碼" id="adminPwd" aria-describedby="emailHelp">
            </div>
            <button type="submit" class="btn btn-dark-pr d-block mx-auto px-21 mb-6">登入
            </button>
            <p class="fs-6 text-primary text-center user-select-none"><span
                class="border-bottom border-primary">不可能忘記密碼吧！</span></p>
          </form>
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
*{
  // outline: 1px solid red;
}
</style>
