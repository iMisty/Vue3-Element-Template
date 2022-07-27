/*
 * @Author: Miya
 * @Date: 2022-07-27 23:23:02
 * @LastEditTime: 2022-07-27 23:38:31
 * @LastEditors: Miya
 * @Description: Example Buttons
 * @FilePath: \Vue3-Element-Template\src\views\example\components\button.tsx
 */
import { defineComponent } from 'vue';

const buttonCardDefault = () => {
  return (
    <>
      <el-button type="primary">Submit</el-button>
      <el-button disabled={true}>Disabled</el-button>
      <el-button type="link">Link</el-button>
    </>
  );
};

const ExampleButton = defineComponent({
  render() {
    return <el-card>{buttonCardDefault}</el-card>;
  },
});

export default ExampleButton;
