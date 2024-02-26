<script>
export default {
  data() {
    return {
      fullScreenLoadingInstance: false,
    };
  },
  methods: {
    // 每次呼叫showFullScreenLoading function都會重新將這個loading給賦予到fullScreenLoadingInstance上。並且只有在fullScreenLoadingInstance內是$loading.show所回傳的內容後，才可以再次呼叫.hide。
    // 相比起直接使用元件的方式感覺這種plugin呼叫的方式比較容易有bug，元件的話只要專注在控制active的status就可以了。

    // loader: spinner/dots/bars
    showFullScreenLoading({
      canCancel = true,
      color = '#000',
      loader = 'spinner',
      backgroundColor = '#fff',
      opacity = 0.5,
      zIndex = 9999,
    } = {}) {
      this.fullScreenLoadingInstance = this.$loading.show({
        canCancel,
        color,
        loader,
        'background-color': backgroundColor,
        opacity,
        'z-index': zIndex,
      });
      setTimeout(() => {
        this.hideFullScreenLoading();
      }, 1000);
    },
    hideFullScreenLoading() {
      this.fullScreenLoadingInstance.hide();
    },
  },
  mounted() {
  },
};
</script>
<style scoped>
</style>
