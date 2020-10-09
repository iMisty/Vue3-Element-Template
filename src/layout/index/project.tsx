import { Component, Prop, Vue } from 'vue-property-decorator';
import IndexProjectItem from '@/components/IndexProjectItem';

interface Project {
  title: string;
  items: ProjectItem[];
}

interface ProjectItem {
  id: number;
  avatar: string | object;
  link: string;
  tag: string[];
  title: string;
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
            {this.data.items.map(item => {
              return (
                // <article
                //   class="index__project--item"
                //   data-id={item.id}
                //   onClick={() => this.openProject(item.link)}
                // >
                //   <img src={item.avatar} />
                //   <h5>{item.title}</h5>
                // </article>
                <project-item data={item}></project-item>
              );
            })}
          </section>
          <section class="more-button">
            <button>查看更多</button>
          </section>
        </div>
      </div>
    );
  }
}
