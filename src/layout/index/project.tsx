import { Component, Prop, Vue } from 'vue-property-decorator';
import IndexProjectItem from '@/components/IndexProjectItem';

interface Project {
  title: string;
  background: string;
  project: ProjectItem[];
}

interface ProjectItem extends Project {
  id: number;
  avatar: string | object;
  link: string;
  tag: string[];
}

@Component({
  components: {
    'project-item': IndexProjectItem
  }
})
export default class IndexProject extends Vue {
  @Prop()
  private data!: Project;

  private render() {
    return (
      <div class="index__project">
        <div class="container">
          <h1 class="index__project--title title">{this.data.title}</h1>
          <section class="index__project--items">
            {this.data.project.map(item => {
              return <project-item data={item}></project-item>;
            })}
          </section>
        </div>
      </div>
    );
  }
}
