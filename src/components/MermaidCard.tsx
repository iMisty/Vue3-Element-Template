import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class MermaidCard extends Vue {
  @Prop({ default: 'Title' })
  private title?: string;

  private render() {
    return (
      <div class="mermaid__card">
        <p class="mermaid__card--title">{this.title}</p>
        {this.$slots.default}
      </div>
    );
  }
}
