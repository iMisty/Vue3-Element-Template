import { Component, Prop, Vue } from 'vue-property-decorator';

interface WorksItem {
  title: string;
  text: string;
  icon: string | object;
  intro: string;
}

@Component({})
export default class IndexWorkItem extends Vue {
  @Prop()
  private data!: WorksItem;
  private render() {
    return (
      <section class="index__work--item">
        <article class="index__work--item-icon">
          <img src={this.data.icon} />
        </article>
        <article class="index__work--item-wrap">
          <h4 class="index__work--item-wrap-title">{this.data.text}</h4>
          <p class="index__work--item-wrap-intro">{this.data.intro}</p>
        </article>
      </section>
    );
  }
}
