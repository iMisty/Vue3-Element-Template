/*
 * @Description: First Route Item
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-25 11:19:43
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 15:24:08
 */
import { defineComponent } from 'vue';
import Style from '@/layout/style/sidebar.module.less';

export default defineComponent({
  name: 'itemRouteGroup',
  props: {
    title: {
      type: String,
    },
    isHiddenTitle: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => (
      <el-row>
        <el-col span={24}>
          {props.isHiddenTitle ? (
            ''
          ) : (
            <div class={Style['layout__sidebar--group-title']}>
              {props.title}
            </div>
          )}
          {slots.default?.()}
        </el-col>
      </el-row>
    );
  },
});
