/*
 * @Description: Single Router in Sidebar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-05 17:07:38
 * @LastEditors: Miya
 * @LastEditTime: 2022-07-27 23:09:41
 */
import { defineComponent, h, resolveComponent } from 'vue';
import {
  Location,
  Document,
  Menu as IconMenu,
  Headset,
  House,
} from '@element-plus/icons-vue';
import router from '@/router/router';

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

export default defineComponent({
  components: {
    Location,
    Document,
    IconMenu,
    Headset,
    House,
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
  setup(props) {
    return () => {
      const getPropsIcon = () => h(resolveComponent(props.icon ? props.icon : ''));

      return (
        <el-menu-item
          index={props.name}
          onClick={() => handleSelect(props.name as string)}
        >
          <el-icon>{getPropsIcon}</el-icon>
          <span>{props.title}</span>
        </el-menu-item>
      );
    };
  },
});
