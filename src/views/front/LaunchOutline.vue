<template>
  <LaunchNav current-page="專案大綱" />
  <div class="container mb-26">
    <div class="col-xl-8 mx-auto">
      <form class="row align-items-center">
        <div class="col-12 mb-10">
          <div class="mb-2">
            <label
              for="file"
              class="form-label mb-0 text-gray-800 fs-5 fw-normal"
            >
              專案封面
              <span class="text-danger"> * </span>
            </label>
          </div>
          <p class="mb-0 fs-6">
            請提供 JPEG 或 PNG 檔，圖片尺寸至少 1200x 800 px (3:2)； 2MB 以內。
          </p>
          <label
            for="file"
            class="btn btn-primary-light d-flex justify-content-center align-items-center text-gray-700 fs-6 rounded-0"
          >
            上傳封面照片
          </label>
          <input type="file" id="file" class="form-control d-none" />
        </div>
        <div class="col-12 mb-11">
          <div class="row gy-3">
            <div class="col-md-6 col-lg-3">
              <label for="start-time" class="form-label lh-md">
                專案開始時間
                <span class="text-danger"> * </span>
              </label>
              <input
                type="date"
                class="form-control border-primary-light"
                id="start-time"
                placeholder="name@example.com"
              />
            </div>
            <div class="col-md-6 col-lg-3">
              <label for="end-time" class="form-label lh-md">
                專案結束時間
                <span class="text-danger"> * </span>
              </label>
              <input
                type="date"
                class="form-control border-primary-light"
                id="end-time"
                placeholder="name@example.com"
              />
            </div>
            <div class="col-lg-6">
              <p class="py-7 px-4 bg-bgc-paper fs-6 rounded-4 mb-0 lh-sm">
                專案提交後需要七個工作天進行內容檢視，所以開始時間至少為 7
                天後。募資天數最短為 7 天，最長為 60 天。系統預設募資開始時間為
                12:00，結束時間為
                23:59:59，如需調整請於提交後與您的專案經理討論。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-5 align-self-start">
          <div class="mb-7">
            <label for="title" class="form-label lh-md lterSpc-2">
              專案標題
              <span class="text-danger"> * </span>
            </label>
            <input
              type="email"
              class="form-control border-primary-light fs-6"
              id="title"
              placeholder="40個字以內的標題"
            />
          </div>
          <div class="mb-7">
            <label for="category" class="form-label lh-md lterSpc-2">
              專案類別
              <span class="text-danger"> * </span>
            </label>
            <select
              type="email"
              class="form-control border-primary-light fs-6"
              id="category"
            >
              <option value="" disabled selected>請選擇一種類別</option>
              <option value="">科技</option>
              <option value="">社群</option>
            </select>
          </div>
          <div class="mb-7">
            <label for="target" class="form-label lh-md lterSpc-2">
              募資目標
              <span class="text-danger"> * </span>
            </label>
            <input
              type="email"
              class="form-control mb-2 border-primary-light fs-6"
              id="target"
              placeholder="5000"
            />
            <p class="fs-6 mb-0 text-gray-300">
              募資目標金額最低為 $5,000
              元。設定目標金額時，除了考量專案執行的成本支出外，也必須考慮回饋項目的成本，總體而言必須滿足「最低計畫可執行資金」的門檻，才是合理的募資目標。
            </p>
          </div>
          <div class="mb-7">
            <label for="summary" class="form-label lh-md lterSpc-2">
              內容摘要
              <span class="text-danger"> * </span>
            </label>
            <textarea
              type="email"
              class="form-control border-primary-light fs-6"
              id="summary"
              placeholder="請在65個字以內簡短描述專案內容，吸引瀏覽者點擊你的專案"
              rows="6"
            />
          </div>
        </div>
        <div class="col-md-6 mx-auto">
          <p class="mb-7">專案卡片預覽</p>
          <div class="card py-9 px-7 mb-16 border-2 border-primary">
            <img
              src="https://fakeimg.pl/350x250"
              class="card-img-top rounded-2 mb-12"
              alt="..."
            />
            <div class="card-body p-0">
              <span class="fs-6 text-primary">#類別</span>
              <h3 class="card-title mb-7 fs-5 fw-semibold text-gray-700">
                產品名稱
              </h3>
              <h4
                class="d-flex align-items-center gap-3 mb-7 fw-normal text-gray-600 fs-5"
              >
                <span
                  class="d-flex justify-content-center align-items-center bg-primary rounded-circle"
                  style="width: 35px; height: 35px"
                >
                  <img
                    src="/images/logoWhite.png"
                    class="img-fluid"
                    alt="DreamBoost Logo"
                  />
                </span>
                發起人：Andrea Blanchard
              </h4>
              <div
                class="progress mb-7"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar bg-secondary-light text-black"
                  style="width: 100%"
                >
                  100%
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0 fs-5">已募資1000%</p>
                <div class="d-flex align-items-center gap-3">
                  <span class="d-flex gap-1"
                    >11
                    <i
                      class="d-block text-primary"
                      style="width: 13px; margin-top: -1px"
                    >
                      <MessageIcon />
                    </i>
                  </span>
                  <span class="d-flex gap-1">
                    18
                    <i
                      class="d-block text-secondary-dark"
                      style="width: 15px; margin-top: -2px"
                    >
                      <StarFull />
                    </i>
                  </span>
                </div>
                <i class="d-block" style="width: 20px">
                  <ShareIcon />
                </i>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-100">下一步</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LaunchNav from '@/components/launch/LaunchNav.vue';
import ShareIcon from '@/components/icons/ShareIcon.vue';
import MessageIcon from '@/components/icons/MessageIcon.vue';
import StarFull from '@/components/icons/StarFull.vue';

export default {
  components: {
    LaunchNav,
    ShareIcon,
    MessageIcon,
    StarFull,
  },
};
</script>
