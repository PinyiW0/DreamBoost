<template>
  <!-- header 區域 -->
  <header>
    <swiperiii></swiperiii>
    <div class="container-fluid border-bottom border-primary-light shadow-sm">
      <nav>
        <div class="container d-flex justify-content-between align-items-center">
          <RouterLink to="/home">
            <a href="">
              <img src="/public/images/header/mainLogo.svg" alt="首頁">
            </a>
          </RouterLink>
          <div class="d-flex justify-content-center align-items-center">
            <RouterLink to="/home" class="me-6 router-link-active RoterLink">
              探索
            </RouterLink>
            <RouterLink to="/launch" class="me-6 router-link-active RoterLink">
              發起專案
            </RouterLink>
            <RouterLink to="/member" class="me-6 router-link-active RoterLink">
              註冊登入
            </RouterLink>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <RouterLink to="/explore">
              <button
                class="btn btn-secondary-light border border-2 border-primary rounded-3 px-5 py-3 me-5 d-flex align-items-center justify-content-center btn-pr position-relative">
                <span class="d-flex justify-content-center align-items-center">
                  <p class="mb-0 pe-2 fw-semibold">一起追夢</p>
                  <RightArrow class="fs-3" style="width:18px"></RightArrow>
                </span>
              </button>
            </RouterLink>
            <span class="mt-1">
              <button class="btn btn-outline-primary border-2 btn-search p-3">
                <SearchIcon class="fs-3" style="width:24px"></SearchIcon>
              </button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <main>
    <!-- banner 區域 -->
    <div class="container-fluid pt-9">
      <img src="../../../public/images/home/bn_01.png" class="img-fluid" alt="">
    </div>
    <!-- 熱門推薦 -->
    <div class="row gx-12 pt-18 pb-18 justify-content-center">
      <!-- 當前熱門專案 -->
      <div class="col-6">
        <div class="mb-3">
          <h1 class="title position-relative">當前熱門專案</h1>
          <p class="fs-6 text-primary-light mb-0">Current Hot Projects</p>
        </div>
        <img src="/public/images/home/liver.jpg" class="img-fluid rounded-3 mb-7 col-12" alt="">
        <p class="fs-6 text-primary mb-3">#&nbsp;健康生活</p>
        <h4 class="mb-3">CodeGuardian - 工程師顧肝必備良品：LiverCare</h4>
        <p class="mb-9">讓 CodeGuardian - 肝心（LiverCare）來了解解解解解解解（解酒解肝解痛苦）你！我們希望能為前端工程師提供一個超酷的、有趣的、關心你肝臟的數字助手！
          <br><br>不只守護你的程式碼，更守護你的肝臟！從忙碌的工作間隙中，讓你的肝臟放個假！我們關注你工作時肝臟的健康，讓你在敲程式碼的同時感受到樂趣與關懷！
        </p>
        <div class="progress bg-secondary-light mb-7" style="height: 10px;">
          <div class="progress-bar rounded-5" role="progressbar" style="width: 80%;;" aria-valuenow="50" aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img src="/images/home/userIcon36.svg" class="img-fluid me-6 rounded-5" style="max-width: 36px;" alt="會員頭貼">
            <p class="mb-0">發起人：樂樂</p>
          </div>
          <div class="d-flex">
            <div class="d-flex me-3">
              <p class="mb-0 me-1">已募資</p>
              <p class="fw-bold text-danger mb-0">80%</p>
            </div>
            <div class="d-flex me-3 align-items-center">
              <p class="mb-0 me-1">11</p>
              <MessageIcon class="fs-3 text-primary-dark" style="width:16px"></MessageIcon>
            </div>
            <div class="d-flex align-items-center">
              <p class="mb-0 me-1">18</p>
              <StarFull class="fs-3 text-secondary pb-1" style="width:18px"></StarFull>
              <StarHollow class="text-primary-dark d-none" style="width:18px"></StarHollow>
            </div>
          </div>
        </div>
      </div>
      <!-- 為您推薦 -->
      <div class="col-5">
        <div class="mb-3">
          <h2 class="title position-relative">為您推薦</h2>
          <p class="fs-6 text-primary-light mb-0">Recommended for You</p>
        </div>
        <ul class="list-unstyled">
          <li class="mb-8">
            <!-- 第一張卡片 -->
            <div class="card col-12 mb-3 border border-top-0 border-start-0 border-end-0 rounded-0">
              <div class="row g-2 align-items-stretch">
                <div class="col-md-4 pb-4">
                  <img src="/public/images/home/liver.jpg" class="img-fluid object-fit-cover rounded-2" alt="">
                </div>
                <div class="col-md-8 pb-4 mt-0">
                  <div class="card-body d-flex flex-column justify-items-between p-3">
                    <div>
                      <p class="card-text fs-6 text-primary mb-1">#&nbsp;健康生活</p>
                      <h4 class="card-title fs-6 mb-11">CodeGuardian - 工程師顧肝必備良品：LiverCare</h4>
                    </div>
                    <div>
                      <div class="progress bg-secondary-light mb-4" style="height: 6px;">
                        <div class="progress-bar rounded-5" role="progressbar" style="width: 80%;" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex me-3">
                          <p class="fs-6 mb-0 me-1">已募資</p>
                          <p class="fs-6 fw-bold text-danger mb-0">80%</p>
                        </div>
                        <div class="d-flex">
                          <div class="d-flex me-3 align-items-center">
                            <p class="fs-6 mb-0 me-1">11</p>
                            <MessageIcon class="text-primary-dark" style="width:16px"></MessageIcon>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="mb-0 me-1">18</p>
                            <StarFull class="text-secondary pb-1" style="width:18px"></StarFull>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- 第2張卡片 -->
          <li class="mb-8">
            <div class="card col-12 mb-3 border border-top-0 border-start-0 border-end-0 rounded-0">
              <div class="row g-2 align-items-stretch">
                <div class="col-md-4 pb-4">
                  <img src="/public/images/home/liver.jpg" class="img-fluid object-fit-cover rounded-2" alt="">
                </div>
                <div class="col-md-8 pb-4 mt-0">
                  <div class="card-body d-flex flex-column justify-items-between p-3">
                    <div>
                      <p class="card-text fs-6 text-primary mb-1">#&nbsp;健康生活</p>
                      <h4 class="card-title fs-6 mb-11">CodeGuardian - 工程師顧肝必備良品：LiverCare</h4>
                    </div>
                    <div>
                      <div class="progress bg-secondary-light mb-4" style="height: 6px;">
                        <div class="progress-bar rounded-5" role="progressbar" style="width: 80%;;" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex me-3">
                          <p class="fs-6 mb-0 me-1">已募資</p>
                          <p class="fs-6 fw-bold text-danger mb-0">80%</p>
                        </div>
                        <div class="d-flex">
                          <div class="d-flex me-3 align-items-center">
                            <p class="fs-6 mb-0 me-1">11</p>
                            <MessageIcon class="text-primary-dark" style="width:16px"></MessageIcon>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="mb-0 me-1">18</p>
                            <StarFull class="text-secondary pb-1" style="width:18px"></StarFull>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- 第3張卡片 -->
          <li class="mb-8">
            <div class="card col-12 mb-3 border border-top-0 border-start-0 border-end-0 rounded-0">
              <div class="row g-2 align-items-stretch">
                <div class="col-md-4 pb-4">
                  <img src="/public/images/home/liver.jpg" class="img-fluid object-fit-cover rounded-2" alt="">
                </div>
                <div class="col-md-8 pb-4 mt-0">
                  <div class="card-body d-flex flex-column justify-items-between p-3">
                    <div>
                      <p class="card-text fs-6 text-primary mb-1">#&nbsp;健康生活</p>
                      <h4 class="card-title fs-6 mb-11">CodeGuardian - 工程師顧肝必備良品：LiverCare</h4>
                    </div>
                    <div>
                      <div class="progress bg-secondary-light mb-4" style="height: 6px;">
                        <div class="progress-bar rounded-5" role="progressbar" style="width: 80%;;" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex me-3">
                          <p class="fs-6 mb-0 me-1">已募資</p>
                          <p class="fs-6 fw-bold text-danger mb-0">80%</p>
                        </div>
                        <div class="d-flex">
                          <div class="d-flex me-3 align-items-center">
                            <p class="fs-6 mb-0 me-1">11</p>
                            <MessageIcon class="text-primary-dark" style="width:16px"></MessageIcon>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="mb-0 me-1">18</p>
                            <StarFull class="text-secondary pb-1" style="width:18px"></StarFull>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="d-flex justify-content-end align-items-center">
          <RouterLink to="/explore">
            <button
              class="btn btn-secondary-light border border-2 border-primary rounded-3 px-5 py-3 me-5 d-flex align-items-center justify-content-center btn-pr position-relative">
              <span class="px-3 d-flex justify-content-center align-items-center">
                <p class="mb-0 pe-2 fw-semibold">查看更多</p>
                <RightArrow class="fs-3" style="width:18px"></RightArrow>
              </span>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
    <!-- 專案類別 -->
    <div class="container-fluid">
      <div class="d-flex justify-content-center">
        <div class="mb-3">
          <h2 class="title-center text-center position-relative">專案類別</h2>
          <p class="fs-6 text-primary-light mb-0">Which Categories Interest You?</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
</style>

<script>
import RightArrow from '@/components/icons/RightArrow.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import StarFull from '@/components/icons/StarFull.vue';
import StarHollow from '@/components/icons/StarHollow.vue';
import MessageIcon from '@/components/icons/MessageIcon.vue';
import swiper1 from '../../components/header/VisitorHeaderAd.vue';

export default {
  components: {
    swiperiii: swiper1,
    RightArrow,
    SearchIcon,
    StarFull,
    StarHollow,
    MessageIcon,
  },
};
</script>
