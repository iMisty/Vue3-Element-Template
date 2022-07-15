<!--
 * @Author: Miya
 * @Date: 2021-11-28 00:56:25
 * @LastEditTime: 2022-07-15 18:17:45
 * @LastEditors: Mirage
 * @Description: Main with Layout
 * @FilePath: \vue3-element-template\src\layout\components\layoutMain.vue
-->
<template>
  <div
    class="layout__main"
    :class="computedRoute !== '/dashboard' ? 'container' : ''"
  >
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const isContainer = ref(false);

const LayoutMain = defineComponent({
  setup() {
    const computedRoute = computed(() => {
      return useRoute().path;
    });
    return { computedRoute, isContainer };
  },
});
export default LayoutMain;
</script>

<style lang="less" scoped>
.layout__main {
  box-sizing: border-box;
  padding: 1rem;
  // Navbar Height = 64px = 4rem
  height: calc(100vh - 5.5rem);
  overflow: hidden auto;
  border-radius: @var-border-radius;
  transition-duration: 0.6s;

  &.container {
    border: 1px solid @var-surface-border;
    background-color: @var-base-background;
    transition-delay: 0.6s;
  }

  &::-webkit-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 8px;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
    transition-duration: 0.3s;
  }
  &::-webkit-scrollbar-thumb {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.06);
    opacity: 0;
    border-radius: 64rem;
    transition-duration: 0.3s;
  }
  &:hover::-webkit-scrollbar-thumb {
    position: absolute;
    opacity: 1;
    transition-duration: 0.3s;
  }
}
</style>
