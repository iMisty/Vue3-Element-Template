import { Component, Vue } from 'vue-property-decorator';
import { Index } from '@/config/index.config';
@Component({})
export default class HomeWork extends Vue {
  private worksData = Index.work;
  private render() {
    return (
      <div class="index__work">
        <h1>{this.worksData.title}</h1>
      </div>
    );
  }
}
