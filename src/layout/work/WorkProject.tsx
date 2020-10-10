import WorkWrapItem from '@/components/WorkWrapItem';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { WorkItem } from '@/model/WorkItem';

@Component({
  components: {
    'work-item': WorkWrapItem
  }
})
export default class WorkProject extends Vue {
  @Prop()
  private data!: WorkItem[];

  private render() {
    return (
      <div class="container">
        <section class="work__project">
          {this.data.map(item => {
            return <work-item data={item}></work-item>;
          })}
        </section>
      </div>
    );
  }
}
