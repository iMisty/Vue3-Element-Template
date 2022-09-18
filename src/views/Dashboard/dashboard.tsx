/*
 * @Description: Example Page Dashboard
 * @Version: 1.1
 * @Author: Mirage
 * @Date: 2022-08-02 16:20:11
 * @LastEditors: Miya
 * @LastEditTime: 2022-09-17 02:16:58
 */
import {
  defineComponent, FunctionalComponent, h, onMounted, VNode,
} from 'vue';
import SimpleStatistics from '@/components/SimpleStatistics/statistics';
import type {
  SimpleStatisticsProps,
  StatisticsSlot,
} from '@/components/SimpleStatistics/statistics';
import TemplateChart from '@/utils/TemplateChart';

const Dashboard = defineComponent({
  name: 'Dashboard',
  setup() {
    /**
     * Chart Container
     */
    const objectEChart: null | TemplateChart = null;

    /**
     * Set a New Chart Canvas
     * @param domID {string} Chart Render DOM ID
     * @param objectChart {TemplateChart | null} Chart Container
     */
    const setChartData = (
      domID: string,
      objectChart: null | TemplateChart,
    ): void => {
      const charts = document.getElementById(domID);
      objectChart = new TemplateChart(charts!);
      objectChart.setTemplateData();
      objectChart.render();
      window.addEventListener('resize', () => {
        objectChart!.resize();
      });
    };

    onMounted(() => {
      setChartData('charts', objectEChart);
    });

    /**
     * Render Circle Component From Element-Plus
     * @returns {VNode | JSX.Element} Render Circle Component from Element-Plus
     */
    const renderCircle: FunctionalComponent = (): VNode => (
      <el-progress type="circle" percentage={24} width={90}></el-progress>
    );

    /**
     * Render Chart Card Container
     * @returns {VNode | JSX.Element} Render Chart Container DOM
     */
    const renderCharts = (): VNode => (
      <el-card>
        <div id="charts" ref="charts" style="width: 100%;height: 300px;"></div>
      </el-card>
    );

    /**
     * Render Statistics from Custom Component
     * @param props {SimpleStatisticsProps | null} Props from Statistics Component
     * @param slots {StatisticsSlot} Slots from Statistics Component
     * @returns {VNode} Render Statistics Component
     */
    const renderStatistics = (
      props?: SimpleStatisticsProps | null,
      slots?: StatisticsSlot,
    ): VNode => h(SimpleStatistics, props, slots);

    /**
     * Render Dashboard Page Template
     * @returns {VNode} Render Dashboard Template
     */
    const renderTemplate = (): VNode => (
      <el-row gutter={32}>
        <el-col span={6}>{renderStatistics}</el-col>
        <el-col span={6}>{renderStatistics({ title: 'Page', sum: 7 })}</el-col>
        <el-col span={6}>
          {renderStatistics(null, { chart: () => h(renderCircle) })}
        </el-col>
        <el-col span={6}>
          {renderStatistics({ isSimple: true, title: 'Simple' })}
        </el-col>
        <el-col span={24}>{renderCharts}</el-col>
      </el-row>
    );
    return renderTemplate;
  },
});

export default Dashboard;
