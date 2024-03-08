<template>
  <!-- 頁面區塊 -->
  <div class="bg-bgc-paper py-8">
    <nav class="container">
      <ul class="nav justify-content-md-center gap-19">
        <li class="nav-item">
          <RouterLink :to="`/userboard/${userId}/personal`" class="userbd-link">
            個人頁面
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="`/userboard/${userId}/favorite`" class="userbd-link">
            收藏專案
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="`/userboard/${userId}/sponsorrecord`" class="userbd-link">
            贊助紀錄
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="`/userboard/${userId}/proposalrecord`" class="userbd-link">
            提案紀錄
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="`/userboard/${userId}/news`" class="userbd-link">
            最新通知
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
  <RouterView />
</template>

<style lang="scss">
.userbd-link {
  position: relative;
  padding-top: 8px;
  padding-bottom: 8px;
  color: var(--bs-gray-600);
  font-weight: medium;
  line-height: 1.5;

  &.active,
  &:hover {
    color: var(--bs-primary) !important;
    font-weight: bold;
  }

  &.active::before,
  &::after {
    position: absolute;
    content: '';
    height: 2px;
    width: 120%;
    background-color: var(--bs-primary);
    top: 100%;
    left: -10%;
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

<script>
export default {
  data() {
    return {
      userId: localStorage.getItem('userID'),
    };
  },
};
</script>
