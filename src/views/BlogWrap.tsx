import { BlogItem } from '@/model/BlogItem';
import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';
import { GET, INFO } from '@/config/api.config';
import axios from 'axios';

@Component({
  components: {
    'wrap-header': WrapHeader
  }
})
export default class BlogWrap extends Vue {
  private blogdata!: BlogItem;

  private async getBlogData() {
    const id = this.$route.query.id;
    console.log(id);
    // const res = await GET(`/info/blog/id`, { _id: id });
    const res = await axios({
      method: 'get',
      url: '/info/blog/id',
      data: {
        id: 4
      }
    }).then(res => {
      console.log(res);
    });
    // if (!res.msg) {
    //   return false;
    // }
    // return (this.blogdata = res.msg);
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
