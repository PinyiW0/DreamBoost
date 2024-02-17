<template>
  <div class="container mt-20">
    <div class="row">
      <div class="col-12">
        <p class="text-white text-center fs-3 mb-0">即時預覽</p>
        <div class="py-8 d-flex justify-content-center">
          <img src="https://picsum.photos/id/598/600/400" alt="">
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-21">
      <div class="col-12 col-lg-10">
        <template v-if="bannerAry">
          <template v-for="(item,index) in bannerAry" :key="`${index}-img`">
            <UpdateBannerImgCard :img-url="item.imgUrl"></UpdateBannerImgCard>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import UpdateBannerImgCard from '@/components/Dashboard/UpdateBannerImgCard.vue';

export default {
  data() {
    return {
      bannerAry: [],
    };
  },
  methods: {
    getBannerData() {
      const url = `${import.meta.env.VITE_URL}/dreamboost/banner/guest/banner`;
      this.$http.get(url)
        .then((response) => {
          this.bannerAry = response.data.data.result;
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  components: {
    UpdateBannerImgCard,
  },
  mounted() {
    this.getBannerData();
  },
};
</script>
<style scoped lang="scss">
</style>
