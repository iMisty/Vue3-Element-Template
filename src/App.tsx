/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-09-22 00:59:57
 * @LastEditors: Miya
 * @Description: 入口页面
 * @FilePath: /Kagura-LandingPage/src/App.tsx
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
          {Router.map(item => {
            return (
              <router-link
                class="app__navigation--item"
                to={item.link}
                tag="section"
              >
                {item.text}
                {/* {item.child ? (
                  <ul class={`app__navigation--item-sub ${this.aa}`}>
                    {item.child.map(childitem => {
                      return (
                        <router-link
                          class={`app__navigation--item-child`}
                          to={`${item.link}${childitem.link}`}
                          tag="li"
                        >
                          {childitem.text}
                        </router-link>
                      );
                    })}
                  </ul>
                ) : null} */}
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
