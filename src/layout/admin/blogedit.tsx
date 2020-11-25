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

  private async getBlogID() {
    const id = this.$route.query.id as string;
    console.log(id);
    const res = await GET(`${INFO}/blog`, { id });
    console.log(res);
    this.data = res.msg[0];
  }

  private created() {
    this.getBlogID();
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
                    <m-button color="primary" class="label--submit--button">
                      提交
                    </m-button>
                    <m-button color="danger" class="label--submit--button">
                      删除
                    </m-button>
                  </section>
                  <section class="label--setting">
                    <p>时间</p>
                    <div class="label--setting--time">
                      <input
                        class="label--setting--timer year"
                        type="text"
                        maxlength="4"
                      />
                      <span>年</span>
                      <input
                        class="label--setting--timer"
                        type="text"
                        maxlength="2"
                      />
                      <span>月</span>
                      <input
                        class="label--setting--timer"
                        type="text"
                        maxlength="2"
                      />
                      <span>日</span>
                      <input
                        class="label--setting--timer"
                        type="text"
                        maxlength="2"
                      />
                      <span>时</span>
                      <input
                        class="label--setting--timer"
                        type="text"
                        maxlength="2"
                      />
                      <span>分</span>
                      <input
                        class="label--setting--timer"
                        type="text"
                        maxlength="2"
                      />
                      <span>秒</span>
                    </div>
                  </section>
                  <label class="label--avatar">
                    <input
                      class="label--text"
                      type="text"
                      placeholder="预览图"
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
