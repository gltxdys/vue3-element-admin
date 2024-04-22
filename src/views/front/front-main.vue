<script setup lang="ts">
</script>

<template>
  <div style="width: 100%; display: flex; justify-content: center;flex-wrap: wrap">
    <h1 style="width: 700px; flex: 100%; text-align: center; margin-top: 200px; margin-bottom: 50px">
      基于YOLOv5和孪生神经网络的验证码识别
    </h1>
    <div style="width: 700px; ">
      <el-row class="row-bg" justify="space-around">
        <el-col :span="6"
          ><div class="grid-content ep-bg-purple"></div>
          <div class="card">
            <span>Speed</span>
            <p>识别速度快</p>
          </div>
        </el-col>
        <el-col :span="6"
          ><div class="grid-content ep-bg-purple"></div>
          <div class="card">
            <span>Safe</span>
            <p>安全高效的系统架构</p>
          </div>
        </el-col>
        <el-col :span="6"
          ><div class="grid-content ep-bg-purple"></div>
          <div class="card">
            <span>Easy</span>
            <p>文档齐全，使用方便</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="span_box">
      <router-link to="/index/demo">
        <el-button color="#a3d19e">查看例子</el-button>
      </router-link>
      <router-link to="/index/guide">
        <el-button color="#a3d19e">查看文档</el-button>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 200px;
  height: 150px;
  background-color: rgb(248 250 252);
  border-radius: 5px;
  padding: 15px
}
.card:hover {
  background-color: rgb(244, 245, 250);
  transition: background-color 0.5s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.el-button--primary:hover {
  background: #a3d19e !important;
  border-color: #a3d19e !important;
  color: #a3d19e !important;
  opacity: 0.8;
}

.span_box {
  flex: 100%;
  display: flex;
  text-align: center;
  margin-top: 50px;
  justify-content: center;
  gap: 30px;

  a {
    display: block;
  }
}
</style>
