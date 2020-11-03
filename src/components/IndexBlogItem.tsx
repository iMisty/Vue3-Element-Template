import { BlogItem } from '@/model/BlogItem';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class IndexBlogItem extends Vue {
  @Prop()
  private data!: BlogItem;

  // 跳转内页
  private jumpToWrap(id: string) {
    console.log(this.data);
    console.log('~~~~~~~~~~~~~~~~~~~~~~' + id);
    return this.$router.push({
      path: '/blogwrap',
      query: { id }
    });
  }

  @Watch('data')
  getData(newVal: BlogItem) {
    this.data = newVal;
  }

  private render() {
    return (
      <article
        class="index__blog--item"
        onClick={() => this.jumpToWrap(this.data._id)}
      >
        <section class="index__blog--item-avatar">
          <img src={this.data.avatar} alt={this.data.title} />
        </section>
        <section class="index__blog--item-wrap">
          <h4 class="index__blog--item-title">{this.data.title}</h4>
          <ul>
            {this.data.tag?.map(child => {
              return <li class="index__blog--item-tag">{child}</li>;
            })}
          </ul>
          <p class="index__blog--item-text">{this.data.intro}</p>
        </section>
      </article>
    );
  }
}
