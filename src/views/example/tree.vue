<!--
 * @Author: Miya
 * @Date: 2021-12-07 23:32:39
 * @LastEditTime: 2022-03-04 15:11:07
 * @LastEditors: Miya
 * @Description: Test Page3
 * @FilePath: \vue3-element-template\src\views\example\tree.vue
-->
<template>
  <el-row>
    <el-col :span="12">
      <el-tree
        :data="data.MockTreeData"
        :props="defaultProps"
        @node-click="handleClickNode"
      ></el-tree
    ></el-col>
    <el-col :span="12">{{ data.nowNode }}</el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { MockTreeData } from '@/mock/tree';

const data = reactive({
  MockTreeData,
  nowNode: 'Level one 1',
});

const defaultProps = {
  children: 'children',
  label: 'label',
};

const handleClickNode = (row: any) => {
  data.nowNode = row.label;
};

const Test3 = defineComponent({
  setup() {
    return { data, defaultProps, handleClickNode };
  },
});
export default Test3;
</script>

<style lang="less" scoped></style>
