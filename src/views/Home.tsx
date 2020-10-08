import { Component, Vue } from 'vue-property-decorator';
import fullBackground from '@/layout/index/full-background';
import concept from '@/layout/index/concept';
import work from '@/layout/index/work';
import blog from '@/layout/index/blog';
import project from '@/layout/index/project';
import { Index } from '@/config/index.config';

@Component({
  components: {
    'full-background': fullBackground,
    'index-concept': concept,
    'index-work': work,
    'index-project': project,
    'index-blog': blog
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
        {/* Project */}
        <index-project data={this.indexData.project}></index-project>
        {/* blog */}
        <index-blog data={this.indexData.blog}></index-blog>
      </div>
    );
  }
}
