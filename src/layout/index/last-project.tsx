import { Component, Prop, Vue } from 'vue-property-decorator';
import IndexProjectItem from '@/components/IndexProjectItem';

interface Project {
  id: number;
  avatar: string | object;
  tag: string[];
  title: string;
  intro: string;
}

@Component({
  components: {
    'project-item': IndexProjectItem
  }
})
export default class HomeLastProject extends Vue {
  @Prop()
  private data!: Project[];

  private render() {
    return (
      <div class="index__project">
        <div class="container">
          {this.data.map(item => {
            return <project-item data={item}></project-item>;
          })}
        </div>
      </div>
    );
  }
}
