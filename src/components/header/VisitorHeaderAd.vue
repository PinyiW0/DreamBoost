<template>
  <div class="container-fluid bg-primary-dark d-flex justify-content-center col-12">
    <div style="height: 28px;">
      <Vue3Marquee :vertical="true" :scrollamount="500"
      class=""
      style="--duration: 5s; --delay: 2s;"
      >
          <span
              v-for="(word, index) in adArray"
              :key="index"
              class="fs-12 fs-md-6 text-white mb-0 lterSpc-10"
          >
              {{ word }}
          </span>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee';

export default {
  data() {
    return {
      adArray: [],
    };
  },
  methods: {
    adData() {
      this.adArray = ['即刻成為會員，立享$100 折價券！金額不限，全額折抵！', '˙', '與 DreamBoost 攜手，實現你的夢想！', '成為我們的一份子，推動夢想不是夢 !', '˙'];
    },
  },
  components: {
    Vue3Marquee,
  },
  mounted() {
    this.adData();
  },
};

</script>
