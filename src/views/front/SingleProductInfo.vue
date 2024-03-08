<template>
  <!-- 產品內容、回饋 -->
  <section class="container py-16">
    <div class="row gy-4">
      <div class="col-md-7">
        <div class="position-relative mb-7 p-6 border border-2 border-primary rounded-3 shadow-sm">
          <p class="mb-0 text-gray-600 fw-medium">
            最新消息發佈於 2024年03月07日
          </p>
          <p class="mb-0 fs-6 text-gray-500">
            此專案已經募集成功，進入製作階段，預計 2024年09月22日 會陸續寄送
          </p>
          <div class="d-none d-md-block">
            <span class="position-absolute top-50 end-100 translate-middle-y" style="
                border-width: 12px 20px;
                border-style: solid;
                border-color: transparent #258794 transparent transparent;
              "></span>
            <span class="position-absolute top-50 translate-middle-y" style="
                right: 99.3%;
                border-width: 12px 20px;
                border-style: solid;
                border-color: transparent #ffff transparent transparent;
              "></span>
          </div>
        </div>
        <div class="p-6 border border-gray-400">
          <!-- {{ singleProposal }} -->
          <div v-html="test?.proposalArticle" class="ck-content"></div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="mb-7 p-4 p-lg-12 pe-lg-23 border border-2 border-primary rounded-3">
          <div class="d-flex align-items-center gap-6 mb-9">
            <div class="d-flex justify-content-center align-items-center bg-primary rounded-circle"
              style="width: 112px; height: 112px">
              <img class="img-fluid object-fit-cover rounded-circle" :src="test?.customizeProperty?.userImage"
                alt="" />
            </div>
            <div class="d-flex flex-column">
              <h3 class="mb-1 fs-4 text-primary">{{ test?.customizeProperty?.displayName }}</h3>
              <div class="d-flex">
                <i class="me-1 text-gray-600" style="width: 20px; margin-top: -3px">
                  <UserGroup />
                </i>
                <p class="mb-0 text-gray-600">團隊提案者</p>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
            <div class="mb-4 mb-lg-0">
              <p class="mb-2 fw-medium">提案者名稱</p>
              <h4 class="mb-0 fs-6 fw-normal text-gray-600">
                {{ test?.customizeProperty?.displayName }}
              </h4>
            </div>
            <div>
              <p class="mb-2 fw-medium">統一編號</p>
              <h5 class="mb-0 fs-6 fw-normal text-gray-600">{{ test?.customizeProperty?.userIdentity }}</h5>
            </div>
          </div>
        </div>
        <ul class="d-flex flex-column row-gap-7 list-unstyled">
          <li v-for="(feedback, feedbackID) in test.proposalFeedbacks" :key="feedbackID">
            <PlanCard :feedbacks="feedback" />
          </li>
          <!-- <li>
            <div class="card py-9 px-6 rounded-4 border-2 border-primary">
              <div
                class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center py-7 px-6 mb-6 bg-primary rounded-2 text-white">
                <h3 class="card-title fs-5 mb-0">相信他，所以支持他</h3>
                <p class="d-flex align-items-end column-gap-1 mb-0 fs-5 lh-md">
                  只要
                  <span class="color-changing-text fs-3 fw-bold lterSpc-8 lh-1">
                    NT$666
                  </span>
                </p>
              </div>
              <img class="img-fluid mb-3 w-100 rounded-3" src="https://fakeimg.pl/375x210" alt="" />
              <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-6">
                <div>
                  <h4 class="mb-0 fw-bold text-primary">早鳥價 ｜系列全套組</h4>
                  <p class="mb-0 text-gray-500">
                    預定售價 NT$ 5,290 ，現省 NT$ 2,710
                  </p>
                </div>
                <div class="d-flex align-items-center column-gap-3">
                  <span class="badge px-3 text-danger border border-danger rounded-pill">
                    48 折
                  </span>
                  <button type="button" class="btn btn-empty d-flex align-items-center p-3">
                    <i style="width: 24px">
                      <StarHollow />
                    </i>
                    <i class="d-none" style="width: 24px">
                      <StarFull />
                    </i>
                  </button>
                </div>
              </div>
              <div class="d-flex text-white mb-8">
                <p class="mb-0 py-1 px-2 border-2 border-end border-secondary-light bg-primary lh-md">
                  剩餘
                  <span class="text-secondary-light">7</span>
                  份
                </p>
                <p class="mb-0 py-1 px-2 bg-primary lh-md">
                  已經被贊助
                  <span class="text-secondary-light">83</span>
                  / 90 次
                </p>
              </div>
              <div class="mb-8">
                <h5 class="mb-3">【方案內容】</h5>
                <ul class="d-flex flex-column row-gap-3">
                  <li>開啟定期提醒和休息計劃功能</li>
                  <li>提供職場改善方案，降低壓力值</li>
                  <li>提供舒壓小玩具</li>
                </ul>
              </div>
              <div class="mb-7 py-4 px-3 border-top border-bottom border-primary-light">
                <ul class="row gy-4 list-unstyled fs-6">
                  <li class="col-lg-6 d-flex align-items-center column-gap-1">
                    <div class="d-flex align-items-center mb-1 rounded-circle bg-primary"
                      style="width: 28px; height: 28px">
                      <i class="mx-auto text-secondary-light" style="width: 24px; height: 24px">
                        <CheckIcon />
                      </i>
                    </div>
                    <p class="mb-0">台灣本島免運，可寄離島</p>
                  </li>
                  <li class="col-lg-6 d-flex align-items-center column-gap-1">
                    <div class="d-flex align-items-center mb-1 rounded-circle bg-primary"
                      style="width: 28px; height: 28px">
                      <i class="mx-auto text-secondary-light" style="width: 24px; height: 24px">
                        <CheckIcon />
                      </i>
                    </div>
                    <p class="mb-0">信用卡享 3 期零利率</p>
                  </li>
                </ul>
              </div>
              <button type="button"
                class="btn btn-primary d-flex align-items-center justify-content-center column-gap-1 mb-4 px-14 fw-bold">
                贊助專案
                <i style="width: 18px; margin-top: -3px">
                  <RightArrow />
                </i>
              </button>
              <p class="mb-0 fs-12 text-center text-gray-500">
                預計於 2024 年 9 月實現
              </p>
            </div>
          </li>
          <li class="position-relative">
            <div
              class="position-absolute top-50 start-50 translate-middle z-1 d-flex justify-content-center align-items-center w-100 h-100 rounded-3 fs-2 text-white fw-bold"
              style="background: rgba(0, 0, 0, 0.5)">
              已結束
            </div>
            <div class="card pt-6 pb-9 px-6 rounded-3 border-2 border-primary">
              <div
                class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center py-7 px-6 mb-6 bg-primary rounded-1 text-white">
                <h3 class="card-title fs-5 mb-0">相信他，所以支持他</h3>
                <p class="d-flex align-items-end column-gap-1 mb-0 fs-5 lh-md">
                  只要
                  <span class="fs-3 text-secondary-light fw-bold lterSpc-8 lh-1">
                    NT$666
                  </span>
                </p>
              </div>
              <img class="img-fluid mb-6 w-100 rounded-3" src="https://fakeimg.pl/375x210" alt="" />
              <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-6">
                <div>
                  <h4 class="mb-1 fw-bold text-primary">早鳥價 ｜系列全套組</h4>
                  <p class="mb-0 text-gray-500">
                    預定售價 NT$ 5,290 ，現省 NT$ 2,710
                  </p>
                </div>
                <div class="d-flex align-items-center column-gap-3">
                  <span class="badge px-3 text-danger border border-danger rounded-pill">
                    48 折
                  </span>
                  <button type="button" class="btn btn-empty d-flex align-items-center p-3">
                    <i style="width: 24px">
                      <StarHollow />
                    </i>
                    <i class="d-none" style="width: 24px">
                      <StarFull />
                    </i>
                  </button>
                </div>
              </div>
              <div class="d-flex text-white mb-8">
                <p class="mb-0 py-1 px-2 border-2 border-end border-secondary-light bg-primary lh-md">
                  剩餘
                  <span class="text-secondary-light">7</span>
                  份
                </p>
                <p class="mb-0 py-1 px-2 bg-primary lh-md">
                  已經被贊助
                  <span class="text-secondary-light">83</span>
                  / 90 次
                </p>
              </div>
              <div class="mb-8">
                <h5 class="mb-3">【方案內容】</h5>
                <ul class="d-flex flex-column row-gap-3">
                  <li>開啟定期提醒和休息計劃功能</li>
                  <li>提供職場改善方案，降低壓力值</li>
                  <li>提供舒壓小玩具</li>
                </ul>
              </div>
              <div class="mb-7 py-4 px-3 border-top border-bottom border-primary-light">
                <ul class="row gy-4 list-unstyled fs-6">
                  <li class="col-lg-6 d-flex align-items-center column-gap-1">
                    <div class="d-flex align-items-center mb-1 rounded-circle bg-primary"
                      style="width: 28px; height: 28px">
                      <i class="mx-auto text-secondary-light" style="width: 24px; height: 24px">
                        <CheckIcon />
                      </i>
                    </div>
                    <p class="mb-0">台灣本島免運，可寄離島</p>
                  </li>
                  <li class="col-lg-6 d-flex align-items-center column-gap-1">
                    <div class="d-flex align-items-center mb-1 rounded-circle bg-primary"
                      style="width: 28px; height: 28px">
                      <i class="mx-auto text-secondary-light" style="width: 24px; height: 24px">
                        <CheckIcon />
                      </i>
                    </div>
                    <p class="mb-0">信用卡享 3 期零利率</p>
                  </li>
                </ul>
              </div>
              <button type="button"
                class="btn btn-primary d-flex align-items-center justify-content-center column-gap-1 mb-4 px-14 fw-bold">
                贊助專案
                <i style="width: 18px; margin-top: -3px">
                  <RightArrow />
                </i>
              </button>
              <p class="mb-0 fs-12 text-center text-gray-500">
                預計於 2024 年 9 月實現
              </p>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import exploreStore from '@/stores/exploreStore';
import UserGroup from '@/components/icons/UserGroup.vue';
import PlanCard from '@/components/cards/PlanCard.vue';

const { VITE_URL } = import.meta.env;

export default {
  components: {
    UserGroup,
    PlanCard,
  },
  data() {
    return {
      productList: null,
      productId: '',
      test: '',
    };
  },
  computed: {
    ...mapState(exploreStore, ['singleProposal']),
  },
  async created() {
    await this.getProposals();
  },
  mounted() {
    // this.getProposals();
    // this.productId = this.$route.params.id.trim();
    // console.log(this.productId);
    // console.log(this.$route.params.id);
    // const { id } = this.$route.params;
    // this.product = JSON.parse(this.$route.query.proposals);
    // this.productList = this.proposals;
    // console.log(this.proposals);
    // this.product = this.productList.filter((proposal) => proposal.proposalID.trim() === this.productId);
    // console.log(this.product);
  },
  methods: {
    ...mapActions(exploreStore, ['getProposals']),
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
  },
};
</script>
