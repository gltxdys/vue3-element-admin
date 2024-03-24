<script setup lang="ts">
const total = 52000;
const today = 520;
</script>

<template>
  <div id="footer">
    <div>总访问量：{{ total }}</div>
    &nbsp;&nbsp;
    <div>今日访问量：{{ today }}</div>
  </div>
</template>

<style scoped lang="scss">
#footer {
  width: 100%;
  border-top: 1px solid #72767b;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  align-items: center;
  margin-bottom: 0px;
  justify-content: center;
  flex: 100%;
}
</style>
