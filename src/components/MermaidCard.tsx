import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class MermaidCard extends Vue {
  private render() {
    return <div class="mermaid__card">{this.$slots.default}</div>;
  }
}
