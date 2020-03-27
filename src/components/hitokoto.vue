<template>
  <div class="hitokoto">
    <p>{{hitokoto}}</p>
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
      hitokoto: "加载中...",
    };
  },
  //对象内部的属性监听，也叫深度监听
  watch: {},
  //属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {},
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {
    getHitokoto() {
      const _this = this;
      fetch("https://v1.hitokoto.cn")
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          console.log(data);
          _this.$data.hitokoto = data.hitokoto;
        })
        .catch(function(err) {
          console.error(err);
          _this.$data.hitokoto = '加载失败,请刷新重试';
        });
    }
  },
  //请求数据
  created() {},
  mounted() {
    this.getHitokoto();
  }
};
</script>

<style lang='less' scoped>
.hitokoto{
  padding: 2rem 2%;
  color: #fff;
  font-size: 1.4em;
  p{
    max-width: 640px;
    margin: 0 auto;
  }
}
</style>