import WrapHeader from '@/components/WrapHeader';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    'wrap-header': WrapHeader
  }
})
export default class Content extends Vue {
  private render() {
    return (
      <div class="content">
        <wrap-header></wrap-header>
      </div>
    );
  }
}
