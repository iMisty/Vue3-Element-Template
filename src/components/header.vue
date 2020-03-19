<template>
<div class="header">
<h1>{{title}}</h1>
<h2>{{text}}</h2>
</div>
</template>

<script>
export default {
//组件
 components: {
 },
//静态
 props: {
   title: {
     type: String,
     default: 'Landing Page'
   },
   text: {
     type: String,
     default: '点击以下链接开始'
   }
 },
//保存数据用
 data() {
   return{
   }
 },
//对象内部的属性监听，也叫深度监听
 watch: {
 },
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
 computed: { 
 },
//方法表示一个具体的操作，主要书写业务逻辑；
 methods: { 
 },
//请求数据
 created() {
},
 mounted() {
}
}
</script>

<style lang='less' scoped>
h1{
  font-size: 6vw;
}
h2{
  font-size: 4vw;
}
</style>