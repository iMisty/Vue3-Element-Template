import { Component, Vue } from 'vue-property-decorator';
import AdminWrapTitle from '@/components/AdminWrapTitle';
import AdminWorkTable from '@/components/AdminWorkTable';
import MermaidCard from '@/components/MermaidCard';
import { INFO, POST } from '@/config/api.config';
import { WorkItem } from '@/model/WorkItem';

@Component({
  components: {
    'admin-title': AdminWrapTitle,
    'admin-work-table': AdminWorkTable,
    'm-card': MermaidCard
  }
})
export default class AdminWork extends Vue {
  private title = [
    { key: 'title' },
    { key: 'last', mobile: 'mobile-type' },
    { key: 'version', mobile: 'mobile-type' },
    { key: 'status' },
    { key: '', mobile: 'mobile-type' }
  ];

  private data: WorkItem[] = [];

  private clickEdit(id: string | number | undefined) {
    console.log(id);
    const ids = id?.toString();
    return this.$router.push({
      path: 'workedit',
      query: { id: ids }
    });
  }

  private async getWorkData() {
    const res = await POST(`${INFO}/work`);
    console.log(res);
    this.data = res.msg;
  }

  private created() {
    this.getWorkData();
  }

  private render() {
    return (
      <div class="admin__work">
        <admin-title title="Work"></admin-title>
        <div class="admin__work--wrap">
          <div class="content">
            <m-card title="Work">
              <admin-work-table
                title={this.title}
                data={this.data}
                onEdit={(id: string) => this.clickEdit(id)}
              ></admin-work-table>
            </m-card>
          </div>
        </div>
      </div>
    );
  }
}
