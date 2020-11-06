import { Component, Vue } from 'vue-property-decorator';
import MermaidModel from '@/components/MermaidModel';
@Component({
  components: {
    'm-model': MermaidModel,
    
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
        <m-model></m-model>
      </div>
    );
  }
}
