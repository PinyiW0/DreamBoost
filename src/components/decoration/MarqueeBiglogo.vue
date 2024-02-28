<template>
  <div class="container-fluid">
    <Vue3Marquee :clone="true" :duration="10" :direction="'reverse'">
      <img v-for="img in imgArray" :key="img" :src="img" class="img-fluid me-10" />
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
        'https://raw.githubusercontent.com/PinyiW0/DreamBoost/880674654e4e31b44e5ab98a0beb1e0f948fc539/public/images/home/big_DREAMBOOST.svg',
        'https://raw.githubusercontent.com/PinyiW0/DreamBoost/880674654e4e31b44e5ab98a0beb1e0f948fc539/public/images/home/db_logoAlong.svg',
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
