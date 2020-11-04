import { WorkItem } from '@/model/WorkItem';
import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';
import { INFO, POST } from '@/config/api.config';

@Component({
  components: {
    'wrap-header': WrapHeader
  }
})
export default class WorkWrap extends Vue {
  private data: WorkItem = { _id: '1', source: '1' };

  private async getWorkData() {
    const id = this.$route.query.id;
    console.log(id);
    const res = await POST(`${INFO}/work/id`, { id });
    console.log(res);
    return (this.data = res.msg[0]);
  }

  private created() {
    this.getWorkData();
    console.log(this.data);
  }

  private render() {
    return (
      <div class="work__wrap">
        <wrap-header background={this.data.avatar}></wrap-header>
        <div class="container">
          <section class="work__wrap--container">
            <header class="work__wrap--header">
              <div class="work__wrap--header--status">
                <div class="status">
                  <p>{this.data.version}</p>
                  <small>Version</small>
                </div>
                <div class="status">
                  <p>11</p>
                  <small>Last Update</small>
                </div>
                <div class="status">
                  <p>{this.data.lastupdate}</p>
                  <small>Last Update</small>
                </div>
              </div>
              <div class="work__wrap--header--avatar">
                {this.data.avatar ? (
                  <img src={this.data.avatar} alt={this.data.title} />
                ) : (
                  <img
                    src={require('@/assets/bg.jpg')}
                    alt={this.data.title}
                  />
                )}
              </div>
              <div class="work__wrap--header--button">
                {this.data.preview ? (
                  <button class="button small-button live-button">
                    Live Demo
                  </button>
                ) : (
                  ''
                )}
                {this.data.source ? (
                  <button class="button small-button source-button">
                    Source
                  </button>
                ) : (
                  ''
                )}
              </div>
            </header>
            <article class="work__wrap--contain">
              <header class="work__wrap--contain--title">
                <h3>{this.data.title}</h3>
                {this.data.tag ? (
                  <ul class="tags">
                    {this.data.tag.map(item => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                ) : (
                  ''
                )}
              </header>
              <article
                class="work__wrap--contain--text"
                domPropsInnerHTML={this.data.content}
              ></article>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
