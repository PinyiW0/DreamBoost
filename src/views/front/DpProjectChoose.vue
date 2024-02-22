<template>
  <header>
      <VisitorHeaderAd2></VisitorHeaderAd2>
      <VisitorHeader></VisitorHeader>
  </header>
  <main>
    <DpInfo />
    <!-- 贊助方案列表 -->
    <section class="container mb-14">
      <div class="d-flex py-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-info-circle text-danger me-2" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
        </svg>
        <p class="text-danger">請選擇您想要贊助的金額與回饋</p>
      </div>
      <div class="bg-bgc-paper d-flex align-items-center justify-content-center">
        <i class="d-block text-primary me-3" style="width: 14px; margin-top: -2px">
          <AngleLeft />
        </i>
        <p class="text-primary py-2 mb-0 me-3">請左右捲動看看更多選項</p>
        <i class="d-block text-primary" style="width: 14px; margin-top: -2px">
          <AngleRight />
        </i>
      </div>
    </section>
    <section>
      <div class="overflow-hidden">
        <div class="container">
          <div class="swiper">
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide shareCard bg-primary-dark text-white">
                <p>
                  ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。
                </p>
              </div>
              <div class="swiper-slide shareCard bg-white">
                <p>
                  ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。
                </p>
              </div>
              <div class="swiper-slide shareCard bg-primary-dark text-white">
                <p>
                  ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。
                </p>
              </div>
              <div class="swiper-slide shareCard bg-white">
                <p>
                  ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。
                </p>
              </div>
            </div>
          </div>
          <!-- Scrollbar -->
          <div class="row align-items-center mt-5">
            <div class="col-8">
              <!-- 加上 position-static 將滾動條的絕對定位設定覆蓋 -->
              <div class="swiper-scrollbar position-static"></div>
            </div>
            <div class="col-1">
              <p class="mb-0 text-white">SCROLL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- footer 區域 -->
  <UserFooter></UserFooter>
</template>

<style lang="scss"></style>

<script>
import VisitorHeaderAd2 from '@/components/header/VisitorHeaderAd2.vue';
import VisitorHeader from '@/components/header/VisitorHeader.vue';
import UserFooter from '@/components/footer/UserFooter.vue';
import DpInfo from '@/components/designedproject/DpInfo.vue';
import AngleRight from '@/components/icons/AngleRight.vue';
import AngleLeft from '@/components/icons/AngleLeft.vue';

export default {
  components: {
    VisitorHeader,
    VisitorHeaderAd2,
    UserFooter,
    AngleRight,
    AngleLeft,
    DpInfo,
  },
};
</script>
