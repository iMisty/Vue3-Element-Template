import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { BlogItem } from '@/model/BlogItem';
import BlogWrapItem from '@/components/BlogWrapItem';

@Component({
  components: {
    'blog-article': BlogWrapItem
  }
})
export default class BlogProject extends Vue {
  @Prop()
  private data!: BlogItem[];

  @Watch('data', { immediate: true })
  getBlogData(newValue: BlogItem[]) {
    this.data = newValue;
  }

  private render() {
    return (
      <div class="blog__project">
        <div class="container">
          {this.data.map(item => {
            return <blog-article data={item}></blog-article>;
          })}
        </div>
      </div>
    );
  }
}
