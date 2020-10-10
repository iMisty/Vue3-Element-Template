import { HeaderData } from '@/model/HeaderData';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class WrapHeader extends Vue {
  @Prop()
  private header?: HeaderData;

  private render() {
    return (
      <header class="app__wrap--header">
        {this.header?.background ? (
          <img src={this.header?.background} />
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
