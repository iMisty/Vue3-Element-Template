import { work } from '@/config/work.config';
import { WorkItem } from '@/model/WorkItem';
import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';

@Component({
  components: {
    'wrap-header': WrapHeader
  }
})
export default class WorkWrap extends Vue {
  private workdata!: WorkItem;

  private getWorkData() {
    const id = this.$route.query.id as string;
    const data = work.project.find(item => item.id === parseInt(id));
    if (!data) {
      return false;
    }
    return (this.workdata = data);
  }

  private mounted() {
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
                  <p>11</p>
                  <small>Last Update</small>
                </div>
                <div class="status">
                  <p>11</p>
                  <small>Last Update</small>
                </div>
                <div class="status">
                  <p>2020-09-20</p>
                  <small>Last Update</small>
                </div>
              </div>
              <div class="work__wrap--header--avatar">
                <img src={require('@/assets/bg.jpg')} alt="" />
              </div>
              <div class="work__wrap--header--button">
                <button>Live Demo</button>
                <button>Source</button>
              </div>
            </header>
          </section>
        </div>
      </div>
    );
  }
}
