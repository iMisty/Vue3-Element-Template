<!--
 * @Author: Miya
 * @Date: 2021-11-28 00:56:25
 * @LastEditTime: 2022-03-04 15:10:59
 * @LastEditors: Miya
 * @Description: Main with Layout
 * @FilePath: \vue3-element-template\src\layout\components\layoutMain.vue
-->
<template>
  <div class="layout__main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
const LayoutMain = defineComponent({
  setup() {
    const computedRoute = computed(() => {
      return useRoute().path;
    });
    return { computedRoute };
  },
});
export default LayoutMain;
</script>

<style lang="less" scoped>
.layout__main {
  box-sizing: border-box;
  padding: 1rem;
  // Navbar Height = 64px = 4rem
  height: calc(100vh - 4rem);
  overflow: hidden auto;
  background-color: @var-base-background;
}
</style>
