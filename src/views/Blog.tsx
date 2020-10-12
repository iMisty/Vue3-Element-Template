import { Component, Vue } from 'vue-property-decorator';
import { blog } from '@/config/blog.config';
import WrapHeader from '@/components/WrapHeader';
import BlogProject from '@/layout/blog/BlogProject';

interface BlogInterface {
  title: string;
  list: BlogItem[];
}

interface BlogItem {
  id: number | string;
  avatar?: object | string;
  tag?: string[];
  title: string;
  intro: string;
}

@Component({
  components: {
    'wrap-header': WrapHeader,
    'blog-project': BlogProject
  }
})
export default class Blog extends Vue {
  private blogData: BlogInterface = blog;

  private render() {
    return (
      <div class="blog">
        <wrap-header></wrap-header>
        <blog-project data={this.blogData.list}></blog-project>
      </div>
    );
  }
}
