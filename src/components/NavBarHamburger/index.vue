<!--
 * @Author: Miya
 * @Date: 2021-11-28 03:07:28
 * @LastEditTime: 2022-03-04 15:10:47
 * @LastEditors: Miya
 * @Description: Hamburger Component for Navbar
 * @FilePath: \vue3-element-template\src\components\NavBarHamburger\index.vue
-->
<template>
  <div class="layout__navbar--hamburger" @click="handleClickToggleNavbarStatus">
    <svg
      :class="{ 'is-active': isActive }"
      class="hamburger"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue';
import { useAPPStore } from '@/store/appStore';

const isActive: ComputedRef<boolean> = computed<boolean>(() => {
  const store = useAPPStore();
  return store.isCollapse;
});

const handleClickToggleNavbarStatus = () => {
  const store = useAPPStore();
  store.toggleNavBarCollapse();
};

const NavbarHamburger = defineComponent({
  name: 'NavBarHamburger',
  setup() {
    return { isActive, handleClickToggleNavbarStatus };
  },
});

export default NavbarHamburger;
</script>

<style lang="less" scoped>
.layout__navbar--hamburger {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  & > .hamburger {
    width: inherit;
    height: inherit;
  }
}
.is-active {
  transform: rotate(180deg);
}
</style>
