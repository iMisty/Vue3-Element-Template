import { Component, Vue, Watch } from 'vue-property-decorator';
import AdminWrapTitle from '@/components/AdminWrapTitle';
import AdminTable from '@/components/AdminTable';
import MermaidCard from '@/components/MermaidCard';
import { BlogItem } from '@/model/BlogItem';
import { POST, INFO } from '@/config/api.config';
@Component({
  components: {
    'admin-title': AdminWrapTitle,
    'm-card': MermaidCard,
    'admin-table': AdminTable
  }
})
export default class AdminBlog extends Vue {
  private tableData: BlogItem[] = [];

  private tableTitle: string[] = ['title', 'created at'];

  private async getBlogData() {
    const res = await POST(`${INFO}/blog`);
    console.log(res);
    // this.$nextTick(() => {
    this.tableData = res.msg;
    console.log(res.msg);
    // });
  }
  // 点击进入编辑状态
  private clickEdit(id: string | number) {
    console.log(id);
    const ids = id.toString();
    return this.$router.push({
      path: 'blogedit',
      query: { id: ids }
    });
  }

  // TODO: 点击删除该文章
  private clickDelete(id: string | number) {
    console.log(id);
  }

  private created() {
    // setTimeout(() => {
    this.getBlogData();
    console.log(this.tableData);
    // }, 3000);
  }

  private render() {
    return (
      <div class="admin__blog">
        <admin-title title="Blog"></admin-title>
        <section class="admin__blog--wrap">
          <section class="content">
            <m-card class="admin__blog--card">
              {this.tableData.length !== 0 ? (
                <admin-table
                  type="light"
                  title={this.tableTitle}
                  data={this.tableData}
                  onEdit={(id: string) => this.clickEdit(id)}
                  onDelete={(id: string) => this.clickDelete(id)}
                ></admin-table>
              ) : (
                1
              )}
            </m-card>
          </section>
        </section>
      </div>
    );
  }
}
