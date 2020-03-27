<template>
  <div class="links">
    <ul class="list">
      <li v-for="item in links" :key="item.index" @click="open(item.link)" class="item">
        <i class="fa fa-2x" :class="item.icon"></i>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //组件
  components: {},
  //静态
  props: {},
  //保存数据用
  data() {
    return {
      links: "",
    };
  },
  //对象内部的属性监听，也叫深度监听
  watch: {},
  //属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {},
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {
    getLinks() {
      this.$axios
        .get("http://localhost:8080/data.json")
        .then(res => {
          console.log(res);
          this.$data.links = res.data.links;
        })
        .catch(err => {
          console.log(err);
        });
    },
    open(link) {
      window.location.href = link;
    }
  },
  //请求数据
  created() {},
  mounted() {
    this.getLinks();
  }
};
</script>

<style lang='less' scoped>
.list {
  list-style-type: none;
  color: #fff;
  padding: 0px 4%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
}
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    box-shadow: 0px 0px 8px #fff;
    border-radius: 4rem;
    transform: translateY(-2%);
    transition-duration: 0.4s;
  }
  p {
    padding-left: 1rem;
    margin: 0;
    max-width: 640px;
    font-size: 1.4em;
  }
}
</style>