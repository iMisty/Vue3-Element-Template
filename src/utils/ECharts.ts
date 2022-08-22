/*
 * @Description: ECharts Utils
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-19 11:33:16
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-22 17:37:54
 */
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import type {
  BarSeriesOption,
  LineSeriesOption,
  TooltipComponentOption,
  ToolboxComponentOption,
  GridComponentOption,
  TitleComponentOption,
  LegendComponentOption,
  XAXisComponentOption,
  YAXisComponentOption,
} from 'echarts';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
  | BarSeriesOption
>;

type ToolTipTrigger = 'axis' | 'item' | 'none';

class ECharts {
  /**
   * @constructor
   * Render Charts DOM HTML Element
   */
  private renderDOM: HTMLElement;

  /**
   * ECharts Option
   */
  private chartOptions: EChartsOption = {
    title: {
      // text: 'Sample Charts',
    },
    tooltip: {
      // trigger: 'axis',
    },
    legend: {
      // data: ['Sample Data'],
    },
    grid: {
      left: '4%',
      right: '4%',
      bottom: '4%',
      // containLabel: true,
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
        // name: 'Sample Data',
        type: 'line',
        // stack: 'Total',
        smooth: true,
        data: [120, 132, 101, 134, 90, 230, 210],
      },
    ],
  };

  private initChart: echarts.ECharts | undefined;

  private resizeTimer: NodeJS.Timeout | null = null;

  constructor(dom: HTMLElement) {
    this.renderDOM = dom;
  }

  /**
   * Initial Chart and Set Render DOM
   */
  private initialChart() {
    this.initChart = echarts.init(this.renderDOM);
  }

  /**
   *  @TODO Set SubClass
   */

  public getTitle() {
    return this.chartOptions.title;
  }

  /**
   * Set This Chart's Title
   * @description If Title Param is String,Then only Set Base Title Options.
   * Else Title is Object,Set Title Component Option
   * @param title {TitleComponentOption | string} Title Options in this Chart
   * @see https://echarts.apache.org/zh/option.html#title
   */
  public setTitle(title: TitleComponentOption | string) {
    if (typeof title === 'string') {
      return (this.chartOptions.title = {
        text: title,
      });
    }
    return (this.chartOptions.title = title);
  }

  /**
   * Get This Charts Tooltip Option
   * @returns Tooltip Options Data
   */
  public getTooltip() {
    return this.chartOptions.tooltip;
  }

  /**
   * Set Tooltip Component Option
   * @description If tooltip Param is String,Then only Set Base Tooltip Options.
   * Else Tooltip is Object,Set Tooltip Component Option
   * @param tooltip {TooltipComponentOption | ToolTipTrigger} Tooltip Option
   * @see https://echarts.apache.org/zh/option.html#tooltip
   */
  public setTooltip(tooltip: TooltipComponentOption | ToolTipTrigger) {
    if (typeof tooltip === 'string') {
      return (this.chartOptions.tooltip = {
        trigger: tooltip,
      });
    }
    return (this.chartOptions.tooltip = tooltip);
  }

  /**
   * Get This Charts Legend Option
   * @returns Legend Options Data
   */
  public getLegend() {
    return this.chartOptions.legend;
  }

  /**
   * Set Legend Component Option
   * @description If Legend Param is Array,Then only Set Base Legend Options.
   * Else Legend is Object,Set Legend Component Option
   * @param legend {LegendComponentOption | LegendTrigger} Legend Option
   * @see https://echarts.apache.org/zh/option.html#legend
   */
  public setLegend(
    legend: LegendComponentOption | LegendComponentOption['data']
  ) {
    if (!legend) {
      throw new Error('Legend is Required');
    }
    if (Array.isArray(legend)) {
      return (this.chartOptions!.legend = {
        data: legend,
      });
    }
    return (this.chartOptions.legend = legend);
  }

  /**
   * Get This Charts Grid Option
   * @returns Grid Options Data
   */
  public getGrid() {
    return this.chartOptions.grid;
  }

  /**
   * Set Grid Component Option
   * @description If Grid Param is null/undefined,Then only Set Base Grid Options.
   * Else Grid is Object,Set Grid Component Option
   * @default {left: '4%',right: '4%',bottom: '4%',containLabel: true}
   * @param gridTheme {GridComponentOption | GridTrigger} Grid Option
   * @see https://echarts.apache.org/zh/option.html#grid
   */
  public setGrid(gridTheme?: GridComponentOption | undefined) {
    if (!gridTheme) {
      return (this.chartOptions.grid = {
        left: '4%',
        right: '4%',
        bottom: '4%',
        containLabel: true,
      });
    }
    return (this.chartOptions.grid = gridTheme);
  }

  /**
   * Get This Charts Toolbox Option
   * @returns Toolbox Options Data
   */
  public getToolbox() {
    return this.chartOptions.toolbox;
  }

  /**
   * Set Toolbox Component
   * @description If Param Toolbox is null/undefined,Toolbox will be removed
   * @param toolbox {ToolboxComponentOption | undefined} Toolbox Config
   * @see https://echarts.apache.org/zh/option.html#toolbox
   */
  public setToolbox(toolbox?: ToolboxComponentOption) {
    if (!toolbox) {
      return (this.chartOptions.toolbox = {});
    }
    return (this.chartOptions.toolbox = toolbox);
  }

  /**
   * Get This Charts xAxis Option
   * @returns xAxis Options Data
   */
  public getXAxis() {
    return this.chartOptions.xAxis;
  }

  public setXAxis(axisOption: XAXisComponentOption) {
    return (this.chartOptions.xAxis = axisOption);
  }
  /**
   * Get This Charts yAxis Option
   * @returns yAxis Options Data
   */
  public getYAxis() {
    return this.chartOptions.yAxis;
  }

  public setYAxis(axisOption: YAXisComponentOption) {
    return (this.chartOptions.yAxis = axisOption);
  }

  /**
   * Get This Charts Series Data
   * @returns Series Data
   */
  public getSeriesData() {
    return this.chartOptions.series;
  }

  public setSeriesData<T>(seriesData: T) {
    return (this.chartOptions.series = seriesData);
  }

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

  /**
   * Render Chart
   */
  public render() {
    if (!this.initChart) {
      this.initialChart();
    }
    this.initChart!.setOption(this.chartOptions);
  }

  /**
   * Resize Charts
   * @param timeout {number}
   */
  public resize(timeout: number = 1000) {
    clearInterval(Number(this.resizeTimer));
    this.resizeTimer = setTimeout(() => {
      this.initChart!.resize();
    }, timeout);
  }
}

export default ECharts;
