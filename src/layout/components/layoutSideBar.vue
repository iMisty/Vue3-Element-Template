<!--
 * @Author: Miya
 * @Date: 2021-11-27 15:45:49
 * @LastEditTime: 2022-06-09 18:01:49
 * @LastEditors: Mirage
 * @Description: Sidebar with Layout
 * @FilePath: \vue3-element-template\src\layout\components\layoutSideBar.vue
-->
<template>
  <el-row class="layout__sidebar" :class="getCollapseStatus ? '' : 'collapse'">
    <el-scrollbar>
      <el-menu
        background-color="#304156"
        text-color="#bfcbd9"
        class="el-menu-vertical-demo"
        :collapse="!getCollapseStatus"
        :collapse-transition="false"
        :default-active="getActiveRoute"
        @select="handleSelect"
      >
        <template v-for="item in initSideMenu" :key="item.name">
          <!-- Single Route -->
          <el-menu-item
            v-if="!item.children && !item.meta.hidden"
            :index="item.name"
          >
            <el-icon><component :is="item.meta.icon" /></el-icon>
            <span>{{ item.meta.title }}</span>
          </el-menu-item>
          <!-- Multi Route -->
          <el-sub-menu
            v-if="item.children && !item.meta.hidden"
            :index="item.name"
          >
            <template #title>
              <el-icon><component :is="item.meta.icon" /></el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item
              v-for="sub in item.children"
              :key="sub.name"
              :index="sub.name"
            >
              <el-icon><component :is="sub.meta.icon" /></el-icon>
              <span>{{ sub.meta.title }}</span>
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAPPStore } from '@/store/appStore';
import { Location, Document, Menu as IconMenu } from '@element-plus/icons-vue';
import { initDynamicRouter } from '@/router/router';

export default defineComponent({
  components: {
    Location,
    Document,
    IconMenu,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    /**
     * @description Init Dynamic Router
     * @todo Fix any
     * @returns {Object} Router layout Admin
     */
    const initSideMenu: any = computed(() => {
      return initDynamicRouter()[0].children;
    });

    /**
     * @description Computed Active Route Name
     * @returns {String} Route Name
     * @external '@/router/router.ts'
     */
    const getActiveRoute = computed(() => {
      if (route.meta.isRouter) {
        return route.meta.isRouter;
      }
      return route.name;
    });

    /**
     * @description Computed SideBar Collapse Status
     * @returns {Boolean} Collapse Status
     * @external '@/store/store.ts'
     */
    const getCollapseStatus = computed(() => {
      return useAPPStore().isCollapse;
    });

    /**
     * @description Click Methods after Select Menu Item
     * @param {string} payload - Menu Item's Index
     */
    const handleSelect = (payload: string) => {
      router.push({
        name: payload,
      });
    };

    onMounted(() => {
      const matched = route.matched.filter((item) => item);
      useAPPStore().setRouteData(matched);
    });

    return {
      initSideMenu,
      handleSelect,
      getActiveRoute,
      getCollapseStatus,
    };
  },
});
</script>
<style lang="less" scoped>
.layout__sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 14rem;
  height: 100%;
  background-color: #304156;
  transition-duration: 0.3s;
  &--title {
    padding: 1rem 0;
    text-align: center;
    font-size: 1.2rem;
    background-color: #2b2f3a;
    letter-spacing: 0.54px;
    color: #fff;
    cursor: default;
  }
}
.collapse {
  width: 4rem;
}
</style>
