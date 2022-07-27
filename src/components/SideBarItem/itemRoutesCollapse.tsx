/*
 * @Description: Routes for Sidebar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-27 15:02:02
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-27 17:31:57
 */
import { defineComponent } from 'vue';
import MultiRoute from './itemMultiRoute';
import SingleList from './itemRoutesSingle';
import RouterData from '@/interface/Router';

const itemRouteCollapse = defineComponent({
  components: {
    MultiRoute,
    SingleList,
  },
  props: {
    routes: {
      type: Object,
    },
  },
  render() {
    <el-row>
      <el-col span={24}>
        {this.$props.routes?.children ? (
          <multi-route
            children={this.$props.routes}
            name={this.$props.routes.name}
            title={this.$props.routes.meta?.title}
            icon={this.$props.routes.meta?.icon}
            meta={this.$props.routes.meta}
          ></multi-route>
        ) : (
          <single-route
            name={this.$props.routes?.name}
            icon={this.$props.routes?.meta?.icon}
            title={this.$props.routes?.meta?.title}
          ></single-route>
        )}
      </el-col>
    </el-row>;
  },
});

export default itemRouteCollapse;
