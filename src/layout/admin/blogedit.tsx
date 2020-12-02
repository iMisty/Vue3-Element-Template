import { Component, Vue } from 'vue-property-decorator';
import MermaidCard from '@/components/MermaidCard';
import MermaidButton from '@/components/MermaidButton';
import AdminWrapTitle from '@/components/AdminWrapTitle';
import { BlogItem } from '@/model/BlogItem';
import { GET, INFO } from '@/config/api.config';

@Component({
  components: {
    'm-card': MermaidCard,
    'm-button': MermaidButton,
    'admin-title': AdminWrapTitle
  }
})
export default class AdminBlogEdit extends Vue {
  private data: BlogItem = { _id: '1', title: '12', id: 1, time: '12' };
  private time = {
    time: '',
    date: ''
  };
  private async getBlogID() {
    const id = this.$route.query.id as string;
    console.log(id);
    const res = await GET(`${INFO}/blog`, { id });
    console.log(res);
    this.data = res.msg[0];
    console.log(this.data.time);
  }

  private getTime() {
    const value = this.data.time;
  }

  // 提交修改
  private submitData() {
    console.log('a');
    console.log(this.spliceDate);
  }

  private openModel() {
    this.$model({
      title: '确认删除',
      msg: '是否确认删除',
      btn: { confirm: '确定', cancel: '取消' }
    })
      .then((res: string) => {
        console.log('res', res);
      })
      .catch((err: string) => {
        console.log('err', err);
      });
  }

  private created() {
    this.getBlogID();
  }

  get spliceDate() {
    const date = this.time;
    return `${date.date},${date.time}`;
  }

  private render() {
    return (
      <div class="admin__blogedit">
        <admin-title title="Blog Edit"></admin-title>
        <div class="admin__blogedit--wrap">
          <section class="content">
            <m-card needTitle={false}>
              <div class="admin__blogedit--label">
                <section class="admin__blogedit--label--content">
                  <label class="label--title">
                    <input
                      class="label--text"
                      type="text"
                      placeholder="标题"
                      v-model={this.data.title}
                    />
                  </label>
                  <label class="label--content">
                    <textarea
                      class="label--text label--content"
                      name="content"
                      placeholder="正文"
                      v-model={this.data.content}
                    ></textarea>
                  </label>
                  <label class="label--intro">
                    <textarea
                      class="label--text label--intro"
                      name="intro"
                      placeholder="简介"
                      v-model={this.data.intro}
                    ></textarea>
                  </label>
                </section>
                <section class="admin__blogedit--label--setting">
                  <section class="label--submit">
                    <m-button
                      color="primary"
                      class="label--submit--button"
                      onClickevent={() => this.submitData()}
                    >
                      提交
                    </m-button>
                    <m-button
                      color="danger"
                      class="label--submit--button"
                      onClickevent={() => this.openModel()}
                    >
                      删除
                    </m-button>
                  </section>
                  <section class="label--setting">
                    <p>时间</p>
                    <div class="label--setting--time">
                      <input type="date" name="date" v-model={this.time.date} />
                      <input type="time" name="time" v-model={this.time.time} />
                    </div>
                  </section>
                  <label class="label--avatar">
                    <input
                      class="label--text"
                      type="text"
                      placeholder="预览图"
                      v-model={this.data.avatar}
                    />
                    {this.data.avatar ? (
                      <div class="avatar-preview">
                        <img src={this.data.avatar} />
                      </div>
                    ) : (
                      ''
                    )}
                  </label>
                  <section class="label--tag">
                    <input type="text" placeholder="标签（按下回车添加）" />
                    {this.data.tag?.map(item => {
                      return <span>{item}</span>;
                    })}
                  </section>
                </section>
              </div>
            </m-card>
          </section>
        </div>
      </div>
    );
  }
}
