/*
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2020-11-09 10:58:31
 * @LastEditors: Miya
 * @Description: Button component in Mermaid UI
 * @FilePath: \LandingPage\src\components\MermaidButton.tsx
 * @Version: 0.2
 */
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
@Component({})
export default class MermaidButton extends Vue {
  // Button Color
  // 按钮颜色
  @Prop({ default: 'primary' })
  private color!: string;

  // Button Type
  @Prop({ default: 'round' })
  private type!: string;

  // Button Size
  @Prop({ default: 'regular' })
  private size!: string;

  // Click Event
  // 点击事件
  @Emit('clickevent')
  public handleClick() {
    console.log('click button');
  }

  private render() {
    return (
      <button
        class={`mermaid__button mermaid__button--${this.color} mermaid__button--type-${this.type}-${this.color}`}
        onClick={this.handleClick}
      >
        {this.$slots.default}
      </button>
    );
  }
}
