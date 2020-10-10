import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class WorkWrap extends Vue {
  private mounted() {
    const id = this.$route.query.id;
    console.log(id);
  }

  private render() {
    return <div class="work__wrap">{this.$route.query.id}</div>;
  }
}
