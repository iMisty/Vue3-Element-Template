import { Component, Emit, Vue } from 'vue-property-decorator';
import MermaidButton from '@/components/MermaidButton';

@Component({
  components: {
    'm-button': MermaidButton
  }
})
export default class MermaidModel extends Vue {
  private text = {
    title: 'This is a title',
    msg: `1`,
    btn: {
      confirm: '确定',
      cancel: '给爷爬'
    },
    cancel: true,
    confirm: true
  };

  private isShow = true;

  @Emit('confirm')
  private confirm() {
    console.log('confirm');
  }

  @Emit('cancel')
  private cancel() {
    console.log('cancel');
  }

  @Emit('close')
  private close() {
    console.log('close');
    return (this.isShow = false);
  }

  private mounted() {
    setTimeout(() => {
      console.log('mounted');
    }, 1000);
  }

  private render() {
    return (
      <transition name="fade" appear appear-class="fade-enter-active">
        {this.isShow ? (
          <div class="mermaid__model">
            <section class="mermaid__model--wrap">
              <header class="mermaid__model--wrap--title">
                <h6 class="model--title">{this.text.title}</h6>
                <i class="fa fa-close" onClick={() => this.close()}></i>
              </header>
              <article class="mermaid__model--wrap--content">
                <p>{this.text.msg}</p>
              </article>
              <footer class="mermaid__model--wrap--button">
                {this.text.confirm ? (
                  <m-button onClickevent={() => this.confirm()}>
                    {this.text.btn.confirm}
                  </m-button>
                ) : (
                  ''
                )}
                {this.text.cancel ? (
                  <m-button type="link" onClickevent={() => this.cancel()}>
                    {this.text.btn.cancel}
                  </m-button>
                ) : (
                  ''
                )}
              </footer>
            </section>
            <section
              class="mermaid__model--mask"
              onClick={() => this.close()}
            ></section>
          </div>
        ) : (
          ''
        )}
      </transition>
    );
  }
}
