import { Component, Vue } from 'vue-property-decorator';
import MermaidCard from '@/components/MermaidCard';
import MermaidButton from '@/components/MermaidButton';
import AdminWrapTitle from '@/components/AdminWrapTitle';
import { WorkItem } from '@/model/WorkItem';
import { work } from '@/config/work.config';

@Component({
  components: {
    'm-card': MermaidCard,
    'm-button': MermaidButton,
    'admin-title': AdminWrapTitle
  }
})
export default class AdminWorkEdit extends Vue {
  private data: WorkItem = work.project[0];

  private getWorkData() {
    const id = this.$route.query.id as string;
    console.log(id);
  }

  private created() {
    this.getWorkData();
  }

  private render() {
    return (
      <div class="admin__workedit">
        <admin-title title="Work Edit"></admin-title>
        <div class="admin__workedit--wrap">
          <section class="content">
            <m-card needTitle={false}>
              <div class="admin__workedit--label">
                <section class="admin__workedit--label--content">
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
                      v-model={this.data.content}
                      placeholder="正文"
                    ></textarea>
                  </label>
                  <label class="label--intro">
                    <textarea
                      class="label--text label--intro"
                      name="intro"
                      v-model={this.data.intro}
                      placeholder="简介"
                    ></textarea>
                  </label>
                </section>
                <section class="admin__workedit--label--setting">
                  <section class="label--submit">
                    <m-button color="primary" class="label--submit--button">
                      提交
                    </m-button>
                    <m-button color="danger" class="label--submit--button">
                      删除
                    </m-button>
                  </section>
                  <label class="label--title">
                    <input
                      class="label--text"
                      type="text"
                      v-model={this.data.preview}
                      placeholder="Demo地址"
                    />
                  </label>
                  <label class="label--title">
                    <input
                      class="label--text"
                      type="text"
                      v-model={this.data.source}
                      placeholder="Github地址"
                    />
                  </label>
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
