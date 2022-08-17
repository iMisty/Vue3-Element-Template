/*
 * @Description: 404 Page
 * @Version: 2.0
 * @Author: Mirage
 * @Date: 2022-06-30 17:32:29
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 15:08:13
 */
import { FunctionalComponent, computed } from 'vue';
import Style from './style/404.module.less';

const computedMessage = computed(() => {
  return 'The webmaster said that you can not enter this page...';
});

const Page404: FunctionalComponent = () => {
  return (
    <div class={Style['wscn-http404-container']}>
      <div class={Style['wscn-http404']}>
        <div class={Style['pic-404']}>
          <img
            class={Style['pic-404__parent']}
            src="/src/assets/404_images/404.png"
            alt="404"
          />
          <img
            class={`${Style['pic-404__child']} ${Style['left']}`}
            src="/src/assets/404_images/404_cloud.png"
            alt="404"
          />
          <img
            class={`${Style['pic-404__child']} ${Style['mid']}`}
            src="/src/assets/404_images/404_cloud.png"
            alt="404"
          />
          <img
            class={`${Style['pic-404__child']} ${Style['right']}`}
            src="/src/assets/404_images/404_cloud.png"
            alt="404"
          />
        </div>
        <div class={Style['bullshit']}>
          <div class={Style['bullshit__oops']}>OOPS!</div>
          <div class={Style['bullshit__info']}>
            All rights reserved
            <a
              style="color: #20a0ff"
              href="https://wallstreetcn.com"
              target="_blank"
            >
              wallstreetcn
            </a>
          </div>
          <div class={Style['bullshit__headline']}>{{ computedMessage }}</div>
          <div class={Style['bullshit__info']}>
            Please check that the URL you entered is correct, or click the
            button below to return to the homepage.
          </div>
          <a href="/" class={Style['bullshit__return-home']}>
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page404;
