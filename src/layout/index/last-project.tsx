import { Component, Prop, Vue } from 'vue-property-decorator';

interface Project {
  id: number;
  avatar: string | object;
  tag: string[];
  title: string;
  intro: string;
}

@Component({})
export default class HomeLastProject extends Vue {
  @Prop()
  private data!: Project[];

  private render() {
    return (
      <div class="index__project">
        {this.data.map(item => {
          return (
            <article class="index__project--item" data-project-id={item.id}>
              <section class="index__project--item-avatar">
                <img src={item.avatar} alt={item.title} />
              </section>
              <section class="index__project--item-wrap">
                <h4 class="index__project--item-title">{item.title}</h4>
                <ul>
                  {item.tag.map(child => {
                    return <li class="index__project--item-tage">{child}</li>;
                  })}
                </ul>
                <p class="index__project--item-text">{item.intro}</p>
              </section>
            </article>
          );
        })}
      </div>
    );
  }
}
