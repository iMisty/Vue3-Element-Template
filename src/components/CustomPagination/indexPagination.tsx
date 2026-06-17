/*
 * @Description: Global Pagination Component
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-01 11:40:40
 * @LastEditors: Miya
 * @LastEditTime: 2022-09-17 01:46:31
 */
import { defineComponent, computed } from 'vue';

// interface PaginationProps {
//   current: number;
//   pageSize: number;
//   pageSizes?: Array<Number>;
//   small?: boolean;
//   background?: boolean;
//   disabled?: boolean;
//   layout?: string;
//   total: number;
// }

const dataPagination = {
  current: 1,
  size: 10,
};

export default defineComponent({
  name: 'ComponentPagination',
  props: {
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 50],
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
  emits: ['current', 'size'],
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

    return () => (
      <el-pagination
        v-model:currentPage={currentPage.value}
        v-model:page-size={sizePage.value}
        page-sizes={props.pageSizes}
        small={props.small}
        disabled={props.disabled}
        background={props.background}
        layout={props.layout}
        total={props.total}
        // onSize-change={() => emit('size', dataPagination.size)}
        onSize-change={() => sizePage.value}
        onCurrent-change={() => currentPage.value}
      />
    );
  },
});
