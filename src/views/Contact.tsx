import { Component, Vue } from 'vue-property-decorator';
import { contact } from '@/config/contact.config';
import WrapHeader from '@/components/WrapHeader';
import ContactList from '@/layout/contact/ContactList';
import ContactForm from '@/layout/contact/ContactForm';

@Component({
  components: {
    'wrap-header': WrapHeader,
    'contact-list': ContactList,
    'contact-form': ContactForm
  }
})
export default class Contact extends Vue {
  private contactData = contact;

  private render() {
    return (
      <div class="contact">
        <wrap-header></wrap-header>
        <contact-list data={this.contactData}></contact-list>
        <contact-form data={this.contactData.formTitle}></contact-form>
      </div>
    );
  }
}
