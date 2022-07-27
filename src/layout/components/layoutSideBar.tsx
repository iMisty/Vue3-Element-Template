/*
 * @Description: Sidebar with Layout
 * @Version: 2.0
 * @Author: Miya
 * @Date: 2021-11-27 15:45:49
 * @LastEditors: Miya
 * @LastEditTime: 2022-07-27 23:08:12
 */
import { defineComponent, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAPPStore } from '@/store/appStore';
import { initDynamicRouter } from '@/router/router';
import SidebarLogo from '@/components/SideBarLogo/indexLogo';
import GroupRoute from '@/components/SideBarItem/itemRouteGroup';
import SingleRoute from '@/components/SideBarItem/itemSingleRoute';
import MultiRoute from '@/components/SideBarItem/itemMultiRoute';
import SingleList from '@/components/SideBarItem/itemRoutesSingle';
import CollapseRoute from '@/components/SideBarItem/itemRoutesCollapse';
import Style from '@/style/layout/sidebar/sidebar.module.less';
import RouterData from '@/interface/Router';

const layoutSidebar = defineComponent({
  components: {
    SidebarLogo,
    GroupRoute,
    CollapseRoute,
    SingleRoute,
    MultiRoute,
    SingleList,
  },
  setup() {
    const route = useRoute();

    /**
     * @description Init Dynamic Router
     * @todo Fix any
     * @returns {Object} Router layout Admin
     */
    const initSideMenu: any = computed(() => {
      const filterRoute = initDynamicRouter()[0].children?.filter(
        (item: RouterData) => {
          return !item.meta?.isHidden;
        }
      );
      return filterRoute;
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
    const templateMultiRouteList = (item: RouterData) => {
      if (item.meta?.isCollapse) {
        return (
          <multi-route
            children={item.children}
            name={item.name}
            title={item.meta?.title}
            icon={item.meta?.icon}
            meta={item.meta}
          ></multi-route>
        );
      }
      return <single-list routes={item.children}></single-list>;
    };
    const templateSingleRouteList = (item: RouterData) => {
      return (
        <single-route
          name={item.name}
          icon={item.meta?.icon}
          title={item.meta?.title}
        ></single-route>
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
            {this.initSideMenu.map((item: RouterData) => {
              return (
                <group-route
                  title={item.meta?.title}
                  isHiddenTitle={!item.meta?.isFirstRoute}
                >
                  {item.children
                    ? templateMultiRouteList(item)
                    : templateSingleRouteList(item)}
                </group-route>
              );
            })}
          </el-menu>
        </el-scrollbar>
      </el-row>
    );
  },
});

export default layoutSidebar;
// {
//   item.meta.isCollapse ? templateMultiRoute(item) : templateSingleRoute(item)
// }
