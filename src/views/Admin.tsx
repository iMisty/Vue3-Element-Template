import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Admin extends Vue {
  private created() {
    this.$store.commit('changeDisplayNavBar', false);
  }

  private render() {
    return (
      <div class="admin">
        <section class="admin__left">
          <article class="admin__left--logo">
            <section class="logo">
              <img
                src={require('@/assets/logo.png')}
                alt="Logo"
                style="max-height: 3rem;"
              />
            </section>
            <section class="type">
              <i class="fa fa fa-bars"></i>
            </section>
          </article>
          <article class="admin__left--nav">
            <ul class="admin__left--list">
              <div class="admin__left--list--master">
                <div class="title-nav">
                  <i class="fa fa-home"></i>
                  <p class="admin__left--list--title">List</p>
                  <i class="fa fa-angle-right"></i>
                </div>
                <div class="admin__left--list--item">
                  <ul class="navlist--item">
                    <router-link to="/" tag="li">
                      <p class="admin__left--list--title">List</p>
                    </router-link>
                  </ul>
                </div>
              </div>
            </ul>
            <ul class="admin__left--list">
              <div class="admin__left--list--master" data-id="2">
                <div class="title-nav">
                  <i class="fa fa-home"></i>
                  <p class="admin__left--list--title">List</p>
                  <i class="fa fa-angle-right"></i>
                </div>
                <div class="admin__left--list--item">
                  <ul class="navlist--item">
                    <router-link to="/" tag="li">
                      <p class="admin__left--list--title">List</p>
                    </router-link>
                    <router-link to="/" tag="li">
                      <p class="admin__left--list--title">List</p>
                    </router-link>
                  </ul>
                </div>
              </div>
            </ul>
            <ul class="admin__left--list">
              <div class="admin__left--list--master" data-id="3">
                <div class="title-nav">
                  <i class="fa fa-home"></i>
                  <p class="admin__left--list--title">List</p>
                  <i class="fa fa-angle-right"></i>
                </div>
                <div class="admin__left--list--item">
                  <ul class="navlist--item">
                    <router-link to="/" tag="li">
                      <p class="admin__left--list--title">List</p>
                    </router-link>
                    <router-link to="/" tag="li">
                      <p class="admin__left--list--title">List</p>
                    </router-link>
                  </ul>
                </div>
              </div>
            </ul>
          </article>
        </section>
        <section class="admin__wrap">
          <section class="admin__wrap--top">
            {/* <button onClick={() => {this.$store.commit('changeDisplayNavBar',true);this.$router.push({path: '/'})}}>232222222222</button> */}
          </section>
          <router-view></router-view>
        </section>
      </div>
    );
  }
}
