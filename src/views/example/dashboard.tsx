/*
 * @Description: Example Page Dashboard
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-02 16:20:11
 * @LastEditors: Miya
 * @LastEditTime: 2022-08-10 00:50:34
 */
import { defineComponent } from 'vue';

const Dashboard = defineComponent({
  name: 'Dashboard',
  render() {
    const renderCircle = () => {
      return (
        <el-card>
          <el-progress type="circle" percentage={24}></el-progress>
        </el-card>
      );
    };
    return (
      <el-row gutter={32}>
        <el-col span={6}>{renderCircle}</el-col>
      </el-row>
    );
  },
});

export default Dashboard;
