/*
 * @Description: Logo Component For Sidebar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-06-30 14:23:29
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 17:00:08
 */
import { defineComponent } from 'vue';
import Style from './style/logo.module.less';

export default defineComponent({
  emits: ['click'],
  setup(props, { slots, emit }) {
    return () => (
      <article
        class={Style['layout__sidebar--logo']}
        onClick={() => emit('click')}
      >
        {slots?.default && slots.default()}
      </article>
    );
  },
});
