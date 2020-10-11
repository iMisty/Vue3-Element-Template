/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-10-11 16:19:25
 * @LastEditors: Miya
 * @Description: 入口页面
 * @FilePath: /Kagura-LandingPage/src/App.tsx
 * @Version: 1.0
 */
import { Component, Vue } from 'vue-property-decorator';
import { Router } from '@/config/router.config';
import { Index } from './config/index.config';
import { Footer } from './config/footer.config';
import footer from '@/layout/AppFooter';

@Component({
  components: {
    'app-footer': footer
  }
})
export default class App extends Vue {
  // Logo
  private navLogo = Index.navbar.logo;
  // 透明导航栏
  private transparentNav = true;
  // TODO: 预加载
  private loading = false;
  // 移动端导航栏
  private navBarStatus = false;

  private footerData = Footer;

  private scrollNavBar(screenHeight: number) {
    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop;
      // console.log(top);
      if (top < screenHeight - 512) {
        this.transparentNav = true;
        return;
      }
      this.transparentNav = false;
    });
  }

  /**
   * @description: 控制移动端导航栏
   * @param {boolean} status
   * @return {type}
   */
  private toggleNavBar() {
    return (this.navBarStatus = !this.navBarStatus);
  }

  // 是否实现透明导航栏
  private get getTransparentNav() {
    return this.transparentNav ? '' : 'fixed';
  }

  // 控制移动端导航栏是否开启
  private get getNavBarStatus() {
    return this.navBarStatus ? 'nav-active' : '';
  }

  // TODO: 是否显示全屏遮罩
  private get getLoading() {
    return this.loading ? 'loading' : 'loaded';
  }

  private beforeMount() {
    // this.loading = true;
  }

  private mounted() {
    // this.loading = false;
    const screenHeight = window.screen.height;
    console.log(`当前设备屏幕高度：${screenHeight}`);
    // 检测滑动
    this.$nextTick(() => {
      this.scrollNavBar(screenHeight);
    });
  }

  private render() {
    return (
      <div id="app">
        {/* <div class={`app__mask ${this.getLoading}`}></div> */}
        <nav class={`app__navigation ${this.getTransparentNav}`}>
          <div class="container">
            <div class="app__navigation--logo">
              <img src={this.navLogo}></img>
            </div>
            <div class={`app__navigation--nav ${this.getNavBarStatus}`}>
              <section class="navbar" onClick={() => this.toggleNavBar()}>
                <span class="line top"></span>
                <span class="line bottom"></span>
              </section>
              <section class="navbar-list" onClick={() => this.toggleNavBar()}>
                {Router.map(item => {
                  return (
                    <router-link
                      class="app__navigation--item"
                      to={item.link}
                      tag="section"
                    >
                      {item.text}
                    </router-link>
                  );
                })}
              </section>
            </div>
          </div>
        </nav>
        <div class="app__view">
          <router-view></router-view>
        </div>
        <app-footer data={this.footerData}></app-footer>
      </div>
    );
  }
}
