import { Component, Vue } from 'vue-property-decorator';
// 组件引入
import fullBackground from '@/layout/index/full-background';
import concept from '@/layout/index/concept';
import workComponent from '@/layout/index/work';
import blogComponent from '@/layout/index/blog';
import project from '@/layout/index/project';
// 配置文件引入
// TODO: 改为使用RestAPI
import { Index } from '@/config/index.config';
import { blog } from '@/config/blog.config';
import { work } from '@/config/work.config';

@Component({
  components: {
    'full-background': fullBackground,
    'index-concept': concept,
    'index-work': workComponent,
    'index-project': project,
    'index-blog': blogComponent
  }
})
export default class Home extends Vue {

  private indexData = Index;
  private blogData = blog;
  private workData = work;

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
        <index-project data={this.workData}></index-project>
        {/* blog */}
        <index-blog data={this.blogData}></index-blog>
      </div>
    );
  }
}
