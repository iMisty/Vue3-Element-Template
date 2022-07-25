/*
 * @Description: Sidebar with Layout
 * @Version: 2.0
 * @Author: Miya
 * @Date: 2021-11-27 15:45:49
 * @LastEditors: Miya
 * @LastEditTime: 2022-07-25 21:38:24
 */
import { defineComponent, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAPPStore } from '@/store/appStore';
import { Location, Document, Menu as IconMenu } from '@element-plus/icons-vue';
import { initDynamicRouter } from '@/router/router';
import SidebarLogo from '@/components/SideBarLogo/indexLogo';
import GroupRoute from '@/components/SideBarItem/itemRouteGroup';
import SingleRoute from '@/components/SideBarItem/itemSingleRoute';
import MultiRoute from '@/components/SideBarItem/itemMultiRoute';
import Style from '@/style/layout/sidebar/sidebar.module.less';

interface SidebarRoute {
  name: string;
  icon: string;
  title: string;
  hidden?: boolean;
  meta: SidebarRoute;
  children: Array<SidebarRoute>;
}

const layoutSidebar = defineComponent({
  components: {
    Location,
    Document,
    IconMenu,
    SidebarLogo,
    GroupRoute,
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
      console.log(payload);
      // router.push({
      //   name: payload,
      // });
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

  render() {
    const templateMultiRoute = (item: any) => {
      return (
        <MultiRoute
          children={item.children}
          name={item.name}
          title={item.meta.title}
          icon={item.meta.icon}
          meta={item.meta}
        >
          <span>1222</span>
        </MultiRoute>
      );
    };
    return (
      <el-row
        class={[
          Style['layout__sidebar'],
          this.getCollapseStatus ? '' : Style['collapse'],
        ]}
      >
        <sidebar-logo>
          <span>Admin template</span>
        </sidebar-logo>
        <el-scrollbar>
          <el-menu
            collapse={!this.getCollapseStatus}
            collapse-transition={false}
            default-active={this.getActiveRoute}
            onSelect={() => this.handleSelect}
          >
            {this.initSideMenu.map((item: any) => {
              return item.meta.isFirstRoute ? (
                <group-route title={item.meta.title}>
                  {item.children ? (
                    <MultiRoute
                      children={item.children}
                      name={item.name}
                      title={item.meta.title}
                      icon={item.meta.icon}
                      meta={item.meta}
                    >
                      <span>1222</span>
                    </MultiRoute>
                  ) : (
                    <SingleRoute
                      name={item.name}
                      icon={item.meta.icon}
                      title={item.meta.title}
                    ></SingleRoute>
                  )}
                </group-route>
              ) : (
                <SingleRoute
                  name={item.name}
                  icon={item.meta.icon}
                  title={item.meta.title}
                ></SingleRoute>
              );
            })}
          </el-menu>
        </el-scrollbar>
      </el-row>
    );
  },
});

export default layoutSidebar;
