<template>
  <div class="links">
    {{links}}
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
      links: ""
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
          this.$data.links = res.links;
        })
        .catch(err => {
          console.log(err);
        });
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
</style>