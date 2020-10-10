import WrapHeader from '@/components/WrapHeader';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    'wrap-header': WrapHeader
  }
})
export default class About extends Vue {
  private render() {
    return (
      <div class="about">
        <wrap-header></wrap-header>
      </div>
    );
  }
}
