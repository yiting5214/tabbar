<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-model="active" route>
      <tab-bar-item icon="home" to="/home">首页</tab-bar-item>
      <tab-bar-item icon="class" to="/class">分类</tab-bar-item>
      <tab-bar-item icon="cart" to="/cart">购物车</tab-bar-item>
      <tab-bar-item icon="user" to="/user">我的</tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar'
  import TabBarItem from '@/components/tabbar/TabBarItem'

  export default {
    name: 'APP',
    components: {
      TabBar,
      TabBarItem,
    },
    data() {
      return {
        active: 0,
      }
    },
  }
</script>




