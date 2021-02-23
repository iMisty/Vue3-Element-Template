/*
 * @Author: Miya
 * @Date: 2020-09-22 10:13:28
 * @LastEditTime: 2021-02-23 17:58:57
 * @LastEditors: Miya
 * @Description: 首页
 * @FilePath: \LandingPage\src\views\Home.tsx
 * @Version: 1.1
 */
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
import { GET, INFO } from '@/config/api.config';
import { BlogItem } from '@/model/BlogItem';
import { WorkItem } from '@/model/WorkItem';

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
  private blogData: BlogItem[] | Promise<BlogItem[]> = [];
  private workData!: WorkItem;

  private async getDataFunction(url: string, slice: number, title?: string) {
    console.log(title);
    const res = await GET(url); 
    return res.msg.slice(0, slice);
  }

  private async getData() {
    const data = await this.getDataFunction(`${INFO}/blog`, 4, 'blog');
    this.workData = await this.getDataFunction(`${INFO}/work`, 4, 'work');
    this.$store.commit('fetchBlogData', data);
    this.blogData = this.$store.state.blogData;
  }

  private async created() {
    this.$nextTick(async () => {
      await this.getData();
      this.$store.commit('changeDisplayNavBar', true);
    });
  }

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
        <index-project></index-project>
        {/* blog */}
        <index-blog data={this.blogData}></index-blog>
      </div>
    );
  }
}
