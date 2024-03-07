import sweetAlert2Store from '@/stores/sweetAlert2Store';

const { successAlert } = sweetAlert2Store();

export default {
  methods: {
    async uploadImage(value) {
      let imageUrl = '';
      const { VITE_URL } = import.meta.env;

      try {
        const token = document.cookie
          .split('; ')
          .find((row) => row.startsWith('db'))
          ?.split('=')[1];
        this.$http.defaults.headers.common.Authorization = token;

        // 提取檔案資料
        const file = value.target.files[0];
        // 新增一個表單數據
        const form = new FormData();
        // 將檔案資料寫入 form 物件裡
        form.append('image', file);
        const res = await this.$http.post(`${VITE_URL}/dreamboost/upload`, form);
        imageUrl = res.data.data.result;
        successAlert(res.data.message);
      } catch (error) {
        throw new Error(error);
      }
      return imageUrl;
    },
  },
};
