<template>
  <div class="container-fluid overflow-hidden">
      <div class="d-flex align-items-center animateforrunright">
        <img
          class="img-fluid me-10"
          src="/images/home/big_DREAMBOOST.svg"
          alt="big_DREAMBOOST-logo">
        <img
          class="img-fluid me-10"
          src="/images/home/db_logoAlong.svg"
          alt="white-logo">
        <img
          class="img-fluid me-10"
          src="/images/home/big_DREAMBOOST.svg"
          alt="big_DREAMBOOST-logo">
        <img
          class="img-fluid me-10"
          src="/images/home/db_logoAlong.svg"
          alt="white-logo">
        <img
          class="img-fluid me-10"
          src="/images/home/big_DREAMBOOST.svg"
          alt="big_DREAMBOOST-logo">
        <img
          class="img-fluid me-10"
          src="/images/home/db_logoAlong.svg"
          alt="white-logo">
        <img
          class="img-fluid me-10"
          src="/images/home/big_DREAMBOOST.svg"
          alt="big_DREAMBOOST-logo">
        <img
          class="img-fluid me-10"
          src="/images/home/db_logoAlong.svg"
          alt="white-logo">
        <img
            class="img-fluid me-10"
            src="/images/home/big_DREAMBOOST.svg"
            alt="big_DREAMBOOST-logo">
        <img
          class="img-fluid me-10"
          src="/images/home/db_logoAlong.svg"
          alt="white-logo">
        <img
          class="img-fluid me-10"
          src="/images/home/big_DREAMBOOST.svg"
          alt="big_DREAMBOOST-logo">
        <img
          class="img-fluid me-10"
          src="/images/home/db_logoAlong.svg"
          alt="white-logo">
      </div>
  </div>
</template>

<style lang="scss" scoped>
//跑馬燈動畫
:root {
  --gap: 0px;
  --scroll-end:-1500px;
}
.animateforrunright {
  animation : slide2 30s linear infinite ;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
}
@keyframes slide2 {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
