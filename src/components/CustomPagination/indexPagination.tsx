/*
 * @Description: Global Pagination Component
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-01 11:40:40
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-01 15:31:52
 */
import { defineComponent, computed } from 'vue';

interface PaginationProps {
  current: number;
  pageSize: number;
  pageSizes?: Array<Number>;
  small?: boolean;
  background?: boolean;
  disabled?: boolean;
  layout?: string;
  total: number;
}

const dataPagination = {
  current: 1,
  size: 10,
};

const indexPagination = defineComponent({
  name: 'ComponentPagination',
  props: {
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 50];
      },
    },
    current: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 10,
    },
    small: {
      type: Boolean,
      default: false,
    },
    background: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    layout: {
      type: String,
      default: 'prev, pager, next',
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const currentPage = computed({
      get() {
        return props.current;
      },
      set(value: number) {
        console.log('Change Current Page: ', value);
        dataPagination.current = value;
        emit('current', value);
      },
    });

    const sizePage = computed({
      get() {
        return props.size;
      },
      set(value: number) {
        console.log('Change Size Page: ', value);
        dataPagination.size = value;
        emit('size', value);
      },
    });
    return { dataPagination, currentPage, sizePage };
  },
  render() {
    return (
      <el-pagination
        v-model:currentPage={this.currentPage}
        v-model:page-size={this.sizePage}
        page-sizes={this.$props.pageSizes}
        small={this.$props.small}
        disabled={this.$props.disabled}
        background={this.$props.background}
        layout={this.$props.layout}
        total={this.$props.total}
        // onSize-change={() => this.$emit('size', this.dataPagination.size)}
        onSize-change={() => this.sizePage}
        onCurrent-change={() => this.currentPage}
      />
    );
  },
});

export default indexPagination;
