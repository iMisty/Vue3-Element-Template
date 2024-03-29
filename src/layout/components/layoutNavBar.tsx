/*
 * @Description: Layout NavBar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-26 09:54:41
 * @LastEditors: Miya
 * @LastEditTime: 2022-08-23 22:53:22
 */

import {
  defineComponent, reactive, onMounted, markRaw,
} from 'vue';
import { useRouter } from 'vue-router';
import { CaretBottom } from '@element-plus/icons-vue';
import { getLanguage } from '@/language';
import NavBarAvatar from '@/layout/children/NavBarAvatar/indexAvatar';
import DrawerCard from '@/components/DrawerCard/indexDrawerCard';
import DrawerCardItem from '@/config/DrawerCardItem';
import LanguageList from '@/config/LanguageList';
import NavBarBreadCrumb from '../children/NavBarBreadCrumb/index.vue';
import NavBarHamburger from '../children/NavBarHamburger/index';
import Style from '../style/navbar.module.less';

type listLanguage = {
  value: string;
  label: string;
};

const data = reactive({
  username: new String(),
  selectedLanguage: 'zh',
});

const listLanguage = reactive(LanguageList);

const listDrawer = markRaw(DrawerCardItem);

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
    DrawerCard,
  },
  setup() {
    const Router = useRouter();

    const handleDrawerEvent = (event: Function | undefined, close: Boolean) => {
      if (event) {
        event();
      }
      if (close) {
        dataStatus.isDrawerActive = false;
      }
    };

    const handleClickLogout = () => {
      Router.replace({ path: '/login' });
    };

    const getLanguageInDrawer = (): string => {
      const getLanguageInStorage = localStorage.getItem('language');
      if (!getLanguageInStorage) {
        return 'zh';
      }
      return getLanguageInStorage;
    };

    const setLanguage = (value: string): void => {
      console.log(value);
      localStorage.setItem('language', value);
      getLanguage();
      location.reload();
    };

    onMounted(() => {
      data.selectedLanguage = getLanguageInDrawer();
      const getUsername = 'admin';
      data.username = getUsername || '';
    });
    return {
      data,
      handleDrawerEvent,
      handleClickLogout,
      getLanguageInDrawer,
      setLanguage,
      setUserDrawer,
      dataStatus,
      listLanguage,
      listDrawer,
    };
  },

  render() {
    const drawerFooter = () => (
        <el-row justify="space-around" align="middle">
          <span>{this.$t('GlobalLanguage.labelSelector')}: </span>
          <el-select v-model={data.selectedLanguage} placeholder="Select">
            {listLanguage.map((item: listLanguage) => (
                <el-option
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  onClick={() => this.setLanguage(item.value)}
                ></el-option>
            ))}
          </el-select>
        </el-row>
    );
    return (
      <div class={Style.layout__navbar}>
        <div class={Style['layout__navbar--left']}>
          <NavBarHamburger></NavBarHamburger>
          <NavBarBreadCrumb></NavBarBreadCrumb>
        </div>
        <div
          class={Style['layout__navbar--right']}
          onClick={() => setUserDrawer}
        >
          {/* @ts-ignore */}
          <NavBarAvatar onAvatar={() => setUserDrawer()}></NavBarAvatar>
        </div>
        <el-drawer
          v-model={dataStatus.isDrawerActive}
          title="I am the title"
          size={360}
          v-slots={{ footer: drawerFooter }}
        >
          {this.listDrawer.map((item) => (
              <drawer-card
                icon={item.icon}
                title={item.title}
                content={item.content}
                onClick={() => this.handleDrawerEvent(item.callback, item.isClose)
                }
              ></drawer-card>
          ))}
        </el-drawer>
      </div>
    );
  },
});

export default LayoutNavBar;
