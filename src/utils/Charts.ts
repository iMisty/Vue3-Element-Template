/*
 * @Description: ECharts Utils
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-19 11:33:16
 * @LastEditors: Miya
 * @LastEditTime: 2022-09-05 22:33:17
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
import { YAXisOption } from 'echarts/types/dist/shared';

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

class Charts {
  /**
   * @constructor
   * 渲染图表所在的DOM对象
   */
  public renderDOM: HTMLElement;

  /**
   * @constructor
   * 单图表最大保留数据数
   */
  private dataLimit: number = 7;

  /**
   * @constructor
   */
  public width: number | undefined = undefined;

  public height: number | undefined = undefined;

  /**
   * 图表配置项
   * @see https://echarts.apache.org/zh/option.html#title
   */
  public chartOptions: EChartsOption = {
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
    series: [],
  };

  /**
   * 存储初始化该图表存在的实例
   */
  private initChart: echarts.ECharts | undefined;

  /**
   * 用于存储重新渲染图表的延时定时器
   */
  private resizeTimer: NodeJS.Timeout | null = null;

  constructor(
    dom: HTMLElement,
    width?: number,
    height?: number,
    limit: number = 7
  ) {
    this.renderDOM = dom;
    this.dataLimit = limit;
    this.width = width;
    this.height = height;
  }

  /**
   * 初始化图表配置方法
   */
  private initialChart() {
    this.initChart = echarts.init(this.renderDOM, undefined, {
      width: this.width,
      height: this.height,
    });
  }

  /**
   * 获取图表左上角标题内容
   * @TODO Set SubClass
   */
  public getTitle() {
    return this.chartOptions.title;
  }

  /**
   * 设置图表左上角标题内容
   * @description 设置图表标题内容根据ECharts的TitleComponentOption内容设置
   * @param title {TitleComponentOption | string} 若title参数为string格式,则仅设置标题,若传递一个对象,则遵循ECharts组件配置
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
   * 获取当前图表的工具栏
   * @returns Tooltip Options Data
   */
  public getTooltip() {
    return this.chartOptions.tooltip;
  }

  /**
   * 设置当前图表的工具栏
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

  public setXAxis(axisOption: Array<String | Number>) {
    if (!this.chartOptions) {
      throw new Error('图表尚未初始化');
    }
    // @ts-ignore
    return (this.chartOptions.xAxis!.data = axisOption);
  }

  /**
   * Get This Charts yAxis Option
   * @returns yAxis Options Data
   */
  public getYAxis() {
    return this.chartOptions.yAxis;
  }

  public setYAxis(axisOption: YAXisOption) {
    if (!this.chartOptions) {
      throw new Error('图表尚未初始化');
    }
    // @ts-ignore
    return (this.chartOptions.yAxis! = axisOption);
  }

  public getDataLimit() {
    return this.dataLimit;
  }

  public setDataLimit(limit: number) {
    return (this.dataLimit = limit);
  }

  /**
   * Get This Charts Series Data
   * @returns Series Data
   */
  public getSeriesData() {
    return this.chartOptions.series;
  }

  public setSeriesData<T>(seriesData: T) {
    // @ts-ignore
    return this.chartOptions.series!.push(seriesData);
  }

  /**
   * 更新对应name所在区域的数据
   * @description 更新所在数据,
   * @param name {string} 需要更新数据所在的name
   * @param newData {Array<T>} 需要更新的新数据
   * @param isLimit {boolean} 是否删除多出的数据
   */
  public updateSeriesData<T>(
    name: string,
    newData: Array<T>,
    isLimit: boolean = true
  ) {
    if (!name || !newData) {
      throw new Error('Update Name or Data is Required');
    }
    const { series } = this.chartOptions;
    // TODO: Fix any and ignore
    // @ts-ignore
    if (!series || series.length === 0) {
      throw new Error('Series Data is Empty');
    }

    // @ts-ignore
    const getSeriesNameIndex = series!.findIndex(
      (item: { name: string }) => item.name === name
    );
    console.log('Get Series Name: ', getSeriesNameIndex);

    if (getSeriesNameIndex === -1) {
      throw new Error('This Name in Series Array is Not Found');
    }

    // @ts-ignore
    let arrayNewData: Array<T> = series[getSeriesNameIndex].data;
    console.log(arrayNewData);
    console.log(newData);
    arrayNewData = arrayNewData.concat(newData);
    console.log(arrayNewData);
    if (isLimit && arrayNewData.length > this.getDataLimit()) {
      console.log('Need Slice');
      const sliceArray = arrayNewData.slice(-this.getDataLimit());
      console.log('Slice Array', sliceArray);
      arrayNewData = sliceArray;
    }
    console.log(this.getDataLimit());
    console.log(arrayNewData);
    // @ts-ignore
    this.chartOptions.series[getSeriesNameIndex].data = arrayNewData;

    this.render();
  }

  /**
   * 渲染图表方法
   */
  public render() {
    if (!this.initChart) {
      this.initialChart();
    }
    this.initChart!.setOption(this.chartOptions);
  }

  /**
   * 修改容器大小时重新渲染图表
   * @param timeout {number} 延时时间,单位为ms
   * @default timeout = 1000
   */
  public resize(timeout: number = 1000) {
    clearInterval(Number(this.resizeTimer));
    this.resizeTimer = setTimeout(() => {
      this.initChart!.resize();
    }, timeout);
  }
}

/**
 * @class
 * Extends Class if Want Set Template Data Chart Example
 * @example
 * const getDOM = document.getElementById('chart');
 * const templateExample = new TemplateChart(getDOM);
 */
class TemplateChart extends Charts {
  constructor(
    dom: HTMLElement,
    width?: number | undefined,
    height?: number | undefined
  ) {
    super(dom, width, height);
  }

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

export default Charts;

export { Charts, TemplateChart };