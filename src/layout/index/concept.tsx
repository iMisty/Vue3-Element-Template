import { Index } from '@/config/index.config';
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class HomeConcept extends Vue {
  private conceptData = Index.concept;
  private render() {
    return (
      <div class="index__concept">
        <h1 class="index__concept--title">{this.conceptData.title}</h1>
        <p class="index__concept--text">{this.conceptData.text}</p>
      </div>
    );
  }
}
