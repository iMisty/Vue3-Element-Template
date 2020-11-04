import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

enum Type {
  text,
  email,
  password
}

enum Size {
  large,
  normal,
  small
}

enum Grid {
  single,
  multi
}

@Component({})
export default class MermaidInput extends Vue {


  private a = '';

  @Prop({ default: '示例标题' })
  private title?: string;

  @Prop({ default: 'text' })
  private type?: Type;

  @Prop({ default: 'normal' })
  private size?: Size;

  @Prop({ default: 'single' })
  private grid?: Grid;

  @Prop({ default: 'placeholder' })
  private placeholder?: string;

  @Prop()
  private value?: string;

  @Prop({ default: 140 })
  private maxlength?: number;

  @Emit('ChangeEvent')
  private changeEvent(e) {
    console.log(e.target.value);
    console.log('Change');
    // this.value = e.target.value;
  }

  private render() {
    return (
      <div class={`mermaid__input ${this.grid}-grid`}>
        <p class="mermaid__input--title">{this.title}</p>
        <label for={this.value}>
          <input
            class={`mermaid__input--form form-${this.size}`}
            type={this.type}
            placeholder={this.placeholder}
            value={this.a}
            v-model={this.a}
            maxlength={this.maxlength}
            onInput={e => this.changeEvent(e)}
          />
        </label>
      </div>
    );
  }
}
