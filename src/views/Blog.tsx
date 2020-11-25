import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';
import BlogProject from '@/layout/blog/BlogProject';
import { GET, INFO } from '@/config/api.config';
import { BlogItem } from '@/model/BlogItem';

@Component({
  components: {
    'wrap-header': WrapHeader,
    'blog-project': BlogProject
  }
})
export default class Blog extends Vue {
  private blogData: BlogItem[] = [];

  private async getBlogData() {
    const res = await GET(`${INFO}/blog`);
    console.log(res);
    return (this.blogData = res.msg);
  }

  private created() {
    this.getBlogData();
  }

  private render() {
    return (
      <div class="blog">
        <wrap-header></wrap-header>
        <blog-project data={this.blogData}></blog-project>
      </div>
    );
  }
}
