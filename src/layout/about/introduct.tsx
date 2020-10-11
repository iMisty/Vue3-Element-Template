import { Component, Prop, Vue } from 'vue-property-decorator';

interface Introduct {
  image: object | string;
  title: string;
  text: string;
}

@Component({})
export default class AboutIntroduct extends Vue {
  @Prop()
  private data!: Introduct;

  private render() {
    return (
      <div class="about__introduct">
        <section class="left">
          <h2>{this.data.title}</h2>
          <p>{this.data.text}</p>
        </section>
        <section class="right">
          <img src={this.data.image} />
        </section>
      </div>
    );
  }
}
