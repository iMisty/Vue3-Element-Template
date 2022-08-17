/*
 * @Description: Single Route List
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-27 16:29:19
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-27 17:08:42
 */
import { defineComponent } from 'vue';
import RouterData from '@/interface/Router';
import SingleRoute from './itemSingleRoute';

const itemRouteSingleList = defineComponent({
  name: 'itemRouteSingleList',
  components: { SingleRoute },
  props: {
    routes: {
      type: Object,
    },
  },
  render() {
    return (
      <el-row>
        <el-col span={24}>
          {this.$props.routes?.map((item: RouterData) => {
            return (
              <single-route
                name={item.name}
                icon={item.meta?.icon}
                title={item.meta?.title}
              ></single-route>
            );
          })}
        </el-col>
      </el-row>
    );
  },
});

export default itemRouteSingleList;
