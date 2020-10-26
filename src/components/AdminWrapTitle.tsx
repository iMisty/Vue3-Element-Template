import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class AdminWrapTitle extends Vue {
  @Prop({ default: 'Title' })
  private title?: string;

  private render() {
    return (
      <div class="admin__wrap--title">
        <h5>{this.title}</h5>
      </div>
    );
  }
}
