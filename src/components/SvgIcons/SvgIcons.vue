<!--
 * @Description: SVG Icons Component
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-01-24 16:49:32
 * @LastEditors: Mirage
 * @LastEditTime: 2022-01-24 16:53:11
-->
<template>
  <svg aria-hidden="true" class="svg-icon-spin" :class="classes">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, defineProps, reactive } from 'vue';
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#333',
  },
  size: {
    type: String,
    default: 'default',
  },
});

const SVGIcons = defineComponent({
  setup() {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    const classes = computed(() => {
      return {
        [`sdms-size-${props.size}`]: props.size,
      };
    });
    const fontSize = reactive({
      default: '32px',
      small: '20px',
      large: '48px',
    });
    return { symbolId, classes, fontSize, props };
  },
});
export default SVGIcons;
</script>
<style lang="less" scoped>
.svg-icon-spin {
  width: v-bind('fontSize.default');
  height: v-bind('fontSize.default');
  fill: v-bind('props.color');
  vertical-align: middle;
  color: v-bind('props.color');
  &.sdms-size-small {
    font-size: v-bind('fontSize.small');
    height: v-bind('fontSize.small');
  }
  &.sdms-size-large {
    font-size: v-bind('fontSize.large');
    height: v-bind('fontSize.large');
  }
}
</style>
