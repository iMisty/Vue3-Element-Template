<template>
  <div id="app">
    <Header></Header>
    <Links></Links>
    <p id="hitokoto">加载中...</p>
  </div>
</template>

<script>
import header from './components/header'
import Links from './components/links'
import './assets/global.css'

export default {
  name: 'App',
  components: {
    'Header': header,
    'Links': Links
  }
}
</script>

<style>
#app{
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: rgba(0,0,0,.4);
}
#hitokoto{
  text-align: center;
}
</style>
