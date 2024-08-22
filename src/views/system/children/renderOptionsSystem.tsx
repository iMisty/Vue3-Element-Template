/*
 * @Description: Template with Options System
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-16 16:45:27
 * @LastEditors: Miya
 * @LastEditTime: 2024-08-22 14:51:17
 */
import { reactive, defineComponent } from 'vue';
import optionsTheme from '@/config/OptionsTheme';
import type { ThemeOption } from '@/config/OptionsTheme';
import { $t } from '@/language';

const dataSystemOptions = reactive({
  themeSidebar: 'default',
  themeLanguage: 'en',
  themeColor: 'light',
});

const getOptionsIndex = (model: string) =>
  optionsTheme.findIndex((item) => item.model === model);

export default defineComponent({
  name: 'renderOptionsSystem',
  setup() {
    return () => (
      <el-form model={dataSystemOptions} label-width="8rem">
        <el-form-item label={$t('SystemSettings.options.themeSidebar')}>
          <el-select v-model={dataSystemOptions.themeSidebar}>
            {optionsTheme[getOptionsIndex('themeSidebar')].options!.map(
              (item: ThemeOption) => (
                <el-option
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  disabled={item.isDisabled}
                ></el-option>
              ),
            )}
          </el-select>
        </el-form-item>
        <el-form-item label={$t('SystemSettings.options.themeLanguage')}>
          <el-select v-model={dataSystemOptions.themeLanguage}>
            {optionsTheme[getOptionsIndex('themeLanguage')].options!.map(
              (item: ThemeOption) => (
                <el-option
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  disabled={item.isDisabled}
                ></el-option>
              ),
            )}
          </el-select>
        </el-form-item>
        <el-form-item label={$t('SystemSettings.options.themeColor')}>
          <el-select v-model={dataSystemOptions.themeColor}>
            {optionsTheme[getOptionsIndex('themeColor')].options!.map(
              (item: ThemeOption) => (
                <el-option
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  disabled={item.isDisabled}
                ></el-option>
              ),
            )}
          </el-select>
        </el-form-item>
      </el-form>
    );
  },
});
