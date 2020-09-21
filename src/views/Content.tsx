import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Content extends Vue {
  private render() {
    return <div class="content">content</div>;
  }
}
