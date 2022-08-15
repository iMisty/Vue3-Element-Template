/*
 * @Author: Miya
 * @Date: 2022-08-10 23:34:48
 * @LastEditTime: 2022-08-15 18:08:00
 * @LastEditors: Mirage
 * @Description: System Options Page
 * @FilePath: \Vue3-Element-Template\src\views\system\Options.tsx
 */

import { defineComponent, reactive, ref } from 'vue';
import CustomInput from '@/components/CustomInput/indexInput';
import { $t } from '@/language';

const SystemOptions = defineComponent({
  components: {
    CustomInput,
  },
  setup() {},
  render() {
    const renderOptionsSystem = () => {
      return <custom-input></custom-input>;
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
