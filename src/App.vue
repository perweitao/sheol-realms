<template>
  <div id="app">
    <router-view/>
    <div class="ba">皖ICP备2020018192号</div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .ba{
    position: absolute;
    bottom: 0;
    right: 0;
    height: 26px;
    text-align: center;
    line-height: 26px;
    // left: 50%;
    // transform: translate(-50%);
    background: #1f2d3d;
    color: white;
    padding: 4px 0;
    width: 100%;
  }
}
</style>
