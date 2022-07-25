/*
 * @Description: Main with Layout
 * @Version: 2.0
 * @Author: Miya
 * @Date: 2021-11-28 00:56:25
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-25 16:41:46
 */

import { defineComponent, computed, Transition } from 'vue';
import type { Slots } from 'vue';
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
        <router-view
          v-slots={{
            default: (scope: Slots) => (
              <transition name="fade-transform" mode="out-in">
                {scope.Component}
              </transition>
            ),
          }}
        ></router-view>
      </div>
    );
  },
});
export default LayoutMain;
