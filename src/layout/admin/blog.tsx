import { Component, Vue } from 'vue-property-decorator';
import AdminWrapTitle from '@/components/AdminWrapTitle';

@Component({
  components: {
    'admin-title': AdminWrapTitle
  }
})
export default class AdminBlog extends Vue {
  private render() {
    return (
      <div class="admin__blog">
        <admin-title title="Blog"></admin-title>
      </div>
    );
  }
}
