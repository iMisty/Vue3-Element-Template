import { Component, Vue } from 'vue-property-decorator';
// eslint-disable-next-line
// @ts-ignore
import h2m from 'h2m';
import marked from 'marked';
import MermaidCard from '@/components/MermaidCard';
import MermaidButton from '@/components/MermaidButton';
import AdminWrapTitle from '@/components/AdminWrapTitle';
import { WorkItem } from '@/model/WorkItem';

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import { INFO, POST } from '@/config/api.config';

@Component({
  components: {
    'm-card': MermaidCard,
    'm-button': MermaidButton,
    'admin-title': AdminWrapTitle,
    editor: mavonEditor.mavonEditor
  }
})
export default class AdminWorkEdit extends Vue {
  private data!: WorkItem;

  private async getWorkData() {
    const id = this.$route.query.id;
    console.log(id);
    const res = await POST(`${INFO}/work/id`, { id });
    this.data = res.msg[0];
    this.data.content = h2m(this.data.content);
  }

  private submitContent() {
    const data: WorkItem = this.data;
    data.content = marked(data.content as string);
    console.log(data);
  }

  private created() {
    this.getWorkData();
  }

  // private mounted() {
  // }

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
                    <editor
                      class="label--text label--content"
                      name="content"
                      v-model={this.data.content}
                      placeholder="正文"
                    ></editor>
                    <textarea></textarea>
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
                    <m-button
                      color="primary"
                      class="label--submit--button"
                      onClickevent={() => this.submitContent()}
                    >
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
                  {/* <section class="label--setting">
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
                    </div>
                  </section> */}
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
