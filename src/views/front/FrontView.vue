<template>
  <div class="min-vh-100 d-flex flex-column">
    <div v-if="isLoggedIn">
        <UserHeader  @logout="logout"/>
    </div>
    <div v-else>
      <VisitorHeader />
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
    checkUser() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      this.$http.post(`${VITE_URL}/dreamboost/checktoken`)
        .then((res) => {
          if (res.data.success) {
            this.isLoggedIn = true;
          }
        })
        .catch(() => {
          this.isLoggedIn = false;
        });
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
  watch: {
    // 因為用cookie操控所以要用router監控
    $route() {
      this.checkUser();
    },
  },
  components: {
    VisitorHeader,
    UserHeader,
    UserFooter,
  },
};
</script>
