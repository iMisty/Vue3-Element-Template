import { Component, Vue } from 'vue-property-decorator';
import { FormData } from '@/model/FormData';

@Component({})
export default class Login extends Vue {
  private form: FormData = {
    username: '',
    password: '',
    remember: false
  };

  private submitForm(data?: FormData) {
    console.log(data);
  }

  private render() {
    return (
      <div class="login">
        <section class="login__form">
          {/* 第三方登录 => 未启用 */}
          <section class="login__form--third-party">
            <p class="login__form--title">Sign in with</p>
            <div class="login__form--third-party--list">
              <button class="mermaid__button normal-button">
                <span class="icon icon-github"></span>
                <span class="text icon-text">Github</span>
              </button>
              <button class="mermaid__button normal-button">
                <span class="icon icon-google"></span>
                <span class="text icon-text">Google</span>
              </button>
            </div>
          </section>
          {/* 表单登录 */}
          <section class="login__form--formdata">
            <p class="login__form--title">Or sign in with credentials</p>
            <section class="login__form--label">
              <label for="username">
                <div class="form-data">
                  <span>
                    <i class="fa fa-user-circle"></i>
                  </span>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    v-model={this.form.username}
                  />
                </div>
              </label>
              <label for="password">
                <div class="form-data">
                  <span>
                    <i class="fa fa-tag"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    v-model={this.form.password}
                  />
                </div>
              </label>
              <article class="remember-button">
                <input type="checkbox" v-model={this.form.remember} />
                <span>Remember Me</span>
              </article>
            </section>
            <section class="login__form--submit">
              <button
                class="mermaid__button submit-button"
                onClick={() => this.submitForm(this.form)}
              >
                Sign in
              </button>
            </section>
          </section>
        </section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
