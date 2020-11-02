import { Component, Prop, Vue } from 'vue-property-decorator';
import { BlogItem } from '@/model/BlogItem';

@Component({})
export default class BlogProjectItem extends Vue {
  @Prop()
  private data!: BlogItem;

  // 打开内页
  private openArticle(id:  string) {
    const ids = id;
    return this.$router.push({
      path: '/blogwrap',
      query: {
        id: ids
      }
    });
  }

  private render() {
    return (
      <div class="blog__project--item">
        {/* 图片部分 */}
        <section class="left" onClick={() => this.openArticle(this.data._id)}>
          {this.data.avatar ? (
            <img src={this.data.avatar} />
          ) : (
            <img src={require('@/assets/bg.jpg')} />
          )}
        </section>
        {/* 文字部分 */}
        <section class="right">
          {/* 标题 */}
          <h3
            class="item--title"
            onClick={() => this.openArticle(this.data._id)}
          >
            {this.data.title}
          </h3>
          {/* 作成时间 */}
          <p class="item--date">{this.data.time}</p>
          {/* 标签部分 */}
          {this.data.tag ? (
            <ul class="item--tag">
              {this.data.tag.map(item => {
                return <li>{item}</li>;
              })}
            </ul>
          ) : (
            ''
          )}
          {/* 简要文字 */}
          <p class="item--intro" onClick={() => this.openArticle(this.data._id)}>
            {this.data.intro}
          </p>
          {/* 按钮 */}
          <section class="item--button">
            <button
              class="mermaid__button primary-button"
              onClick={() => this.openArticle(this.data._id)}
            >
              Read More
            </button>
          </section>
        </section>
      </div>
    );
  }
}
