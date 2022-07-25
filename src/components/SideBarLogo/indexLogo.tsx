/*
 * @Description: Logo Component For Sidebar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-06-30 14:23:29
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-25 15:37:37
 */
import { FunctionalComponent } from 'vue';
import Style from '@/style/layout/sidebar/logo.module.less';

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
