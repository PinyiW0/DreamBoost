<template>
  <header>
    <VisitorHeaderAd2 />
    <nav class="navbar navbar-expand-md container-fluid border-bottom border-primary-light shadow-sm">
      <div class="container d-flex justify-content-between align-items-center">
        <RouterLink to="/home">
          <a href="">
            <img class="img-fluid" src="/public/images/header/mainLogo.svg" alt="首頁">
          </a>
        </RouterLink>
        <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-md-0">
            <li class="nav-item">
              <RouterLink to="/explore" aria-current="page" class="nav-link text-center fs-18 fs-lg-5 me-6 router-link-active RoterLink py-4 py-md-0 py-lg-4">
                探索
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/launch" class="nav-link me-6 router-link-active text-center fs-18 fs-lg-5 RoterLink py-4 py-md-0 py-lg-4">
                發起專案
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/member" class="nav-link me-6 router-link-active text-center fs-18 fs-lg-5 RoterLink py-4 py-md-0 py-lg-4">
                註冊登入
              </RouterLink>
            </li>
          </ul>
          <div class="d-lg-inline-flex justify-content-center align-items-center d-none d-lg-block">
            <RouterLink to="/explore">
              <button
                class="btn btn-secondary-light border border-2 border-primary rounded-3 px-5 py-3 me-5 d-flex align-items-center justify-content-center btn-pr position-relative">
                <span class="d-flex justify-content-center align-items-center">
                  <p class="mb-0 pe-2 fw-semibold text-nowrap">一起追夢</p>
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
      </div>
    </nav>
  </header>
</template>

<script>
import RightArrow from '@/components/icons/RightArrow.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import VisitorHeaderAd2 from '@/components/header/VisitorHeaderAd2.vue';

export default {
  components: {
    SearchIcon,
    RightArrow,
    VisitorHeaderAd2,
  },
};
</script>
