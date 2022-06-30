<!--
 * @Author: Miya
 * @Date: 2021-11-27 14:10:40
 * @LastEditTime: 2022-03-04 15:10:46
 * @LastEditors: Miya
 * @Description: Admin Template Layout
 * @FilePath: \vue3-element-template\src\layout\admin.vue
-->
<template>
  <LayoutSideBar></LayoutSideBar>
  <div class="layout" :class="getCollapseStatus ? '' : 'isCollapse'">
    <LayoutNavBar></LayoutNavBar>
    <LayoutMain></LayoutMain>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAPPStore } from '@/store/appStore';
import LayoutSideBar from './components/layoutSideBar.vue';
import LayoutNavBar from './components/layoutNavBar.vue';
import LayoutMain from './components/layoutMain.vue';

const getCollapseStatus = computed(() => {
  const store = useAPPStore();
  return store.isCollapse;
});

const LayoutAdmin = defineComponent({
  components: {
    LayoutSideBar,
    LayoutNavBar,
    LayoutMain,
  },
  setup() {
    return { getCollapseStatus };
  },
});

export default LayoutAdmin;
</script>
<style lang="less" scoped>
.layout {
  margin-left: 14rem;
  height: 100%;
}
.isCollapse {
  margin-left: 4rem;
}
</style>
