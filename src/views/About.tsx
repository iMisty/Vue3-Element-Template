import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';
import introduct from '@/layout/about/introduct';
import concept from '@/layout/about/concept';
import team from '@/layout/about/team';
import { about } from '@/config/about.config';

@Component({
  components: {
    'wrap-header': WrapHeader,
    'about-introduct': introduct,
    'about-concept': concept,
    'about-team': team
  }
})
export default class About extends Vue {
  private aboutData = about;

  private render() {
    return (
      <div class="about">
        <wrap-header></wrap-header>
        <about-introduct data={this.aboutData.introduct}></about-introduct>
        <about-concept data={this.aboutData.concept}></about-concept>
        <about-team data={this.aboutData.team}></about-team>
      </div>
    );
  }
}
