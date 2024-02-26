<template>
  <div class="min-vh-100 d-flex flex-column">
    <VisitorHeader />
    <div class="flex-grow-1">
      <RouterView></RouterView>
    </div>
    <UserFooter />
  </div>
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
