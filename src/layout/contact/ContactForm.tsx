import { Component, Prop, Vue } from 'vue-property-decorator';
import ContactHeader from '@/components/ContactHeader';

interface ContactTitle {
  pri: string;
  sec: string;
}

@Component({
  components: {
    'contact-header': ContactHeader
  }
})
export default class ContactForm extends Vue {
  @Prop()
  private data!: ContactTitle;

  private render() {
    return (
      <div class="contact__form wrap">
        <div class="container">
          <section class="contact__list--form wrap">
            <contact-header data={this.data}></contact-header>
          </section>
          <section class="contact__form--wrap">
            <section class="contact__form--label">
              <label for="first-name">
                <p>First name</p>
                <div class="form-data">
                  <i class="fa fa-user-circle"></i>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                  />
                </div>
              </label>
              <label for="last-name">
                <p>Last name</p>
                <div class="form-data">
                  <i class="fa fa-tag"></i>
                  <input type="text" id="last-name" placeholder="Last Name" />
                </div>
              </label>
              <label for="email-address">
                <p>Email address</p>
                <div class="form-data">
                  <i class="fa fa-envelope"></i>
                  <input
                    type="text"
                    id="email-address"
                    placeholder="Email Address"
                  />
                </div>
              </label>
              <label for="message">
                <p>Your message</p>
                <div class="form-data">
                  <textarea type="text" id="message" placeholder="Message Here" />
                </div>
              </label>
            </section>
            <section class="contact__form--submit">
              <button class="mermaid__button submit-button">
                Send Message
              </button>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
