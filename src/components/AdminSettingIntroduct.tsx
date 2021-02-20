/*
 * @Author: Miya
 * @Date: 2021-02-20 12:02:45
 * @LastEditTime: 2021-02-20 12:02:46
 * @LastEditors: Miya
 * @Description: Admin-Setting-Introduct
 * @FilePath: \LandingPage\src\components\AdminSettingIntroduct.tsx
 * @Version: 1.0
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AdminSettingIntroduct extends Vue {
  private render() {
    return (
      <m-card title="About Introduct Setting">
        <section class="admin__setting--form">
          <section class="mermaid__input single-grid">
            <p class="mermaid__input--title">Background</p>
            <input
              class="mermaid__input--form"
              type="text"
              v-model={this.aboutData.background}
            />
          </section>
          <section class="mermaid__input single-grid">
            <p class="mermaid__input--title">Image</p>
            <input
              class="mermaid__input--form"
              type="text"
              v-model={this.aboutData.introduct.image}
            />
          </section>
          <section class="mermaid__input single-grid">
            <p class="mermaid__input--title">Title</p>
            <textarea
              class="mermaid__input--form"
              rows="4"
              v-model={this.aboutData.introduct.title}
            ></textarea>
          </section>
          <section class="mermaid__input single-grid">
            <p class="mermaid__input--title">Concept</p>
            <textarea
              class="mermaid__input--form"
              rows="10"
              v-model={this.aboutData.introduct.content}
            ></textarea>
          </section>
        </section>
        <section class="admin__setting--submit">
          <m-button>保存</m-button>
        </section>
      </m-card>
    );
  }
}
