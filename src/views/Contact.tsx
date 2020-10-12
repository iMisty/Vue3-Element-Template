import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';

@Component({
  components: {
    'wrap-header': WrapHeader
  }
})
export default class Contact extends Vue {
  private render() {
    return (
      <div class="contact">
        <wrap-header></wrap-header>
      </div>
    );
  }
}
