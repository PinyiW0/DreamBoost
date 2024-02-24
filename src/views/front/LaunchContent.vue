<template>
  <LaunchNav current-page="專案內容" />
  <div class="container">
    <form class="col-lg-8 mx-auto mb-24 text-gray-700">
      <div class="mb-14">
        <label for="content" class="form-label lh-md lterSpc-2">
          專案內容
          <span class="text-danger"> * </span>
        </label>
        <p class="fs-6">
          請提供 JPEG 或 PNG 檔，圖片尺寸至少 1200x 800 px (3:2)； 2MB 以內。
        </p>
        <Ckeditor
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
          tag-name="textarea"
        />
      </div>
      <div>
        <div class="d-flex justify-content-between align-items-center mb-6">
          <p class="mb-0 lh-md lterSpc-2">常見問題</p>
          <a
            href="#"
            class="btn btn-primary px-7 d-flex gap-2 align-items-center"
          >
            增加常見問題
            <i style="width: 16px; height: 16px; margin-top: -12px">
              <PlusIcon />
            </i>
          </a>
        </div>
        <ul class="list-unstyled">
          <li>
            <div class="card px-4 px-md-9 px-lg-11 py-10 mb-11">
              <a href="#" class="ms-auto link-dark link-opacity-50-hover">
                <i class="d-block" style="width: 24px">
                  <XmarkIcon />
                </i>
              </a>
              <div class="mb-3">
                <label for="question" class="form-label mb-3">問題</label>
                <textarea
                  name="question"
                  id="question"
                  class="form-control"
                  rows="5"
                  placeholder="請在50個字以內輸入此專案的常見問題"
                ></textarea>
              </div>
              <div class="">
                <label for="answer" class="form-label mb-3">回覆答案</label>
                <textarea
                  name="answer"
                  id="answer"
                  class="form-control"
                  rows="10"
                  placeholder="請在500個字以內輸入上述問題的正確回覆答案"
                ></textarea>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="row justify-content-end g-6">
        <div class="col-md-4 col-lg-5 col-xl-4">
          <button type="button" class="btn btn-primary-light w-100">
            上一步
          </button>
        </div>
        <div class="col-md-4 col-lg-5 col-xl-4">
          <button type="button" class="btn btn-primary w-100">下一步</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh';

import LaunchNav from '@/components/launch/LaunchNav.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import XmarkIcon from '@/components/icons/XmarkIcon.vue';

import imageUploadAdapter from '@/js/imageUploadAdapter';

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
        placeholder: '請輸入提案內容....',
        language: 'zh',
        extraPlugins: [imageUploadAdapter],
      },
    };
  },

  components: {
    LaunchNav,
    PlusIcon,
    XmarkIcon,
    Ckeditor: CKEditor.component,
  },
};
</script>

<style lang="scss">
.ck-editor__editable_inline:not(.ck-comment__input *) {
  min-height: 350px;
}
</style>
