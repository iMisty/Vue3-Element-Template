import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Test extends Vue {
  private title = [
    { name: '1', key: '1a' },
    { name: '2', key: '2a' }
  ];

  private data = [
    { id: 'a', '1a': '12', '2a': '13', 3: '14' },
    { id: 'b', '1a': '12', '2a': '13', 3: '14' },
    { id: 'c', '1a': '12', '2a': '13', 3: '14' }
  ];

  private aa() {
    const key = this.title.map(item => {
      return item.key;
    });
    console.log(key);
    const a = this.data.filter((element, index) => {
      console.log(element);
    });
    console.log(a);
  }

  private mounted() {
    this.aa();
  }

  private render() {
    return (
      <div
        class="test"
        style="width:100vw;height:100vh;magrin-top: 4rem;display:flex;flex-direction:column;justify-content:center;align-items:center;"
      >
        <table>
          <thead>
            <tr>
              {this.title.map(item => {
                return <td>{item.key}</td>;
              })}
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
