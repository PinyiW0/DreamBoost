<template>
  <div class="px-10 py-8 d-flex align-items-center justify-content-between border-bottom border-dark-pr">
    <div>
      <img :src="imgUrl" alt="" class="img-fluid object-fit-cover" height="131" width="196">
    </div>
    <div class="d-flex align-items-center">
      <button class="btn btn-outline-dark-pr px-17 py-5" type="button">移除照片</button>
      <button class="btn btn-dark-pr p-5 ms-7 l-IconHoverEffect" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" fill="none" viewBox="0 0 24 14">
          <path fill="#000" fill-rule="evenodd"
            d="M.82.821a1.668 1.668 0 0 1 2.357 0L12 9.643 20.82.82a1.667 1.667 0 1 1 2.357 2.357l-10 10a1.666 1.666 0 0 1-2.357 0l-10-10A1.667 1.667 0 0 1 .82.82Z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <button class="btn btn-dark-pr p-5 ms-3 l-IconHoverEffect" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" fill="none" viewBox="0 0 24 14">
          <path fill="#1D2939" fill-rule="evenodd"
            d="M10.82.821a1.668 1.668 0 0 1 2.357 0l10 10a1.667 1.667 0 1 1-2.357 2.357L12 4.357l-8.822 8.821A1.667 1.667 0 1 1 .82 10.821l10-10Z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['imgUrl'],
  data() {
    return {
      url: '',
    };
  },
  methods: {
  },
  watch: {
    imgUrl(n) {
      this.url = n;
    },
  },
};
</script>
<style scoped lang="scss">
.l-IconHoverEffect{
  transition: background-color ease-in-out .3s;
  svg path{
    transition: fill ease-in-out .3s;
  }
  &:hover{
    svg path{
      fill: var(--bs-dark-pr) ;
    }
  }
}
</style>
