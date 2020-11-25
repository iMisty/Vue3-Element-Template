import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';
import WorkProject from '@/layout/work/WorkProject';
import { GET, INFO } from '@/config/api.config';
@Component({
  components: {
    'wrap-header': WrapHeader,
    'work-project': WorkProject
  }
})
export default class Work extends Vue {
  private workData: WorkProject[] = [];

  private async getWorkData() {
    const res = await GET(`${INFO}/work`);
    console.log(res);
    return (this.workData = res.msg);
  }

  private created() {
    this.getWorkData();
  }

  private render() {
    return (
      <div class="work">
        <wrap-header header="Work"></wrap-header>
        <work-project data={this.workData}></work-project>
      </div>
    );
  }
}
