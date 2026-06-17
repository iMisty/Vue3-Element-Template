/*
 * @Description: Global Card Block Layout
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-21 19:56:11
 * @LastEditors: Miya
 * @LastEditTime: 2024-08-22 12:11:51
 */

import { defineComponent } from 'vue';
import type { PropType } from 'vue';

type CardShadow = 'always' | 'hover' | 'never';

export default defineComponent({
  props: {
    shadow: {
      type: String as PropType<CardShadow>,
      default: 'never',
    },
  },
  setup(props, { slots }) {
    return () => (
      <el-card shadow={props.shadow}>
        {slots.header ? (
          <section class="card__header">{slots.header?.()}</section>
        ) : null}
        {slots.default ? (
          <section class="card__container">{slots.default?.()}</section>
        ) : null}
      </el-card>
    );
  },
});
