import { Component, Prop, Vue } from 'vue-property-decorator';
import ContactHeader from '@/components/ContactHeader';
import ContactInformation from '@/components/ContactInformation';
interface ContactItemList {
  title: ContactTitle;
  contactList: ContactItem[];
  formTitle: ContactTitle;
}

interface ContactTitle {
  pri: string;
  sec: string;
}

interface ContactItem {
  icon: string;
  title: string;
  text: string;
}

@Component({
  components: {
    'contact-header': ContactHeader,
    'contact-information': ContactInformation
  }
})
export default class ContactList extends Vue {
  @Prop()
  private data!: ContactItemList;

  private render() {
    return (
      <div class="contact__list">
        <div class="container">
          <section class="contact__list--contact wrap">
            <contact-header data={this.data.title}></contact-header>
            <section class="contact__information--list">
              {this.data.contactList.map(item => {
                return <contact-information data={item}></contact-information>;
              })}
            </section>
          </section>
        </div>
      </div>
    );
  }
}
