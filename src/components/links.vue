<template>
<div>
  <ul>
    <li v-for="item of list" :key="item.index">
      <a :href="item.link">
        <span>{{ item.value }}</span>
      </a>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          link: 'https://github.com/Miya-Yukarin/Vue-LandingPage',
          value: 'GitHub'
        },
        {
          link: 'https://github.com/Miya-Yukarin/Vue-LandingPage/blob/master/README.md',
          value: 'Manual'
        },
        {
          link: 'https://shizu17.pw/old',
          value: 'Another Demo'
        }
      ]
    }
  }
}
</script>
<style scoped>
ul {
  padding: 0;
  list-style: none;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}
li {
  list-style: none;
  font-size: 2.2vw;
  padding: 8px 40px 40px 0;
  transition: 0.2s ease;
  text-align: center;
}
span {
  padding: 0 8px;
}
a:hover {
  background-color: #fff;
  color: #000;
  transition: 0.2s ease;
}
@media screen and (max-width: 1060px){
    ul{
        flex-direction: column;
    }
    li{
        font-size: 4vw;
        padding: 20px;
    }
}
</style>
