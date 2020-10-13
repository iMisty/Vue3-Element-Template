import { Component, Prop, Vue } from 'vue-property-decorator';
import IndexBlogItem from '@/components/IndexBlogItem';

interface BlogList {
  title: string;
  list: object[];
}

@Component({
  components: {
    'blog-item': IndexBlogItem
  }
})
export default class HomeBlog extends Vue {
  @Prop()
  private data!: BlogList;

  private render() {
    return (
      <div class="index__blog">
        <h1 class="index__blog--title title">{this.data.title}</h1>
        <div class="container">
          {this.data.list.map(item => {
            return (
              <blog-item
                data={item}
              ></blog-item>
            );
          })}
        </div>
      </div>
    );
  }
}
