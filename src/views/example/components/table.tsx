/*
 * @Author: Miya
 * @Date: 2022-07-27 22:40:22
 * @LastEditTime: 2022-07-27 22:56:20
 * @LastEditors: Miya
 * @Description: Example Table
 * @FilePath: \Vue3-Element-Template\src\views\example\table.tsx
 */
import { defineComponent, reactive } from 'vue';
import { MockTableData } from '@/mock/table';

const data = reactive({
  listData: MockTableData,
});

const ExampleTable = defineComponent({
  setup() {
    return { data };
  },
  render() {
    return (
      <el-card>
        <el-table data={data.listData} stripe={true} show-summary={true}>
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="title" label="Title"></el-table-column>
          <el-table-column prop="author" label="Author"></el-table-column>
          <el-table-column prop="pageViews" label="PageViews"></el-table-column>
        </el-table>
      </el-card>
    );
  },
});
export default ExampleTable;
