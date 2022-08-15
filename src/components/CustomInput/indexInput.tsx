/*
 * @Description: Custom Input Component
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-15 17:46:03
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-15 18:07:33
 */
import { FunctionalComponent, ref } from 'vue';

const data = ref('111111');

const CustomInput: FunctionalComponent = () => {
  return (
    <el-row>
      <span>111111</span>
      <el-input v-model={data.value}></el-input>
    </el-row>
  );
};

export default CustomInput;
