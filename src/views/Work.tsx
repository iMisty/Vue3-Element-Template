import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';
import { work } from '@/config/work.config';

@Component({
  components: {
    'wrap-header': WrapHeader
  }
})
export default class Work extends Vue {
  private render() {
    return (
      <div class="work">
        <wrap-header header={work}></wrap-header>
        <div class="container">
          <section class="work__project">
            <article class="work__project--item">
              <section class="left">
                <img src={require('@/assets/bg.jpg')} />
              </section>
              <section class="right">
                <h3 class="item--title">测试项目1</h3>
                <p class="item--last-update">最后更新时间：2020-09-31</p>
                <ul class="item--tag">
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>NodeJS</li>
                </ul>
                <p class="item--intro">
                  "Finding temporary housing for your dog should be as easy as
                  renting an Airbnb. That’s the idea behind Rover, which raised
                  $65 million to expand its pet sitting and dog-walking
                  businesses..Finding temporary housing for your dog should be
                  as easy as renting an Airbnb."
                </p>
                <section class="item--button-list">
                  <button class="button live-button">Live Demo</button>
                  <button class="button source-button">Source</button>
                </section>
              </section>
            </article>
            <article class="work__project--item">
              <section class="left">
                <img src={require('@/assets/bg.jpg')} />
              </section>
              <section class="right">
                <h3 class="item--title">测试项目2</h3>
                <p class="item--last-update">最后更新时间：2020-09-31</p>
                <ul class="item--tag">
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>NodeJS</li>
                </ul>
                <p class="item--intro">
                  "Finding temporary housing for your dog should be as easy as
                  renting an Airbnb. That’s the idea behind Rover, which raised
                  $65 million to expand its pet sitting and dog-walking
                  businesses..Finding temporary housing for your dog should be
                  as easy as renting an Airbnb."
                </p>
                <section class="item--button-list">
                  <button class="button live-button">Live Demo</button>
                  <button class="button source-button">Source</button>
                </section>
              </section>
            </article>
            <article class="work__project--item">
              <section class="left">
                <img src={require('@/assets/bg.jpg')} />
              </section>
              <section class="right">
                <h3 class="item--title">测试项目3</h3>
                <p class="item--last-update">最后更新时间：2020-09-31</p>
                <ul class="item--tag">
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>NodeJS</li>
                </ul>
                <p class="item--intro">
                  "Finding temporary housing for your dog should be as easy as
                  renting an Airbnb. That’s the idea behind Rover, which raised
                  $65 million to expand its pet sitting and dog-walking
                  businesses..Finding temporary housing for your dog should be
                  as easy as renting an Airbnb."
                </p>
                <section class="item--button-list">
                  <button class="button live-button">Live Demo</button>
                  <button class="button source-button">Source</button>
                </section>
              </section>
            </article>
            <article class="work__project--item">
              <section class="left">
                <img src={require('@/assets/bg.jpg')} />
              </section>
              <section class="right">
                <h3 class="item--title">测试项目4</h3>
                <p class="item--last-update">最后更新时间：2020-09-31</p>
                <ul class="item--tag">
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>NodeJS</li>
                </ul>
                <p class="item--intro">
                  "Finding temporary housing for your dog should be as easy as
                  renting an Airbnb. That’s the idea behind Rover, which raised
                  $65 million to expand its pet sitting and dog-walking
                  businesses..Finding temporary housing for your dog should be
                  as easy as renting an Airbnb."
                </p>
                <section class="item--button-list">
                  <button class="button live-button">Live Demo</button>
                  <button class="button source-button">Source</button>
                </section>
              </section>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
