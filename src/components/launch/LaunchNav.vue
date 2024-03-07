<template>
  <nav class="container pt-26 mb-10">
    <ul
      class="navbar-nav flex-row justify-content-center flex-wrap gap-2 gap-md-6"
    >
      <li
        class="nav-item py-md-4 py-lg-6 px-2 px-md-10 px-lg-16 border-bottom border-2 fw-medium"
        v-for="(item, i) in launchStep"
        :key="i"
        :class="{ 'border-secondary-dark': item === currentPage }"
      >
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      launchStep: ['專案大綱', '專案內容', '提案資料', '回饋設定'],
    };
  },
};
</script>
