<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "navbar",
})
</script>

<template>
  <div id="navbar">
    <el-row class="erow">
      <el-col :md="14" :sm="12" :xs="12" :offset="5" class="grid-cell">
        <el-row class="erow">
          <el-col :span="4" class="grid-cell ecol">
            <div class="col-span">验证码识别</div>
          </el-col>
          <el-col :span="16" :offset="3" class="grid-cell">
            <el-row justify="space-between" class="erow">
              <el-col :span="4" class="ecol">
                <router-link to="/index">
                  <el-icon><House /></el-icon>
                  <span>首页</span>
                </router-link>
              </el-col>
              <el-col :span="4" class="ecol">
                <router-link to="/index/demo">
                  <el-icon><Document /></el-icon>
                  <span>例子</span>
                </router-link>
              </el-col>
              <el-col :span="4" class="ecol">
                <router-link to="/index/guide">
                  <el-icon><Guide /></el-icon>
                  <span>测试</span>
                </router-link>
              </el-col>
              <el-col :span="4" class="ecol">
                <router-link to="/login">
                  <el-icon><User /></el-icon>
                  <span>登录</span>
                </router-link>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
#navbar {
  position: fixed;
  width: 100%;
  height: 5%;
  top: 0;
  flex: 100%;
}

.erow {
  height: 100%;
}

.ecol {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: Dialog;
  }
  a:hover {
    color: #a3d19e;
  }
}

i.el-icon {
  margin-right: 5px;
  padding-bottom: 2px;
}
</style>
