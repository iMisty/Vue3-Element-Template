<!--
 * @Author: Miya
 * @Date: 2021-12-18 20:30:02
 * @LastEditTime: 2021-12-20 23:24:56
 * @LastEditors: Miya
 * @Description: Login Page
 * @FilePath: \vue3-element-template\src\views\Login.vue
-->
<template>
  <div class="login">
    <section class="login__container">
      <!-- Login Form -->
      <el-form
        ref="login__form"
        :model="dataLoginForm"
        auto-complete="on"
        label-position="left"
      >
        <!-- Login Form Title Start -->
        <div class="login__form--title">
          <h3 class="title">Login Form</h3>
        </div>
        <!-- Login Form Title End -->

        <!-- Login Form Container Start -->
        <el-form-item prop="username">
          <el-input
            v-model="dataLoginForm.username"
            placeholder="Username"
            type="text"
            auto-complete="on"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="dataLoginForm.password"
            placeholder="Password"
            type="password"
            auto-complete="on"
            @keyup.enter="handleClickLogin"
          ></el-input>
        </el-form-item>

        <el-button
          type="primary"
          :plain="true"
          @click="handleClickLogin"
          :loading="status.isLoading"
          >Login</el-button
        >
        <!-- Login Form Container End -->
      </el-form>
    </section>
  </div>
</template>

<script lang="ts">
import { useAPPStore } from '@/store/appStore';
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';

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
        useAPPStore().setLoginData(dataLoginForm);
        router.push({ path: '/' });
      } catch (error) {
        // todo: throw error
      } finally {
        status.isLoading = false;
      }
    };

    return { status, dataLoginForm, handleClickLogin };
  },
});
export default Login;
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b;
  overflow: hidden;
  &__container {
    max-width: 30rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 6rem;
    padding: 3rem;
    background-color: @var-base-background;
    border-radius: @var-border-radius;
    box-shadow: @var-box-shadow;
  }
}
</style>
