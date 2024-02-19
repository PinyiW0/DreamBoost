<template>
  <main>
    <!-- 產品信息 -->
    <section class="container mb-14 pt-23">
      <span
        class="badge px-3 mb-2 rounded-pill bg-primary fs-5 lh-md fw-normal"
      >
        健康生活
      </span>
      <h2 class="mb-8 fs-3 text-primary-dark">
        CodeGuardian - 工程師顧肝必備良品：LiverCare
      </h2>
      <div class="row gy-8">
        <div class="col-lg-6">
          <img
            src="https://fakeimg.pl/635x360/?retina=1&text=fake&font=noto"
            class="w-100 object-fit-cover rounded-2"
            alt=""
            style="height: 360px"
          />
        </div>
        <div
          class="order-2 order-lg-1 col-lg-6 d-flex flex-column text-gray-600"
        >
          <div class="d-flex justify-content-between mb-7">
            <div>
              <p class="mb-3 text-primary lh-md">目標 NT$ 100,000</p>
              <p class="mb-0 fs-4 text-danger fw-bold">NT $ 2,250,005</p>
            </div>
            <img src="https://fakeimg.pl/64x64" alt="" style="width: 64px" />
          </div>
          <div
            class="mb-8 w-100 bg-primary rounded-pill"
            style="height: 6px"
          ></div>
          <div class="d-flex mb-10">
            <div class="d-flex align-items-center gap-1 me-21">
              <i style="width: 24px; margin-top: -4px">
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
          <p>專案時間：2024.02.14 12 : 00 ~ 2024.03.10 23 : 59</p>
          <p class="mb-4">
            讓 CodeGuardian -
            肝心（LiverCare）來了解解解解解解解（解酒解肝解痛苦）你！我們希望能為前端工程師提供一個超酷的、有趣的、關心你肝臟的數字助手！
          </p>
          <div
            class="d-flex justify-content-between align-items-center mt-auto"
          >
            <div class="d-flex align-items-center gap-2">
              <img
                class="img-fluid rounded-circle object-fit-cover"
                src="https://fakeimg.pl/36x36"
                alt=""
              />
              <p class="mb-0 text-gray-700 lh-md">發起人：樂樂許願池</p>
            </div>
            <ul
              class="d-flex align-items-center list-unstyled mb-0 column-gap-3"
            >
              <li style="width: 28px">
                <a href="#">
                  <i>
                    <FaceBook />
                  </i>
                </a>
              </li>
              <li style="width: 28px">
                <a href="#">
                  <i>
                    <InstaGram />
                  </i>
                </a>
              </li>
              <li style="width: 28px">
                <a href="#">
                  <i>
                    <TwitterIcon />
                  </i>
                </a>
              </li>
              <li style="width: 28px">
                <a href="#">
                  <i>
                    <LinkIcon />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ol
          class="order-1 order-lg-2 col-lg-6 d-flex justify-content-center gap-20 mb-0 list-unstyled"
        >
          <li class="position-relative check-line">
            <div
              class="d-flex align-items-center mx-auto mb-1 rounded-circle bg-primary-dark"
              style="width: 32px; height: 32px"
            >
              <i
                class="d-block mx-auto text-secondary-light"
                style="width: 24px; height: 24px"
              >
                <CheckIcon />
              </i>
            </div>
            <p class="mb-0 text-gray-500">企劃概念</p>
          </li>
          <li class="position-relative check-line">
            <div
              class="d-flex align-items-center mx-auto mb-1 rounded-circle bg-primary-dark"
              style="width: 32px; height: 32px"
            >
              <i
                class="d-block mx-auto text-secondary-light"
                style="width: 24px; height: 24px"
              >
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
              "
            ></div>
            <p class="mb-0 text-gray-primary">生產階段</p>
          </li>
          <li>
            <div
              class="d-flex align-items-center mx-auto mb-1 border border-2 border-gray-300 bg-gray-300 rounded-circle"
              style="
                width: 32px;
                height: 32px;
                box-shadow: inset 0 0 0px 7px #ffff;
              "
            ></div>
            <p class="mb-0 text-gray-300">產品寄送</p>
          </li>
        </ol>
        <div
          class="order-3 col-lg-6 d-flex justify-content-end align-items-center column-gap-4"
        >
          <button
            type="button"
            class="btn btn-empty d-flex align-items-center p-3"
          >
            <i style="width: 24px">
              <StarHollow />
            </i>
            <i class="d-none" style="width: 24px">
              <StarFull />
            </i>
          </button>
          <button
            type="button"
            class="btn btn-secondary-light border border-2 border-primary d-flex align-items-center justify-content-center column-gap-1 px-14 btn-pr position-relative fw-bold"
          >
            贊助專案
            <i style="width: 18px; margin-top: -3px">
              <RightArrow />
            </i>
          </button>
        </div>
      </div>
    </section>

    <!-- 頁面區塊 -->
    <div class="position-sticky top-0 z-2 bg-primary py-8">
      <nav class="container">
        <ul class="nav justify-content-between justify-content-md-start gap-19">
          <li class="nav-item">
            <a href="#" class="custom-link active">專案介紹</a>
          </li>
          <li class="nav-item">
            <a href="#" class="custom-link">常見問答</a>
          </li>
          <li class="nav-item">
            <a href="#" class="custom-link">留言區</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- 產品內容、回饋 -->
    <section class="container py-16">
      <div class="row gy-4">
        <div class="col-md-7">
          <div
            class="position-relative mb-7 p-6 border border-2 border-primary rounded-3 shadow"
          >
            <p class="mb-0 text-gray-600 fw-medium">
              最新消息發佈於 2024年03月07日
            </p>
            <p class="mb-0 fs-6 text-gray-500">
              此專案已經募集成功，進入製作階段，預計 2024年09月22日 會陸續寄送
            </p>
            <div class="d-none d-md-block">
              <span
                class="position-absolute top-50 end-100 translate-middle-y"
                style="
                  border-width: 12px 20px;
                  border-style: solid;
                  border-color: transparent #258794 transparent transparent;
                "
              ></span>
              <span
                class="position-absolute top-50 translate-middle-y"
                style="
                  right: 99.3%;
                  border-width: 12px 20px;
                  border-style: solid;
                  border-color: transparent #ffff transparent transparent;
                "
              ></span>
            </div>
          </div>
          <div class="p-6 border border-gray-400">
            <img
              class="img-fluid mb-7 w-100 object-fit-cover"
              src="https://fakeimg.pl/600x450"
              alt=""
              style="width: 600px; height: 450px"
            />
            <h3 class="mb-5 text-gray-800 lh-md">
              CodeGuardian - 工程師顧肝必備良品：LiverCare
            </h3>
            <p class="mb-7 lh-md">
              讓 CodeGuardian
              -肝心（LiverCare）來了解解解解解解解（解酒解肝解痛苦）你！我們希望能為前端工程師提供一個超酷的、有趣的、關心你肝臟的數字助手！
              <br />
              不只守護你的程式碼，更守護你的肝臟！從忙碌的工作間隙中，讓你的肝臟放個假！我們關注你工作時肝臟的健康，讓你在敲程式碼的同時感受到樂趣與關懷！
            </p>
            <img
              class="img-fluid mb-7 w-100 object-fit-cover"
              src="https://fakeimg.pl/600x450"
              alt=""
              style="width: 600px; height: 450px"
            />
            <img
              class="img-fluid w-100 object-fit-cover"
              src="https://fakeimg.pl/600x450"
              alt=""
              style="width: 600px; height: 450px"
            />
          </div>
        </div>
        <div class="col-md-5">
          <div
            class="mb-7 p-4 p-lg-12 pe-lg-23 border border-2 border-primary rounded-3"
          >
            <div class="d-flex align-items-center gap-6 mb-9">
              <div
                class="d-flex justify-content-center align-items-center bg-primary rounded-circle"
                style="width: 112px; height: 112px"
              >
                <img
                  class="img-fluid object-fit-cover"
                  src="/images/logo-lg.png"
                  alt=""
                />
              </div>
              <h3 class="mb-0 fs-5 text-primary">樂樂許願池</h3>
            </div>
            <div
              class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center"
            >
              <div class="mb-4 mb-lg-0">
                <p class="mb-2 fw-bold">提案者名稱</p>
                <h4 class="mb-0 fs-6">樂樂許願池文化有限公司</h4>
              </div>
              <div>
                <p class="mb-2 fw-bold">統一編號</p>
                <h5 class="mb-0 fs-6">20230999</h5>
              </div>
            </div>
          </div>
          <ul class="d-flex flex-column row-gap-7 list-unstyled">
            <li>
              <div class="card py-9 px-6 border-2 border-primary">
                <div
                  class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center py-7 px-6 mb-6 bg-primary rounded-2 text-white"
                >
                  <h3 class="card-title fs-5 mb-0">相信他，所以支持他</h3>
                  <p
                    class="d-flex align-items-end column-gap-1 mb-0 fs-5 lh-md"
                  >
                    只要
                    <span
                      class="fs-3 text-secondary-light fw-bold lterSpc-8 lh-1"
                    >
                      NT$666
                    </span>
                  </p>
                </div>
                <img
                  class="img-fluid mb-3 w-100 rounded-3"
                  src="https://fakeimg.pl/375x210"
                  alt=""
                />
                <div
                  class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-6"
                >
                  <div>
                    <h4 class="mb-0 fw-bold text-primary">
                      早鳥價 ｜系列全套組
                    </h4>
                    <p class="mb-0 text-gray-500">
                      預定售價 NT$ 5,290 ，現省 NT$ 2,710
                    </p>
                  </div>
                  <div class="d-flex align-items-center column-gap-3">
                    <span
                      class="badge px-3 text-danger border border-danger rounded-pill"
                    >
                      48 折
                    </span>
                    <button
                      type="button"
                      class="btn btn-empty d-flex align-items-center p-3"
                    >
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
                  <p
                    class="mb-0 py-1 px-2 border-2 border-end border-secondary-light bg-primary lh-md"
                  >
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
                <div
                  class="mb-7 py-4 px-3 border-top border-bottom border-primary-light"
                >
                  <ul class="row gy-4 list-unstyled fs-6">
                    <li class="col-lg-6 d-flex align-items-center column-gap-1">
                      <div
                        class="d-flex align-items-center mb-1 rounded-circle bg-primary"
                        style="width: 28px; height: 28px"
                      >
                        <i
                          class="mx-auto text-secondary-light"
                          style="width: 24px; height: 24px"
                        >
                          <CheckIcon />
                        </i>
                      </div>
                      <p class="mb-0">台灣本島免運，可寄離島</p>
                    </li>
                    <li class="col-lg-6 d-flex align-items-center column-gap-1">
                      <div
                        class="d-flex align-items-center mb-1 rounded-circle bg-primary"
                        style="width: 28px; height: 28px"
                      >
                        <i
                          class="mx-auto text-secondary-light"
                          style="width: 24px; height: 24px"
                        >
                          <CheckIcon />
                        </i>
                      </div>
                      <p class="mb-0">信用卡享 3 期零利率</p>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  class="btn btn-primary d-flex align-items-center justify-content-center column-gap-1 mb-4 px-14 fw-bold"
                >
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
                style="background: rgba(0, 0, 0, 0.5)"
              >
                已結束
              </div>
              <div class="card py-9 px-6 border-2 border-primary">
                <div
                  class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center py-7 px-6 mb-6 bg-primary rounded-2 text-white"
                >
                  <h3 class="card-title fs-5 mb-0">相信他，所以支持他</h3>
                  <p
                    class="d-flex align-items-end column-gap-1 mb-0 fs-5 lh-md"
                  >
                    只要
                    <span
                      class="fs-3 text-secondary-light fw-bold lterSpc-8 lh-1"
                    >
                      NT$666
                    </span>
                  </p>
                </div>
                <img
                  class="img-fluid mb-3 w-100 rounded-3"
                  src="https://fakeimg.pl/375x210"
                  alt=""
                />
                <div
                  class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-6"
                >
                  <div>
                    <h4 class="mb-0 fw-bold text-primary">
                      早鳥價 ｜系列全套組
                    </h4>
                    <p class="mb-0 text-gray-500">
                      預定售價 NT$ 5,290 ，現省 NT$ 2,710
                    </p>
                  </div>
                  <div class="d-flex align-items-center column-gap-3">
                    <span
                      class="badge px-3 text-danger border border-danger rounded-pill"
                    >
                      48 折
                    </span>
                    <button
                      type="button"
                      class="btn btn-empty d-flex align-items-center p-3"
                    >
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
                  <p
                    class="mb-0 py-1 px-2 border-2 border-end border-secondary-light bg-primary lh-md"
                  >
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
                <div
                  class="mb-7 py-4 px-3 border-top border-bottom border-primary-light"
                >
                  <ul class="row gy-4 list-unstyled fs-6">
                    <li class="col-lg-6 d-flex align-items-center column-gap-1">
                      <div
                        class="d-flex align-items-center mb-1 rounded-circle bg-primary"
                        style="width: 28px; height: 28px"
                      >
                        <i
                          class="mx-auto text-secondary-light"
                          style="width: 24px; height: 24px"
                        >
                          <CheckIcon />
                        </i>
                      </div>
                      <p class="mb-0">台灣本島免運，可寄離島</p>
                    </li>
                    <li class="col-lg-6 d-flex align-items-center column-gap-1">
                      <div
                        class="d-flex align-items-center mb-1 rounded-circle bg-primary"
                        style="width: 28px; height: 28px"
                      >
                        <i
                          class="mx-auto text-secondary-light"
                          style="width: 24px; height: 24px"
                        >
                          <CheckIcon />
                        </i>
                      </div>
                      <p class="mb-0">信用卡享 3 期零利率</p>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  class="btn btn-primary d-flex align-items-center justify-content-center column-gap-1 mb-4 px-14 fw-bold"
                >
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
          </ul>
        </div>
      </div>
    </section>
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

export default {
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
.check-line::after {
  position: absolute;
  top: 25%;
  left: 100%;
  width: 76px;
  height: 2px;
  content: '';
  background-color: #667085;
}

.no-check-line::after {
  position: absolute;
  top: 25%;
  left: 100%;
  width: 76px;
  height: 2px;
  content: '';
  background-color: #d0d5dd;
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
    height: 4px;
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
</style>
