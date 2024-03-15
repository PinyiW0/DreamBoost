<template>
  <main>
    <!-- 篩選區域 -->
    <section class="container">
      <!-- 標題 -->
      <div class="d-flex justify-content-center mt-15 mb-5 position-relative">
        <div class="mb-5 mb-lg-3">
          <h1 class="title-center text-center position-relative">探索專案</h1>
          <p class="fs-6 text-primary-light text-center mb-0">Explore Projects</p>
        </div>
      </div>
      <!-- 篩選欄位 -->
      <!-- <AngleDown class="text-primary" style="width: 16px;"></AngleDown> -->
      <div class="row col-12 col-lg-7 col-xl-6 mx-auto align-items-center gx-7">
        <div class="col-7 col-lg-6 mb-8 mx-auto">
          <label class="fw-medium mb-1" for="pr">專案狀態</label>
          <select class="form-select col-3 border-primary" aria-label="Default select example">
            <option selected value="1" class="">進行中</option>
            <option value="2">成功專案</option>
            <option value="3">即將推出</option>
          </select>
        </div>
        <div class="col-7 col-lg-6 mb-8 mx-auto">
          <label class="fw-medium mb-1" for="pr">專案排序</label>
          <select class="form-select col-3 border-primary" aria-label="Default select example">
            <option selected value="1">熱門</option>
            <option value="2">贊助人數</option>
            <option value="3">最多收藏</option>
          </select>
        </div>
      </div>
      <div class="postion-relative d-none d-xxl-block">
        <CouponCircle class="top-24 start-20"></CouponCircle>
      </div>
      <!-- 專案類別 -->
      <div class="container pt-8 pb-5">
        <!-- 專案類別 -->
        <div class="container row gy-8 gy-md-10 justify-content-center position-absolute translate-middle-null z-1">
          <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
            <a class="categorylink categorylink1 rounded-pill border border-2 border-white fs-4 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
              href="" @click.prevent="filterCategory('挺好夢')">
              挺好夢
            </a>
          </div>
          <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
            <a class="categorylink categorylink2 rounded-pill border border-2 border-white fs-4 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
              href="" @click.prevent="filterCategory('科技設計')">
              科技設計
            </a>
          </div>
          <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3"><a
              class="categorylink categorylink3 rounded-pill border border-2 border-white fs-4 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
              href="" @click.prevent="filterCategory('健康生活')">
              健康生活
            </a>
          </div>
          <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
            <a class="categorylink categorylink4 rounded-pill border border-2 border-white fs-4 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
              href="" @click.prevent="filterCategory('時尚')">
              時尚
            </a>
          </div>
          <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
            <a class="categorylink categorylink5 rounded-pill border border-2 border-white fs-4 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
              href="" @click.prevent="filterCategory('公共在地')">
              公共在地
            </a>
          </div>
          <div class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
            <a class="categorylink categorylink6 rounded-pill border border-2 border-white fs-4 fw-medium text-white lterSpc-5 text-center pt-7 pt-xxl-5"
              href="" @click.prevent="filterCategory('美妝')">
              美妝
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid bg-primary-light py-30 py-lg-24 py-xl-23 py-xxl-8 mb-lg-8 mb-xl-14 mt-5">
    </div>
    <div class="d-block d-lg-none container-fluid bg-primary-light py-28 py-md-29 mb-4">
    </div>
    <!-- 卡片渲染區 -->
    <section class="container">
      <ul class="row gx-10 list-unstyled pt-5">
        <li class="col-12 col-md-6 col-lg-4" v-for="(proposal, proposalId) in proposals" :key="proposalId">
          <CardDefault :proposals="proposal" @favorite="favoriteHandler"/>
        </li>
      </ul>
    </section>
    <div class="container d-flex flex-column">
      <button type="button" class="btn angle-down">
        <span class=" d-flex flex-column align-items-center fs-18 fw-blod mb-1">載入更多
          <AnglesDown class="pb-10" style="width: 18px;"></AnglesDown>
        </span>
      </button>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import exploreStore from '@/stores/exploreStore';
import userStore from '@/stores/userStore';
import sweetAlert2Store from '@/stores/sweetAlert2Store';
import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import CardDefault from '@/components/cards/CardDefault.vue';
import CouponCircle from '@/components/rotate/CuponCircle.vue';
import AnglesDown from '@/components/icons/AnglesDown.vue';

export default {
  components: {
    AnglesDown,
    CouponCircle,
    CardDefault,
  },
  data() {
    return {
      selectedCategory: null,
      filteredProposals: [],
    };
  },
  mixins: [mixinFullScreenLoading],
  computed: {
    ...mapState(exploreStore, ['proposals']),
    ...mapState(userStore, ['userData']),
  },
  watch: {
  },
  async mounted() {
    await this.showFullScreenLoading();
    await this.getProposals();
    await this.getUserData();
    setTimeout(() => {
      this.hideFullScreenLoading();
    }, 1500);
  },
  methods: {
    ...mapActions(exploreStore, ['getProposals']),
    ...mapActions(userStore, ['getUserData']),
    ...mapActions(sweetAlert2Store, ['errorAlert']),

    favoriteHandler() {
      const userValue = Object.values(this.userData);
      if (userValue.includes('')) {
        const userId = localStorage.getItem('userID');
        this.$router.push(`userboard/${userId}/personal`);

        setTimeout(() => {
          if (this.$route.path.startsWith('/userboard')) {
            this.errorAlert('需先完成會員資料');
          }
        }, 1500);
      }
    },
  },
};
</script>

<style lang="scss">
.angle-down {
  :hover {
    color: var(--bs-primary);
  }
}

//專案類別按鈕
.categorylink {
  display: block;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 4px 6px rgba(14, 87, 106, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s, background-size 0.5s ease;
  min-height: 68px;

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
</style>
