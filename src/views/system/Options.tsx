/*
 * @Author: Miya
 * @Date: 2022-08-10 23:34:48
 * @LastEditTime: 2022-08-10 23:59:26
 * @LastEditors: Miya
 * @Description: System Options Page
 * @FilePath: \Vue3-Element-Template\src\views\system\Options.tsx
 */

import { defineComponent, reactive, ref } from 'vue';
import { $t } from '@/language';

const SystemOptions = defineComponent({
  setup() {},
  render() {
    const renderOptionsSystem = () => {
      return <el-card header={$t('SystemSettings.options.system')}>6</el-card>;
    };
    const renderOptionsLanguage = () => {
      return <el-card header={$t('SystemSettings.options.system')}>12</el-card>;
    };
    return (
      <el-row gutter={16}>
        <el-col span={12}>{renderOptionsSystem}</el-col>
        <el-col span={12}>{renderOptionsLanguage}</el-col>
      </el-row>
    );
  },
});

export default SystemOptions;
