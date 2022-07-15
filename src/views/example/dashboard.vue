<!--
 * @Author: Miya
 * @Date: 2021-12-07 23:32:39
 * @LastEditTime: 2022-07-15 16:09:22
 * @LastEditors: Mirage
 * @Description: Test Page1
 * @FilePath: \vue3-element-template\src\views\example\dashboard.vue
-->
<template>
  <el-row class="test1" :gutter="32">
    <el-space wrap>
      <el-col>
        <el-card>
          <el-progress type="circle" :percentage="24"></el-progress>
        </el-card>
      </el-col>
      <el-col>
        <el-card>
          <el-progress type="circle" :percentage="48"></el-progress>
        </el-card>
      </el-col>
      <el-col>
        <el-card>
          <el-progress
            type="circle"
            :percentage="16"
            status="success"
          ></el-progress>
        </el-card>
      </el-col>
      <el-col>
        <el-card>
          <el-progress
            type="circle"
            :percentage="8"
            status="exception"
          ></el-progress>
        </el-card>
      </el-col>
      <el-col>
        <el-card>
          <el-progress type="circle" :percentage="24"></el-progress>
        </el-card>
      </el-col>
      <el-col>
        <el-card>
          <el-progress type="circle" :percentage="48"></el-progress>
        </el-card>
      </el-col>
      <el-col>
        <el-card>
          <el-progress
            type="circle"
            :percentage="16"
            status="success"
          ></el-progress>
        </el-card>
      </el-col>
      <el-col>
        <el-card>
          <el-progress
            type="circle"
            :percentage="8"
            status="exception"
          ></el-progress>
        </el-card>
      </el-col>
    </el-space>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const Test1 = defineComponent({
  setup() {},
});
export default Test1;
</script>

<style lang="less" scoped></style>
