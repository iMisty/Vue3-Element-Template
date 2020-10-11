import { Component, Prop, Vue } from 'vue-property-decorator';
import teamUnit from '@/components/AboutTeamUnit';
import 'font-awesome/css/font-awesome.min.css';

interface Team {
  name: string;
  avatar: object | string;
  position: string;
  contact: any[];
}

@Component({
  components: {
    'team-unit': teamUnit
  }
})
export default class AboutTeam extends Vue {
  @Prop()
  private data!: Team[];

  private render() {
    return (
      <div class="about__team">
        <h2 class="about__title">Our Team</h2>
        <section class="about__team--list">
          {this.data.map(item => {
            return <team-unit data={item}></team-unit>;
          })}
        </section>
      </div>
    );
  }
}
