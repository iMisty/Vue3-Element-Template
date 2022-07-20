/*
 * @Author: Miya
 * @Date: 2022-07-20 22:50:47
 * @LastEditTime: 2022-07-20 23:50:48
 * @LastEditors: Miya
 * @Description: Avatar on Navbar
 * @FilePath: \Vue3-Element-Template\src\components\NavBarDrawer\indexAvatar.tsx
 */
import { FunctionalComponent } from 'vue';
import Style from '@/style/layout/navbar/avatar.module.less';
import image from '@/assets/avatar.jpg';

const style = {
  maxWidth: '100%',
};

const NavbarAvatar: FunctionalComponent = () => {
  return (
    <div
      class={Style['layout__navbar--right-avatar']}
    >
      <el-image circle src={image} style={style} fit="fill"></el-image>
    </div>
  );
};

export default NavbarAvatar;
