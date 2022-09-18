/*
 * @Description: Example Tree
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-29 17:15:45
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-29 17:55:15
 */
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

const ExampleTree = defineComponent({
  setup() {
    return { data, defaultProps };
  },
  render() {
    const treeDefault = () => <el-tree data={data.MockTreeData}></el-tree>;
    const treeCheckbox = () => <el-tree data={data.MockTreeData} show-checkbox={true}></el-tree>;
    return (
      <el-row>
        <el-col span={24}>
          <el-card header="Default Tree">{treeDefault}</el-card>
        </el-col>
        <el-col span={24}>
          <el-card header="Checkbox Tree">{treeCheckbox}</el-card>
        </el-col>
      </el-row>
    );
  },
});
export default ExampleTree;
