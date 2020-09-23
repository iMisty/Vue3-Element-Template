import { Component, Prop, Vue } from 'vue-property-decorator';

interface Header {
  background: string | object;
}

@Component({})
export default class HomeBackground extends Vue {
  @Prop()
  private data!: Header;
  private render() {
    return (
      <div
        class="index__header wrap"
        style={`background-image: url(${this.data.background})`}
      ></div>
    );
  }
}
