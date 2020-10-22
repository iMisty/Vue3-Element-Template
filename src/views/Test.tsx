import { Component, Vue } from 'vue-property-decorator';
import marked from 'marked';

@Component({})
export default class Test extends Vue {
  private a = '';
  private b = '';

  private async aa() {
    const aa = this.a;
    return (this.b = marked(aa));
  }

  private render() {
    return (
      <div
        class="test"
        style="width:100vw;height:100vh;magrin-top: 4rem;display:flex;flex-direction:column;justify-content:center;align-items:center;"
      >
        <textarea v-model={this.a} cols="30" rows="10"></textarea>
        <button onClick={() => this.aa()}>123333</button>
        <p>{this.b}</p>
        <div domPropsInnerHTML={this.b}></div>
      </div>
    );
  }
}
