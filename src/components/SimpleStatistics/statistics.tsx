/*
 * @Author: Miya
 * @Date: 2022-08-23 21:46:17
 * @LastEditTime: 2022-09-17 00:03:41
 * @LastEditors: Miya
 * @Description: Simple Statistics Component
 * @FilePath: \Vue3-Element-Template\src\components\SimpleStatistics\statistics.tsx
 */

import { defineComponent } from 'vue';
import type { PropType, VNode } from 'vue';
import Style from './style/statistics.module.less';

export type SimpleStatisticsProps = {
  title?: string;
  sum?: string | number;
  isSimple?: boolean;
  isRightCenter?: boolean;
};

export type StatisticsSlot = {
  default?: () => VNode;
  icon?: () => VNode;
  chart?: () => VNode;
};

export default defineComponent({
  props: {
    title: String,
    sum: [String, Number] as PropType<string | number>,
    isSimple: Boolean,
    isRightCenter: Boolean,
  },
  setup(props, { slots }) {
    const defaultSlots = () => (
      <section class={Style['statistics__simple--left']}>
        <h4 class={Style['statistics__simple--title']}>
          {props.title ? props.title : 'Component'}
        </h4>
        <p class={Style['statistics__simple--sum']}>
          {props.sum ? props.sum : 42}
        </p>
      </section>
    );

    return () => (
      <el-card class={Style.statistics__simple}>
        <el-row align="middle">
          {slots.icon ? <el-col>{slots.icon?.()}</el-col> : null}
          {slots.default ? (
            <el-col span={props.isSimple ? 24 : 12}>{slots.default}</el-col>
          ) : (
            <el-col span={props.isSimple ? 24 : 12}>{defaultSlots}</el-col>
          )}
          {slots.chart ? (
            <el-col
              class={
                props.isRightCenter ? Style['statistics__simple--center'] : ''
              }
              span={props.isSimple ? 24 : 12}
            >
              {slots.chart?.()}
            </el-col>
          ) : null}
        </el-row>
      </el-card>
    );
  },
});
