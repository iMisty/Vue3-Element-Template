import { Component, Vue } from 'vue-property-decorator';


@Component({})
export default class Loading extends Vue {


  private render() {
    return (
      <div class="loading">loading</div>
    );
  }
}