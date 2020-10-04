import { Component, Prop, Vue } from 'vue-property-decorator';
import IndexProjectItem from '@/components/IndexProjectItem';

interface ProjectList {
  title: string;
  list: object[];
}

@Component({
  components: {
    'project-item': IndexProjectItem
  }
})
export default class HomeLastProject extends Vue {
  @Prop()
  private data!: ProjectList;

  private render() {
    return (
      <div class="index__project">
        <h1 class="index__project--title title">{this.data.title}</h1>
        <div class="container">
          {this.data.list.map(item => {
            return <project-item data={item}></project-item>;
          })}
        </div>
      </div>
    );
  }
}
