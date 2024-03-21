<template>
  <div class="l-cardContainer">
    <div class="l-gridCard">
      <!-- 專案狀態 -->
      <div class="l-gridCard--centerChild l-gridCard__status  px-5 d-flex align-items-center justify-content-center border border-primary" :class="defineClass">
        <span v-if="proposalData.proposalStatus==='draft'">創建中專案</span>
        <span v-else-if="proposalData.proposalStatus==='review'">審核中專案</span>
        <span v-else-if="proposalData.proposalStatus==='active'&& isActive">進行中專案</span>
        <span v-else>已結束專案</span>
      </div>
      <!-- 專案名稱 -->
      <div class="l-gridCard__titleName border-top border-bottom border-primary bg-bgc-paper d-flex justify-content-center align-items-center">
        <span>專案名稱</span>
      </div>
      <div class="l-gridCard__contentName border-bottom border-primary ">
        <div class="h-100 px-1 py-1 d-flex align-items-center justify-content-center flex-wrap flex-xl-nowrap justify-content-xl-start">
          <img :src="proposalData.proposalMainImage" alt="提案主圖" width="120" height="90" class="">
          <p class="w-100 w-xl-auto mb-0 ms-3 text-center text-xl-start">{{ proposalData.proposalTitle }}</p>
        </div>
      </div>
      <!-- 目標金額 -->
      <div class="l-gridCard__titleTarget border-top border-bottom border-primary bg-bgc-paper d-flex justify-content-center align-items-center">
        <span>目標金額</span>
      </div>
      <div class="l-gridCard--centerChild l-gridCard__contentTarget border-bottom border-primary d-flex justify-content-center align-items-center"><span>{{ proposalData.proposalTargetMoney }}</span></div>
      <!-- 創建日期 -->
      <div
        class="l-gridCard__titleCreatedDate border-top border-bottom border-primary bg-bgc-paper d-none d-sm-flex align-items-sm-center justify-content-sm-center ">
        <span>創建日期</span>
      </div>
      <div class="l-gridCard__contentCreatedDate border-bottom border-primary d-none d-sm-flex align-items-sm-center justify-content-sm-center">
        <span>{{  proposalData.proposalStartTime.split('-').join('.')  }}</span>
      </div>
      <!-- 提交日期 -->
      <div class=" l-gridCard__titleSubmitDate border-top border-bottom border-primary bg-bgc-paper d-none d-md-flex align-items-md-center justify-content-md-center">
        <span>提交日期</span>
      </div>
      <div class=" l-gridCard__contentSubmitDate border-bottom border-primary d-none d-md-flex align-items-md-center justify-content-md-center">
        <span>{{ proposalData.proposalStartTime.split('-').join('.') }}</span>
      </div>
      <!-- 上次修改日期 -->
      <div class=" l-gridCard__titleUpdateDate border-top border-bottom border-primary bg-bgc-paper d-none d-lg-flex justify-content-lg-center align-items-lg-center">
        <span>上次修改日期</span>
      </div>
      <div class=" l-gridCard__contentUpdateDate border-bottom border-primary d-none d-lg-flex justify-content-lg-center align-items-lg-center">
        <span>{{ proposalData.proposalStartTime.split('-').join('.') }}</span>
      </div>
      <!-- 按鈕區塊 -->
      <div class=" l-gridCard__btnDeleteProposal ">
        <button type="button"
          class="btn btn-light rounded-0 p-0 h-100 w-100 l-btn-close border border-primary  border-bottom-">
          <CloseButtonIcon></CloseButtonIcon>
        </button>
      </div>
      <div class=" l-gridCard__btnViewDetail ">
        <button type="button"
          class="btn p-0 rounded-0 bg-primary-light w-100 h-100 l-btn-detail border border-primary border-top-0"
          :class="{ 'active': isShown }" @click="toggle">
          <DoubleAngleDownIcon width="24" height="24"></DoubleAngleDownIcon>
        </button>
      </div>
    </div>
    <!-- collapse -->
    <div ref="collapseContent" class="collapse">
      <div class="row justify-content-end pt-3 g-1 g-sm-3">
        <template v-if="proposalData.proposalStatus==='draft'">
          <div class="col-3">
            <!-- 功能來不及做完 -->
            <button class="w-100 btn btn-outline-primary px-0 l-btn-edit">編輯</button>
          </div>
          <div class="col-3">
            <button class="w-100 btn btn-primary px-0" @click="submitDoubleCheck">
              <span>送出<span class="d-none d-sm-inline">提案</span></span>
            </button>
          </div>
        </template>
        <template v-else>
          <div class="col-3">
            <button class="w-100 btn btn-primary px-0">查看詳情</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import CloseButtonIcon from '@/components/icons/CloseButton.vue';
import DoubleAngleDownIcon from '@/components/icons/DoubleAngleDown.vue';

import Swal from 'sweetalert2';

import mixinSwalToast from '@/mixins/mixinSwalToast';
import mixinFullScreenLoading from '@/mixins/mixinFullScreenLoading';

const { VITE_URL } = import.meta.env;

export default {
  props: ['proposalData'],
  data() {
    return {
      collapseInstance: '',
      isShown: '',
      defineClass: [],
    };
  },
  methods: {
    initCollapse() {
      // 給予一個實例
      this.collapseInstance = new this.$bs.Collapse(this.$refs.collapseContent, {
        toggle: false, // 設定初始為沒有開啟
      });
      // 設定一個狀態，去監聽目前的collapse是開啟還是關閉的
      this.$refs.collapseContent.addEventListener('show.bs.collapse', () => {
        this.isShown = true;
      });
      this.$refs.collapseContent.addEventListener('hide.bs.collapse', () => {
        this.isShown = false;
      });
    },
    toggle() {
      this.collapseInstance.toggle();
    },
    hide() {
      this.collapseInstance.hide();
    },
    setStatusCss() {
      if (this.proposalData.proposalStatus === 'active' && !this.isActive) {
        this.defineClass = ['bg-gray-600', 'text-dark-pr'];
      } else {
        this.defineClass = ['bg-primary', 'text-white'];
      }
    },
    submitDoubleCheck() {
      Swal.fire({
        title: '確定要送出提案嗎？',
        icon: 'question',
        allowOutsideClick: false,
        showCancelButton: true,
        buttonsStyling: true,
        confirmButtonText: '確認',
        cancelButtonText: '取消',
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.submitToReview();
            // this.addToast({ content: '提案送審測試', style: 'error' });
          }
          if (result.isDismissed) {
            // this.addToast({ content: '尚未退回提案', style: 'info' });
          }
        })
        .catch(() => {
          this.addToast({ content: '提案送交審核過程出現錯誤', style: 'error' });
        });
    },
    submitToReview() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)db\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // loading start
      this.showFullScreenLoading({ canCancel: false });
      this.$http.post(`${VITE_URL}/dreamboost/proposal/admin/changeToReview`, {
        proposalID: this.proposalData.proposalID,
      }, {
        headers: {
          Authorization: token,
        },
      })
        .then(() => {
          // loading end
          this.hideFullScreenLoading();
          this.addToast({ content: '提案已送交審核' });
          // this.hide(); // 在送交審查之後因為需要更新畫面，可以選擇性關閉collpase
          this.$emit('updateProposalRecordData');
        })
        .catch(() => {
          // loading end
          this.hideFullScreenLoading();
          this.addToast({ content: '送交提案過程出現錯誤', style: 'error' });
        });
    },
  },
  components: {
    DoubleAngleDownIcon,
    CloseButtonIcon,
  },
  computed: {
    isActive() {
      // 代表提案還在上架中（還沒到期）
      return Date.parse(this.proposalData.proposalEndTime) > new Date().getTime();
    },
  },
  mounted() {
    this.initCollapse();
    this.setStatusCss();
  },
  mixins: [mixinSwalToast, mixinFullScreenLoading],
};

</script>
<style scope lang="scss">
// 按鈕樣式
.l-btn-close {
  &:hover {
    color: var(--bs-primary) !important;
  }
}
.l-btn-detail {
  svg{
    transition: transform .3s linear ;
  }
  &:hover {
    background-color: var(--bs-primary) !important;
    color: var(--bs-secondary) !important;
  }
  &.active{
    svg{
      transform: rotate(180deg);
    }
  }
}
.l-btn-edit:hover{
  background-color: var(--bs-secondary-light);
  color:var(--bs-primary);
}

// Grid樣式
// .l-gridCard {
//   display: grid;
//   grid-template-columns: 54px 3fr repeat(4, 1fr) 54px;
//   grid-template-rows: 48px minmax(124px, auto);
//   grid-template-areas:
//     "status titleName titleTarget titleCreatedDate titleSubmitDate titleUpdateDate btnDeleteProposal"
//     "status contentName contentTarget contentCreatedDate contentSubmitDate contentUpdateDate btnViewDetail";
// }

.l-gridCard {
  display: grid;
  grid-template-columns: 40px 2fr repeat(1, 1fr) 40px;
  grid-template-rows: 48px minmax(124px, auto);
  grid-template-areas:
    "status titleName titleTarget btnDeleteProposal"
    "status contentName contentTarget btnViewDetail";
}
@media(min-width: 576px){
.l-gridCard {
    grid-template-columns: 54px 2fr repeat(2, 1fr) 54px;
    grid-template-rows: 48px minmax(124px, auto);
    grid-template-areas:
      "status titleName titleTarget titleCreatedDate  btnDeleteProposal"
      "status contentName contentTarget contentCreatedDate  btnViewDetail";
  }
}
@media(min-width: 768px) {
  .l-gridCard {
    grid-template-columns: 40px 2fr repeat(3, 1fr) 40px;
    grid-template-rows: 48px minmax(124px, auto);
    grid-template-areas:
    "status titleName titleTarget titleCreatedDate titleSubmitDate  btnDeleteProposal"
    "status contentName contentTarget contentCreatedDate contentSubmitDate  btnViewDetail";
  }
}
@media(min-width: 992px) {
  .l-gridCard {
    grid-template-columns: 54px 2fr repeat(4, 1fr) 54px;
    grid-template-rows: 48px minmax(124px, auto);
    grid-template-areas:
      "status titleName titleTarget titleCreatedDate titleSubmitDate titleUpdateDate btnDeleteProposal"
      "status contentName contentTarget contentCreatedDate contentSubmitDate contentUpdateDate btnViewDetail";
  }
}
@media(min-width: 1200px) {
  .l-gridCard {
    grid-template-columns: 54px 3fr repeat(4, 1fr) 54px;
  }
}

.l-gridCard__status {
  grid-area: status;
}

.l-gridCard__titleName {
  grid-area: titleName;
}

.l-gridCard__contentName {
  grid-area: contentName;
}

.l-gridCard__titleTarget {
  grid-area: titleTarget;
}

.l-gridCard__contentTarget {
  grid-area: contentTarget;
}

.l-gridCard__titleCreatedDate {
  grid-area: titleCreatedDate;
}

.l-gridCard__contentCreatedDate {
  grid-area: contentCreatedDate;
}

.l-gridCard__titleSubmitDate {
  grid-area: titleSubmitDate;
}

.l-gridCard__contentSubmitDate {
  grid-area: contentSubmitDate;
}

.l-gridCard__titleUpdateDate {
  grid-area: titleUpdateDate;
}

.l-gridCard__contentUpdateDate {
  grid-area: contentUpdateDate;
}

.l-gridCard__btnDeleteProposal {
  grid-area: btnDeleteProposal;
}

.l-gridCard__btnViewDetail {
  grid-area: btnViewDetail;
}

// 以下沒有使用到
</style>
