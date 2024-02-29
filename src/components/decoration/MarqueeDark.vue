<template>
  <div class="container-fluid bg-gray-700 mb-7">
    <Vue3Marquee :clone="true" :duration="8" :direction="'normal'">
      <img v-for="img in imgArray" :key="img" :src="img" class="img-fluid me-20" />
    </Vue3Marquee>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee';

export default {
  data() {
    return {
      imgArray: [],
    };
  },
  methods: {
    imgData() {
      this.imgArray = [
        'https://raw.githubusercontent.com/PinyiW0/DreamBoost/880674654e4e31b44e5ab98a0beb1e0f948fc539/public/images/home/white-logo.svg',
        'https://raw.githubusercontent.com/PinyiW0/DreamBoost/880674654e4e31b44e5ab98a0beb1e0f948fc539/public/images/home/white-logo.svg',
      ];
    },
  },
  components: {
    Vue3Marquee,
  },
  mounted() {
    this.imgData();
  },
};

</script>
