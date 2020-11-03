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
  private workdata!: WorkItem;

  private async getWorkData() {
    const id = this.$route.query.id;
    const data = await POST(`${INFO}/work/id`, { id });

    return (this.workdata = data.msg[0]);
  }

  private created() {
    this.getWorkData();
    console.log(this.workdata);
  }

  private render() {
    return (
      <div class="work__wrap">
        <wrap-header></wrap-header>
        <div class="container">
          <section class="work__wrap--container">
            <header class="work__wrap--header">
              <div class="work__wrap--header--status">
                <div class="status">
                  <p>{this.workdata.version}</p>
                  <small>Version</small>
                </div>
                <div class="status">
                  <p>11</p>
                  <small>Last Update</small>
                </div>
                <div class="status">
                  <p>{this.workdata.lastupdate}</p>
                  <small>Last Update</small>
                </div>
              </div>
              <div class="work__wrap--header--avatar">
                {this.workdata.avatar ? (
                  <img src={this.workdata.avatar} alt={this.workdata.title} />
                ) : (
                  <img
                    src={require('@/assets/bg.jpg')}
                    alt={this.workdata.title}
                  />
                )}
              </div>
              <div class="work__wrap--header--button">
                {this.workdata.preview ? (
                  <button class="button small-button live-button">
                    Live Demo
                  </button>
                ) : (
                  ''
                )}
                {this.workdata.source ? (
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
                <h3>{this.workdata.title}</h3>
                {this.workdata.tag ? (
                  <ul class="tags">
                    {this.workdata.tag.map(item => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                ) : (
                  ''
                )}
              </header>
              <article
                class="work__wrap--contain--text"
                domPropsInnerHTML={this.workdata.content}
              ></article>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
