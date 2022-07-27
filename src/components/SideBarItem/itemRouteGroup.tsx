/*
 * @Description: First Route Item
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-25 11:19:43
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-27 17:34:44
 */
import { defineComponent } from 'vue';
import Style from '@/style/layout/sidebar/sidebar.module.less';

const itemRouteGroup = defineComponent({
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
  render() {
    return (
      <el-row>
        <el-col span={24}>
          {this.$props.isHiddenTitle ? (
            ''
          ) : (
            <div class={Style['layout__sidebar--group-title']}>
              {this.$props.title}
            </div>
          )}
          {this.$slots.default?.()}
        </el-col>
      </el-row>
    );
  },
});

export default itemRouteGroup;
