<template>
  <div>
    <DpInfo></DpInfo>
    <ul class="nav justify-content-center bg-bgc-paper py-5">
      <li class="nav-item">
        <RouterLink class="nav-link" aria-current="page" to="/proposalmanage/改v-bind/salesdata">銷售數據</RouterLink>
      </li>
      <li class="ms-28 nav-item">
        <RouterLink class="nav-link" aria-current="page" to="/proposalmanage/改v-bind/orders">訂單管理</RouterLink>
      </li>
      <li class="ms-28 nav-item">
        <RouterLink class="nav-link" aria-current="page" to="/proposalmanage/改v-bind/replymessage">回覆留言</RouterLink>
      </li>
    </ul>
    <RouterView></RouterView>
  </div>
</template>
<script>
import DpInfo from '@/components/designedproject/DpInfo.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    DpInfo,
  },
  methods: {
  },
};
</script>
<style scoped>
.nav-link{
  color:var(--bs-gray-600) !important;
  padding:13px 15px;
  &:hover{
    color:var(--bs-primary) !important;
  }
  &.active{
    color:var(--bs-primary) !important;
    border-bottom: 1px solid var(--bs-primary);
    /* border: 1px solid var(--bs-primary); */
  }
}
</style>
