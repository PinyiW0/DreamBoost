<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <button class="btn btn-outline-dark-pr px-9 d-block ms-auto mt-19 me-3 mb-4" type="button">新增</button>
        <div class="l-CardGapY">
          <div class="card bg-transparent">
            <div class="card-body bg-transparent py-3 ps-8 pe-3 border rounded d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center h-100">
                <LogoAvatar width="48" height="48" class="me-10"></LogoAvatar>
                <div class="d-flex flex-column h-100 text-white">
                  <p class="mb-0  fs-12 lh-sm mb-1">主要管理員</p>
                  <p class="mb-0  fs-5">樂樂</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card bg-transparent">
            <div class="card-body bg-transparent py-3 ps-8 pe-3 border rounded d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center h-100">
                <LogoAvatar width="48" height="48" class="me-10"></LogoAvatar>
                <div class="d-flex flex-column h-100 text-white">
                  <p class="mb-0  fs-12 lh-sm mb-1">一般管理員</p>
                  <p class="mb-0  fs-5">Eero</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="me-9">
                  <p class="mb-0 text-white fs-12">權限設定</p>
                  <div class="d-flex text-white">
                    <div class="form-check me-2">
                      <input class="form-check-input" type="checkbox" value="" id="proposalreview">
                      <label class="form-check-label fs-6" for="proposalreview">方案審核</label>
                    </div>
                    <div class="form-check me-2">
                      <input class="form-check-input" type="checkbox" value="" id="salesdata">
                      <label class="form-check-label" for="salesdata">銷售數據</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="updatebanner">
                      <label class="form-check-label" for="updatebanner">更換BN</label>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-outline-dark-pr py-3 px-9">編輯</button>
              </div>
            </div>
          </div>
          <div class="card bg-transparent">
            <div class="card-body bg-transparent py-3 ps-8 pe-3 border rounded d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center h-100">
                <LogoAvatar width="48" height="48" class="me-10"></LogoAvatar>
                <div class="d-flex flex-column h-100 text-white">
                  <p class="mb-0  fs-12 lh-sm mb-1">一般管理員</p>
                  <p class="mb-0  fs-5">Eero</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="me-9">
                  <p class="mb-0 text-white fs-12">權限設定</p>
                  <div class="d-flex text-white">
                    <div class="form-check me-2">
                      <input class="form-check-input" type="checkbox" value="" id="proposalreview">
                      <label class="form-check-label fs-6" for="proposalreview">方案審核</label>
                    </div>
                    <div class="form-check me-2">
                      <input class="form-check-input" type="checkbox" value="" id="salesdata">
                      <label class="form-check-label" for="salesdata">銷售數據</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="updatebanner">
                      <label class="form-check-label" for="updatebanner">更換BN</label>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-outline-dark-pr py-3 px-9">編輯</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 黑名單功能最後在做 -->
    <!-- <div class="row mt-28">
      <div class="col-12 col-lg-10 col-xl-8">
      </div>
    </div> -->
  </div>
</template>
<script>
import LogoAvatar from '@/components/icons/AdministratorIcon.vue';

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    LogoAvatar,
  },
};
</script>
<style scoped lang="scss">
/* 在管理員card中間增加間隔 */
.l-CardGapY {
  .card+.card {
    margin-top: 20px;
  }
}

/* 覆蓋bootstrap樣式 */
.form-check-input:checked {
  background-color: var(--bs-dark-pr);
}

.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='71' height='54' fill='none' viewBox='0 0 71 54'%3e%3cpath fill='%23333' d='M23.002 42.8 6.202 26l-5.6 5.6 22.4 22.4 48-48-5.6-5.6-42.4 42.4Z'/%3e%3c/svg%3e");
  background-position: center center;
  background-size: 80%;
}
</style>
