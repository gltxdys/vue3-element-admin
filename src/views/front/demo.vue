<script setup lang="ts">
const tableData = [
  {
    type: "10001",
    desc: "Geetest3 文字点选验证",
    price: "3积分",
    test: "立即测试",
  },
];
</script>

<template>
  <div id="demo-contain">
    <div id="captcha-type">
      <el-row :gutter="20">
        <el-col :span="4"><span>点选类型</span></el-col>
        <el-col :span="4"><span>滑动类型</span></el-col>
        <el-col :span="4"><span>旋转类型</span></el-col>
        <el-col :span="4"><span>谷歌验证</span></el-col>
        <el-col :span="4"><span>数字类型</span></el-col>
        <el-col :span="4"><span>字母类型</span></el-col>
        <el-col :span="4"><span>空间推理</span></el-col>
      </el-row>
    </div>
    <div id="captcha-contain">
      <div class="captcha-box">
        <h3>geetest3-文字点选</h3>
        <div class="img-box">
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
        </div>
        <div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column label="类型" prop="type" width="80" align="center" />
            <el-table-column label="描述" prop="desc" align="center" />
            <el-table-column label="价格" prop="price" width="80" align="center" />
            <el-table-column
              label="测试"
              prop="test"
              width="100"
              align="center"
            >
              <template v-slot="scope">
                <router-link :to="'/guide/' + scope.row.type">
                  <span style="color: #67c23a">{{ scope.row.test }}</span>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="captcha-box">
        <h3>geetest3-文字点选</h3>
        <div class="img-box">
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
        </div>
        <div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column label="类型" prop="type" width="80" align="center" />
            <el-table-column label="描述" prop="desc" align="center" />
            <el-table-column
              label="价格"
              prop="price"
              width="80"
              align="center"
            />
            <el-table-column
              label="测试"
              prop="test"
              width="100"
              align="center"
            >
              <template v-slot="scope">
                <router-link :to="'/guide/' + scope.row.type">
                  <span style="color: #67c23a">{{ scope.row.test }}</span>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="captcha-box">
        <h3>geetest3-文字点选</h3>
        <div class="img-box">
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
        </div>
        <div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column label="类型" prop="type" width="80" align="center" />
            <el-table-column label="描述" prop="desc" align="center" />
            <el-table-column label="价格" prop="price" width="80" align="center" />
            <el-table-column
              label="测试"
              prop="test"
              width="100"
              align="center"
            >
              <template v-slot="scope">
                <router-link :to="'/guide/' + scope.row.type">
                  <span style="color: #67c23a">{{ scope.row.test }}</span>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="captcha-box">
        <h3>geetest3-文字点选</h3>
        <div class="img-box">
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
          <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg" />
        </div>
        <div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column label="类型" prop="type" width="80" align="center" />
            <el-table-column label="描述" prop="desc" align="center" />
            <el-table-column label="价格" prop="price" width="80" align="center" />
            <el-table-column
              label="测试"
              prop="test"
              width="100"
              align="center"
            >
              <template v-slot="scope">
                <router-link :to="'/guide/' + scope.row.type">
                  <span style="color: #67c23a">{{ scope.row.test }}</span>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#demo-contain {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
}
#captcha-type {
  width: 60%;
  margin-left: 20%;
  justify-content: left;
}
#captcha-contain {
  width: 60%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
}
:deep(.el-col) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 5px;
  text-align: center;
  border-radius: 4px;
  background-color: #72767b;
  :active {
    background-color: #a3d19e;
  }
}
:deep(.el-table-column) {
  text-align: center;
  align-items: center;
}
.captcha-box {
  width: 100%;
  margin-top: 25px;
  margin-bottom: 20px;
  h3 {
    margin-bottom: 10px;
  }
}
.img-box {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  border: 1px solid #dedede;
  padding: 2px;
  img {
    max-width: 23%;
    height: auto;
    padding: 2px;
    border-radius: 4px;
    border: 1px solid #dedede;
  }
}
</style>
