<!--
 * @Author: Miya
 * @Date: 2021-11-28 00:56:25
 * @LastEditTime: 2022-07-20 18:00:32
 * @LastEditors: Mirage
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
  padding: 1rem 0;
  border-radius: @var-border-radius;
  transition-duration: 0.6s;
}
</style>
