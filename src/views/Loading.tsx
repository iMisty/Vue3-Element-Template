import { Component, Vue } from 'vue-property-decorator';
import { FormData } from '@/model/FormData';
import { POST } from '@/config/api.config';

@Component({})
export default class Login extends Vue {
  private type = 1;

  private form: FormData = {
    username: '',
    password: '',
    remember: false
  };

  private async submitForm(type: number, data?: FormData) {
    if (type === 1) {
      const result = await POST('login', data);
      if (result.code === 1) {
        localStorage.setItem('blog-token', result.token);
        return this.$router.push({ path: '/admin' });
      }
    }
    const result = await POST('registry', data);
    return result;
  }

  // 修改登录注册模式
  private changeLoginType(type: number) {
    return (this.type = type);
  }

  private render() {
    return (
      <div class="login">
        <section class="login__form">
          {this.type === 1 ? (
            <article class="login__form--login">
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
                        value={this.form.username}
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
                        value={this.form.password}
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
                    onClick={() => this.submitForm(1, this.form)}
                  >
                    Sign in
                  </button>
                </section>
              </section>
            </article>
          ) : (
            <article class="login__form--registry">
              {/* 第三方注册 => 未启用 */}
              <section class="login__form--third-party registry">
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
              {/* 表单注册 */}
              <section class="login__form--formdata">
                <p class="login__form--title">
                  Registry only support 1 account
                </p>
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
                        value={this.form.username}
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
                        value={this.form.password}
                        v-model={this.form.password}
                      />
                    </div>
                  </label>
                  <article class="remember-button">
                    <input type="checkbox" />
                    <span>Funny</span>
                  </article>
                </section>
                <section class="login__form--submit">
                  <button
                    class="mermaid__button submit-button"
                    onClick={() => this.submitForm(0, this.form)}
                  >
                    Registry
                  </button>
                </section>
              </section>
            </article>
          )}
          {this.type === 1 ? (
            <section class="login__form--setting">
              <p class="login__form--setting--content">Forgotten Password?</p>
              <p
                class="login__form--setting--content"
                onClick={() => this.changeLoginType(0)}
              >
                Registry
              </p>
            </section>
          ) : (
            <section class="login__form--setting">
              <p class="login__form--setting--content">Forgotten Password?</p>
              <p
                class="login__form--setting--content"
                onClick={() => this.changeLoginType(1)}
              >
                Login
              </p>
            </section>
          )}
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
