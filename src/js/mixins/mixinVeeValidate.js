import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, regex } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTw from '../json/zh_TW.json';

defineRule('required', required);
defineRule('email', email);
defineRule('regex', regex);

setLocale('zhTw');
configure({
  generateMessage: localize({ zhTw }),
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

export default {
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage,
  },
};
