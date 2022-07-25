/*
 * @Description: Multi Router in Sidebar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-05 17:07:38
 * @LastEditors: Miya
 * @LastEditTime: 2022-07-25 22:06:50
 */
import { defineComponent, resolveComponent } from 'vue';
import type { Slots } from 'vue';
import { Location, Document, Menu as IconMenu,Headset } from '@element-plus/icons-vue';
import SingleRoute from './itemSingleRoute';

interface SidebarRoute {
  name: String;
  icon: String;
  title: String;
  meta: SidebarRoute;
  children: Array<SidebarRoute>;
  select?: () => void
}


const itemMultiRoute = defineComponent({
  components:{
    Location,
    Document,
    IconMenu,Headset
  },
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
    },
    children: {
      type: Array<SidebarRoute>
    },
  },
  render() {
    const getPropsIcon = () => resolveComponent(this.$props.icon ? this.$props.icon : '')
    const slotSubMenuTitle: Slots = {
      title: () => [
        <span>
          <el-icon>
            {getPropsIcon()}
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
