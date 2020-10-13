import { Component, Prop, Vue } from 'vue-property-decorator';
interface Blog {
  id: number;
  avatar: string | object;
  tag: string[];
  title: string;
  intro: string;
}
@Component({})
export default class IndexBlogItem extends Vue {
  @Prop()
  private data!: Blog;

  // 跳转内页
  private jumpToWrap(id: string | number) {
    console.log(id);
    return this.$router.push({
      path: '/blogwrap',
      query: { id: id.toString() }
    });
  }

  private render() {
    return (
      <article
        class="index__blog--item"
        onClick={() => this.jumpToWrap(this.data.id)}
      >
        <section class="index__blog--item-avatar">
          <img src={this.data.avatar} alt={this.data.title} />
        </section>
        <section class="index__blog--item-wrap">
          <h4 class="index__blog--item-title">{this.data.title}</h4>
          <ul>
            {this.data.tag.map(child => {
              return <li class="index__blog--item-tag">{child}</li>;
            })}
          </ul>
          <p class="index__blog--item-text">{this.data.intro}</p>
        </section>
      </article>
    );
  }
}
