<template>
  <div class="container">
    <h1 class="fs-2 fw-bold text-center m-4">尋找的頁面不存在</h1>
    <button class="btn btn-danger" @click="backTo">回到上一頁</button>
  </div>
</template>

<script>
export default {
  methods: {
    backTo() {
      this.$router.go(-1);
    },
  },
};
</script>
