<template>
  <RouterLink to="/member">
    <div class="position-relative">
      <img
        src="/images/home/circle_color.svg"
        class="img-fluid cuponcircle position-absolute top-10 start-0"
        alt="加入會員宣傳效果">
      <div
        class="position-absolute top-100 start-1a5"
        style="width: 120px; height: 120px;">
        <div
          class="bg-primary rounded-circle d-flex flex-column justify-content-center align-items-center"
          style="width: 76px; height: 76px; margin-top: 22px;margin-left: 1.5px;">
          <p class="fs-6 text-secondary-light lh-0 mb-0">立即領</p>
          <h3 class="fs-bold fs-28 text-secondary-light mb-0">100</h3>
        </div>
      </div>
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
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
