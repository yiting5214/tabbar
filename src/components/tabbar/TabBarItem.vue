<template>
  <div :class="['yt-tab-bar-item', active ? 'active' : '']" @click="onClick">
    <i :class="['iconfont', 'icon-' + icon]"></i>
    <div class="title">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      icon: {
        type: String,
        required: true,
      },
      to: String,
    },
    data() {
      return {
        active: false,
      }
    },
    methods: {
      onClick() {
        this.active = true

        // 获取当前被点击的index
        const index = this.$parent.$children.indexOf(this)
        this.$parent.$emit('input', index)

        //判断TabBar是否开启路由模式
        if (this.$parent.route) {
          //判断to属性是否有设置
          if (this.to && this.$route.path != this.to) {
            //this.$route当前路由
            this.$router.push(this.to) //this.$router所有路由？
          }
        }
      },
    },
  }
</script>

<style  scoped>
  @import '//at.alicdn.com/t/font_2728188_7gczn4zv0l9.css';
  .yt-tab-bar-item {
    flex: 1; /*水平方向平均分布？*/
    text-align: center;
  }
  .yt-tab-bar-item i {
    font-size: 22px;
  }

  .yt-tab-bar-item .title {
    font-size: 12px;
  }

  .active {
    color: #1989fa;
  }
</style>