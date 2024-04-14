<template>
  <div class="container py-15 bg-white">
    <swiper
      ref="swiper"
      :modules="[EffectFade]"
      effect="fade"
      :slides-per-view="3"
      :space-between="120"
      :centered-slides="true"
      :breakpoints="{
          390: {
            slidesPerView: 1,
          },
        }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      @swiperslidechange="onSlideChange"
      class="rounded-5 col-12 object-fit-cover"
      style="height: 650px;"
    >
      <swiper-slide
        v-for="(item, index) in bnData"
        :key="`${index}-bn`"
        >
        <div class="rounded-5" >
          <div class="d-flex flex-column justify-content-center align-items-center">
            <RouterLink :to=" isUser ? '/explore' : '/member'" class="position-relative col-12 rounded-5 shadow">
              <img
                :src="item.imgUrl"
                class="img-fluid rounded-5 w-100 object-fit-cover"
                style="height: 650px;"
                alt="推動夢想不是夢概念圖">
              <div class="bg-primary-dark col-12 py-7 rounded-bottom-5 position-absolute bottom-0">
                <h4 class="text-secondary-light text-center lterSpc-10 mb-0 mx-8 bn-hover">
                  {{isUser ? '立即探索，發現新項目' : '立刻加入會員，一起追夢去'}}
                  <span>
                    <RightArrow style="width:24px;color: var(--bs-secondary-light);margin-top: -2 px;" ></RightArrow>
                  </span>
                </h4>
              </div>
            </RouterLink>
            <div class="d-flex flex-column align-items-center position-absolute top-24 top-sm-24 px-10">
              <img
                src="/images/home/w-biglogo.svg"
                class="img-fluid mb-5 col-12"
                alt="DREAM BOOST">
              <p class="fs-3 fw-light text-white mb-0 lterSpc-10">推動夢想不是夢 !</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.bn-hover {
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
    cursor: pointer;
  }
}
</style>

<script>
import { mapState } from 'pinia';
import userStore from '@/stores/userStore';

/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Pagination, Navigation } from 'swiper/modules';
import RightArrow from '@/components/icons/RightArrow.vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      modules: [Navigation, Pagination],
      bnData: [],
      EffectFade,
    };
  },
  methods: {
    onSlideChange() {
    },
    getBnUrl() {
      this.$http.get(`${VITE_URL}/dreamboost/banner/guest/banner`)
        .then((response) => {
          this.bnData = response.data.data.result;
        })
        .catch(() => {
        });
    },
    changeTokenState() {
      this.isToken = !this.isToken;
    },
  },

  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.isToken = token;
  },

  mounted() {
    this.getBnUrl();
  },

  computed: {
    ...mapState(userStore, ['isUser']),
  },

  components: {
    RightArrow,
    Swiper,
    SwiperSlide,
  },

};
</script>

<style scoped>

.swiper-slide img {
  display: block;
}
</style>
