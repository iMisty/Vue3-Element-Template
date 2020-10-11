import { Component, Prop, Vue } from 'vue-property-decorator';
interface Team {
  name: string;
  avatar: object | string;
  position: string;
  contact: any[];
}
@Component({})
export default class AboutTeamUnit extends Vue {
  @Prop()
  private data!: Team;

  private render() {
    return (
      <article class="about__team--unit">
        <div class="about__team--unit--header">
          <img class="about__team--unit--avatar" src={this.data.avatar} />
          <h3 class="about__team--unit--name">{this.data.name}</h3>
          <p class="about__team--unit--position">{this.data.position}</p>
        </div>
        <ul class="about__team--unit--contact">
          {this.data.contact.map(item => {
            return (
              <li>
                <i class={`fa fa-${item.icon}`}></i>
              </li>
            );
          })}
        </ul>
      </article>
    );
  }
}
