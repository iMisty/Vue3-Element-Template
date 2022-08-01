/*
 * @Description: Container Block for Table
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-01 09:29:21
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-01 16:22:43
 */

import { defineComponent, reactive, ref } from 'vue';
import { Search, Plus } from '@element-plus/icons-vue';
import GlobalCard from '@/components/GlobalCard/indexGlobalCard';
import GlobalPagination from '@/components/GlobalPagination/indexPagination';
import { MockTableData } from '@/mock/table';

const dataHeader = reactive({
  valueInput: '',
});

const dataTable = reactive({
  listData: MockTableData,
});

const currentPage4 = ref(4);
const pageSize4 = ref(10);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
  currentPage4.value = val;
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
  currentPage4.value = val;
};

const ContainerTable = defineComponent({
  name: 'ContainerTable',
  components: {
    GlobalPagination,
    GlobalCard,
  },
  render() {
    const renderHeader = () => {
      return (
        <el-row gutter={16}>
          <el-col span={3}>
            <el-button type="primary" icon={Plus}>
              Add
            </el-button>
          </el-col>
          <el-col span={5}>
            <el-input
              v-model={dataHeader.valueInput}
              placeholder="Search Key"
              prefix-icon={Search}
            ></el-input>
          </el-col>
          <el-col span={4}>
            <el-input
              v-model={dataHeader.valueInput}
              placeholder="Search Key"
              prefix-icon={Search}
            ></el-input>
          </el-col>
        </el-row>
      );
    };
    const renderMain = () => {
      return (
        <el-table data={dataTable.listData} stripe={true} show-summary={true}>
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="title" label="Title"></el-table-column>
          <el-table-column prop="author" label="Author"></el-table-column>
          <el-table-column prop="pageViews" label="PageViews"></el-table-column>
        </el-table>
      );
    };
    const renderFooter = () => {
      return (
        <global-pagination
          total={400}
          v-model:current={currentPage4.value}
          v-model:pageSize={pageSize4.value}
          onCurrent={(page: number) => handleCurrentChange(page)}
          onSize={(size: number) => handleSizeChange(size)}
        ></global-pagination>
      );
    };
    return (
      <el-container>
        <el-header height="auto">
          <global-card>{renderHeader}</global-card>
        </el-header>
        <el-main>
          <global-card>{renderMain}</global-card>
        </el-main>
        <el-footer height="auto">
          <global-card>{renderFooter}</global-card>
        </el-footer>
      </el-container>
    );
  },
});

export default ContainerTable;
