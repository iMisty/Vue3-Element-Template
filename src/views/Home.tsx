import { Component, Vue } from 'vue-property-decorator';
import fullBackground from '@/layout/index/full-background';
import concept from '@/layout/index/concept';
import work from '@/layout/index/work';
import { Index } from '@/config/index.config';

@Component({
  components: {
    'full-background': fullBackground,
    'index-concept': concept,
    'index-work': work
  }
})
export default class Home extends Vue {
  private indexData = Index;
  private render() {
    return (
      <div class="index">
        {/* Fullscreen background */}
        <full-background data={this.indexData.header}></full-background>
        {/* Concept */}
        <index-concept data={this.indexData.concept}></index-concept>
        {/* Works */}
        <index-work data={this.indexData.work}></index-work>
      </div>
    );
  }
}
