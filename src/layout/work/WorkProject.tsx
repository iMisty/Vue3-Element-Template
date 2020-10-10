import WorkWrapItem from '@/components/WorkWrapItem';
import { Component, Prop, Vue } from 'vue-property-decorator';

interface WorkItem {
  id: number;
  avatar: object | string;
  title: string;
  tag: string[];
  intro: string;
  preview: string;
  source: string;
  lastupdate: string | number;
  version: string;
}

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
