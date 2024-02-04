<template>
  <header>
      <swiperiii></swiperiii>
        <nav>
          <div class="container d-flex justify-content-between align-items-center">
            <RouterLink to="/home">
              <a href="">
                <img src="/public/images/header/mainLogo.svg" alt="首頁">
              </a>
            </RouterLink>
            <div class="d-flex justify-content-center align-items-center">
              <RouterLink to="/explore">
                <p class="text-gray-700 px-7 mb-0">探索</p>
              </RouterLink>
              <RouterLink to="/launch">
                  <p class="text-gray-700 px-7 mb-0">發起專案</p>
              </RouterLink>
              <RouterLink to="/explore">
                <p class="text-gray-700 px-7 mb-0">註冊登入</p>
              </RouterLink>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <RouterLink to="/explore">
                <button class="btn btn-secondary-light border border-primary rounded-3 px-5 py-3 me-5 d-flex align-items-center justify-content-center btn-pr position-relative">
                    <span class="d-flex justify-content-center align-items-center">
                      <p class="mb-0 pe-2 fw-semibold">一起追夢</p>
                      <RightArrow class="fs-3" style="width:18px"></RightArrow>
                    </span>
                  <span class=""></span>
                </button>
              </RouterLink>
              <button class="btn btn-outline-primary border-2">
                <SearchIcon class="fs-3 m-2" style="width:16px"></SearchIcon>
              </button>
            </div>
          </div>
        </nav>
  </header>
</template>

<style>
  .btn-pr {
    color: var(--bs-primary);
  }
  .btn-pr:hover {
    color: #fff !important;
    background-color: var(--bs-primary);
  }
  .btn-pr:hover::after {
    top: 0px;
    left: 0px;
    transition: top 0.3s, left 0.3s;
  }
  .btn-pr::after{
    content : '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: 8px;
    background-color: var(--bs-primary);
    z-index: -1;
  }
  /* .btn-pr::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: var(--bs-primary);
    transform: scale(-180);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
                width 150ms cubic-bezier(0.4, 0, 0.2, 1),
                height 150ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 6px;
    z-index: -1;
  }

  .btn-pr:hover::before {
    width: 124px;
    height: 48px;
    transform: scale(1);
    z-index: 1;
  } */
</style>

<script>
import RightArrow from '@/components/icons/RightArrow.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import swiper1 from '../../components/header/VisitorHeaderAd.vue';

export default {
  components: {
    swiperiii: swiper1,
    RightArrow,
    SearchIcon,
  },
};
</script>
