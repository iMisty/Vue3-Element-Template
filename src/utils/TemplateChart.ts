/*
 * @Author: Miya
 * @Date: 2022-09-17 02:11:29
 * @LastEditTime: 2022-09-17 02:18:13
 * @LastEditors: Miya
 * @Description: Template Charts
 * @FilePath: \Vue3-Element-Template\src\utils\TemplateChart.ts
 */
import Charts from './Charts';
/**
 * @class
 * Extends Class if Want Set Template Data Chart Example
 * @example
 * const getDOM = document.getElementById('chart');
 * const templateExample = new TemplateChart(getDOM);
 */
class TemplateChart extends Charts {
  /**
   * Initial Template Data
   */
  public setTemplateData() {
    this.chartOptions = {
      title: {
        text: 'Sample Charts',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Sample Data'],
      },
      grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        containLabel: true,
      },
      toolbox: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Sample Data',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [120, 132, 101, 134, 90, 230, 210],
        },
      ],
    };
  }
}

export default TemplateChart;
