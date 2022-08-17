/*
 * @Author: Miya
 * @Date: 2022-07-20 22:50:47
 * @LastEditTime: 2022-08-17 16:59:30
 * @LastEditors: Mirage
 * @Description: Avatar on Navbar
 * @FilePath: \Vue3-Element-Template\src\components\NavBarDrawer\indexAvatar.tsx
 */
import { FunctionalComponent } from 'vue';
import Style from './style/avatar.module.less';
import image from '@/assets/avatar.jpg';

const style = {
  maxWidth: '100%',
};

const NavbarAvatar: FunctionalComponent = (props, context) => {
  const { emit } = context;
  return (
    <div
      class={Style['layout__navbar--right-avatar']}
      onClick={() => {
        return emit('avatar', true);
      }}
    >
      <el-image circle src={image} style={style} fit="fill"></el-image>
    </div>
  );
};

export default NavbarAvatar;
