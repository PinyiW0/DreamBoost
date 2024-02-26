<template>
  <img
    src="/images/home/circle_white.svg"
    class="img-fluid cuponcircle"
    alt="推動夢想不是夢！">
</template>

<style lang="scss">
.cuponcircle {
  width: 120px;
  height: 120px;
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
