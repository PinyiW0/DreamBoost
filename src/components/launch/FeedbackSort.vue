<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="sortModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content overflow-hidden">
        <div class="modal-header flex-column row-gap-3 border-0">
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeModal"
          ></button>
          <h1 class="modal-title fs-3 text-primary fw-normal">自訂回饋排序</h1>
          <ul class="list-style-lg-inside text-lg-center">
            <li>
              限量或限時設定提高回饋項目吸引力，透過排序提升特定項目曝光度
            </li>
            <li>
              已滿額或到期的回饋會被置底至「已額滿項目」區塊，停止排序，不影響其他可贊助回饋的能見度
            </li>
          </ul>
        </div>
        <div
          class="modal-body mx-xl-7 py-lg-17 px-lg-26 border-2 border-top border-primary-light text-gray-800"
        >
          <p class="mb-10 text-gray-600 fw-bold">可自訂排序</p>
          <div class="text-nowrap overflow-auto">
            <table class="table mb-16 border-gray-700 text-center">
              <thead>
                <tr>
                  <td>回饋金額</td>
                  <td>回饋敘述</td>
                  <td>數量限制</td>
                  <td>時間限制</td>
                </tr>
                <tr style="height: 28px"></tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border border-end-0 border-gray-600 rounded-start-2 bg-bgc-paper"
                    >
                      $100
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border-top border-bottom border-gray-600 bg-bgc-paper"
                    >
                      單純贊助，不需回饋
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border-top border-bottom border-gray-600 bg-bgc-paper"
                    >
                      無
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border border-start-0 border-gray-600 rounded-end-2 bg-bgc-paper"
                    >
                      無
                    </p>
                  </td>
                </tr>
                <tr style="height: 12px"></tr>
                <tr>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border border-end-0 border-gray-600 rounded-start-2 bg-bgc-paper"
                    >
                      $100
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border-top border-bottom border-gray-600 bg-bgc-paper"
                    >
                      單純贊助，不需回饋
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border-top border-bottom border-gray-600 bg-bgc-paper"
                    >
                      無
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border border-start-0 border-gray-600 rounded-end-2 bg-bgc-paper"
                    >
                      無
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mb-10 text-gray-600 fw-bold">已額滿/到期回饋（不可排序）</p>
          <div class="text-nowrap overflow-auto">
            <table class="table mb-17 border-gray-700 text-center">
              <thead>
                <tr>
                  <td>回饋金額</td>
                  <td>回饋敘述</td>
                  <td>數量限制</td>
                  <td>時間限制</td>
                </tr>
                <tr style="height: 28px"></tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border border-end-0 border-gray-600 rounded-start-2 bg-gray-400 opacity-75"
                    >
                      $100
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border-top border-bottom border-gray-600 bg-gray-400 opacity-75"
                    >
                      單純贊助，不需回饋
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border-top border-bottom border-gray-600 bg-gray-400 opacity-75"
                    >
                      無
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border border-start-0 border-gray-600 rounded-end-2 bg-gray-400 opacity-75"
                    >
                      無
                    </p>
                  </td>
                </tr>
                <tr style="height: 12px"></tr>
                <tr>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border border-end-0 border-gray-600 rounded-start-2 bg-gray-400 opacity-75"
                    >
                      $100
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border-top border-bottom border-gray-600 bg-gray-400 opacity-75"
                    >
                      單純贊助，不需回饋
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border-top border-bottom border-gray-600 bg-gray-400 opacity-75"
                    >
                      無
                    </p>
                  </td>
                  <td class="p-0 border-0">
                    <p
                      class="mb-0 py-3 border border-start-0 border-gray-600 rounded-end-2 bg-gray-400 opacity-75"
                    >
                      無
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="d-flex flex-column flex-lg-row justify-content-between row-gap-4"
          >
            <div class="d-flex flex-column flex-lg-row gap-4">
              <button type="button" class="btn btn-primary-light px-7 w-100">
                依新增時間排序
              </button>
              <button type="button" class="btn btn-primary-light px-7 w-100">
                依金額高地排序
              </button>
            </div>
            <div class="d-flex flex-column flex-lg-row gap-4">
              <button
                type="button"
                class="btn btn-gray-600 px-4"
                @click="closeModal"
              >
                放棄修改
              </button>
              <button type="button" class="btn btn-primary px-5">
                儲存並關閉
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortModal: null,
    };
  },

  methods: {
    openModal() {
      this.sortModal.show();
    },

    closeModal() {
      this.sortModal.hide();
    },
  },

  mounted() {
    this.sortModal = new this.$bs.Modal(this.$refs.sortModal, {
      backdrop: 'static',
    });
  },
};
</script>
