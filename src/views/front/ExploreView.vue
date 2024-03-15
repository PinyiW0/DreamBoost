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
          <div v-for="(category, index) in filteredProposals" :key="index"
            class="col-10 col-lg-3 col-xxl me-0 me-lg-10 me-xl-6 me-xxl-3">
            <a :class="'categorylink categorylink' + category.id + ' rounded-pill border border-2 border-white fs-4 fw-medium text-white lterSpc-5 text-center pt-7'"
              href="" @click.prevent="filterCategory(category.name)">
              {{ category.name }}
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
        <li v-if="filteredData.length === 0" class="col-12 text-center">
          <p class="fs-4 text-gray-600">此類別尚未有專案唷～歡迎提案</p>
        </li>
        <li v-else class="col-12 col-md-6 col-lg-4" v-for="(proposal, proposalId) in filteredData" :key="proposalId">
          <CardDefault :proposals="proposal" @favorite="favoriteHandler" />
        </li>
      </ul>
    </section>
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

export default {
  components: {
    CouponCircle,
    CardDefault,
  },
  data() {
    return {
      selectedCategory: null,
      filteredProposals: [
        { id: 1, name: '挺好夢' },
        { id: 2, name: '科技設計' },
        { id: 3, name: '健康生活' },
        { id: 4, name: '時尚' },
        { id: 5, name: '公共在地' },
        { id: 6, name: '美妝' },
      ],
    };
  },
  mixins: [mixinFullScreenLoading],
  computed: {
    ...mapState(exploreStore, ['proposals']),
    ...mapState(userStore, ['userData']),
    filteredData() {
      if (!this.selectedCategory) {
        return Object.values(this.proposals);
      }
      return Object.values(this.proposals).filter((proposal) => proposal.proposalCategory === this.selectedCategory);
    },
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

    filterCategory(categoryName) {
      this.selectedCategory = categoryName;
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
