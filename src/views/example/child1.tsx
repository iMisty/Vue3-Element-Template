/*
 * @Description: Example Child - nest 1
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-04 17:17:17
 * @LastEditors: Mirage
 * @LastEditTime: 2022-07-21 22:14:47
 */
import { FunctionalComponent } from 'vue';
import GlobalCard from '@/components/GlobalCard/indexGlobalCard';

const exampleNest1: FunctionalComponent = () => {
  return (
    <el-space fill={true}>
      <el-row>
        <el-col span={4}>
          <GlobalCard shadow="never">333333333333333333333</GlobalCard>
        </el-col>
        <el-col span={4}>
          <GlobalCard shadow="never">333333333333333333333</GlobalCard>
        </el-col>
        <el-col span={16}>
          <GlobalCard shadow="never">333333333333333333333</GlobalCard>
        </el-col>
      </el-row>
    </el-space>
  );
};

export default exampleNest1;
