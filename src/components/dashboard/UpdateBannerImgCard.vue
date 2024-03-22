<template>
  <div class="px-10 py-8 d-flex align-items-center justify-content-between border-bottom border-dark-pr">
    <div class="placeholder-glow">
      <img :src="imgUrl" alt="Banner圖片" ref="image" class="mw-100 object-fit-cover" :class="{'d-none':!imgLoadStatus}" height="130" width="196" @load="onImageLoad">
      <!-- 在圖片還沒有載入完成之前會顯示placeholder -->
      <div class="placeholder bg-primary" :class="{'d-none':imgLoadStatus}" style="height: 130px; width:196px"></div>
    </div>
    <div class="d-flex align-items-center">
      <button class="btn btn-outline-dark-pr px-2 px-md-17 py-5" type="button" @click="this.$emit('remove')">移除照片</button>
      <!-- 往下移動 -->
      <button class="btn btn-dark-pr p-5 ms-7 l-IconHoverEffect" type="button" @click="this.$emit('move-down')" :disabled="isLast">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" fill="none" viewBox="0 0 24 14">
          <path fill="currentColor" fill-rule="evenodd"
            d="M.82.821a1.668 1.668 0 0 1 2.357 0L12 9.643 20.82.82a1.667 1.667 0 1 1 2.357 2.357l-10 10a1.666 1.666 0 0 1-2.357 0l-10-10A1.667 1.667 0 0 1 .82.82Z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <!-- 往上移動 -->
      <button class="btn btn-dark-pr p-5 ms-3 l-IconHoverEffect" type="button" @click="this.$emit('move-up')" :disabled="isFirst">
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
  props: ['imgUrl', 'isFirst', 'isLast'],
  data() {
    return {
      url: '',
      imgLoadStatus: false,
    };
  },
  methods: {
    onImageLoad() {
      this.imgLoadStatus = true;
    },
  },
};
</script>
