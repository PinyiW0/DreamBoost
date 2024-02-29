<template>
  <div class="container-fluid">
    <Vue3Marquee :clone="true" :duration="6" :direction="'reverse'">
      <img
          v-for="img in imgArray"
          :key="img"
          :src="img"
          class="img-fluid me-6 "
      />
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
        'https://raw.githubusercontent.com/PinyiW0/DreamBoost/9d3cec53634e1297357325aa9565ffbd9e657190/public/images/home/pr-light-logo.svg',
        'https://raw.githubusercontent.com/PinyiW0/DreamBoost/9d3cec53634e1297357325aa9565ffbd9e657190/public/images/home/pr-light-logo.svg',
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
