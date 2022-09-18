/*
 * @Description: Container Block for Table
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-01 09:29:21
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 16:58:01
 */

import { defineComponent, reactive, ref } from 'vue';
import { Search, Plus } from '@element-plus/icons-vue';
import type { Ref } from 'vue';
import CustomCard from '@/components/CustomCard/indexCustomCard';
import CustomPagination from '@/components/CustomPagination/indexPagination';
import { MockTableData } from '@/mock/table';
import Style from './style/containerTable.module.less';

const dataHeader = reactive({
  valueInput: '',
});

const dataTable = reactive({
  listData: MockTableData,
});

const strikeHeader: Ref<Boolean> = ref(false);
const strikeFooter: Ref<Boolean> = ref(false);
const currentPage4: Ref<Number> = ref(4);
const pageSize4: Ref<Number> = ref(10);

const handleSizeChange = (val: number): void => {
  console.log(`${val} items per page`);
  currentPage4.value = val;
};
const handleCurrentChange = (val: number): void => {
  console.log(`current page: ${val}`);
  currentPage4.value = val;
};

const ContainerTable = defineComponent({
  name: 'ContainerTable',
  components: {
    CustomPagination,
    CustomCard,
  },
  render() {
    const renderHeader = () => (
        <el-row gutter={16} align="middle">
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
          <el-col span={4}>
            <span>Header Strike: </span>
            <el-switch v-model={strikeHeader.value}></el-switch>
          </el-col>
          <el-col span={4}>
            <span>Footer Strike: </span>
            <el-switch v-model={strikeFooter.value}></el-switch>
          </el-col>
        </el-row>
    );
    const renderMain = () => (
        <el-table data={dataTable.listData} stripe={true} show-summary={true}>
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="title" label="Title"></el-table-column>
          <el-table-column prop="author" label="Author"></el-table-column>
          <el-table-column prop="pageViews" label="PageViews"></el-table-column>
        </el-table>
    );
    const renderFooter = () => (
        <custom-pagination
          total={400}
          v-model:current={currentPage4.value}
          v-model:pageSize={pageSize4.value}
          onCurrent={(page: number) => handleCurrentChange(page)}
          onSize={(size: number) => handleSizeChange(size)}
        ></custom-pagination>
    );
    return (
      <el-container>
        <el-header
          height="auto"
          class={strikeHeader.value ? Style.strike__header : ''}
        >
          <custom-card>{renderHeader}</custom-card>
        </el-header>
        <el-main>
          <custom-card>{renderMain}</custom-card>
        </el-main>
        <el-footer
          height="auto"
          class={strikeFooter.value ? Style.strike__footer : ''}
        >
          <custom-card>{renderFooter}</custom-card>
        </el-footer>
      </el-container>
    );
  },
});

export default ContainerTable;
