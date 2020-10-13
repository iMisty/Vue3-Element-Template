import { Component, Prop, Vue } from 'vue-property-decorator';

interface Header {
  pri: string;
  sec: string;
}

@Component({})
export default class ContactHeader extends Vue {
  @Prop()
  private data!: Header;

  private render() {
    return (
      <header class="contact__list--header">
        <h1 class="contact__list--prititle">{this.data.pri}</h1>
        <p class="contact__list--sectitle">{this.data.sec}</p>
      </header>
    );
  }
}
