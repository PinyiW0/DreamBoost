<template>
  <header>
    <VisitorHeaderAd />
    <nav class="navbar navbar-expand-md container-fluid border-bottom border-primary-light shadow-sm">
      <div class="container d-flex justify-content-between align-items-center">
        <RouterLink to="/">
          <img class="img-fluid" src="/images/header/mainLogo.svg" alt="首頁">
        </RouterLink>
        <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>
        <div class="collapse navbar-collapse d-md-flex justify-content-lg-between" id="navbarSupportedContent"
          ref="userHeader">
          <ul class="navbar-nav ms-0 ms-md-20 mb-2 mb-md-0">
            <li class="nav-item">
              <RouterLink to="/explore" aria-current="page"
                class="nav-link text-center fs-18 fs-lg-5 me-6 router-link-active RoterLink py-4 py-md-0 py-lg-4">
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
              <RouterLink to="/userboard/user/personal"
                class="nav-link me-6 router-link-active text-center fs-18 fs-lg-5 RoterLink py-4 py-md-0 py-lg-4">
                會員中心
              </RouterLink>
            </li>
          </ul>
          <div class="d-lg-inline-flex justify-content-center align-items-center d-none d-lg-block">
            <div class="dropdown">
              <button class="btn border-0 dropdown-toggle d-flex align-items-center px-8" type="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img :src="userInfo.userAvatarImage" class="img-fluid me-3 rounded-5 border" style="max-width: 44px;"
                  alt="會員頭貼">
                <p class="mb-0">夢想家您好</p>
              </button>
              <ul class="dropdown-menu ms-8">
                <li>
                  <RouterLink :to="`/userboard/${userId}/personal`" class="dropdown-item text-center">
                    個人頁面
                  </RouterLink>
                </li>
                <li>
                  <hr class="dropdown-divider mx-6">
                </li>
                <li>
                  <RouterLink :to="`/userboard/${userId}/favorite`" class="dropdown-item text-center">
                    專案收藏
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="`/userboard/${userId}/sponsorrecord`" class="dropdown-item text-center">
                    贊助紀錄
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="`/userboard/${userId}/proposalrecord`" class="dropdown-item text-center">
                    提案紀錄
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="`/userboard/${userId}/news`" class="dropdown-item text-center">
                    最新通知
                  </RouterLink>
                </li>
                <li>
                  <hr class="dropdown-divider mx-6 mb-7">
                </li>
                <li>
                  <button @click.prevent="logout" class="dropdown-item text-center mb-1">
                    <span class="px-9 py-2 position-relative border border-2 border-primary text-primary rounded-3">
                      登出
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <span class="mt-1 d-none">
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
import VisitorHeaderAd from '@/components/header/VisitorHeaderAd.vue';
import MixinSwalToast from '@/mixins/mixinSwalToast';
import MixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      userHeader: null,
      userInfo: {
        userTelephone: '09123456789',
        userGender: '',
        userAvatarImage: '',
        userBirthday: '',
        customizeProperty: {
          contactEmail: '',
        },
      },
    };
  },
  watch: {
    $route() {
      this.userHeader.hide();
    },
  },
  methods: {
    getUserData() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      this.$http.get(`${VITE_URL}/dreamboost/user/normal/userprofile`)
        .then((res) => {
          if (res.data.success) {
            this.userInfo = res.data.data.result;
          } else {
            console.error('更新使用者資料失敗：', res.data.message);
          }
        })
        .catch(() => {
        });
    },
    logout() {
      Swal.fire({
        title: '確定要登出嗎？',
        icon: 'question',
        allowOutsideClick: false,
        showCancelButton: true,
        buttonsStyling: true,
        confirmButtonText: '確認',
        cancelButtonText: '取消',
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.showFullScreenLoading({ canCancel: false, opacity: 0.8 });
            document.cookie = 'db=';
          }
          this.addToast({ content: '登出成功', timer: 2000 });
          this.$router.push({ name: 'home' });
          this.hideFullScreenLoading();
          if (result.isDismissed) {
            this.addToast({ content: '取消登出', style: 'info' });
          }
        })
        .catch(() => {
          this.addToast({ content: '登出過程出現錯誤', style: 'error' });
        });
      this.$emit('logout');
      this.$router.push({ name: 'home' });
      document.cookie = ' db=';
    },
  },
  mixins: [MixinFullScreenLoading, MixinSwalToast],
  props: ['userId'],
  mounted() {
    this.getUserData();
    // 將 Collapse 實體化，設定一開始的 toggle 為 false，選單在一開始維持折疊狀態
    this.userHeader = new this.$bs.Collapse(this.$refs.userHeader, { toggle: false });
  },
  beforeUnmount() {
    // 清理 Collapse 實例
    if (this.userHeader) {
      this.userHeader.dispose();
    }
  },
  components: {
    SearchIcon,
    VisitorHeaderAd,
  },
};
</script>
