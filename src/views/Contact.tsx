import WrapHeader from '@/components/WrapHeader';
import { Component, Vue } from 'vue-property-decorator';

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
