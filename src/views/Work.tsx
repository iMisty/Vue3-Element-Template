import { Component, Vue } from 'vue-property-decorator';
import WrapHeader from '@/components/WrapHeader';

@Component({
  components: {
    'wrap-header': WrapHeader
  }
})
export default class Work extends Vue {
  private render() {
    return (
      <div class="work">
        <wrap-header></wrap-header>
      </div>
    );
  }
}
