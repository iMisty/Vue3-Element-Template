import { Component, Vue } from 'vue-property-decorator';
import AdminWrapTitle from '@/components/AdminWrapTitle';

@Component({
  components: {
    'admin-title': AdminWrapTitle
  }
})
export default class AdminWork extends Vue {
  private render() {
    return (
      <div class="admin__work">
        <admin-title title="Work"></admin-title>
      </div>
    );
  }
}
