import { WorkItem } from '@/model/WorkItem';
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';

interface WorkTitle {
  key: string;
  mobile?: string;
}

@Component({})
export default class AdminWorkTable extends Vue {
  // 表格模式，适配白天夜间模式
  @Prop({ default: 'light' })
  private type!: string;

  @Prop()
  private data!: WorkItem[];

  @Prop()
  private title!: WorkTitle[];

  @Emit('edit')
  private clickEdit(id: number | string | undefined) {
    return id;
  }

  @Emit('delete')
  private clickDelete(id: number | string | undefined) {
    return id;
  }

  @Emit('link')
  private clickOpenSource(link: string) {
    console.log(link);
    return link;
  }

  @Watch('data')
  getData(newVal: WorkItem[]) {
    console.log(newVal);
    return (this.data = newVal);
  }

  // 计算type
  get tableType() {
    return this.type ? 'table-light' : 'table-dark';
  }

  private render() {
    return (
      <div class="admin__table">
        <table class={`table ${this.tableType}`} rules="none">
          <thead class="table--head">
            <tr class="table--row table--head--row work--row">
              {this.title.map((item: WorkTitle) => {
                return (
                  <td class={`table--title ${item.mobile}`}>{item.key}</td>
                );
              })}
            </tr>
          </thead>
          <tbody class="table--body">
            {this.data.map((item: WorkItem) => {
              return (
                <tr class="table--row work--row">
                  <td class="table--item table-title">
                    <img
                      class="table--item--img"
                      src={item.avatar}
                      alt={item.title}
                    />
                    <span
                      class="table--item--title"
                      onClick={() => this.clickEdit(item.id)}
                    >
                      {item.title}
                    </span>
                  </td>
                  <td class="table--item table-title center mobile-type">
                    {item.lastupdate}
                  </td>
                  <td class="table--item table-title center mobile-type">
                    {item.version}
                  </td>
                  <td class="table--item table-title center">
                    <span class={`status-dot ${item.status}`}></span>
                    <span class={`status-text ${item.status}`}>
                      {item.status}
                    </span>
                  </td>
                  <td class="table--item setting center mobile-type">
                    <div
                      class="table--item--setting"
                      onClick={() => this.clickOpenSource(item.source)}
                    >
                      <i class="fa fa-github"></i>
                    </div>
                    <div
                      class="table--item--setting"
                      onClick={() => this.clickOpenSource(item.source)}
                    >
                      <i class="fa fa-paper-plane"></i>
                    </div>
                  </td>
                  <td class="table--item setting center">
                    <div
                      class="table--item--setting"
                      onClick={() => this.clickEdit(item.id)}
                    >
                      <i class="fa fa-edit"></i>
                    </div>
                    <div
                      class="table--item--setting"
                      onClick={() => this.clickDelete(item.id)}
                    >
                      <i class="fa fa-trash-o"></i>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
