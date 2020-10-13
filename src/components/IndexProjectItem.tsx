import { Component, Prop, Vue } from 'vue-property-decorator';

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
  private data!: ProjectItem;

  // 跳转内页
  private jumpToWrap(id: string | number) {
    console.log(id);
    return this.$router.push({
      path: '/workwrap',
      query: { id: id.toString() }
    });
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
