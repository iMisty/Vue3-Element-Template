import { Component, Vue } from 'vue-property-decorator';
import { Index } from '@/config/index.config';

@Component({})
export default class HomeBackground extends Vue {
  private background = Index.header.background;
  private render() {
    return (
      <div
        class="index__header"
        style={`background-image: url(${this.background})`}
      ></div>
    );
  }
}
