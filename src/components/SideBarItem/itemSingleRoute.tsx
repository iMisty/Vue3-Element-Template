/*
 * @Description: Single Router in Sidebar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-05 17:07:38
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-27 14:17:54
 */
import { defineComponent, h, resolveComponent } from 'vue';
import router from '@/router/router';
import {
  Location,
  Document,
  Menu as IconMenu,
  Headset,
} from '@element-plus/icons-vue';

interface SidebarRoute {
  name: string;
  icon?: string;
  title?: string;
}

/**
 * @description Click Methods after Select Menu Item
 * @param {string} payload - Menu Item's Index
 */
const handleSelect = (payload: string) => {
  // console.log(payload);
  router.push({
    name: payload,
  });
};

const itemSingleRoute = defineComponent({
  components: {
    Location,
    Document,
    IconMenu,
    Headset,
  },
  props: {
    icon: {
      type: String,
    },
    name: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  render() {
    const getPropsIcon = () =>
      h(resolveComponent(this.$props.icon ? this.$props.icon : ''));

    return (
      <el-menu-item
        index={this.$props.name}
        onClick={() => handleSelect(this.$props.name as string)}
      >
        <el-icon>{getPropsIcon}</el-icon>
        <span>{this.$props.title}</span>
      </el-menu-item>
    );
  },
});

export default itemSingleRoute;
