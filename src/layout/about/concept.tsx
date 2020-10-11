import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class AboutConcept extends Vue {
  @Prop()
  private data!: string;

  private render() {
    return (
      <div class="about__concept">
        <h2 class="about__title">Concept</h2>
        <p>{this.data}</p>
      </div>
    );
  }
}
