import { Component, Prop, Vue } from 'vue-property-decorator';
import IndexProjectItem from '@/components/IndexProjectItem';

interface BlogList {
  title: string;
  list: object[];
}

@Component({
  components: {
    'project-item': IndexProjectItem
  }
})
export default class HomeBlog extends Vue {
  @Prop()
  private data!: BlogList;

  private render() {
    return (
      <div class="index__blog">
        <h1 class="index__blog--title title">{this.data.title}</h1>
        <div class="container">
          {this.data.list.map(item => {
            return <project-item data={item}></project-item>;
          })}
        </div>
      </div>
    );
  }
}
