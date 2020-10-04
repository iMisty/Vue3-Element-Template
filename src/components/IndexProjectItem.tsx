import { Component, Prop, Vue } from 'vue-property-decorator';
interface Project {
  id: number;
  avatar: string | object;
  tag: string[];
  title: string;
  intro: string;
}
@Component({})
export default class IndexProjectItem extends Vue {
  @Prop()
  private data!: Project;

  private render() {
    return (
      <article class="index__project--item" data-project-id={this.data.id}>
        <section class="index__project--item-avatar">
          <img src={this.data.avatar} alt={this.data.title} />
        </section>
        <section class="index__project--item-wrap">
          <h4 class="index__project--item-title">{this.data.title}</h4>
          <ul>
            {this.data.tag.map(child => {
              return <li class="index__project--item-tage">{child}</li>;
            })}
          </ul>
          <p class="index__project--item-text">{this.data.intro}</p>
        </section>
      </article>
    );
  }
}
