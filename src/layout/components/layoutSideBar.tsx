/*
 * @Description: Sidebar with Layout
 * @Version: 2.0
 * @Author: Miya
 * @Date: 2021-11-27 15:45:49
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-06 15:07:37
 */
import { defineComponent, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAPPStore } from '@/store/appStore';
import { Location, Document, Menu as IconMenu } from '@element-plus/icons-vue';
import { initDynamicRouter } from '@/router/router';
import SidebarLogo from '@/components/SideBarLogo/indexLogo';
import SingleRoute from '@/components/SideBarItem/itemSingleRoute';
import MultiRoute from '@/components/SideBarItem/itemMultiRoute';
import '@/style/layout/sidebar/sidebar.less';

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
    return (
      <el-row
        class={['layout__sidebar', this.getCollapseStatus ? '' : 'collapse']}
      >
        <sidebar-logo>
          <span>Admin template</span>
        </sidebar-logo>
        <el-scrollbar>
          <el-menu
            background-color="#304156"
            text-color="#bfcbd9"
            class="el-menu-vertical-demo"
            collapse={!this.getCollapseStatus}
            collapse-transition={false}
            default-active={this.getActiveRoute}
            onSelect={() => this.handleSelect}
          >
            {this.initSideMenu.map((item: SidebarRoute) => {
              return (
                <ul key={item.name}>
                  {!item.meta.hidden &&
                  item.children &&
                  item.children.length > 0 ? (
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
                </ul>
              );
            })}
          </el-menu>
        </el-scrollbar>
      </el-row>
    );
  },
});

export default layoutSidebar;
