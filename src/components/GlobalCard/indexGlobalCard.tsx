/*
 * @Description: Global Card Block Layout
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-21 19:56:11
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-01 16:08:31
 */

import { FunctionalComponent } from 'vue';

type CardProps = {
  shadow: 'always' | 'hover' | 'never';
};

const GlobalCard: FunctionalComponent<CardProps> = (
  props: CardProps,
  context
) => {
  const { slots, emit } = context;

  return (
    <el-card shadow={(props.shadow = 'never')}>
      {slots['header'] ? (
        <section class="card__header">{slots['header']?.()}</section>
      ) : null}
      {slots['default'] ? (
        <section class="card__container">{slots['default']?.()}</section>
      ) : null}
    </el-card>
  );
};

export default GlobalCard;
