/*
 * @Description: Global Card Block Layout
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-21 19:56:11
 * @LastEditors: Miya
 * @LastEditTime: 2024-08-22 12:11:51
 */

import { FunctionalComponent } from 'vue';

type CardProps = {
  shadow: 'always' | 'hover' | 'never';
};

const CustomCard: FunctionalComponent<CardProps> = (
  props: CardProps,
  context,
) => {
  const { slots } = context;

  const render = () => (
    <el-card shadow={(props.shadow = 'never')}>
      {slots.header ? (
        <section class="card__header">{slots.header?.()}</section>
      ) : null}
      {slots.default ? (
        <section class="card__container">{slots.default?.()}</section>
      ) : null}
    </el-card>
  );

  return render;
};

export default CustomCard;
