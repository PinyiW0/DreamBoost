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
