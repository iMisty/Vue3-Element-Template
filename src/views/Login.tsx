/*
 * @Description: Login Page
 * @Version: 2.1
 * @Author: Miya
 * @Date: 2021-12-18 20:30:02
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-08 17:07:01
 */
import { useAPPStore } from '@/store/appStore';
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { User, Lock } from '@element-plus/icons-vue';
import Style from '@/style/page/login.module.less';

const dataLoginForm = reactive({
  username: 'admin',
  password: '123456',
});

const status = reactive({
  isLoading: false,
});

const Login = defineComponent({
  setup() {
    const router = useRouter();

    /**
     * @description Login Method
     * @since 1.0
     */
    const handleClickLogin = () => {
      status.isLoading = true;
      try {
        setTimeout(() => {
          useAPPStore().setLoginData(dataLoginForm);
          router.push({ path: '/' });
          status.isLoading = false;
        }, 1000);
      } catch (error) {
        // todo: throw error
        status.isLoading = false;
      }
    };

    return { status, dataLoginForm, handleClickLogin };
  },

  render() {
    return (
      <div class={Style['login']}>
        <section class={Style['login__container']}>
          {/* Login Form */}
          <el-form
            ref="login__form"
            model={dataLoginForm}
            auto-complete="on"
            label-position="left"
          >
            {/* Login Form Title Start */}
            <div class={Style['login__form--title']}>
              <h3 class={Style['title']}>Login Form</h3>
              <p class={Style['sub']}>Please enter your details</p>
            </div>
            {/*  Login Form Title End  */}

            {/*  Login Form Container Start  */}
            <el-form-item prop="username">
              <el-input
                v-model={dataLoginForm.username}
                placeholder="Username"
                type="text"
                size="large"
                auto-complete="on"
                prefix-icon={User}
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model={dataLoginForm.password}
                placeholder="Password"
                type="password"
                size="large"
                auto-complete="on"
                prefix-icon={Lock}
                onKeyupEnter={() => this.handleClickLogin()}
              ></el-input>
            </el-form-item>

            <el-button
              type="primary"
              size="large"
              style="width: 100%"
              onClick={() => this.handleClickLogin()}
              loading={status.isLoading}
            >
              Login
            </el-button>
            {/*  Login Form Container End  */}
          </el-form>
        </section>
      </div>
    );
  },
});
export default Login;
