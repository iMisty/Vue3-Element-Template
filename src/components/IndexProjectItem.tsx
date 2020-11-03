import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

interface ProjectItem {
  id: number;
  avatar: string | object;
  link: string;
  tag: string[];
  title: string;
}

@Component({})
export default class IndexProjectItem extends Vue {
  @Prop()
  private data: ProjectItem = {
    id: 1,
    avatar: '1',
    link: 'a',
    tag: ['1', '2'],
    title: '1'
  };

  // 跳转内页
  private jumpToWrap(id: string | number) {
    console.log(id);
    return this.$router.push({
      path: '/workwrap',
      query: { id: id.toString() }
    });
  }

  @Watch('data')
  getData(newVal: ProjectItem) {
    console.log(newVal);
    return (this.data = newVal);
  }

  private render() {
    return (
      <article
        class="index__project--item"
        data-id={this.data.id}
        onClick={() => this.jumpToWrap(this.data.id)}
      >
        <img src={this.data.avatar} />
        <h5>{this.data.title}</h5>
      </article>
    );
  }
}
