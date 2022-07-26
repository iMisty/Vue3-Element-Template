/*
 * @Description: Single Router in Sidebar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-05 17:07:38
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-26 09:47:32
 */
import { FunctionalComponent } from 'vue';
import router from '@/router/router';

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

const itemSingleRoute: FunctionalComponent<SidebarRoute> = (
  props: SidebarRoute,
  context
) => {
  const { emit } = context;
  return (
    <el-menu-item
      index={props.name}
      onClick={() => handleSelect(props.name as string)}
    >
      <el-icon>{/* <component is={props.icon} /> */}</el-icon>
      <span>{props.title}</span>
    </el-menu-item>
  );
};

export default itemSingleRoute;
