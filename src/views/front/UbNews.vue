<template>
  <main>
    <section class="container">
      <div class="rounded-3 py-14 px-20 my-20 shadow">
        <!-- 標題 -->
        <div class="d-flex flex-column mb-7">
          <h1 class="fs-3 text-primary mb-0">最新通知</h1>
          <p class="fs-6 text-primary-light mb-0">News for you</p>
        </div>
        <!-- 最新消息區 -->
        <div>
          <div class="accordion p-4 pb-11 border border-primary-light rounded-3" id="accordionExample">
            <div class="accordion-item border-0 border-bottom border-primary-light rounded-0">
              <h2 class="accordion-header">
                <button class="accordion-button bg-transparent text-primary shadow-none" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  恭喜獲得 100 元優惠券！
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  恭喜成為 DreamBoost 的新會員，獲得 100 元優惠券，快去看看有甚麼新夢想吧！
                  <p class="fs-6 text-gray-500 mt-6 mb-0">2024.03.10</p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 border-bottom border-primary-light rounded-0">
              <h2 class="accordion-header">
                <button class="accordion-button bg-transparent text-primary shadow-none collapsed" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  DreamBoost 又推出了新夢想吧，一起來看看吧！
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  快來逛逛新夢想吧！
                  <p class="fs-6 text-gray-500 mt-6 mb-0">2024.03.11</p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column mt-5">
            <button
              type="button"
              class="btn border-0 angle-down">
              <span class="d-flex flex-column align-items-center fs-5 fw-blod">載入更多
              <AnglesDown class="mb-0" style="width: 18px;"></AnglesDown>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- footer 區域 -->
  <UserFooter></UserFooter>
</template>

<style lang="scss">
.angle-down {
  :hover {
    color: var(--bs-primary);
  }
}
</style>

<script>
import UserFooter from '@/components/footer/UserFooter.vue';
import AnglesDown from '@/components/icons/AnglesDown.vue';

export default {
  components: {
    UserFooter,
    AnglesDown,
  },
};

</script>
