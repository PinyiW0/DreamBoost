<script>
// export default {
//   mounted() {
//     const token = document.cookie
//       .split('; ')
//       .find((row) => row.startsWith('db'))
//       ?.split('=')[1];
//     this.$http.defaults.headers.common.Authorization = token;
//     this.$http
//       .delete(
//         'https://api-vercel-test-one.vercel.app/dreamboost/proposal/admin/feedback/6097a102-f640-45d1-b789-20f19cedb48b',
//         { proposalID: 'd1aea26a-a0a5-4220-9912-ee5213f064e7' },
//       )
//       .then((res) => {
//         console.log('成功');
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log('錯誤');
//         console.log(err);
//       });
//   },
// };
</script>
<template>
  <RouterView />
</template>

<style lang="scss">
/* roterLink的active效果 */
.active {
  color: var(--bs-primary) !important;
}
/* roterLink的hover效果 */
.RoterLink {
  color: var(--bs-gray-700);
  border: none;
  padding: 8px 12px;
  transition: box-shadow 0.5s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    left: -1.5px;
    top: 0;
    width: 0;
    height: 100%;
    transition: width 0.5s ease;
  }

  &:hover:before {
    width: calc(100% + 4px);
    border-top: 1.5px solid var(--bs-primary);
    border-bottom: 1.5px solid var(--bs-primary);
  }
}
</style>
