<template>
  <!-- header 區域 -->
  <header>
    <VisitorHeaderAd2></VisitorHeaderAd2>
    <VisitorHeader></VisitorHeader>
  </header>
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
            <RouterLink
              to="/product/動態路由需改成v-bind/info"
              class="custom-link"
            >
              專案介紹
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/product/動態路由需改成v-bind/qa"
              class="custom-link"
            >
              常見問答
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/product/動態路由需改成v-bind/commit"
              class="custom-link"
            >
              留言區
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <RouterView />
  </main>
</template>

<script>
import VisitorHeaderAd2 from '@/components/header/VisitorHeaderAd2.vue';
import VisitorHeader from '@/components/header/VisitorHeader.vue';
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
    VisitorHeaderAd2,
    VisitorHeader,
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
