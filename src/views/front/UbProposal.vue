<template>
  <header>
    <VisitorHeaderAd2></VisitorHeaderAd2>
    <VisitorHeader></VisitorHeader>
  </header>
  <main>
  </main>
  <!-- footer 區域 -->
  <UserFooter></UserFooter>
</template>

<style scope></style>

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
