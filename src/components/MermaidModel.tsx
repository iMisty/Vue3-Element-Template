import { Component, Vue } from 'vue-property-decorator';
import MermaidButton from '@/components/MermaidButton';

@Component({
  components: {
    'm-button': MermaidButton
  }
})
export default class MermaidModel extends Vue {
  private render() {
    return (
      <transition>
        <div class="mermaid__model">
          <section class="mermaid__model--wrap">
            <header class="mermaid__model--wrap--title">
              <h6>This is a title</h6>
              <i class="fa fa"></i>
            </header>
            <article class="mermaid__model--wrap--content">
              <p>
                robin: 聊天里面说的是5号。。 z乐:
                5号只有3个通话记录，都是10点20-10点23 z乐: 同一个号码
                1560 ImI: 186的确实没有进ai… ImI: 我看看cdr
              </p>
            </article>
            <footer class="mermaid__model--wrap--button">
              <m-button>确定
              </m-button>
              <m-button>给爷爬
              </m-button>
            </footer>
          </section>
          <section class="mermaid__model--mask"></section>
        </div>
      </transition>
    );
  }
}
