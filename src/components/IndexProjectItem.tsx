import { Component, Prop, Vue } from 'vue-property-decorator';

interface ProjectItem {
  id: number;
  avatar: string | object;
  link: string;
  tag: string[];
  title: string;
}

@Component({})
export default class IndexProjectItem extends Vue {
  @Prop()
  private data!: ProjectItem;

  private openProject(link: string) {
    console.log(link);
    // window.open(link);
  }

  private render() {
    return (
      <article
        class="index__project--item"
        data-id={this.data.id}
        onClick={() => this.openProject(this.data.link)}
      >
        <img src={this.data.avatar} />
        <h5>{this.data.title}</h5>
      </article>
    );
  }
}
