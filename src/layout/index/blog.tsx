import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import IndexBlogItem from '@/components/IndexBlogItem';
import { BlogItem } from '@/model/BlogItem';

@Component({
  components: {
    'blog-item': IndexBlogItem
  }
})
export default class HomeBlog extends Vue {
  @Prop()
  private data!: BlogItem[];

  @Watch('data')
  getData(newVal: BlogItem[]) {
    console.log(newVal.toString());
    this.data = newVal;
  }

  private render() {
    return (
      <div class="index__blog">
        <h1 class="index__blog--title title">Blog</h1>
        <div class="container">
          {this.data.map(item => {
            return <blog-item data={item}></blog-item>;
          })}
        </div>
      </div>
    );
  }
}
