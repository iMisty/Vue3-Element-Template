import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import IndexProjectItem from '@/components/IndexProjectItem';
import { WorkItem } from '@/model/WorkItem';

@Component({
  components: {
    'project-item': IndexProjectItem
  }
})
export default class IndexProject extends Vue {
  @Prop()
  private data!: WorkItem[];

  @Watch('data')
  getData(newVal: WorkItem[]) {
    this.data = newVal;
  }

  private render() {
    return (
      <div class="index__project">
        <div class="container">
          <h1 class="index__project--title title">Project</h1>
          <section class="index__project--items">
            {this.data.map(item => {
              return <project-item data={item}></project-item>;
            })}
          </section>
        </div>
      </div>
    );
  }
}
