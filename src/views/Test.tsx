import { Component, Vue } from 'vue-property-decorator';
import {GET} from '@/config/api.config';
@Component({})
export default class Test extends Vue {
  private async mounted() {
    const data = await GET('/info/blog');
    console.log(data);
  }

  private render() {
    return (
      <div
        class="test"
        style="width:100vw;height:100vh;magrin-top: 4rem;display:flex;flex-direction:column;justify-content:center;align-items:center;"
      ></div>
    );
  }
}
