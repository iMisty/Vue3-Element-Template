/*
 * @Description: Login Page
 * @Version: 3.0
 * @Author: Miya
 * @Date: 2021-12-18 20:30:02
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 15:06:24
 */
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { User, Lock } from '@element-plus/icons-vue';
import { useAPPStore } from '@/store/appStore';
import loginBG from '@/assets/login.svg';
import Style from './style/login.module.less';
import { $t } from '@/language';

const dataLoginForm = reactive({
  username: 'admin',
  password: '123456',
});

const status = reactive({
  isLoading: false,
});

const Login = defineComponent({
  setup() {
    status.isLoading = false;
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
        }, 1000);
      } catch (error) {
        // todo: throw error
        status.isLoading = false;
      }
    };

    return () => (
      <div class={Style.login}>
        <section class={Style.login__container}>
          <section class={Style['login__container--left']}>
            <img src={loginBG} alt="Login Background" />
          </section>
          <section class={Style['login__container--right']}>
            {/* Login Form */}
            <el-form
              ref="login__form"
              model={dataLoginForm}
              auto-complete="on"
              label-position="left"
            >
              {/* Login Form Title Start */}
              <div class={Style['login__form--title']}>
                <h3 class={Style.title}>{$t('Login.loginForm')}</h3>
                <p class={Style.sub}>{$t('Login.loginDescription')}</p>
              </div>
              {/*  Login Form Title End  */}

              {/*  Login Form Container Start  */}
              <el-form-item prop="username">
                <el-input
                  v-model={dataLoginForm.username}
                  placeholder={$t('Login.username')}
                  type="text"
                  size="large"
                  auto-complete="on"
                  prefix-icon={User}
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model={dataLoginForm.password}
                  placeholder={$t('Login.password')}
                  type="password"
                  size="large"
                  auto-complete="on"
                  prefix-icon={Lock}
                  onKeyupEnter={() => handleClickLogin()}
                ></el-input>
              </el-form-item>

              <el-button
                type="primary"
                size="large"
                style="width: 100%"
                onClick={() => handleClickLogin()}
                loading={status.isLoading}
              >
                {$t('Login.login')}
              </el-button>
              {/*  Login Form Container End  */}
            </el-form>
          </section>
        </section>
      </div>
    );
  },
});
export default Login;
