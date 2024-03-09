<template>
  <div class="accordion-item border-0 border-bottom border-primary-light rounded-0">
    <h2 class="accordion-header">
      <button class="accordion-button bg-transparent text-primary shadow-none" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        >
        恭喜獲得 100 元優惠券！
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        恭喜成為 DreamBoost 的新會員，獲得 100 元優惠券，快去看看有甚麼新夢想吧！
        <p class="fs-6 text-gray-500 mt-6 mb-0">2024.03.10</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['messageData'],
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style scoped>
</style>
