/*
 * @Description: Navbar BreadCrumb
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-04 17:56:49
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 16:59:43
 */
import {
  defineComponent,
  reactive,
  onMounted,
  watch,
  TransitionGroup,
} from 'vue';
import { ArrowRight } from '@element-plus/icons-vue';
import { useAPPStore } from '@/store/appStore';
import { useRoute } from 'vue-router';
import Style from './style/breadcrumb.module.less';

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
    TransitionGroup,
  },
  setup() {
    onMounted(() => {
      getRouterData();
    });
    watch([useRoute()], (newVal) => {
      console.log(newVal);
      routerData.router = newVal[0].matched;
    });
    return {
      routerData,
      getRouterData,
    };
  },

  render() {
    return (
      <el-breadcrumb class={Style['nav__breadcrumb']}>
        <transition-group name="breadcrumb">
          {
            // TODO: Fix any
            routerData.router ? (
              routerData.router.map((item: any) => {
                <el-breadcrumb-item key={item.path}>
                  <span>{item.meta.title}</span>
                </el-breadcrumb-item>;
              })
            ) : (
              <el-breadcrumb-item key="/">
                <span>Home</span>
              </el-breadcrumb-item>
            )
          }
        </transition-group>
      </el-breadcrumb>
    );
  },
});

export default NavBarBreadCrumb;
