import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AdminBlog extends Vue {
  private render() {
    return <div class="admin__blog">Blog</div>;
  }
}
