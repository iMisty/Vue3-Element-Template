import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class MermaidCard extends Vue {
  @Prop({ default: 'Total Items' })
  private title?: string;

  @Prop({ default: 114514 })
  private sum?: number;

  @Prop({ default: 'truck' })
  private icon?: string;

  @Prop({ default: 'orange' })
  private iconBackground?: string;

  get backgroundColor() {
    return `bg-gradient-${this.iconBackground}`;
  }

  private render() {
    return (
      <article class="mermaid__card--puzzle">
        <p class="admin-title">{this.title}</p>
        <p class="sum">{this.sum}</p>
        <div class={`icon ${this.backgroundColor}`}>
          <i class={`fa fa-${this.icon}`}></i>
        </div>
      </article>
    );
  }
}
