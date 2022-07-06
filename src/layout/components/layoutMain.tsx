/*
 * @Description: Main with Layout
 * @Version: 2.0
 * @Author: Miya
 * @Date: 2021-11-28 00:56:25
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-06 15:42:17
 */

import { defineComponent, computed, Transition, Slots } from 'vue';
import { useRoute } from 'vue-router';
import '@/style/layout/main.module.less';

const LayoutMain = defineComponent({
  components: {
    Transition,
  },
  setup() {
    const computedRoute = computed(() => {
      return useRoute().path;
    });
    return { computedRoute };
  },
  render() {
    return (
      <div class="layout__main">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    );
  },
});
export default LayoutMain;
