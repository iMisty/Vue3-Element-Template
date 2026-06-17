/*
 * @Author: Miya
 * @Date: 2022-08-10 23:34:48
 * @LastEditTime: 2024-08-22 14:33:54
 * @LastEditors: Miya
 * @Description: System Options Page
 * @FilePath: \Vue3-Element-Template\src\views\system\Options.tsx
 */

import { defineComponent, h } from 'vue';
import { $t } from '@/language';
import renderOptionsSystem from './children/renderOptionsSystem';

export default defineComponent({
  name: 'SystemOptions',
  setup() {
    return () => (
      <el-row gutter={16}>
        <el-col>
          <el-card header={$t('SystemSettings.options.title')}>
            {h(renderOptionsSystem)}
          </el-card>
        </el-col>
      </el-row>
    );
  },
});
