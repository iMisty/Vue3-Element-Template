/*
 * @Description: 404 Page
 * @Version: 2.0
 * @Author: Mirage
 * @Date: 2022-06-30 17:32:29
 * @LastEditors: Miya
 * @LastEditTime: 2022-06-30 22:57:49
 */
import { FunctionalComponent, computed } from 'vue';
import '@/style/layout/404.less';

const computedMessage = computed(() => {
  return 'The webmaster said that you can not enter this page...';
});

const Page404: FunctionalComponent = () => {
  return (
    <div class="wscn-http404-container">
      <div class="wscn-http404">
        <div class="pic-404">
          <img
            class="pic-404__parent"
            src="/src/assets/404_images/404.png"
            alt="404"
          />
          <img
            class="pic-404__child left"
            src="/src/assets/404_images/404_cloud.png"
            alt="404"
          />
          <img
            class="pic-404__child mid"
            src="/src/assets/404_images/404_cloud.png"
            alt="404"
          />
          <img
            class="pic-404__child right"
            src="/src/assets/404_images/404_cloud.png"
            alt="404"
          />
        </div>
        <div class="bullshit">
          <div class="bullshit__oops">OOPS!</div>
          <div class="bullshit__info">
            All rights reserved
            <a
              style="color: #20a0ff"
              href="https://wallstreetcn.com"
              target="_blank"
            >
              wallstreetcn
            </a>
          </div>
          <div class="bullshit__headline">{{ computedMessage }}</div>
          <div class="bullshit__info">
            Please check that the URL you entered is correct, or click the
            button below to return to the homepage.
          </div>
          <a href="/" class="bullshit__return-home">
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page404;