import { Component, Vue } from 'vue-property-decorator';
import fullBackground from '@/layout/index/full-background';

@Component({
  components: {
    'full-background': fullBackground
  }
})
export default class Home extends Vue {
  private render() {
    return (
      <div class="index">
        {/* Fullscreen background */}
        <full-background></full-background>
        <full-background></full-background>
      </div>
    );
  }
}
