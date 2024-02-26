<template>
  <VisitorHeader />
  <RouterView></RouterView>
  <UserFooter />
</template>

<script>
import VisitorHeader from '@/components/header/VisitorHeader.vue';
import UserFooter from '@/components/footer/UserFooter.vue';

export default {
  components: {
    VisitorHeader,
    UserFooter,
  },
};
</script>
