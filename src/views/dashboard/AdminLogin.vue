<template>
  <nav class="navbar navbar-expand-md container-fluid border-bottom border-5 border-dark-pr bg-gray-800 p-0">
    <div class="container">
      <RouterLink to="/admin/login" class="p-0">
        <LogoIcon :style="{ height: '72px' }"></LogoIcon>
      </RouterLink>
    </div>
  </nav>
  <div class="container flex-grow-1 d-flex flex-column">
    <div class="flex-grow-1 row justify-content-center align-items-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 pt-8">
        <div class="px-4 px-md-10 py-5 py-md-10 py-xxl-16  border border-white bg-gray-700 rounded rounded-3">
          <p class="mb-5 fs-3 text-white text-center text-md-start">管理員登入<span
              class="lh-1 fs-6 ms-2 text-dark-pr d-none d-md-inline-block">Sign In</span></p>
          <form @submit="login">
            <div class="mb-6">
              <label for="adminEmail" class="form-label text-gray-300">帳號</label>
              <input type="email" class="form-control borderl bg-white text-white" style="--bs-bg-opacity: .15;"
              placeholder="電子郵件" id="adminEmail" aria-describedby="emailHelp"
              v-model="userdata.username">
            </div>
            <div class="mb-8 mb-md-16 mb-xxl-24">
              <label for="adminPwd" class="form-label text-gray-300">密碼</label>
              <input type="password" class="form-control borderl bg-white text-white" style="--bs-bg-opacity: .15;"
              placeholder="密碼" id="adminPwd" aria-describedby="emailHelp"
              v-model="userdata.password"
              >
            </div>
            <button type="submit" class="btn btn-dark-pr d-block mx-auto px-21 mb-6">登入
            </button>
            <p class="fs-6 text-primary text-center user-select-none">
              <span class="border-bottom border-primary">不可能忘記密碼吧！</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  <DashboardFooter></DashboardFooter>
</template>
<script>
import LogoIcon from '@/components/icons/AdminLogo.vue';
import DashboardFooter from '@/components/footer/DashboardFooter.vue';
import MixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import MixinSwalToast from '@/mixins/mixinSwalToast';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      userdata: {
        username: '',
        password: '',
      },
    };
  },
  components: {
    LogoIcon,
    DashboardFooter,
  },
  methods: {
    login() {
      this.showFullScreenLoading({ canCancel: false, opacity: 0.2 });
      this.$http.post(`${VITE_URL}/dreamboost/administrator/login`, this.userdata)
        .then((res) => {
          this.hideFullScreenLoading();
          const { token, expired } = res.data.data;
          // 轉換時間戳記成可以存到cookie內的格式,必須要是UNIX TimeStmap
          document.cookie = `dreamboostAdminToken=${token};expires=${new Date(expired * 1000)};`;
          this.$router.push('/admin/home/manageaccount');
        })
        .catch((err) => {
          this.hideFullScreenLoading();
          this.addToast({ content: err.response.data.message, style: 'error' });
        });
    },
  },
  mounted() {
  },
  mixins: [MixinFullScreenLoading, MixinSwalToast],
};
</script>
<style lang="scss">
.form-control::placeholder{
  color:#98A2B3;
}
</style>
