import { Component, Vue } from 'vue-property-decorator';
import AdminWrapTitle from '@/components/AdminWrapTitle';
import MermaidCard from '@/components/MermaidCard';
import MermaidCardPuzzle from '@/components/MermaidCardPuzzle';

@Component({
  components: {
    'admin-title': AdminWrapTitle,
    'm-card': MermaidCard,
    'm-puzzle': MermaidCardPuzzle
  }
})
export default class AdminDash extends Vue {
  private render() {
    return (
      <div class="admin__dash">
        <admin-title title="DashBoard"></admin-title>
        <section class="content">
          <section class="admin__dash--result">
            <m-card>
              <m-puzzle></m-puzzle>
            </m-card>
            <m-card>
              <m-puzzle></m-puzzle>
            </m-card>
            <m-card>
              <m-puzzle></m-puzzle>
            </m-card>
            <m-card>
              <m-puzzle></m-puzzle>
            </m-card>
          </section>
          <section class="admin__dash--result">
            <m-card>
              <m-puzzle></m-puzzle>
            </m-card>
            <m-card>
              <m-puzzle></m-puzzle>
            </m-card>
            <m-card>
              <m-puzzle></m-puzzle>
            </m-card>
            <m-card>
              <m-puzzle></m-puzzle>
            </m-card>
          </section>
        </section>
      </div>
    );
  }
}
