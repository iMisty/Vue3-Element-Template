/*
 * @Description: Layout NavBar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-26 09:54:41
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-26 17:50:58
 */

import { defineComponent, reactive, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { CaretBottom } from '@element-plus/icons-vue';
import NavBarHamburger from '@/components/NavBarHamburger/index';
import NavBarBreadCrumb from '@/components/NavBarBreadCrumb/index.vue';
import NavBarAvatar from '@/components/NavBarAvatar/indexAvatar';

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

    const handleClickLogout = () => {
      Router.replace({ path: '/login' });
    };
    onMounted(() => {
      const getUsername = 'admin';
      data.username = getUsername || '';
    });
    return { data, handleClickLogout, setUserDrawer, isDrawerActive };
  },

  render() {
    return (
      <div class="layout__navbar">
        <div class="layout__navbar--left">
          <NavBarHamburger></NavBarHamburger>
          <NavBarBreadCrumb></NavBarBreadCrumb>
        </div>
        <div class="layout__navbar--right">
          <NavBarAvatar onClick={() => setUserDrawer}></NavBarAvatar>
          <el-drawer v-model="isDrawerActive" title="I am the title" size={360}>
            {/* <template #header>
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
        </template> */}
          </el-drawer>
        </div>
      </div>
    );
  },
});

export default LayoutNavBar;
