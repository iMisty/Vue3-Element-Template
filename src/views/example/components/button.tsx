/*
 * @Author: Miya
 * @Date: 2022-07-27 23:23:02
 * @LastEditTime: 2022-08-26 16:10:33
 * @LastEditors: Mirage
 * @Description: Example Buttons
 * @FilePath: \Vue3-Element-Template\src\views\example\components\button.tsx
 */
import { defineComponent } from 'vue';
import {
  Edit,
  Share,
  Delete,
  Search,
  Upload,
  ArrowLeft,
  ArrowRight,
  Eleme,
} from '@element-plus/icons-vue';

const buttonCardDefault = () => {
  return (
    <>
      <el-button type="primary">Submit</el-button>
      <el-button type="primary" disabled={true}>
        Disabled
      </el-button>
      <el-button text={true}>Link</el-button>
    </>
  );
};

const buttonCardIcons = () => {
  return (
    <>
      <el-button type="primary" icon={Edit}></el-button>
      <el-button type="primary" icon={Search}>
        Search
      </el-button>
      <el-button type="primary">
        Upload
        <el-icon>
          <Upload />
        </el-icon>
      </el-button>
    </>
  );
};

const buttonCardSeverities = () => {
  return (
    <>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </>
  );
};

const buttonCardRound = () => {
  return (
    <>
      <el-button round>Round</el-button>
      <el-button type="primary" round>
        Primary
      </el-button>
      <el-button type="success" round>
        Success
      </el-button>
      <el-button type="info" round>
        Info
      </el-button>
      <el-button type="warning" round>
        Warning
      </el-button>
      <el-button type="danger" round>
        Danger
      </el-button>
    </>
  );
};

const buttonCardGroup = () => {
  return (
    <>
      <el-button-group>
        <el-button type="primary" icon={ArrowLeft}>
          Previous Page
        </el-button>
        <el-button type="primary">
          Next Page
          <el-icon class="el-icon--right">
            <ArrowRight />
          </el-icon>
        </el-button>
      </el-button-group>
      <span style="padding:0 .5rem"></span>
      <el-button-group>
        <el-button type="primary" icon={Edit}></el-button>
        <el-button type="primary" icon={Share}></el-button>
        <el-button type="primary" icon={Delete}></el-button>
      </el-button-group>
    </>
  );
};

const buttonCardLoading = () => {
  return (
    <>
      <el-button type="primary" loading>
        Loading
      </el-button>
      <el-button type="primary" loading-icon={Eleme} loading>
        Loading
      </el-button>
    </>
  );
};

const buttonCardSize = () => {
  return (
    <>
      <el-button size="large">Large</el-button>
      <el-button>Default</el-button>
      <el-button size="small">Small</el-button>
      <el-button size="large" icon={Search}>
        Search
      </el-button>
      <el-button icon={Search}>Search</el-button>
      <el-button size="small" icon={Search}>
        Search
      </el-button>
    </>
  );
};

const ExampleButton = defineComponent({
  render() {
    return (
      <el-row gutter={16}>
        <el-col span={12}>
          <el-card header="Default">{buttonCardDefault}</el-card>
        </el-col>
        <el-col span={12}>
          <el-card header="Icons">{buttonCardIcons}</el-card>
        </el-col>
        <el-col span={12}>
          <el-card header="Severities">{buttonCardSeverities}</el-card>
        </el-col>
        <el-col span={12}>
          <el-card header="Round">{buttonCardRound}</el-card>
        </el-col>
        <el-col span={12}>
          <el-card header="Group">{buttonCardGroup}</el-card>
        </el-col>
        <el-col span={12}>
          <el-card header="Loading">{buttonCardLoading}</el-card>
        </el-col>
        <el-col span={24}>
          <el-card header="Size">{buttonCardSize}</el-card>
        </el-col>
      </el-row>
    );
  },
});

export default ExampleButton;
