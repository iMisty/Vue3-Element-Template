/*
 * @Description: Layout NavBar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-26 09:54:41
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-02 17:11:06
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
  selectedLanguage: 'zh',
});

const listLanguage = reactive([
  { label: '中文', value: 'zh' },
  { label: 'English', value: 'en' },
  { label: '日本语', value: 'jp' },
]);

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
    return { data, handleClickLogout, setUserDrawer, dataStatus, listLanguage };
  },

  render() {
    const drawerFooter = () => {
      return (
        <el-select v-model={data.selectedLanguage} placeholder="Select">
          {listLanguage.map((item: { label: string; value: string }) => {
            return (
              <el-option
                key={item.value}
                label={item.label}
                value={item.value}
              ></el-option>
            );
          })}
        </el-select>
      );
    };
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
          v-slots={{ footer: drawerFooter }}
        ></el-drawer>
      </div>
    );
  },
});

export default LayoutNavBar;
