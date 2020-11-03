import { WorkItem } from '@/model/WorkItem';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class IndexProjectItem extends Vue {
  @Prop()
  private data!: WorkItem;

  // 跳转内页
  private jumpToWrap(id: string | undefined) {
    console.log(id);
    return this.$router.push({
      path: '/workwrap',
      query: { id }
    });
  }

  @Watch('data')
  getData(newVal: WorkItem) {
    console.log(newVal);
    return (this.data = newVal);
  }

  private render() {
    return (
      <article
        class="index__project--item"
        data-id={this.data.id}
        onClick={() => this.jumpToWrap(this.data._id)}
      >
        <img src={this.data.avatar} />
        <h5>{this.data.title}</h5>
      </article>
    );
  }
}
