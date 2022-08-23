/*
 * @Author: Miya
 * @Date: 2022-08-23 21:46:17
 * @LastEditTime: 2022-08-23 22:29:07
 * @LastEditors: Miya
 * @Description: Simple Statistics Component
 * @FilePath: \Vue3-Element-Template\src\components\SimpleStatistics\statistics.tsx
 */

import { FunctionalComponent } from 'vue';
import Style from './style/statistics.module.less';

interface SimpleStatisticsProps {
  title: string;
  sum: string;
  isSimple: boolean;
  isRightCenter: boolean;
}

const SimpleStatistics: FunctionalComponent<SimpleStatisticsProps> = (
  props: SimpleStatisticsProps,
  context
) => {
  const { slots } = context;
  const defaultSlots = () => {
    return (
      <section class={Style['statistics__simple--left']}>
        <h4 class={Style['statistics__simple--title']}>
          {props.title ? props.title : 'Component'}
        </h4>
        <p class={Style['statistics__simple--sum']}>
          {props.sum ? props.sum : 42}
        </p>
      </section>
    );
  };
  return (
    <el-card class={Style['statistics__simple']}>
      <el-row align="middle">
        {slots['icon'] ? <el-col>{slots['icon']?.()}</el-col> : null}
        {slots['default'] ? (
          <el-col span={props.isSimple ? 24 : 12}>{slots['default']}</el-col>
        ) : (
          <el-col span={props.isSimple ? 24 : 12}>{defaultSlots}</el-col>
        )}
        {slots['chart'] ? (
          <el-col
            class={
              props.isRightCenter ? Style['statistics__simple--center'] : ''
            }
            span={props.isSimple ? 24 : 12}
          >
            {slots['chart']?.()}
          </el-col>
        ) : null}
      </el-row>
    </el-card>
  );
};

export default SimpleStatistics;
