<template>
  <div class="accordion-item border-0 border-bottom border-primary-light rounded-0">
    <h2 class="accordion-header">
      <button class="accordion-button bg-transparent text-primary shadow-none" type="button" data-bs-toggle="collapse" :class="{'collapsed':!isShown}"
      @click="toggle">
      <span>{{ messageData.messageTitle }}</span>
      </button>
    </h2>
    <div ref="collapseArea" class="accordion-collapse collapse" data-bs-parent="#messageAccordion">
      <div class="accordion-body">
        <span>{{ messageData.messageContent }}</span>
        <p class="fs-6 text-gray-500 mt-6 mb-0">{{ new Date(messageData.messageTime) }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['messageData'],
  data() {
    return {
      collapseInstance: '',
      isShown: false,
    };
  },
  methods: {
    initCollapse() {
      this.collapseInstance = new this.$bs.Collapse(this.$refs.collapseArea, {
        toggle: false, // 設定初始為沒有開啟
      });
      // 設定一個狀態，去監聽目前的collapse是開啟還是關閉的
      this.$refs.collapseArea.addEventListener('show.bs.collapse', () => {
        this.isShown = true;
      });
      this.$refs.collapseArea.addEventListener('hide.bs.collapse', () => {
        this.isShown = false;
      });
    },
    hide() {
      this.collapseInstance.hide();
    },
    show() {
      this.collapseInstance.show();
    },
    toggle() {
      this.collapseInstance.toggle();
    },
  },
  mounted() {
    this.initCollapse();
  },
};
</script>
<style scoped lang="scss">
.accordion-button{
  &.isShown::after{
    transform: rotate(180deg);
  }
}
</style>
