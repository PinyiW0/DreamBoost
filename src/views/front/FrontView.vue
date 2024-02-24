<template>
  <VisitorHeaderAd2 />
  <VisitorHeader />
  <RouterView></RouterView>
  <UserFooter />
</template>

<script>
import VisitorHeaderAd2 from '@/components/header/VisitorHeaderAd2.vue';
import VisitorHeader from '@/components/header/VisitorHeader.vue';
import UserFooter from '@/components/footer/UserFooter.vue';

export default {
  components: {
    VisitorHeaderAd2,
    VisitorHeader,
    UserFooter,
  },
};
</script>
