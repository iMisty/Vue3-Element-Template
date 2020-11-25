import { BlogItem } from '@/model/BlogItem';
import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';
import { INFO, GET } from '@/config/api.config';

@Component({
  components: {
    'wrap-header': WrapHeader
  }
})
export default class BlogWrap extends Vue {
  private blogdata: BlogItem = { id: 1, _id: '1', title: '1', time: '1' };

  // 获取数据
  private async getBlogData() {
    const id = this.$route.query.id;
    console.log(id);
    const res = await GET(`${INFO}/blog`, { id: id });
    console.log(res);
    return (this.blogdata = res.msg[0]);
  }

  private created() {
    this.getBlogData();
  }

  private render() {
    return (
      <div class="blog__wrap">
        <wrap-header background={this.blogdata.avatar}></wrap-header>
        <div class="container">
          <section class="blog__wrap--container">
            <header class="blog__wrap--header">
              <div class="blog__wrap--header--status">
                <div class="status">
                  <p>{this.blogdata.time}</p>
                  <small>Last Update</small>
                </div>
              </div>
              <div class="blog__wrap--header--avatar">
                {this.blogdata.avatar ? (
                  <img src={this.blogdata.avatar} alt={this.blogdata.title} />
                ) : (
                  <img
                    src={require('@/assets/bg.jpg')}
                    alt={this.blogdata.title}
                  />
                )}
              </div>
            </header>
            <article class="blog__wrap--contain">
              <header class="blog__wrap--contain--title">
                <h3>{this.blogdata.title}</h3>
                {this.blogdata.tag ? (
                  <ul class="tags">
                    {this.blogdata.tag.map(item => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                ) : (
                  ''
                )}
              </header>
              <article
                class="blog__wrap--contain--text"
                domPropsInnerHTML={this.blogdata.content}
              ></article>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
