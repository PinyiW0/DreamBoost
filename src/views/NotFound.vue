<template>
  <main>
    <div class="container mt-20 d-flex flex-column justify-content-center align-items-center">
      <h1 class="fs-1 fw-bold text-center mb-10">抱歉，您所尋找的頁面不存在</h1>
      <button class="btn btn-primary col-3" @click="backTo">回到上一頁</button>
    </div>
  </main>
</template>

<script>

export default {
  methods: {
    backTo() {
      this.$router.go(-1);
    },
  },
  components: {
  },
};
</script>
