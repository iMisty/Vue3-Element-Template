import { POST } from '@/config/api.config';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Test extends Vue {
  private a = '';

  private async aa() {
    console.log('aaaa');
    const b = await POST('/user/footer', {
      img: 1111,
    });
    console.log(b);
    this.a = b.code;
  }

  private render() {
    return (
      <div
        class="test"
        style="width:100vw;height:100vh;magrin-top: 4rem;display:flex;flex-direction:column;justify-content:center;align-items:center;"
      >
        <button onClick={() => this.aa()}>123333</button>
        <p>{this.a}</p>
      </div>
    );
  }
}
