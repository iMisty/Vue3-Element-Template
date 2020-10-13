import { Component, Prop, Vue } from 'vue-property-decorator';

interface ContactItem {
  icon: string;
  title: string;
  text: string;
}

@Component({})
export default class ContactInformation extends Vue {
  @Prop()
  private data!: ContactItem;

  private render() {
    return (
      <div class="contact__information--item">
        <div class="contact__information--item--avatar">
          <i class={`fa fa-2x fa-${this.data.icon}`}></i>
        </div>
        <div class="contact__information--item--title">
          <h5>{this.data.title}</h5>
        </div>
        <div class="contact__information--item--text">
          <p>{this.data.text}</p>
        </div>
      </div>
    );
  }
}
