import { Component, Vue } from 'vue-property-decorator';
import AdminWrapTitle from '@/components/AdminWrapTitle';
import AdminTable from '@/components/AdminTable';
import MermaidCard from '@/components/MermaidCard';
import { blog } from '@/config/blog.config';

@Component({
  components: {
    'admin-title': AdminWrapTitle,
    'm-card': MermaidCard,
    'admin-table': AdminTable
  }
})
export default class AdminBlog extends Vue {
  private tableData = blog.list;

  private tableTitle: string[] = ['title', 'created at'];

  private clickEdit(id: string | number) {
    console.log(id);
    const ids = id.toString();
    return this.$router.push({
      path: 'blogedit',
      query: { id: ids }
    });
  }

  private clickDelete(id: string | number) {
    console.log(id);
  }

  private mounted() {
    console.log(this.tableData);
  }

  private render() {
    return (
      <div class="admin__blog">
        <admin-title title="Blog"></admin-title>
        <section class="admin__blog--wrap">
          <section class="content">
            <m-card class="admin__blog--card">
              <admin-table
                type="light"
                title={this.tableTitle}
                data={this.tableData}
                onEdit={(id: string) => this.clickEdit(id)}
                onDelete={(id: string) => this.clickDelete(id)}
              ></admin-table>
            </m-card>
          </section>
        </section>
      </div>
    );
  }
}
