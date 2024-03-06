<template>
  <LaunchNav current-page="專案內容" />
  <main class="container">
    <!-- 表單 -->
    <VForm
      class="col-lg-8 mx-auto mb-24 text-gray-700"
      v-slot="{ errors }"
      @submit="$router.push('/launch/data')"
    >
      <div class="mb-14">
        <p class="form-label lh-md lterSpc-2">
          專案內容
          <span class="text-danger"> * </span>
        </p>
        <p class="fs-6">
          請提供 JPEG 或 PNG 檔，圖片尺寸至少 1200x 800 px (3:2)； 2MB 以內。
        </p>
        <VField
          type="text"
          id="content"
          name="專案內容"
          class="form-control py-3 d-none"
          :class="{ 'is-invalid': errors['專案內容'] }"
          v-model="launchData.proposalArticle"
          rules="required"
        >
        </VField>
        <Ckeditor
          :editor="editor"
          v-model="launchData.proposalArticle"
          :config="editorConfig"
        />
        <ErrorMessage class="invalid-feedback" name="專案內容"></ErrorMessage>
      </div>
      <div>
        <div class="d-flex justify-content-between align-items-center mb-6">
          <p class="mb-0 lh-md lterSpc-2">常見問題</p>
          <button
            type="button"
            class="btn btn-primary px-7 d-flex gap-2 align-items-center"
            @click="addFaq"
          >
            增加常見問題
            <i style="width: 16px; height: 16px; margin-top: -12px">
              <PlusIcon />
            </i>
          </button>
        </div>
        <ul
          class="list-unstyled"
          v-for="(faq, index) in launchData.proposalFAQs"
          :key="faq.id"
        >
          <li>
            <div class="card px-4 px-md-9 px-lg-11 py-10 mb-11">
              <button
                type="button"
                class="bg-transparent border-0 ms-auto link-dark link-opacity-50-hover"
                @click="deleteFaq(index)"
              >
                <i class="d-block" style="width: 24px">
                  <XmarkIcon />
                </i>
              </button>
              <div class="mb-3">
                <label :for="`question + ${index}`" class="form-label mb-3"
                  >問題
                </label>
                <textarea
                  name="question"
                  :id="`question + ${index}`"
                  class="form-control"
                  rows="5"
                  placeholder="請在50個字以內輸入此專案的常見問題"
                  v-model="faq.question"
                ></textarea>
              </div>
              <div class="">
                <label :for="`answer + ${index}`" class="form-label mb-3"
                  >回覆答案
                </label>
                <textarea
                  name="answer"
                  :id="`answer + ${index}`"
                  class="form-control"
                  rows="10"
                  placeholder="請在500個字以內輸入上述問題的正確回覆答案"
                  v-model="faq.answer"
                ></textarea>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="row justify-content-end g-6">
        <div class="col-md-4 col-lg-5 col-xl-3">
          <button
            type="button"
            class="btn btn-primary-light px-0 w-100"
            @click="$router.go(-1)"
          >
            上一步
          </button>
        </div>
        <div class="col-md-4 col-lg-5 col-xl-3">
          <button type="submit" class="btn btn-primary px-0 w-100">
            下一步
          </button>
        </div>
      </div>
    </VForm>
  </main>
</template>

<script>
// CkEditor 5 載入
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh';
// pinia 載入
import { mapWritableState, mapActions } from 'pinia';
import launchStore from '@/stores/launchStore';
// 驗證載入
import mixinVeeValidate from '@/mixins/mixinVeeValidate';
// 元件載入
import LaunchNav from '@/components/launch/LaunchNav.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import XmarkIcon from '@/components/icons/XmarkIcon.vue';

// 上傳圖片連接器
import imageUploadAdapter from '@/assets/js/imageUploadAdapter';

export default {
  mixins: [mixinVeeValidate],
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        placeholder: '請輸入提案內容....',
        language: 'zh',
        extraPlugins: [imageUploadAdapter],
      },
    };
  },

  methods: {
    ...mapActions(launchStore, ['postLaunch']),

    addFaq() {
      this.launchData.proposalFAQs.push({
        id: new Date().getTime(),
        question: '',
        answer: '',
      });
    },

    deleteFaq(index) {
      this.launchData.proposalFAQs.splice(index, 1);
    },
  },

  computed: {
    ...mapWritableState(launchStore, ['launchData']),
  },

  components: {
    Ckeditor: CKEditor.component,
    LaunchNav,
    PlusIcon,
    XmarkIcon,
  },
};
</script>
