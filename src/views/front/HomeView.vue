<template>
  <main>
    <!-- banner 區域 -->
    <HomeBn></HomeBn>
    <!-- 熱門推薦 -->
    <div class="container">
      <div class="row pt-18 pb-20 justify-content-center">
        <!-- 當前熱門專案 -->
        <div class="col-12 col-xl-6 mb-18 mb-md-20 mb-xl-0 px-3 px-sm-6 px-lg-10 me-0 me-xl-10">
          <div class="mb-3 d-none d-xl-block">
            <h1 class="title position-relative">當前熱門專案</h1>
            <p class="fs-6 text-primary-light mb-0">Current Hot Projects</p>
          </div>
          <PopularCard></PopularCard>
        </div>
        <!-- 為您推薦 -->
        <div class="col-12 col-xl-5">
          <div class="mb-3 d-none d-xl-block">
            <h2 class="title position-relative">為您推薦</h2>
            <p class="fs-6 text-primary-light mb-0">Recommended for You</p>
          </div>
          <div class="d-flex justify-content-center mb-6 d-block d-xl-none position-relative">
            <div class="mb-5 mb-lg-3">
              <h2 class="title-center text-center position-relative">為您推薦</h2>
              <p class="fs-6 text-primary-light text-center mb-0">Recommended for You</p>
            </div>
          </div>
          <ul class="list-unstyled px-0 px-lg-8 px-xl-0 mb-8">
            <li v-for="(proposal, proposalId) in limitedProposals" :key="proposalId">
              <SuggestCard :proposals="proposal"></SuggestCard>
            </li>
          </ul>
          <!-- 按鈕 -->
          <div class="d-flex justify-content-center justify-content-lg-end align-items-center">
            <RouterLink to="/explore">
              <button type="button"
                class="col-12 btn btn-secondary-light border border-2 border-primary rounded-3 px-lg-5 py-4 py-md-3 mt-5 mt-md-0 me-5 d-flex align-items-center justify-content-center btn-pr position-relative">
                <span class="px-3 d-flex justify-content-center align-items-center">
                  <p class="mb-0 pe-2 fw-semibold">查看更多</p>
                  <RightArrow class="fs-3" style="width:18px"></RightArrow>
                </span>
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <!-- 專案類別 -->
    <div class="container pt-8 pb-5">
      <!-- 專案類別標題 -->
      <div class="d-flex justify-content-center pb-5 position-relative">
        <div class="mb-5 mb-lg-3">
          <h2 class="title-center text-center position-relative">專案類別</h2>
          <p class="fs-6 text-primary-light mb-0">Which Categories Interest You?</p>
        </div>
      </div>
      <!-- 專案類別 -->
      <div class="container row gy-8 gy-md-10 justify-content-center position-absolute translate-middle-null z-3">
        <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
          <a class="categorylink categorylink1 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
            href="">
            挺好夢
          </a>
        </div>
        <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
          <a class="categorylink categorylink2 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
            href="">
            科技設計
          </a>
        </div>
        <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3"><a
            class="categorylink categorylink3 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
            href="">
            健康生活
          </a>
        </div>
        <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
          <a class="categorylink categorylink4 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
            href="">
            時尚
          </a>
        </div>
        <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
          <a class="categorylink categorylink5 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
            href="">
            公共在地
          </a>
        </div>
        <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
          <a class="categorylink categorylink6 rounded-pill border border-2 border-white fs-4 fs-lg-4 fs-xxl-3 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
            href="">
            美妝
          </a>
        </div>
      </div>
    </div>
    <!-- 跑馬燈效果 -->
    <MarqueeLight></MarqueeLight>
    <!-- 底色色塊裝飾 -->
    <div class="container-fluid bg-primary-light py-31 py-lg-13 mb-xl-2">
    </div>
    <div class="container-fluid bg-primary-light py-29 py-lg-13 d-block d-xl-none">
    </div>
    <div class="container-fluid bg-primary-light pt-1 d-none d-xl-block py-lg-1">
    </div>
    <!-- 即將推出 -->
    <div class="container-fluid position-relative overflow-hidden">
      <!-- 即將推出標題 -->
      <div class="d-flex justify-content-center pb-5 position-relative">
        <div class="pt-15 pt-md-26 pb-8 pb-md-21 mb-5 mb-lg-3">
          <h2 class="title-center text-center position-relative">即將推出</h2>
          <p class="fs-6 text-center text-primary-light mb-0">Coming Soon</p>
        </div>
        <!-- 背景大圓 -->
        <span class="position-absolute top-n100 end-n40 d-none d-md-block z-n1 bg-secondary-light rounded-circle z-n2"
          style="width: 1045px; height: 1045px"></span>
        <!-- 背景Coming Soon -->
        <p class="position-absolute top-40 start-10 mb-0 d-none d-md-block fs-200 fw-light text-nowrap text-uppercase user-select-none z-n1"
          style="color: rgba(157, 212, 209, 0.45); letter-spacing: 0.48px">
          Coming Soon
        </p>
        <!-- 背景小圓 -->
        <span class="position-absolute top-180 end-80 z-n1 d-none d-md-block bg-secondary-light rounded-circle"
          style="width: 425px; height: 425px"></span>
      </div>
      <!-- 即將推出專案區 -->
      <div class="container d-flex flex-column justify-content-center">
        <div class="row g-10 mb-7 pb-27">
          <div class="col-12 col-sm-6 col-lg-2 g-4 g-sm-3 g-md-2">
            <div class="position-relative rounded-3 h-100 csImage">
              <a class="position-relative" href="">
                <h4 class="project-name1 text-center text-white mx-auto z-2 lterSpc-5">查看更多</h4>
                <img src="/images/home/cs_01.png" alt="" class="img-fluid object-fit-cover h-100 rounded-3">
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-2 g-4 g-sm-3 g-md-2">
            <div class="position-relative rounded-3 h-100 csImage">
              <a class="position-relative" href="">
                <h4 class="project-name1 text-center text-white mx-auto z-2 lterSpc-5">查看更多</h4>
                <img src="/images/home/cs_02.png" alt="" class="img-fluid object-fit-cover h-100 rounded-3">
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 g-4 g-sm-3 g-md-2">
            <div class="position-relative rounded-3 h-100 csImage">
              <a class="position-relative" href="">
                <h4 class="project-name2 text-center text-white mx-auto z-2 lterSpc-5">查看更多</h4>
                <img src="/images/home/cs_03.png" alt="" class="img-fluid object-fit-cover h-100 rounded-3">
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 g-4 g-sm-3 g-md-2">
            <div class="position-relative rounded-3 h-100 csImage">
              <a class="position-relative" href="">
                <h4 class="project-name2 text-center text-white mx-auto z-2 lterSpc-5">查看更多</h4>
                <img src="/images/home/cs_04.jpg" alt="" class="img-fluid object-fit-cover h-100 rounded-3">
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 g-4 g-sm-3 g-md-2">
            <div class="position-relative rounded-3 h-100 csImage">
              <a class="position-relative" href="">
                <h4 class="project-name2 text-center text-white mx-auto z-2 lterSpc-5">查看更多</h4>
                <img src="/images/home/cs_05.jpg" alt="" class="img-fluid object-fit-cover h-100 rounded-3">
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 g-4 g-sm-3 g-md-2">
            <div class="position-relative rounded-3 h-100 csImage">
              <a class="position-relative" href="">
                <h4 class="project-name2 text-center text-white mx-auto z-2 lterSpc-5">查看更多</h4>
                <img src="/images/home/cs_06.png" alt="" class="img-fluid object-fit-cover h-100 rounded-3">
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-2 g-4 g-sm-3 g-md-2">
            <div class="position-relative rounded-3 h-100 csImage">
              <a class="position-relative" href="">
                <h4 class="project-name1 text-center text-white mx-auto z-2 lterSpc-5">查看更多</h4>
                <img src="/images/home/cs_07.png" alt="" class="img-fluid object-fit-cover h-100 rounded-3">
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-2 g-4 g-sm-3 g-md-2">
            <div class="position-relative rounded-3 h-100 csImage">
              <a class="position-relative" href="">
                <h4 class="project-name1 text-center text-white mx-auto z-2 lterSpc-5">查看更多</h4>
                <img src="/images/home/cs_08.png" alt="" class="img-fluid object-fit-cover h-100 rounded-3">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 將創意專案轉換為現實 -->
    <section>
      <!-- 跑馬燈-上 -->
      <MarqueeDark></MarqueeDark>
      <!-- 中間區塊 -->
      <div class="container-fluid bg-primary-dark">
        <div class="container p-12">
          <!-- 標題 -->
          <div class="mb-7">
            <h3 class="text-center text-white">將創意專案轉換為現實</h3>
            <p class="fs-6 text-center text-primary-light mb-3">Turn Creative Projects Into Reality</p>
            <p class="fs-6 text-center text-gray-300 mb-8">在 DreamBoost 上，讓我們成為你夢想的翅膀</p>
          </div>
          <!-- 募資數據 -->
          <div class="row justify-content-center">
            <div class="col-11 col-md-5 col-lg-3 border border-white rounded-4 me-0 me-md-5 me-lg-10 mb-5 p-6">
              <p class="fs-1 fs-md-2 fs-lg-36 text-secondary-light text-center fw-bold mb-0">
                <countTo :startVal='0' :endVal='20243' :dicimals="2" :duration='15000' :ref="refset">
                </countTo>
              </p>
              <p class="fs-5 fs-lg-12 text-white text-center mb-0">個專案已募資</p>
            </div>
            <div class="col-11 col-md-5 col-lg-3 border border-white rounded-4 me-0 me-md-5 me-lg-10 mb-5 p-6">
              <p class="fs-1 fs-md-2 fs-lg-36 text-secondary-light text-center fw-bold mb-0">
                <countTo :startVal='-100' :endVal='1766' :duration='15000'></countTo>
              </p>
              <p class="fs-5 fs-lg-12 text-white text-center mb-0">人已經參與募資計畫</p>
            </div>
            <div class="col-11 col-md-5 col-lg-3 border border-white rounded-4 me-0 me-md-5 py-6 h-100">
              <p class="fs-1 fs-md-2 fs-lg-36 text-secondary-light text-center fw-bold mb-0">
                <countTo :startVal='0' :endVal='23786' :dicimals="2" :duration='15000' :ref="refset">
                </countTo>
              </p>
              <p class="fs-5 fs-lg-12 text-white text-center mb-0">贊助計畫</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 大logo跑馬燈 -->
      <MarqueeBiglogo></MarqueeBiglogo>
      <!-- 跑馬燈-下 -->
      <MarqueeDark></MarqueeDark>
    </section>
    <!-- 合作聯繫 -->
    <section class="container position-relative">
      <!-- 合作聯繫標題 -->
      <div class="pt-19 mb-3 d-none d-lg-block position-relative">
        <h2 class="fs-3 title position-relative">合作聯繫</h2>
        <p class="fs-6 text-primary-light mb-0">Cooperation Contact</p>
        <div class="bg-primary position-absolute top-75 start-lg-12 start-xl-10" style="width: 200px;height: 2px;">
        </div>
      </div>
      <div class="d-flex justify-content-center pt-19 mb-6 d-block d-lg-none position-relative">
        <div class="mb-5 mb-lg-3">
          <h2 class="title-center text-center position-relative">合作聯繫</h2>
          <p class="fs-6 text-primary-light mb-0">Cooperation Contact</p>
        </div>
      </div>
      <!-- 聯繫區域 -->
      <ul class="row row-cols-1 row-cols-lg-3 g-xl-14 list-unstyled pb-14 pt-0 pt-lg-28 position-relative">
        <li class="col card border-0 mb-12">
          <div class="card-body border-bottom border-4 border-secondary-light rounded-top-pill bg-primary shadow">
            <div class="d-flex flex-column align-items-center">
              <h3 class="card-title fs-28 fs-lg-3 text-white text-center mt-11 mb-0">活動邀約</h3>
              <p class="fw-medium fs-28 fs-lg-3 text-white text-center mb-10">媒體採訪</p>
              <div class="mx-5">
                <img src="/images/home/cowork_01.png"
                  class="img-fluid border border-1 border-white object-fit-cover mb-4 h-100" style="max-width: 296px;"
                  alt="活動邀約媒體採訪照片">
              </div>
            </div>
            <div class="d-flex justify-content-center justify-content-lg-end pt-3 pb-6 px-9">
              <a href="mailto:DreamBoost@mail.com" class="card-link icon-link icon-link-hover fs-4 fs-lg-5"
                style="--bs-link-color-rgb:255, 244, 138;--bs-link-hover-color-rgb:25, 135, 84;">
                聯繫我們
                <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </a>
            </div>
          </div>
        </li>
        <li class="col card border-0 mb-12 position-lg-absolute start-lg-33 start-xl-35 bottom-0 bottom-lg-12">
          <div class="card-body border-bottom border-4 border-secondary-light rounded-top-pill bg-primary shadow">
            <div class="d-flex flex-column align-items-center">
              <h3 class="card-title fs-28 fs-lg-3 text-white text-center mt-11 mb-0">團隊提案</h3>
              <p class="fw-medium fs-28 fs-lg-3 text-white text-center mb-10">平台問題</p>
              <img src="/images/home/cowork_02.png"
                class="img-fluid border border-1 border-white object-fit-cover mb-4 h-100" style="max-width: 296px;"
                alt="團隊提案平台問題照片">
            </div>
            <div class="d-flex justify-content-center justify-content-lg-end pt-3 pb-6 px-9">
              <a href="mailto:DreamBoost@mail.com" class="card-link icon-link icon-link-hover fs-4 fs-lg-5"
                style="--bs-link-color-rgb:255, 244, 138;--bs-link-hover-color-rgb:25, 135, 84;">
                聯繫我們
                <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </a>
            </div>
          </div>
        </li>
        <li class="col card border-0 mb-12 position-lg-absolute start-lg-66 start-xl-70 bottom-0 bottom-lg-24">
          <div class="card-body border-bottom border-4 border-secondary-light rounded-top-pill bg-primary shadow">
            <div class="d-flex flex-column align-items-center">
              <h3 class="card-title fs-28 fs-lg-3 text-white text-center mt-11 mb-0">集資產業相關</h3>
              <p class="fw-medium fs-28 fs-lg-3 text-white text-center mb-10">報導聯繫</p>
              <img src="/images/home/cowork_03.png"
                class="img-fluid border border-1 border-white object-fit-cover mb-4 h-100" style="max-width: 296px;"
                alt="集資產業相關報導聯繫照片">
            </div>
            <div class="d-flex justify-content-center justify-content-lg-end pt-3 pb-6 px-9">
              <a href="mailto:DreamBoost@mail.com" class="card-link icon-link icon-link-hover fs-4 fs-lg-5"
                style="--bs-link-color-rgb:255, 244, 138;--bs-link-hover-color-rgb:25, 135, 84;">
                聯繫我們
                <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div class="postion-relative">
        <CouponCircle class=""></CouponCircle>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import exploreStore from '@/stores/exploreStore';
import RightArrow from '@/components/icons/RightArrow.vue';
import MarqueeLight from '@/components/decoration/MarqueeLight.vue';
import MarqueeDark from '@/components/decoration/MarqueeDark.vue';
import MarqueeBiglogo from '@/components/decoration/MarqueeBiglogo.vue';
import CouponCircle from '@/components/rotate/CuponCircle.vue';
import HomeBn from '@/components/bn/HomeBn.vue';
import PopularCard from '@/components/cards/PopularCard.vue';
import SuggestCard from '@/components/cards/SuggestCard.vue';
import { CountTo } from 'vue3-count-to';

export default {
  components: {
    RightArrow,
    MarqueeDark,
    CouponCircle,
    HomeBn,
    MarqueeBiglogo,
    MarqueeLight,
    PopularCard,
    SuggestCard,
    CountTo,
  },
  data() {
    return {
      limitedProposals: [],
    };
  },
  computed: {
    ...mapState(exploreStore, ['proposals']),
  },
  async mounted() {
    await this.getProposals();
  },
  watch: {
    proposals: {
      handler(newProposals) {
        this.updateLimitedProposals(newProposals);
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(exploreStore, ['getProposals']),
    updateLimitedProposals(proposals) {
      this.limitedProposals = Object.values(proposals).slice(0, 3);
    },
  },
};
</script>

<style lang="scss">
//專案類別按鈕
.categorylink {
  display: block;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 4px 6px rgba(14, 87, 106, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s, background-size 0.5s ease;
  min-height: 78px;

  &:hover {
    box-shadow: 0px 8px 12px rgba(12, 42, 29, 0.3);
    background-size: 150%;
    background-color: rgba(14, 87, 106, 0.5);
    background-blend-mode: darken;
  }
}

// 挺好夢
.categorylink1 {
  background-image: url('/images/home/categorie_01.png');
}

//科技設計
.categorylink2 {
  background-image: url('/images/home/categorie_02.png');
}

//健康生活
.categorylink3 {
  background-image: url('/images/home/categorie_03.png');
}

//時尚
.categorylink4 {
  background-image: url('/images/home/categorie_04.png');
}

//公共在地
.categorylink5 {
  background-image: url('/images/home/categorie_05.png');
}

//美妝
.categorylink6 {
  background-image: url('/images/home/categorie_06.png');
}

//即將推出
.csImage {
  .project-name1 {
    position: absolute;
    bottom: -20%;
    left: 32%;
    transform: translateY(100%);
    opacity: 0;
    transition: opacity 0.8s ease, transform 0.5s ease;
  }

  .project-name2 {
    position: absolute;
    bottom: -20%;
    left: 42%;
    transform: translateY(100%);
    opacity: 0;
    transition: opacity 0.8s ease, transform 0.5s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    border-radius: 6%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    cursor: pointer;
    z-index: 1;
  }

  &:hover .project-name1 {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover .project-name2 {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
