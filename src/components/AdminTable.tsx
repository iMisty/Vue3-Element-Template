import { BlogItem } from '@/model/BlogItem';
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class AdminTable extends Vue {
  private key!: string[] | number[];

  // 表格模式，适配白天夜间模式
  @Prop({ default: 'light' })
  private type!: string;

  @Prop()
  private data!: BlogItem[];

  @Prop()
  private title!: string[];

  @Emit('edit')
  private clickEdit(id: string) {
    return id;
  }

  @Emit('delete')
  private clickDelete(id: string) {
    return id;
  }

  @Watch('data')
  getData(newVal: BlogItem[]) {
    console.log(newVal);
    return this.data = newVal;
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
            <tr class="table--row table--head--row">
              {this.title.map(item => {
                return <td class="table--title">{item}</td>;
              })}
            </tr>
          </thead>
          <tbody class="table--body">
            {this.data.map((item: BlogItem) => {
              return (
                <tr class="table--row">
                  <td class="table--item table-title">
                    <img
                      class="table--item--img"
                      src={item.avatar}
                      alt={item.title}
                    />
                    <span
                      class="table--item--title"
                      onClick={() => this.clickEdit(item._id)}
                    >
                      {item.title}
                    </span>
                  </td>
                  <td class="table--item time">{item.time}</td>
                  <td class="table--item setting">
                    <div
                      class="table--item--setting"
                      onClick={() => this.clickEdit(item._id)}
                    >
                      <i class="fa fa-edit"></i>
                    </div>
                    <div
                      class="table--item--setting"
                      onClick={() => this.clickDelete(item._id)}
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
