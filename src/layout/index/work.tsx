import { Component, Prop, Vue } from 'vue-property-decorator';
import IndexWorkItem from '@/components/IndexWorkItem';

interface Works {
  title: string;
  works?: object[];
}

@Component({
  components: {
    'work-item': IndexWorkItem
  }
})
export default class HomeWork extends Vue {
  @Prop()
  private data!: Works;

  private render() {
    return (
      <div class="index__work wrap">
        <div class="container">
          <h1 class="index__work--title title">{this.data.title}</h1>
          <div class="index__work--list">
            {this.data.works?.map((item: object) => {
              return <work-item data={item}></work-item>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
