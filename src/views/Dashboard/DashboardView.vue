<template>
  <div class="bg-gray-800 min-vh-100">
    <RouterView></RouterView>
    <DashboardFooter></DashboardFooter>
  </div>
</template>
<script>
import DashboardFooter from '@/components/footer/DashboardFooter.vue';

export default {
  components: {
    DashboardFooter,
  },
};
</script>
<style>
*{
  /* outline: 1px solid red; */
}
</style>
