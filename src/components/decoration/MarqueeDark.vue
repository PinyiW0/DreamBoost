<template>
  <div class="container-fluid bg-gray-700 overflow-hidden mb-7">
    <div class="d-flex animateforrun">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
          class="img-fluid me-22"
          src="/images/home/white-logo.svg"
          alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
          class="img-fluid me-22"
          src="/images/home/white-logo.svg"
          alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
      <img
          class="img-fluid me-22"
          src="/images/home/white-logo.svg"
          alt="white-logo">
      <img
        class="img-fluid me-22"
        src="/images/home/white-logo.svg"
        alt="white-logo">
    </div>
  </div>
</template>

<style lang="scss">
//跑馬燈動畫
:root {
  --gap: 0px;
  --scroll-end:-1500px;
}
.animateforrun {
  animation : slide 30s linear infinite ;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
}
@keyframes slide {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(var(--scroll-end));
  }
}
</style>
