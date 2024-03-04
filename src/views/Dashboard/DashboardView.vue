<template>
  <div class="bg-gray-800 min-vh-100 d-flex flex-column">
    <div class="flex-grow-1 d-flex flex-column">
      <RouterView></RouterView>
    </div>
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
</style>
