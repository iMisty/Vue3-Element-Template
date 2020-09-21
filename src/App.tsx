/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-09-21 18:37:18
 * @LastEditors: Miya
 * @Description: 入口页面
 * @FilePath: \LandingPage\src\App.tsx
 * @Version: 1.0
 */
import { Component, Vue } from 'vue-property-decorator';
import { Router } from '@/config/router.config';
@Component({})
export default class App extends Vue {
  private render() {
    return (
      <div id="app">
        <nav class="app__navigation">
          {/* <router-link class="app__navigation--item" tag="section" to="/">
            首页
          </router-link>
          <router-link class="app__navigation--item" tag="section" to="/work">
            项目
          </router-link>
          <router-link class="app__navigation--item" tag="section" to="/about">
            关于
          </router-link>
          <router-link
            class="app__navigation--item"
            tag="section"
            to="/content"
          >
            联系
          </router-link> */}
          {Router.map(item => {
            return (
              <router-link
                class="app__navigation--item"
                to={item.link}
                tag="section"
              >
                {item.text}
                {item.child ? (
                  <ul>
                    {item.child.map(childitem => {
                      return (
                        <router-link
                          class="app__navigation--item-child"
                          to={`${item.link}${childitem.link}`}
                          tag="li"
                        >
                          {childitem.text}
                        </router-link>
                      );
                    })}
                  </ul>
                ) : null}
              </router-link>
            );
          })}
        </nav>
        <div class="app__view">
          <router-view></router-view>
        </div>
      </div>
    );
  }
}
