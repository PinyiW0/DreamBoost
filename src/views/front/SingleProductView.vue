<template>
  <main>
    <!-- 產品信息 -->
    <section>
      <div class="container mb-14 pt-23">
        <span class="badge px-3 mb-2 rounded-pill bg-primary fs-5 lh-md fw-normal">
          {{ test.proposalCategory }}
        </span>
        <h2 class="mb-8 fs-3 text-primary-dark">
          {{ test.proposalTitle }}
        </h2>
        <div class="row gy-8">
          <div class="col-lg-6">
            <img :src="test.proposalMainImage" class="w-100 object-fit-cover rounded-2" alt="" style="height: 360px" />
          </div>
          <div class="order-2 order-lg-1 col-lg-6 d-flex flex-column text-gray-600">
            <div class="d-flex justify-content-between mb-7">
              <div>
                <p class="mb-3 text-primary lh-md">目標 NT$ {{ test.proposalTargetMoney }}</p>
                <p class="mb-0 fs-4 text-danger fw-bold">NT $ 2,250,005</p>
              </div>
              <img class="d-none" src="https://fakeimg.pl/64x64" alt="" style="width: 64px" />
            </div>
            <div class="mb-8 w-100 bg-primary rounded-pill" style="height: 6px"></div>
            <div class="d-flex mb-10">
              <div class="d-flex align-items-center gap-1 me-21">
                <i style="width: 22px; margin-top: -2px">
                  <UserIcon />
                </i>
                <p class="mb-0 text-gray-600">
                  <span class="text-primary fw-bold">2,435</span>
                  人參與
                </p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <i style="width: 24px">
                  <ClockIcon />
                </i>
                <p class="mb-0 text-primary fw-bold">
                  3 <span class="text-gray-600">天</span> 09:29:19
                </p>
              </div>
            </div>
            <p>專案時間：{{ test.proposalStartTime }} ~ {{ test.proposalEndTime }}</p>
            <p class="mb-4">
              {{ test.proposalSummary }}
            </p>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <div class="d-flex align-items-center gap-2">
                <!-- <img class="img-fluid rounded-circle object-fit-cover" :src="test.customizeProperty?.userImage"
                style="height: 36px;width: 36px;" alt="" />
              <p class="mb-0 text-gray-700 lh-md">發起人：{{ test.customizeProperty?.displayName }}</p> -->
              </div>
              <ul class="d-flex align-items-center list-unstyled mb-0 column-gap-3">
                <li style="width: 28px">
                  <a href="https://zh-tw.facebook.com/login/device-based/regular/login/?login_attempt=1">
                    <i>
                      <FaceBook />
                    </i>
                  </a>
                </li>
                <li style="width: 28px">
                  <a href="https://www.instagram.com/accounts/login/?next=%2Fchin_goods%2F&source=desktop_nav">
                    <i>
                      <InstaGram />
                    </i>
                  </a>
                </li>
                <li style="width: 28px">
                  <a href="https://twitter.com/i/flow/login">
                    <i>
                      <TwitterIcon />
                    </i>
                  </a>
                </li>
                <li style="width: 28px">
                  <a href="#" @click.prevent="copyURL">
                    <i>
                      <LinkIcon />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ol class="order-1 order-lg-2 col-lg-6 d-flex justify-content-center gap-20 mb-0 list-unstyled">
            <li class="position-relative check-line">
              <div class="d-flex align-items-center mx-auto mb-1 rounded-circle bg-primary-dark"
                style="width: 32px; height: 32px">
                <i class="d-block mx-auto text-secondary-light" style="width: 24px; height: 24px">
                  <CheckIcon />
                </i>
              </div>
              <p class="mb-0 text-gray-500">企劃概念</p>
            </li>
            <li class="position-relative check-line">
              <div class="d-flex align-items-center mx-auto mb-1 rounded-circle bg-primary-dark"
                style="width: 32px; height: 32px">
                <i class="d-block mx-auto text-secondary-light" style="width: 24px; height: 24px">
                  <CheckIcon />
                </i>
              </div>
              <p class="mb-0 text-gray-500">樣品狀態</p>
            </li>
            <li class="position-relative no-check-line">
              <div
                class="d-flex align-items-center mx-auto mb-1 border border-2 border-primary bg-primary rounded-circle"
                style="
                width: 32px;
                height: 32px;
                box-shadow: inset 0 0 0px 3px #ffff;
              "></div>
              <p class="mb-0 text-gray-primary">生產階段</p>
            </li>
            <li>
              <div
                class="d-flex align-items-center mx-auto mb-1 border border-2 border-gray-300 bg-gray-300 rounded-circle"
                style="
                width: 32px;
                height: 32px;
                box-shadow: inset 0 0 0px 7px #ffff;
              "></div>
              <p class="mb-0 text-gray-300">產品寄送</p>
            </li>
          </ol>
          <div class="order-3 col-lg-6 d-flex justify-content-end align-items-center column-gap-4">
            <button type="button" class="btn btn-empty d-flex align-items-center p-3">
              <i style="width: 24px">
                <StarHollow />
              </i>
              <i class="d-none" style="width: 24px">
                <StarFull />
              </i>
            </button>
            <RouterLink :to="`/product/${$route.params.id}/choose`">
              <button type="button"
                class="btn btn-secondary-light border border-2 border-primary d-flex align-items-center justify-content-center column-gap-1 px-14 btn-pr position-relative fw-bold">
                贊助專案
                <i style="width: 18px; margin-top: -3px">
                  <RightArrow />
                </i>
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
      <!-- 頁面區塊 -->
      <div class="position-sticky top-0 z-2 bg-primary py-7">
        <nav class="container">
          <ul class="nav justify-content-between justify-content-md-start align-items-center gap-19">
            <li class="nav-item">
              <RouterLink to="info" class="custom-link">
                專案介紹
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="qa" class="custom-link">
                常見問答
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="commit" class="custom-link">
                留言區
              </RouterLink>
            </li>
            <li v-show="showButton" @click="handleButtonClick" class="ms-auto">
              <button type="button"
                class="btn btn-secondary-light border border-2 border-primary d-flex align-items-center justify-content-center column-gap-1 px-14 btn-pr position-relative fw-bold">
                贊助專案
                <i style="width: 18px; margin-top: -3px">
                  <RightArrow />
                </i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <RouterView />
  </main>
</template>

<script>

import UserIcon from '@/components/icons/UserIcon.vue';
import ClockIcon from '@/components/icons/ClockIcon.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
import LinkIcon from '@/components/icons/LinkIcon.vue';
import FaceBook from '@/components/icons/FaceBook.vue';
import InstaGram from '@/components/icons/InstaGram.vue';
import CheckIcon from '@/components/icons/CheckIcon.vue';
import RightArrow from '@/components/icons/RightArrow.vue';
import StarHollow from '@/components/icons/StarHollow.vue';
import StarFull from '@/components/icons/StarFull.vue';
import { mapActions, mapWritableState } from 'pinia';
import exploreStore from '@/stores/exploreStore';
import MixinSwalToast from '@/mixins/mixinSwalToast';

const { VITE_URL } = import.meta.env;

export default {
  props: {
    proposals: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showButton: false,
      showOrgin: true,
      test: {},
    };
  },
  computed: {
    ...mapWritableState(exploreStore, ['singleProposal']),
  },
  mixins: [MixinSwalToast],
  mounted() {
    this.getProposals();
    // console.log(this.singleProposal);
    // 監聽滾動事件
    window.addEventListener('scroll', this.handleScroll);
  },
  async created() {
    await this.getProposals();
  },
  beforeUnmount() {
    // 執行前移除滾動事件
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    ...mapActions(exploreStore, ['getProposals']),
    handleScroll() {
      // 選取區塊元素
      const blockElement = document.querySelector('.position-sticky');
      if (!blockElement) return;

      // 選取區塊元素距視窗頂部的距離
      const blockTop = blockElement.getBoundingClientRect().top;

      // 當所屬區塊元素距離視窗頂部小於0，置頂在最上方並顯示按鈕
      this.showButton = blockTop <= 0;
    },
    copyURL() {
      // 賦予當前網址 value 屬性
      const textarea = document.createElement('textarea');
      textarea.value = window.location.href;

      // 將textarea加到DOM中，並選取内容
      document.body.appendChild(textarea);
      textarea.select();

      // 複製
      document.execCommand('copy');

      // 移除 textarea 元素
      document.body.removeChild(textarea);

      // 複製成功提示
      this.addToast({ content: '網址複製成功', timer: 1500 });
    },
    async getProposals() {
      await this.$http
        .get(`${VITE_URL}/dreamboost/proposal/guest/inActiveProposals`)
        .then((res) => {
          if (res.data.success) {
            this.test = res.data.data.result[this.$route.params.id];
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    navigateToChoose() {
      this.showOrgin = !this.showOrgin;
    },
  },
  components: {
    UserIcon,
    ClockIcon,
    TwitterIcon,
    LinkIcon,
    FaceBook,
    InstaGram,
    CheckIcon,
    RightArrow,
    StarHollow,
    StarFull,
  },
};
</script>

<style lang="scss" scoped>
.check-line::after,
.no-check-line::after {
  position: absolute;
  top: 20%;
  left: 100%;
  width: 76px;
  height: 2px;
  content: '';
}
.check-line::after {
  background-color: #667085;
}

.no-check-line::after {
  background-color: #d0d5dd;
}

@media (min-width: 768px) {
  .check-line::after,
  .no-check-line::after {
    top: 25%;
  }
}

.custom-link {
  position: relative;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #ffff;
  font-weight: medium;
  line-height: 1.5;

  &.active,
  &:hover {
    color: #fff48a !important;
  }

  &.active::before,
  &::after {
    position: absolute;
    content: '';
    height: 3px;
    width: 100%;
    background-color: #fff48a;
    top: 100%;
    left: 0;
  }

  &::after {
    transform: scale(0, 1);
    transform-origin: right;
    transition: transform 0.2s ease-in;
  }

  &:hover::after {
    transform-origin: left;
    transform: scale(1, 1);
  }
}
.slide-in-enter-active {
  transition: all 0.5s ease;
}
.slide-in-enter {
  transform: translateX(100%);
}
</style>
