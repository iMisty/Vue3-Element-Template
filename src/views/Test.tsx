import { Component, Vue } from 'vue-property-decorator';
import MermaidModel from '@/components/MermaidModel';
@Component({
  components: {
    'm-model': MermaidModel
  }
})
export default class Test extends Vue {
  private a = '';

  private aa = false;

  private aaa() {
    return this.$model({
      title: 'a',
      msg: 'aaa',
      btn: {
        confirm: 'affffff',
        cancel: 'ffffb'
      }
    })
      .then(res => {
        console.log('yes', res);
      })
      .catch(rej => {
        console.log('no', rej);
      });
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
        {/* {this.aa ? <m-model onClose={() => this.add()}></m-model> : ''} */}
        <button onClick={() => this.aaa()}>1111111111</button>
      </div>
    );
  }
}
