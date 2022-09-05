/*
 * @Description: Example Page Dashboard
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-02 16:20:11
 * @LastEditors: Miya
 * @LastEditTime: 2022-09-05 22:23:07
 */
import { defineComponent, onMounted, ref } from 'vue';
import SimpleStatistics from '@/components/SimpleStatistics/statistics';
import { TemplateChart, Charts } from '@/utils/Charts';

const Dashboard = defineComponent({
  name: 'Dashboard',
  components: {
    SimpleStatistics,
  },
  setup() {
    let objectEChart: null | TemplateChart = null;
    let timer: NodeJS.Timer | null | number | undefined = null;

    onMounted(() => {
      const charts = document.getElementById('charts');
      objectEChart = new TemplateChart(charts!);
      objectEChart.setTemplateData();
      objectEChart.render();
      window.addEventListener('resize', function () {
        objectEChart!.resize();
      });
    });

  },
  render() {
    const renderCircle = () => {
      return (
        <el-progress type="circle" percentage={24} width={90}></el-progress>
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
        <el-col span={6}>
          <simple-statistics></simple-statistics>
        </el-col>
        <el-col span={6}>
          <simple-statistics title="Page" sum={7}></simple-statistics>
        </el-col>
        <el-col span={6}>
          <simple-statistics
            v-slots={{ chart: renderCircle }}
          ></simple-statistics>
        </el-col>
        <el-col span={6}>
          <simple-statistics isSimple={true} title="Simple"></simple-statistics>
        </el-col>
        <el-col span={24}>{renderCharts}</el-col>
      </el-row>
    );
  },
});

export default Dashboard;
