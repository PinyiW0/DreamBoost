<template>
  <h1>text</h1>
  <header>
    <VisitorHeaderAd2></VisitorHeaderAd2>
    <VisitorHeader></VisitorHeader>
  </header>
</template>

<script>
import VisitorHeaderAd2 from '@/components/header/VisitorHeaderAd2.vue';
import VisitorHeader from '@/components/header/VisitorHeader.vue';

export default {
  components: {
    VisitorHeader,
    VisitorHeaderAd2,
  },
};
</script>
