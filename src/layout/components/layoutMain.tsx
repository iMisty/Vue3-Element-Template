/*
 * @Description: Main with Layout
 * @Version: 2.0
 * @Author: Miya
 * @Date: 2021-11-28 00:56:25
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 15:28:21
 */

import { defineComponent, Transition } from 'vue';
import type { Slots } from 'vue';
import '@/layout/style/main.module.less';

export default defineComponent({
  components: {
    Transition,
  },
  setup() {
    return () => (
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
