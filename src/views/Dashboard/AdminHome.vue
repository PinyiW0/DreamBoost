<template>
  <template v-if="tokenChecked">
    <div class="sticky-top">
      <nav class="navbar navbar-expand-sm border-bottom border-5 border-dark-pr bg-gray-800">
        <div class="container-fluid">
          <RouterLink to="/admin/home/manageaccount" class="p-0 d-block">
            <LogoIcon :style="{ height: '72px' }"></LogoIcon>
          </RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggle"
            aria-controls="navbar-toggle" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-toggle">
            <ul class="navbar-nav ms-auto mb-0 align-items-sm-center">
              <li class="nav-item flex-shrink-0 d-none d-sm-flex align-items-center">
                <LogoAvatar :style="{height:'45px'} "></LogoAvatar>
                <span class="ms-4 me-2 mb-0 text-white fs-5">管理員，您好</span>
              </li>
              <li class="nav-item">
                <button class="l-logout btn px-4 py-2 text-white" @click="logout">登出</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- 為了避免透過去只能新增這層.. -->
      <div class="bg-gray-800">
        <div class="bg-white bg-opacity-25" :style="{'--bs-bg-opacity': '.2'}">
          <ul class="mb-0 list-unstyled d-flex px-2 justify-content-around justify-content-lg-center  py-4 l-ListGap">
            <li>
              <RouterLink class="py-2 d-block px-1 px-sm-4 px-lg-8 l-NavLink" to="/admin/home/manageaccount">管理帳號
              </RouterLink>
            </li>
            <li>
              <RouterLink class="py-2 d-block px-1 px-sm-4 px-lg-8 l-NavLink" to="/admin/home/reviewproposals">方案審核
              </RouterLink>
            </li>
            <li>
              <RouterLink class="py-2 d-block px-1 px-sm-4 px-lg-8 l-NavLink" to="/admin/home/salesdata">銷售數據
              </RouterLink>
            </li>
            <li>
              <RouterLink class="py-2 d-block px-1 px-sm-4 px-lg-8 l-NavLink" to="/admin/home/updatebanner">更換BN
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex-grow-1">
      <RouterView></RouterView>
    </div>
    <DashboardFooter></DashboardFooter>
  </template>
</template>
<script>
import LogoIcon from '@/components/icons/AdminLogo.vue';
import LogoAvatar from '@/components/icons/AdministratorIcon.vue';
import DashboardFooter from '@/components/footer/DashboardFooter.vue';

import MixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import MixinSwalToast from '@/mixins/mixinSwalToast';

import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      tokenChecked: false,
    };
  },
  methods: {
    checkToken() {
      this.showFullScreenLoading({ canCancel: false, opacity: 0.8 });
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)dreamboostAdminToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.post(`${VITE_URL}/dreamboost/administrator/checktoken`, null, {
        headers: { Authorization: token },
      })
        .then(() => {
          this.hideFullScreenLoading();
          this.addToast({ content: '登入驗證：成功' });
          this.tokenChecked = true;
          // 驗證成功之後，將axios的header自動帶上token。
          this.$http.defaults.headers.common.Authorization = token;
        })
        .catch(() => {
          this.hideFullScreenLoading();
          Swal.fire({
            title: '請正確登入再訪問後台頁面',
            text: '回到登入頁面',
            icon: 'error',
            allowOutsideClick: false,
            timer: 3000,
            timerProgressBar: true,
            confirmButtonText: 'OK',
          })
            .then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                this.$router.push('/admin/login');
              }
              if (result.isConfirmed) {
                this.$router.push('/admin/login');
              }
            });
        });
    },
    logout() {
      Swal.fire({
        title: '確定要登出嗎？',
        icon: 'question',
        allowOutsideClick: false,
        showCancelButton: true,
        buttonsStyling: true,
        // customClass: {
        //   confirmButton: 'btn btn-primary',
        //   cancelButton: 'btn btn-outline-dark ms-3',
        // },
        confirmButtonText: '確認',
        cancelButtonText: '取消',
      })
        .then((result) => {
          if (result.isConfirmed) {
            document.cookie = 'dreamboostAdminToken=;expires=;';
            this.addToast({ content: '登出成功' });
            this.$router.push('/admin/login');
          }
          if (result.isDismissed) {
            // this.addToast({ content: '取消登出', style: 'info' });
          }
        })
        .catch(() => {
          this.addToast({ content: '登出過程出現錯誤', style: 'error' });
        });
    },
  },
  components: {
    LogoIcon,
    LogoAvatar,
    DashboardFooter,
  },
  mixins: [MixinFullScreenLoading, MixinSwalToast],
  mounted() {
    this.checkToken();
  },
};
</script>
<style scoped lang="scss">
.btn.l-logout{
  transition: color .3s ease-in-out;
  &:hover{
    color:var(--bs-dark-pr) !important;
  }
}

.l-NavLink{
  color:white;
  position: relative;
  transition: color ease-in-out .3s;
  &::before{
    content: "";
    height: 2px;
    width: 0%;
    background-color: var(--bs-dark-pr);
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%,0);
    transition:width ease-in-out .3s;
  }
  &.active{
    color: var(--bs-dark-pr) !important;
    &::before{
      width: 100%;
    }
  }

}
// lg
@media(min-width:992px){
  .l-ListGap {
    li+li {
      margin-left: 80px;
    }
  }
  .l-NavLink.active::before{
    width: 70%;
  }
}
</style>
