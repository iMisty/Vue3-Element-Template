/*
 * @Description: Example Page Dashboard
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-02 16:20:11
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-19 15:56:55
 */
import { defineComponent, onMounted, ref } from 'vue';
import ECharts from '@/utils/ECharts';

const initial = () => {
  const charts = document.getElementById('charts');
  const EChart = new ECharts(charts!);
  EChart.render();
};

const Dashboard = defineComponent({
  name: 'Dashboard',
  setup() {
    const charts = ref<HTMLElement>();
    onMounted(() => {
      initial();
    });
    return { charts };
  },
  render() {
    const renderCircle = () => {
      return (
        <el-card>
          <el-progress type="circle" percentage={24}></el-progress>
        </el-card>
      );
    };
    const renderCharts = () => {
      return (
        <el-card>
          <div
            id="charts"
            ref="charts"
            style="width: 100%;height: 300px;"
          ></div>
        </el-card>
      );
    };
    return (
      <el-row gutter={32}>
        <el-col span={6}>{renderCircle}</el-col>
        <el-col span={24}>{renderCharts}</el-col>
      </el-row>
    );
  },
});

export default Dashboard;
