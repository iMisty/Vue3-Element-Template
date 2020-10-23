import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Test extends Vue {
  private render() {
    return (
      <div
        class="test"
        style="width:100vw;height:100vh;magrin-top: 4rem;display:flex;flex-direction:column;justify-content:center;align-items:center;"
      >
        <div id="a">
        </div>
      </div>
    );
  }
}
