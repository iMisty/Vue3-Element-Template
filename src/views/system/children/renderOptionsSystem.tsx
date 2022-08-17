/*
 * @Description: Template with Options System
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-16 16:45:27
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 14:45:33
 */
import { reactive, defineComponent } from 'vue';
import optionsTheme from '@/config/OptionsTheme';
import type { ThemeOption } from '@/config/OptionsTheme';

const dataSystemOptions = reactive({
  themeSidebar: 'default',
  themeLanguage: 'en',
  themeColor: 'light',
});

const getOptionsIndex = (model: string) => {
  return optionsTheme.findIndex((item) => item.model === model);
};

const renderOptionsSystem = defineComponent({
  render() {
    return (
      <el-form model={dataSystemOptions} label-width="8rem">
        <el-form-item label={this.$t('SystemSettings.options.themeSidebar')}>
          <el-select v-model={dataSystemOptions.themeSidebar}>
            {optionsTheme[getOptionsIndex('themeSidebar')].options!.map(
              (item: ThemeOption) => {
                return (
                  <el-option
                    key={item.value}
                    label={item.label}
                    value={item.value}
                    disabled={item.isDisabled}
                  ></el-option>
                );
              }
            )}
          </el-select>
        </el-form-item>
        <el-form-item label={this.$t('SystemSettings.options.themeLanguage')}>
          <el-select v-model={dataSystemOptions.themeLanguage}>
            {optionsTheme[getOptionsIndex('themeLanguage')].options!.map(
              (item: ThemeOption) => {
                return (
                  <el-option
                    key={item.value}
                    label={item.label}
                    value={item.value}
                    disabled={item.isDisabled}
                  ></el-option>
                );
              }
            )}
          </el-select>
        </el-form-item>
        <el-form-item label={this.$t('SystemSettings.options.themeColor')}>
          <el-select v-model={dataSystemOptions.themeColor}>
            {optionsTheme[getOptionsIndex('themeColor')].options!.map(
              (item: ThemeOption) => {
                return (
                  <el-option
                    key={item.value}
                    label={item.label}
                    value={item.value}
                    disabled={item.isDisabled}
                  ></el-option>
                );
              }
            )}
          </el-select>
        </el-form-item>
      </el-form>
    );
  },
});

export default renderOptionsSystem;
