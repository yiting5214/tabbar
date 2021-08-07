<template>
  <div class="yt-tab-bar">
    <slot></slot>
  </div>
</template>


<script>
  export default {
    name: 'TabBar',
    props: {
      value: {
        type: Number,
        default: 0,
      },
      route: Boolean,
    },
    mounted() {
      this.setActive()
    },
    watch: {
      value: 'setActive',
    },
    methods: {
      setActive() {
        // console.log(this.$children)
        this.$children.forEach((item, index) => {
          item.active = index == this.value
        })
      },
    },
  }
</script>

<style  scoped>
  .yt-tab-bar {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    background-color: #f2f2f2;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.1);
  }
</style>