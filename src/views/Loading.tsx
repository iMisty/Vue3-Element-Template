import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Login extends Vue {
  private render() {
    return (
      <div class="login">
        <section class="login__form">
          <section class="login__form--third-party">
            <p class="login__form--title">Sign in with</p>
            <div class="login__form--third-party--list">
              <button class="mermaid__button normal-button">
                <i class="fa fa-google"></i>
                <span>Google</span>
              </button>
              <button class="mermaid__button normal-button">
                <i class="fa fa-google"></i>
                <span>Google</span>
              </button>
            </div>
          </section>
          <section class="login__form--formdata">
            <p class="login__form--title">Or sign in with credentials</p>
            <section class="login__form--label">
              <label for="username">
                <div class="form-data">
                  <span>
                    <i class="fa fa-user-circle"></i>
                  </span>
                  <input type="text" id="username" placeholder="Username" />
                </div>
              </label>
              <label for="password">
                <div class="form-data">
                  <span>
                    <i class="fa fa-tag"></i>
                  </span>
                  <input type="password" id="password" placeholder="Password" />
                </div>
              </label>
              <article class="remember-button">
                <input type="checkbox" />
                <p>Remember Me</p>
              </article>
            </section>
            <section class="login__form--submit">
              <button class="mermaid__button">Sign in</button>
            </section>
          </section>
        </section>
      </div>
    );
  }
}
