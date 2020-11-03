import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import IndexProjectItem from '@/components/IndexProjectItem';
import { WorkItem } from '@/model/WorkItem';
import { INFO, POST } from '@/config/api.config';

@Component({
  components: {
    'project-item': IndexProjectItem
  }
})
export default class IndexProject extends Vue {
  // @Prop()
  // private data!: WorkItem[];
  private data!: WorkItem[];
  // 跳转内页
  private jumpToWrap(id: string) {
    console.log(id);
    return this.$router.push({
      path: '/workwrap',
      query: { id }
    });
  }

  @Watch('data')
  getData(newVal: WorkItem[]) {
    console.log(`Work Data: ${newVal}`);
    this.data = newVal;
  }

  private async created() {
    const res = await POST(`${INFO}/work`);
    console.log(res);
    this.data = res.msg;
  }

  private render() {
    return (
      <div class="index__project">
        <div class="container">
          <h1 class="index__project--title title">Project</h1>
          <section class="index__project--items">
            {this.data.map(item => {
              return (
                <article
                  class="index__project--item"
                  data-id={item.id}
                  onClick={() => this.jumpToWrap(item._id)}
                >
                  <img src={item.avatar} />
                  <h5>{item.title}</h5>
                </article>
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}
