import { blog } from '@/config/blog.config';
import { BlogItem } from '@/model/BlogItem';
import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';

@Component({
  components: {
    'wrap-header': WrapHeader
  }
})
export default class BlogWrap extends Vue {
  private blogdata!: BlogItem;

  private getBlogData() {
    const id = this.$route.query.id as string;
    console.log(id)
    const data = blog.list.find(item => item.id === parseInt(id));
    if (!data) {
      return false;
    }
    return (this.blogdata = data);
  }

  private created() {
    this.getBlogData();
    console.log(this.blogdata);
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
                domPropsInnerHTML={this.blogdata.text}
              ></article>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
