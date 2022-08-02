/*
 * @Description: Layout NavBar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-26 09:54:41
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-02 16:02:03
 */

import { defineComponent, reactive, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { CaretBottom } from '@element-plus/icons-vue';
import NavBarHamburger from '@/components/NavBarHamburger/index';
import NavBarBreadCrumb from '@/components/NavBarBreadCrumb/index.vue';
import NavBarAvatar from '@/components/NavBarAvatar/indexAvatar';
import Style from '@/style/layout/navbar/navbar.module.less';

const data = reactive({
  username: new String(),
});

const dataStatus = reactive({ isDrawerActive: false });

const setUserDrawer = () => {
  dataStatus.isDrawerActive = true;
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
    return { data, handleClickLogout, setUserDrawer, dataStatus };
  },

  render() {
    return (
      <div class={Style['layout__navbar']}>
        <div class={Style['layout__navbar--left']}>
          <NavBarHamburger></NavBarHamburger>
          <NavBarBreadCrumb></NavBarBreadCrumb>
        </div>
        <div
          class={Style['layout__navbar--right']}
          onClick={() => setUserDrawer}
        >
          <NavBarAvatar onAvatar={() => setUserDrawer()}></NavBarAvatar>
        </div>
        <el-drawer
          v-model={dataStatus.isDrawerActive}
          title="I am the title"
          size={360}
        ></el-drawer>
      </div>
    );
  },
});

export default LayoutNavBar;
