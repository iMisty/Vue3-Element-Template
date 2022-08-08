<!--
 * @Description: NavBar Breadcrumb
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2021-12-08 18:14:41
 * @LastEditors: Miya
 * @LastEditTime: 2022-08-08 22:21:13
-->
<template>
  <el-breadcrumb class="nav__breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="item in routerData.router"
        :key="item.path"
        :to="{ path: item.path }"
        ><span>{{ item.meta.title }}</span></el-breadcrumb-item
      >
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, watch } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue';
import { useAPPStore } from '@/store/appStore';
import { useRoute } from 'vue-router';

const routerData: any = reactive({
  router: null,
});

const getRouterData = () => {
  const data: any = useAPPStore().getNavbarData;
  routerData.router = data;
};
const NavBarBreadCrumb = defineComponent({
  name: 'NavBarBreadCrumb',
  components: {
    ArrowRight,
  },
  setup() {
    onMounted(() => {
      getRouterData();
    });
    watch([useRoute()], (newVal) => {
      routerData.router = newVal[0].matched;
    });
    return {
      // ArrowRight,
      routerData,
      getRouterData,
    };
  },
});

export default NavBarBreadCrumb;
</script>

<style lang="less" scoped>
.nav__breadcrumb {
  margin-left: 1rem;
}
</style>
