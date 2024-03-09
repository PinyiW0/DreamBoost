import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

export default defineStore('sweetAlert2', {
  actions: {
    // 成功 Alert
    successAlert(message) {
      return Swal.fire({
        icon: 'success',
        iconColor: '#258794',
        title: message,
        showConfirmButton: false,
        timer: 1800,
      });
    },
    // 錯誤 Alert
    errorAlert(message) {
      return Swal.fire({
        icon: 'error',
        title: message,
        showConfirmButton: false,
        timer: 1800,
      });
    },
    // 確認 Alert
    confirmAlert(message) {
      const confirmAlertButton = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-primary ',
          cancelButton: 'btn btn-primary-light me-3',
        },
        buttonsStyling: false,
      });
      return confirmAlertButton.fire({
        title: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '確認',
        cancelButtonText: '取消',
        reverseButtons: true,
      });
    },
  },
});
