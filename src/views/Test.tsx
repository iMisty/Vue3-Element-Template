/*
 * @Author: Miya
 * @Date: 2020-10-22 14:58:55
 * @LastEditTime: 2021-02-23 16:46:57
 * @LastEditors: Miya
 * @Description:
 * @FilePath: \LandingPage\src\views\Test.tsx
 * @Version:
 */
import { Component, Vue } from 'vue-property-decorator';
import MermaidModel from '@/components/MermaidModel';
import { AJAX } from '@/util/ajax';
@Component({
  components: {
    'm-model': MermaidModel
  }
})
export default class Test extends Vue {
  private a = '';

  private aa = false;

  private async aaa() {
    const a = await AJAX.init('get', 'https://v2.dressweb.cn/info/blog');
    console.log(a);
  }

  private add() {
    return (this.aa = false);
  }

  private render() {
    return (
      <div
        class="test"
        style="width:100vw;height:100vh;magrin-top: 4rem;display:flex;flex-direction:column;justify-content:center;align-items:center;"
      >
        {this.aa ? <m-model onClose={() => this.add()}></m-model> : ''}
        <button onClick={() => this.aaa()}>1111111111</button>
      </div>
    );
  }
}
