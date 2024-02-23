<template>
   <header>
    <VisitorHeaderAd2></VisitorHeaderAd2>
    <VisitorHeader></VisitorHeader>
  </header>
  <main>
    <div class="container mt-20 d-flex flex-column justify-content-center align-items-center">
      <h1 class="fs-1 fw-bold text-center mb-10">抱歉，您所尋找的頁面不存在</h1>
      <button class="btn btn-primary col-3" @click="backTo">回到上一頁</button>
    </div>
  </main>
</template>

<script>
import VisitorHeaderAd2 from '@/components/header/VisitorHeaderAd2.vue';
import VisitorHeader from '@/components/header/VisitorHeader.vue';

export default {
  methods: {
    backTo() {
      this.$router.go(-1);
    },
  },
  components: {
    VisitorHeader,
    VisitorHeaderAd2,
  },
};
</script>
