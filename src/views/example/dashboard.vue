<!--
 * @Author: Miya
 * @Date: 2021-12-07 23:32:39
 * @LastEditTime: 2022-08-01 18:04:41
 * @LastEditors: Mirage
 * @Description: Test Page1
 * @FilePath: \vue3-element-template\src\views\example\dashboard.vue
-->
<template>
  <el-row :gutter="32">
    <el-space wrap>
      <el-col>
        <el-card>
          <el-progress type="circle" :percentage="24"></el-progress>
        </el-card>
      </el-col>
    </el-space>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const Dashboard = defineComponent({
  setup() {},
});
export default Dashboard;
</script>

<style lang="less" scoped></style>
