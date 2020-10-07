import { Component, Prop, Vue } from 'vue-property-decorator';

interface Footer {
  name: string;
  logo: {
    img: object | string;
    text: {
      pri: string;
      sec: string;
    };
  };
  contact: Contact[];
  copyright: {
    startYear: number;
    author: string;
    website: string;
  };
}

interface Contact {
  name: string;
  icon: object | string;
  href: string;
}

@Component({})
export default class AppFooter extends Vue {
  @Prop()
  private data!: Footer;
  private render() {
    return (
      <div class="app__footer">
        <div class="container">
          <section class="app__footer--logo">
            <img
              class="app__footer--logo--img"
              src={this.data.logo.img}
              alt="logo"
            />
            <article class="app__footer--logo--text">
              <h4 class="pri-text">{this.data.logo.text.pri}</h4>
              <h5 class="sec-text">{this.data.logo.text.sec}</h5>
            </article>
          </section>
          <section class="app__footer--social">
            {this.data.contact.map((item, index) => {
              return (
                <article
                  class="app__footer--social-item"
                  data-contact-id={index}
                >
                  <img src={item.icon} alt={item.name} />
                </article>
              );
            })}
          </section>
          <section class="app__footer--copyright">
            <p>
              ©{this.data.copyright.startYear} {this.data.copyright.author}
            </p>
          </section>
        </div>
      </div>
    );
  }
}
