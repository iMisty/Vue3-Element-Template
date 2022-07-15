<!--
 * @Author: Miya
 * @Date: 2021-11-27 15:38:09
 * @LastEditTime: 2022-07-15 16:36:13
 * @LastEditors: Mirage
 * @Description: NavBar with Layout
 * @FilePath: \vue3-element-template\src\layout\components\layoutNavBar.vue
-->
<template>
  <div class="layout__navbar">
    <div class="layout__navbar--left">
      <NavBarHamburger></NavBarHamburger>
      <NavBarBreadCrumb></NavBarBreadCrumb>
    </div>
    <!-- TODO: Component -->
    <div class="layout__navbar--right">
      <el-dropdown>
        <div class="avatar-wrapper">
          {{ data.username }}
          <el-icon><caret-bottom /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/setPassword/index">
              <el-dropdown-item>修改密码</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="handleClickLogout">
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import { CaretBottom } from '@element-plus/icons-vue';
import NavBarHamburger from '@/components/NavBarHamburger/index';
import NavBarBreadCrumb from '@/components/NavBarBreadCrumb/index.vue';
import { useRouter } from 'vue-router';

const data = reactive({
  username: new String(),
});

const LayoutNavBar = defineComponent({
  components: {
    NavBarHamburger,
    NavBarBreadCrumb,
    CaretBottom,
  },
  setup() {
    const Router = useRouter();

    const handleClickLogout = () => {
      Router.replace({ path: '/login' });
    };
    onMounted(() => {
      const getUsername = 'admin';
      data.username = getUsername || '';
    });
    return { data, handleClickLogout };
  },
});

export default LayoutNavBar;
</script>
<style lang="less" scoped>
.layout__navbar {
  .flex(row,space-between,center);
  margin-bottom: 0.875rem;
  &--left {
    .flex(row,flex-start,center);
  }
  &--right {
    min-width: 5rem;
    text-align: center;
    cursor: pointer;
  }
}
</style>
