import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';

import zhTw from '../assets/js/zh_TW.json';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

setLocale('zhTw');

configure({
  generateMessage: localize({ zhTw }),
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

export default {
  methods: {
    // 密碼規則驗證
    passwordRule(value) {
      if (value) {
        const reg = /^[\d\w]{6,}$/;
        return reg.test(value) ? true : '密碼最少 6 個字元！';
      }
      return '密碼 為必填！';
    },

    // 確認第二次密碼驗證
    checkPassword(value) {
      return value === this.userData?.password ? true : '與密碼不符！！！';
    },

    // 確認單選框驗證
    checkConfirm(value) {
      return value || '需勾選同意框';
    },
  },

  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage,
  },
};
