/*
 * @Description: Logo Component For Sidebar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-06-30 14:23:29
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 17:00:08
 */
import { FunctionalComponent } from 'vue';
import Style from './style/logo.module.less';

type Emit = {
  click: () => void;
};

const SidebarLogo: FunctionalComponent<unknown, Emit> = (props, ctx) => {
  const { slots, emit } = ctx;

  return (
    <article
      class={Style['layout__sidebar--logo']}
      onClick={() => emit('click')}
    >
      {slots?.default && slots.default()}
    </article>
  );
};

export default SidebarLogo;
