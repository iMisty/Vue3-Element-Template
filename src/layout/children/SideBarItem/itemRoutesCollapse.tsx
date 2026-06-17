/*
 * @Description: Routes for Sidebar
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-27 15:02:02
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 15:24:59
 */
import { defineComponent } from 'vue';
import MultiRoute from './itemMultiRoute';
import SingleList from './itemRoutesSingle';

export default defineComponent({
  components: {
    MultiRoute,
    SingleList,
  },
  props: {
    routes: {
      type: Object,
    },
  },
  setup(props) {
    return () => (
      <el-row>
        <el-col span={24}>
          {props.routes?.children ? (
            <multi-route
              children={props.routes}
              name={props.routes.name}
              title={props.routes.meta?.title}
              icon={props.routes.meta?.icon}
              meta={props.routes.meta}
            ></multi-route>
          ) : (
            <single-route
              name={props.routes?.name}
              icon={props.routes?.meta?.icon}
              title={props.routes?.meta?.title}
            ></single-route>
          )}
        </el-col>
      </el-row>
    );
  },
});
