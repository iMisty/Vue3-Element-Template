import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class WrapHeader extends Vue {
  private render() {
    return (
      <header class="app__wrap--header">
        <img src={require('@/assets/project.jpg')} />
      </header>
    );
  }
}
