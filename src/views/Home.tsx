import { Component, Vue } from 'vue-property-decorator';
import fullBackground from '@/layout/index/full-background';
import concept from '@/layout/index/concept';

@Component({
  components: {
    'full-background': fullBackground,
    concept
  }
})
export default class Home extends Vue {
  private render() {
    return (
      <div class="index">
        {/* Fullscreen background */}
        <full-background></full-background>
        {/* Concept */}
        <concept></concept>
      </div>
    );
  }
}
