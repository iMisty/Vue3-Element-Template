import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class WrapHeader extends Vue {
  // @Prop()
  // private title?: string;
  
  @Prop()
  private background?: string | object;

  private render() {
    return (
      <header class="app__wrap--header">
        {this.background ? (
          <img src={this.background} />
        ) : (
          <div class="circles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </header>
    );
  }
}
