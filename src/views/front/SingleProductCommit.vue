<template>
  <section class="container py-14 mb-16">
    <div class="row gy-10">
      <div class="col-lg-8">
        <p class="mb-8 py-6 text-center text-primary-dark lh-md bg-bgc-default rounded-2">
          成為 DreamBoost 會員才能留言。如有專案相關問題，請聯絡提案人團隊。
        </p>
        <ul class="mb-9 p-7 border border-primary rounded-3 list-unstyled">
          <li class="mb-6">
            <div class="d-flex align-items-center column-gap-7 mb-6">
              <div
                class="d-flex justify-content-center align-items-center bg-primary rounded-circle"
                style="width: 60px; height: 60px"
              >
                <img
                  class="img-fluid"
                  src="/images/logo-lg.png"
                  alt=""
                  style="width: 40px; height: 32px"
                />
              </div>
              <div>
                <div class="d-flex align-items-center column-gap-2 mb-1">
                  <h3 class="mb-0 fs-4">Andrea blanchard</h3>
                  <span
                    class="badge px-3 rounded-pill border border-primary bg-secondary-light text-primary fw-normal"
                  >
                    贊助人
                  </span>
                </div>
                <p class="mb-0 fs-6 text-gray-400">
                  2024 年 02 月 14 日 13 : 10
                </p>
              </div>
            </div>
            <p class="mb-0">請問我的訂單何時會確認呢？</p>
          </li>
          <li class="mb-6 px-6 py-7 bg-bgc-paper rounded-3">
            <div class="d-flex align-items-center column-gap-7 mb-6">
              <div
                class="d-flex justify-content-center align-items-center bg-primary rounded-circle"
                style="width: 60px; height: 60px"
              >
                <img
                  class="img-fluid"
                  src="/images/logo-lg.png"
                  alt=""
                  style="width: 40px; height: 32px"
                />
              </div>
              <div>
                <div class="d-flex align-items-center column-gap-2 mb-1">
                  <h3 class="mb-0 fs-4">樂樂許願池</h3>
                  <span
                    class="badge px-3 rounded-pill border border-primary bg-secondary-light text-primary fw-normal"
                  >
                    提案人
                  </span>
                </div>
                <p class="mb-0 fs-6 text-gray-400">
                  2024 年 02 月 14 日 13 : 10
                </p>
              </div>
            </div>
            <p class="mb-0">
              您好，贊助後不含國定假日後 5
              個工作天會確認完畢，再麻煩請您耐心等候通知，感謝您
            </p>
          </li>
        </ul>
        <div class="text-end">
          <button
            type="button"
            class="btn btn-primary w-100 w-lg-auto"
            data-bs-toggle="modal"
            data-bs-target="#commit"
          >
            新增留言
          </button>
        </div>
      </div>
      <div class="col-lg-4 text-center">
        <a href="https://www.hexschool.com/courses/vue-training.html">
          <img class="img-fluid object-fit-cover" src="/images/explore/ad.png" alt="六角學院廣告" />
        </a>
      </div>
    </div>
  </section>
  <div
    class="modal fade"
    id="commit"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header flex-column border-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <label
            for="commitArea"
            class="form-label w-100 fs-2 text-gray-700 text-center"
          >
            輸入留言
          </label>
          <textarea class="form-control" id="commitArea" rows="10"></textarea>
        </div>
        <div class="modal-footer flex-column justify-content-center border-0">
          <button type="button" class="btn btn-primary mb-9">送出</button>
          <span class="fs-6 text-primary-light">@DreamBoost</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
};
</script>
