/*
 * @Description: Card Component for Drawer
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-08 10:38:36
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 16:54:06
 */
import { defineComponent, h } from 'vue';
import type { Component, PropType } from 'vue';
import Style from './style/drawer-card.module.less';

export default defineComponent({
  props: {
    icon: {
      type: Object as PropType<Component>,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return () => (
      <el-card shadow="never" body-style={{ padding: '0px' }}>
        <section class={Style.drawer__card}>
          <article class={Style['drawer__card--icon']}>
            <el-icon>{h(props.icon)}</el-icon>
          </article>
          <article class={Style['drawer__card--container']}>
            <header class={Style.title}>{props.title}</header>
            <div class={Style.text}>{props.content}</div>
          </article>
        </section>
      </el-card>
    );
  },
});
