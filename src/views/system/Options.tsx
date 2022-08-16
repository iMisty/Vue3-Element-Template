/*
 * @Author: Miya
 * @Date: 2022-08-10 23:34:48
 * @LastEditTime: 2022-08-16 18:11:18
 * @LastEditors: Mirage
 * @Description: System Options Page
 * @FilePath: \Vue3-Element-Template\src\views\system\Options.tsx
 */

import { defineComponent, reactive, ref } from 'vue';
import { $t } from '@/language';
import renderOptionsSystem from './children/renderOptionsSystem';

const SystemOptions = defineComponent({
  components: {
    'render-system': renderOptionsSystem,
  },
  render() {
    return (
      <el-row gutter={16}>
        <el-col>
          <el-card header={$t('SystemSettings.options.title')}>
            <render-system></render-system>
          </el-card>
        </el-col>
      </el-row>
    );
  },
});

export default SystemOptions;
