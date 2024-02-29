<template>
  <div class="px-10 py-8 d-flex align-items-center justify-content-between border-bottom border-dark-pr">
    <div class="placeholder-glow">
      <img :src="imgUrl" alt="" ref="image"
      class="mw-100 object-fit-cover" :class="{'d-none':!imgLoadStatus}" height="130" width="196" @load="onImageLoad">
      <div class="placeholder bg-primary" :class="{'d-none':imgLoadStatus}" style="height: 130px; width:196px"></div>
    </div>
    <div class="d-flex align-items-center">
      <button class="btn btn-outline-dark-pr px-2 px-md-17 py-5" type="button" @click="removePhoto">移除照片</button>
      <button class="btn btn-dark-pr p-5 ms-7 l-IconHoverEffect" type="button" @click="moveDown">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" fill="none" viewBox="0 0 24 14">
          <path fill="currentColor" fill-rule="evenodd"
            d="M.82.821a1.668 1.668 0 0 1 2.357 0L12 9.643 20.82.82a1.667 1.667 0 1 1 2.357 2.357l-10 10a1.666 1.666 0 0 1-2.357 0l-10-10A1.667 1.667 0 0 1 .82.82Z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <button class="btn btn-dark-pr p-5 ms-3 l-IconHoverEffect" type="button" @click="moveUp">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" fill="none" viewBox="0 0 24 14">
          <path fill="currentColor" fill-rule="evenodd"
            d="M10.82.821a1.668 1.668 0 0 1 2.357 0l10 10a1.667 1.667 0 1 1-2.357 2.357L12 4.357l-8.822 8.821A1.667 1.667 0 1 1 .82 10.821l10-10Z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['imgUrl', 'index'],
  data() {
    return {
      url: '',
      imgLoadStatus: false,
    };
  },
  methods: {
    removePhoto() {
      this.$emit('remove', this.index); // 將圖片的索引傳遞給父組件，用於移除圖片
    },
    moveUp() {
      this.$emit('move-up', this.index); // 將圖片的索引傳遞給父組件，用於上移圖片
    },
    moveDown() {
      this.$emit('move-down', this.index); // 將圖片的索引傳遞給父組件，用於下移圖片
    },
    onImageLoad() {
      this.imgLoadStatus = true;
    },
  },
  watch: {
    imgUrl(n) {
      this.url = n;
    },
  },
  // mounted() {
  //   this.$refs.image.addEventListener('load', this.onImageLoad);
  // },
  // beforeUnmount() {
  //   this.$refs.image.removeEventListener('load', this.onImageLoad);
  // },
};
</script>
<style scoped lang="scss">
// .l-IconHoverEffect{
//   transition: background-color ease-in-out .3s;
//   svg path{
//     transition: fill ease-in-out .3s;
//   }
//   &:hover{
//     svg path{
//       fill: var(--bs-dark-pr) ;
//     }
//   }
// }
</style>
