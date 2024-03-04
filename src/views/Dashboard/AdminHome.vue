<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-md container-fluid border-bottom border-5 border-dark-pr bg-gray-800 p-0">
      <div class="container">
        <div class="w-100 d-flex justify-content-between">
          <RouterLink to="/admin/home" class="p-0 d-block">
            <LogoIcon :style="{ height: '72px' }"></LogoIcon>
          </RouterLink>
          <div class="d-flex align-items-center">
            <LogoAvatar :style="{height:'45px'} "></LogoAvatar>
            <p class="ms-4 me-2 mb-0 text-white fs-5">管理員，您好</p>
            <a href="#" class="pe-4 ps-2 py-2 text-white" @click.prevent="">登出</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- 為了避免透過去只能新增這層.. -->
    <div class="bg-gray-800">
      <div class="bg-white bg-opacity-25" :style="{'--bs-bg-opacity': '.2'}">
        <ul class="list-unstyled d-flex justify-content-center py-4 l-ListGap">
          <li><RouterLink  class="pt-2 pb-2 d-block px-0 px-sm-8 l-NavLink" to="/admin/home/manageaccount">管理帳號</RouterLink></li>
          <li><RouterLink  class="pt-2 pb-2 d-block px-0 px-sm-8 l-NavLink" to="/admin/home/reviewproposals">方案審核</RouterLink></li>
          <li><RouterLink  class="pt-2 pb-2 d-block px-0 px-sm-8 l-NavLink" to="/admin/home/salesdata">銷售數據</RouterLink></li>
          <li><RouterLink  class="pt-2 pb-2 d-block px-0 px-sm-8 l-NavLink" to="/admin/home/updatebanner">更換BN</RouterLink></li>
        </ul>
      </div>
    </div>
  </div>
  <RouterView></RouterView>
</template>
<script>
import LogoIcon from '@/components/icons/AdminLogo.vue';
import LogoAvatar from '@/components/icons/AdministratorIcon.vue';
import MixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import MixinSwalToast from '@/mixins/mixinSwalToast';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
    };
  },
  methods: {
    checkToken() {
      this.showFullScreenLoading();
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)dreamboostAdminToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.post(`${VITE_URL}/dreamboost/administrator/checktoken`, null, {
        headers: { Authorization: token },
      })
        .then((res) => {
          this.hideFullScreenLoading();
          console.log(res);
        })
        .catch((err) => {
          this.hideFullScreenLoading();
          console.log(err);
        });
    },
  },
  components: {
    LogoIcon,
    LogoAvatar,
  },
  mixins: [MixinFullScreenLoading, MixinSwalToast],
  mounted() {
    this.checkToken();
  },
};
</script>
<style scoped lang="scss">
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
      width: 80%;
    }
  }

}
.l-ListGap{
  li + li{
    margin-left: 80px;
  }
}
</style>
