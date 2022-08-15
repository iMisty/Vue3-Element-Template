/*
 * @Author: Miya
 * @Date: 2022-08-10 23:34:48
 * @LastEditTime: 2022-08-15 22:48:55
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
      return 1;
    };

    return (
      <el-row gutter={16}>
        <el-col>
          <el-card header={$t('SystemSettings.options.title')}>
            {renderOptionsSystem}
          </el-card>
        </el-col>
      </el-row>
    );
  },
});

export default SystemOptions;
