<template>
  <div id="app">
    <div class="wrap">
      <v-header></v-header>
      <links></links>
      <hitokoto></hitokoto>
    </div>
  </div>
</template>

<script>
import text from "./components/header.vue";
import link from "./components/link.vue";
import hitokoto from "./components/hitokoto.vue";
export default {
  //组件
  components: {
    "v-header": text,
    links: link,
    hitokoto: hitokoto
  },
  //静态
  props: {},
  //保存数据用
  data() {
    return {
      links: ''
    };
  },
  //对象内部的属性监听，也叫深度监听
  watch: {},
  //属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {},
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {
    
  },
  //请求数据
  created() {},
  mounted() {
  }
};
</script>

<style lang='less' scoped>
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-image: url('http://www.dmoe.cc/random.php');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>