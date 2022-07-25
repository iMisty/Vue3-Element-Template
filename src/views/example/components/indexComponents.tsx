/*
 * @Description: Example - Components
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-22 15:00:37
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-25 15:58:19
 */
import { defineComponent } from 'vue';

const ComponentIndex = defineComponent({
  name: 'ComponentIndex',
  render() {
    return <router-view></router-view>;
  },
});

export default ComponentIndex;
