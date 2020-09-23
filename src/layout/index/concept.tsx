import { Component, Prop, Vue } from 'vue-property-decorator';

interface Concept {
  title: string;
  text: string;
}
@Component({})
export default class HomeConcept extends Vue {
  @Prop()
  private data!: Concept;

  private render() {
    return (
      <div class="index__concept">
        <h1 class="index__concept--title">{this.data.title}</h1>
        <p class="index__concept--text">{this.data.text}</p>
      </div>
    );
  }
}
