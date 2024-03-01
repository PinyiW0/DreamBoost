<template>
  <div class="min-vh-100 d-flex flex-column">
    <div v-if="isLoggedIn">
      <VisitorHeader />
    </div>
    <div v-else>
      <UserHeader />
    </div>
    <div class="flex-grow-1">
      <RouterView></RouterView>
    </div>
    <UserFooter />
  </div>
</template>

<script>
import VisitorHeader from '@/components/header/VisitorHeader.vue';
import UserHeader from '@/components/header/UserHeader.vue';
import UserFooter from '@/components/footer/UserFooter.vue';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    async checkUser() {
      try {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)leleToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        this.$http.defaults.headers.common.Authorization = token;
        await this.$http.get(`${VITE_URL}/dreamboost/user/normal/userprofile`);
        this.isLoggedIn = true;
      } catch (error) {
        this.$router.push({ name: 'member' });
        // 這邊要加請先登入會員提示
      }
    },
  },
  components: {
    VisitorHeader,
    UserHeader,
    UserFooter,
  },
  mounted() {
    this.checkUser();
  },
};
</script>
