<template>
  <RouterLink to="/member" class="cupon-hover position-absolute bottom-10 start-80 d-none d-md-block" style="width: 120px; height: 120px;display: block;">
    <img
      src="/images/home/circle_color.svg"
      class="img-fluid cuponcircle position-absolute top-10 start-0"
      alt="加入會員宣傳效果">
    <div
      class="bg-primary rounded-circle d-flex flex-column justify-content-center align-items-center position-absolute top-30 start-18"
      style="width: 76px; height: 76px;margin-left: 2px; margin-top: -2px;">
      <p class="fs-6 text-secondary-light lh-0 mb-0">立即領</p>
      <h3 class="fs-bold fs-28 text-secondary-light mb-0">100</h3>
    </div>
  </RouterLink>
</template>

<style lang="scss">
.cuponcircle {
  width: 120px;
  animation-name: rotate;
  animation-duration: 8s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
.cupon-hover {
  &:hover {
      scale: 1.1;
      transition: 0.3s;
    }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
