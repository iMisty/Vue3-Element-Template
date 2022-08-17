/*
 * @Description: Card Component for Drawer
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-08 10:38:36
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 16:54:06
 */
import { Component, FunctionalComponent, h } from 'vue';
import Style from './style/drawer-card.module.less';

type DrawerCard = {
  icon: Component;
  title: String;
  content: String;
};

const DrawerCard: FunctionalComponent<DrawerCard> = (props: DrawerCard) => {
  const { icon, title, content } = props;
  const getIcon = () => {
    return h(icon);
  };
  return (
    <el-card shadow="never" body-style={{ padding: '0px' }}>
      <section class={Style['drawer__card']}>
        <article class={Style['drawer__card--icon']}>
          <el-icon>{getIcon()}</el-icon>
        </article>
        <article class={Style['drawer__card--container']}>
          <header class={Style['title']}>{title}</header>
          <div class={Style['text']}>{content}</div>
        </article>
      </section>
    </el-card>
  );
};

export default DrawerCard;
