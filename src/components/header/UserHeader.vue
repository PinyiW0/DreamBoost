<template>
  <nav class="navbar navbar-expand-md container-fluid border-bottom border-primary-light shadow-sm">
    <div class="container d-flex justify-content-between align-items-center">
      <RouterLink to="/home">
        <a href="">
          <img class="img-fluid" src="/public/images/header/mainLogo.svg" alt="首頁">
        </a>
      </RouterLink>
      <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
        </span>
      </button>
      <div class="collapse navbar-collapse d-md-flex justify-content-lg-between" id="navbarSupportedContent">
        <ul class="navbar-nav ms-0 ms-md-20 mb-2 mb-md-0">
          <li class="nav-item">
            <RouterLink to="/explore" aria-current="page"
              class="nav-link active text-center fs-18 fs-lg-5 me-6 router-link-active RoterLink py-4 py-md-0 py-lg-4">
              探索
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/launch"
              class="nav-link me-6 router-link-active text-center fs-18 fs-lg-5 RoterLink py-4 py-md-0 py-lg-4">
              發起專案
            </RouterLink>
          </li>
          <li class="nav-item d-block d-lg-none">
            <RouterLink to="/member"
              class="nav-link me-6 router-link-active text-center fs-18 fs-lg-5 RoterLink py-4 py-md-0 py-lg-4">
              會員中心
            </RouterLink>
          </li>
        </ul>
        <div class="d-lg-inline-flex justify-content-center align-items-center d-none d-lg-block">
          <div class="dropdown">
            <button class="btn border-0 dropdown-toggle d-flex align-items-center px-8" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img
              src="/images/home/userIcon36.svg"
              class="img-fluid me-3 rounded-5"
              style="max-width: 36px;"
              alt="會員頭貼">
              <p class="mb-0"> DreamBoost, 您好</p>
            </button>
            <ul class="dropdown-menu ms-8">
              <li><a class="dropdown-item text-center" href="#">個人頁面</a></li>
              <li><hr class="dropdown-divider mx-6"></li>
              <li><a class="dropdown-item text-center" href="#">專案收藏</a></li>
              <li><a class="dropdown-item text-center" href="#">贊助紀錄</a></li>
              <li><a class="dropdown-item text-center" href="#">提案紀錄</a></li>
              <li><a class="dropdown-item text-center" href="#">最新通知</a></li>
              <li><hr class="dropdown-divider mx-6 mb-7"></li>
              <li>
                <button class="dropdown-item text-center mb-1">
                  <span class="px-9 py-2 position-relative border border-2 border-primary text-primary rounded-3">登出</span>
                </button>
              </li>
            </ul>
          </div>
          <span class="mt-1">
            <button class="btn btn-outline-primary border-2 btn-search p-3">
              <SearchIcon class="fs-3" style="width:24px"></SearchIcon>
            </button>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.btn-logout{
  color: var(--bs-primary);
  background-color: var(--bs-secdonary)!important;
  z-index: 1500;

    &:hover {
      color:  var(--bs-white);
        background-color: var(--bs-primary);
    }

    &:hover::after {
      top: 0px;
      left: 0px;
      transition: top 0.3s, left 0.3s;
    }

    &::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 8px;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border-radius: 8px;
      background-color: var(--bs-primary);
      z-index: -9999;
    }
}
</style>

<script>
import SearchIcon from '@/components/icons/SearchIcon.vue';

export default {
  components: {
    SearchIcon,
  },
};
</script>
