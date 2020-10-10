import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';
import WorkProject from '@/layout/work/WorkProject';
import { work } from '@/config/work.config';
@Component({
  components: {
    'wrap-header': WrapHeader,
    'work-project': WorkProject
  }
})
export default class Work extends Vue {
  private workData = work;

  private render() {
    return (
      <div class="work">
        <wrap-header header={this.workData.title}></wrap-header>
        <work-project data={this.workData.project}></work-project>
      </div>
    );
  }
}
