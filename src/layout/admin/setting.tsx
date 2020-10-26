import { Component, Vue } from 'vue-property-decorator';
import AdminWrapTitle from '@/components/AdminWrapTitle';

@Component({
  components: {
    'admin-title': AdminWrapTitle
  }
})
export default class AdminSetting extends Vue {

  private mounted(){
    console.log('Setting Loaded')
  }

  private render() {
    return (
      <div class="admin__setting">
        <admin-title title="Setting"></admin-title>
      </div>
    );
  }
}
