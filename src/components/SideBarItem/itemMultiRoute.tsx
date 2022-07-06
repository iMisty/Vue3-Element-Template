/*
 * @Description: Multi Router in Sidebar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-05 17:07:38
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-06 15:21:13
 */
import { defineComponent, Slots } from 'vue';
import router from '@/router/router';
import SingleRoute from './itemSingleRoute';

interface SidebarRoute {
  name: String;
  icon: String;
  title: String;
  meta: SidebarRoute;
  children: Array<SidebarRoute>;
  select?: () => void
}

const handleSelect = (payload: string) => {
  console.log(payload);
  router.push({
    name: payload,
  });
};

const itemMultiRoute = defineComponent({
  props: {
    name: {
      type: String,
    },
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    meta: {
      type: Object,
      default: () => {},
    },
    children: {
      type: Array<SidebarRoute>,
      default: () => [],
    },
  },
  render() {
    const slotSubMenuTitle: Slots = {
      title: () => [
        <span>
          <el-icon>
            {/* <component is={this.$props.icon}></component> */}
          </el-icon>
          {this.$props.title}
        </span>,
      ],
    };
    return (
      <el-sub-menu index={this.$props.name} v-slots={slotSubMenuTitle}>
        {this.$props.children &&
          this.$props.children.map((sub: SidebarRoute) => {
            return (
              <SingleRoute
                name={sub.name}
                icon={sub.icon}
                title={sub.meta.title}
              ></SingleRoute>
            );
          })}
      </el-sub-menu>
    );
  },
});

export default itemMultiRoute;
