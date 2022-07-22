<!--
 * @Author: Miya
 * @Date: 2021-11-27 15:38:09
 * @LastEditTime: 2022-07-22 17:07:48
 * @LastEditors: Mirage
 * @Description: NavBar with Layout
 * @FilePath: \Vue3-Element-Template\src\layout\components\layoutNavBar.vue
-->
<template>
  <div class="layout__navbar">
    <div class="layout__navbar--left">
      <NavBarHamburger></NavBarHamburger>
      <NavBarBreadCrumb></NavBarBreadCrumb>
    </div>
    <div class="layout__navbar--right">
      <NavBarAvatar @click="setUserDrawer"></NavBarAvatar>
      <!-- TODO: Component -->
      <el-drawer v-model="isDrawerActive" title="I am the title" :size="360">
        <template #header>
          <h4>{{ $t('GlobalDrawer.welcome') }}</h4>
        </template>
        <template #default>
          <div>
            <el-radio label="Option 1" size="large">Option 1</el-radio>
            <el-radio label="Option 2" size="large">Option 2</el-radio>
          </div>
        </template>
        <template #footer>
          <div>1</div>
        </template>
      </el-drawer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue';
import { CaretBottom } from '@element-plus/icons-vue';
import NavBarHamburger from '@/components/NavBarHamburger/index';
import NavBarBreadCrumb from '@/components/NavBarBreadCrumb/index.vue';
import NavBarAvatar from '@/components/NavBarAvatar/indexAvatar';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const data = reactive({
  username: new String(),
});

const isDrawerActive = ref(false);

const setUserDrawer = () => {
  isDrawerActive.value = true;
};

const LayoutNavBar = defineComponent({
  components: {
    NavBarHamburger,
    NavBarBreadCrumb,
    NavBarAvatar,
    CaretBottom,
  },
  setup() {
    const Router = useRouter();
    // const { t } = useI18n();

    const handleClickLogout = () => {
      Router.replace({ path: '/login' });
    };
    onMounted(() => {
      const getUsername = 'admin';
      data.username = getUsername || '';
    });
    return { data, handleClickLogout, setUserDrawer, isDrawerActive };
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
    // min-width: 5rem;
    text-align: center;
    cursor: pointer;
  }
}
</style>
