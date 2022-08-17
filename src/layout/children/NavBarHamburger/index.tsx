/*
 * @Description: Hamburger Component for Navbar
 * @Version: 2.0
 * @Author: Mirage
 * @Date: 2021-11-28 03:07:28
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 16:59:55
 */
import { defineComponent, computed, ComputedRef } from 'vue';
import { useAPPStore } from '@/store/appStore';
import Style from './style/hamburger.module.less';

const handleClickToggleNavbarStatus = () => {
  const store = useAPPStore();
  store.toggleNavBarCollapse();
};

const NavbarHamburger = defineComponent({
  name: 'NavBarHamburger',
  setup() {
    const isActive: ComputedRef<boolean> = computed<boolean>(() => {
      const store = useAPPStore();
      return store.isCollapse;
    });
    return { isActive, handleClickToggleNavbarStatus };
  },
  render() {
    return (
      <div
        class={Style['layout__navbar--hamburger']}
        onClick={() => handleClickToggleNavbarStatus()}
      >
        <svg
          class={[Style['hamburger'], this.isActive ? Style['is-active'] : '']}
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
        </svg>
      </div>
    );
  },
});

export default NavbarHamburger;
