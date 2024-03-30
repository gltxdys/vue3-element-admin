<template>
  <div id="guide-contain">
    <el-switch
      style="display: block"
      v-model="isTest"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="在线测试"
      inactive-text="查看文档"
    />
    <div class="img-contain">
      <h3>geetest3-文字点选</h3>
      <div class="img-box">
        <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg"/>
        <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg"/>
        <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg"/>
        <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg"/>
        <img src="https://www.jfbym.com/static/pic/dx/wzdx1/1.jpg"/>
      </div>
    </div>
    <div class="doc-box" v-if="!isTest">
      <div class="doc-table">
        <h4>请求参数</h4>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="类型" prop="type" width="80" align="center"/>
          <el-table-column label="描述" prop="desc" align="center"/>
          <el-table-column
            label="价格"
            prop="price"
            width="80"
            align="center"
          />
          <el-table-column label="测试" prop="test" width="100" align="center">
            <template #default="scope">
              <router-link :to="'/guide/' + scope.row.type">
                <span style="color: #67c23a">{{ scope.row.test }}</span>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="doc-table">
        <h4>返回参数</h4>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="类型" prop="type" width="80" align="center"/>
          <el-table-column label="描述" prop="desc" align="center"/>
          <el-table-column
            label="价格"
            prop="price"
            width="80"
            align="center"
          />
          <el-table-column label="测试" prop="test" width="100" align="center">
            <template #default="scope">
              <router-link :to="'/guide/' + scope.row.type">
                <span style="color: #67c23a">{{ scope.row.test }}</span>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="doc-table">
        <h4>响应代码</h4>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="类型" prop="type" width="80" align="center"/>
          <el-table-column label="描述" prop="desc" align="center"/>
          <el-table-column
            label="价格"
            prop="price"
            width="80"
            align="center"
          />
          <el-table-column label="测试" prop="test" width="100" align="center">
            <template #default="scope">
              <router-link :to="'/guide/' + scope.row.type">
                <span style="color: #67c23a">{{ scope.row.test }}</span>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="test-box" v-else>
      <single-upload class="upload test-upload" v-model="testUrl"/>
      <div class="img_div" v-if="repUrl">
        <img :src="repUrl" style=""/>
      </div>
      <p v-if="result">识别结果：{{ result }}</p>
      <div class="button_div">
        <el-button round type="primary" @click="checkPic">识别</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {checkGeetest3ByUrl} from "@/api/check";
import {identifyVo} from "@/api/check/types";

const tableData = [
  {
    type: "10001",
    desc: "Geetest3 文字点选验证",
    price: "3积分",
    test: "立即测试",
  },
];
const isTest = ref(false);
const testUrl = ref("");
const result = ref("");
const repUrl = ref("");
const identifyVo = ref<identifyVo>();

function checkPic() {
  checkGeetest3ByUrl(testUrl.value).then((res) => {
    repUrl.value = <string>res.data.picUrl;
    result.value = <string>res.data.result;
  });
}

// 监听 repurl 变化
watch(testUrl, (newValue, oldValue) => {
  console.log("testUrl 值变化了！新值为：", newValue);
  repUrl.value = "";
  result.value = "";
});
</script>

<style scoped lang="scss">
#guide-contain {
  width: 60%;
  margin-left: 20%;
  flex-direction: column;
}

.img-contain {
  width: 100%;
  display: flex;
  flex-direction: column;
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

.test-box {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  gap: 20px;

  .button_div {
    flex-basis: 100%;

    :deep(.el-button) {
      width: 40%;
      margin-left: 30%;
    }
  }

  .test-upload {
    width: 300px;
  }

  p {
    width: 100%;
    text-align: center;
    height: 10px;
  }
}

:deep(.el-upload--picture-card) {
  width: 300px;
  height: auto;
  min-height: 300px;

  .single-uploader__image {
    width: 300px;
    height: 100%;
  }
}

.img_div {
  width: 300px;
  padding-top: 4px;

  img {
    width: 100%;
    border-radius: 4px;
  }
}
</style>
