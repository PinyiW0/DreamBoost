<template>
  <h1>付款頁面列表</h1>
  <header>
    <VisitorHeaderAd2></VisitorHeaderAd2>
    <VisitorHeader></VisitorHeader>
  </header>
  <main>
    <div class="container"></div>
  </main>
  <!-- footer 區域 -->
  <UserFooter></UserFooter>
</template>

<style lang="scss"></style>

<script>
import VisitorHeaderAd2 from '@/components/header/VisitorHeaderAd2.vue';
import VisitorHeader from '@/components/header/VisitorHeader.vue';
import UserFooter from '@/components/footer/UserFooter.vue';

export default {
  components: {
    VisitorHeader,
    VisitorHeaderAd2,
    UserFooter,
  },
};
</script>
