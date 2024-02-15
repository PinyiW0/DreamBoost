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
          <li><RouterLink href="" class="pt-2 pb-2 d-block px-8 l-NavLink" to="/admin/home/ManageAccount">管理帳號</RouterLink></li>
          <li><RouterLink href="" class="pt-2 pb-2 d-block px-8 l-NavLink" to="/admin/home/ReviewProposals">方案審核</RouterLink></li>
          <li><RouterLink href="" class="pt-2 pb-2 d-block px-8 l-NavLink" to="/admin/home/SalesData">銷售數據</RouterLink></li>
          <li><RouterLink href="" class="pt-2 pb-2 d-block px-8 l-NavLink" to="/admin/home/UpdateBanner">更換BN</RouterLink></li>
        </ul>
      </div>
    </div>
  </div>
  <RouterView></RouterView>
</template>
<script>
import LogoIcon from '@/components/icons/AdminLogo.vue';
import LogoAvatar from '@/components/icons/AdministratorIcon.vue';

export default {
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleActive() {
      this.toggle = !this.toggle;
    },
  },
  components: {
    LogoIcon,
    LogoAvatar,
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
