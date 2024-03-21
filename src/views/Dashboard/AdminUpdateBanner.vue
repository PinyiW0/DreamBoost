<template>
  <div class="container mt-20">
    <div class="row">
      <div class="col-12">
        <p class="text-white text-center fs-3 mb-0">即時預覽</p>
        <RealtimeBannerPreview :banner-data="bannerAry"></RealtimeBannerPreview>
      </div>
    </div>
    <div class="row justify-content-center mt-21">
      <div class="col-12 col-lg-10">
        <template v-if="bannerAry">
          <UpdateBannerImgCard
          v-for="(item,index) in bannerAry"
          :key="`${index}-img`"
          :img-url="item.imgUrl"
          :is-first="index===0"
          :is-last="index===bannerAry.length-1"
          @remove="removePhoto(index)"
          @move-up="movePhotoUp(index)"
          @move-down="movePhotoDown(index)"
          >
          </UpdateBannerImgCard>
        </template>
        <div class="px-10 text-end">
          <button type="button" href="#"
          class="btn btn-dark-pr mt-9 ms-auto py-5 px-11"
          @click.prevent="uploadNewPicture" >
            <CameraIcon width="28" height="28"></CameraIcon>
            <span class="ms-2">新增封面照片</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';
import mixinSwalToast from '@/mixins/mixinSwalToast';
import Swal from 'sweetalert2';
import _ from 'lodash';

import UpdateBannerImgCard from '@/components/dashboard/UpdateBannerImgCard.vue';
import CameraIcon from '@/components/icons/DashboardCameraIcon.vue';
import RealtimeBannerPreview from '@/components/dashboard/RealtimeBannerPreview.vue';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      bannerAry: [],
    };
  },
  methods: {
    getBannerData() {
      this.showFullScreenLoading({ canCancel: false, loader: 'dots' });
      const url = `${import.meta.env.VITE_URL}/dreamboost/banner/guest/banner`;
      this.$http.get(url)
        .then((response) => {
          this.bannerAry = response.data.data.result;
          this.hideFullScreenLoading();
          this.addToast({ content: '取得Banner圖片資料完成。' });
        })
        .catch(() => {
          this.hideFullScreenLoading();
          this.addToast({ content: '取得Banner圖片過程出現錯誤。', style: 'error' });
        });
    },
    // 使用lodash調整觸發頻率,debounce內不可以使用箭頭函式否則無法抓到this.updateBannerDataImmediate
    updateBannerDataDebounced: _.debounce(function foo() {
      this.updateBannerDataImmediate();
    }, 1000),
    updateBannerDataImmediate() {
      this.showFullScreenLoading({ canCancel: false, loader: 'dots' });
      const bannerPostPath = `${VITE_URL}/dreamboost/banner/admin/banner`;
      this.$http.post(bannerPostPath, { bannerUrlArray: this.bannerAry })
        .then(() => {
          this.hideFullScreenLoading();
          this.addToast({ content: '已更新首頁Banner圖片', style: 'success' });
          this.getBannerData();
        })
        .catch(() => {
          this.hideFullScreenLoading();
          this.addToast({ content: '更新或上傳圖片過程出現錯誤', style: 'warning' });
        });
    },
    removePhoto(removeindex) {
      Swal.fire({
        title: '確認移除？',
        icon: 'warning',
        allowOutsideClick: false,
        showCancelButton: true,
        buttonsStyling: true,
        confirmButtonText: '確認',
        cancelButtonText: '取消',
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.bannerAry.splice(removeindex, 1); // 移除指定索引位置的圖片
            this.updateBannerDataImmediate();
          }
        });
    },
    movePhotoUp(index) {
      if (index > 0) {
        const temp = this.bannerAry[index];
        this.bannerAry.splice(index, 1); // 先將該圖片從陣列中移除
        this.bannerAry.splice(index - 1, 0, temp); // 在上一個位置插入該圖片
      }
      this.updateBannerDataDebounced();
    },
    movePhotoDown(index) {
      if (index < this.bannerAry.length - 1) {
        const temp = this.bannerAry[index];
        this.bannerAry.splice(index, 1); // 先將該圖片從陣列中移除
        this.bannerAry.splice(index + 1, 0, temp); // 在下一個位置插入該圖片
      }
      this.updateBannerDataDebounced();
    },
    uploadNewPicture() {
      const imageUploadPath = `${VITE_URL}/dreamboost/upload`;
      const bannerPostPath = `${VITE_URL}/dreamboost/banner/admin/banner`;
      // 創建一個隱藏的 input[type="file"] 元素
      const input = document.createElement('input');
      input.type = 'file';
      input.style.display = 'none';

      // 當選擇檔案時執行的處理函數
      input.addEventListener('change', (event) => {
        const file = event.target.files[0];
        // GPT給的程式碼，中間這段好像不需要也可以執行。先留著
        // 使用 FileReader 讀取檔案內容
        // const reader = new FileReader();
        // reader.onload = () => {
        //   const fileContent = reader.result;
        //   console.log(fileContent);
        //   // 在這裡處理檔案內容，例如顯示檔案格式
        //   // alert(`所選檔案的格式是：${file.type}`);
        // };
        // reader.readAsDataURL(file);
        // console.log(file);

        const formData = new FormData();
        formData.append('image', file);
        this.showFullScreenLoading({ canCancel: false, style: 'dots' });
        this.$http.post(imageUploadPath, formData)
          .then((res) => {
            // console.log(res.data.data.result);
            const uploadObj = {
              imgUrl: res.data.data.result,
              orderBy: this.bannerAry.length + 1,
            };
            return this.$http.post(bannerPostPath, { bannerUrlArray: [...this.bannerAry, uploadObj] });
          })
          .then(() => {
            this.hideFullScreenLoading();
            this.addToast({ content: '上傳圖片完成。' });
            this.getBannerData();
          })
          .catch(() => {
            this.hideFullScreenLoading();
            this.addToast({ content: '過程出現錯誤，請重新整理', style: 'error' });
          });
      });

      // 模擬點擊 input 元素
      input.click();
    },
    onImageLoad() {
      this.imgLoadStatus = true;
    },
  },
  components: {
    UpdateBannerImgCard,
    CameraIcon,
    RealtimeBannerPreview,
  },
  mounted() {
    this.getBannerData();
  },
  mixins: [mixinSwalToast, mixinFullScreenLoading],
};
</script>
<style lang="scss">
</style>
