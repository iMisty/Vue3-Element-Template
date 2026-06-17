/*
 * @Author: Miya
 * @Date: 2022-07-20 22:50:47
 * @LastEditTime: 2022-08-17 16:59:30
 * @LastEditors: Mirage
 * @Description: Avatar on Navbar
 * @FilePath: \Vue3-Element-Template\src\components\NavBarDrawer\indexAvatar.tsx
 */
import { defineComponent } from 'vue';
import image from '@/assets/avatar.jpg';
import Style from './style/avatar.module.less';

const style = {
  maxWidth: '100%',
};

export default defineComponent({
  emits: ['avatar'],
  setup(props, { emit }) {
    return () => (
      <div
        class={Style['layout__navbar--right-avatar']}
        onClick={() => emit('avatar', true)}
      >
        <el-image circle src={image} style={style} fit="fill"></el-image>
      </div>
    );
  },
});
