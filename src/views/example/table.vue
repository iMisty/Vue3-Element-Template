<!--
 * @Author: Miya
 * @Date: 2021-12-07 23:32:39
 * @LastEditTime: 2022-01-05 00:28:47
 * @LastEditors: Miya
 * @Description: Test Page2
 * @FilePath: \vue3-element-template\src\views\example\table.vue
-->
<template>
  <div class="test1">
    <el-table :data="data.listData" stripe show-summary>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="title" label="Title"></el-table-column>
      <el-table-column prop="author" label="Author"></el-table-column>
      <el-table-column prop="pageviews" label="Pageviews"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { MockTableData } from '@/mock/table';
import { defineComponent, reactive } from 'vue';

const data = reactive({
  listData: MockTableData,
});

const ExampleTable = defineComponent({
  setup() {
    return { data };
  },
});
export default ExampleTable;
</script>

<style lang="less" scoped></style>
