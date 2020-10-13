import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ContactList extends Vue {
  private render() {
    return <div class="contact__list"></div>;
  }
}
