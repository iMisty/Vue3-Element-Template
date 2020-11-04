import { Component, Vue } from 'vue-property-decorator';
import MermaidInput from '@/components/MermaidInput';
@Component({
  components: {
    'm-input': MermaidInput
  }
})
export default class Test extends Vue {
  private a = '';

  private aa(e) {
    console.log(e.target.value);
    this.a = e.target.value;
  }

  private render() {
    return (
      <div
        class="test"
        style="width:100vw;height:100vh;magrin-top: 4rem;display:flex;flex-direction:column;justify-content:center;align-items:center;"
      >
        <m-input v-model={this.a} onInput={e => this.aa(e)}></m-input>
        <p>{this.a}</p>
      </div>
    );
  }
}
