<template>
  <div id="demo-contain">
    <div id="captcha-type">
      <el-radio-group v-model="showType" size="large" @change="changeShowList">
        <el-radio-button label="全部类型" value="0"/>
        <el-radio-button label="文字点选" value="1"/>
        <el-radio-button label="图标点选" value="2"/>
      </el-radio-group>
    </div>
    <div id="captcha-contain" v-for="(item, index) in showList" :key="index">
      <div class="captcha-box">
        <h3>{{ item.typeName }}</h3>
        <div class="img-box">
          <img v-for="pic in item.exampleUrl" :src="pic"/>
        </div>
        <div>
          <el-table :data="getArray(item)" border style="width: 100%">
            <el-table-column label="类型" prop="typeId" width="80" align="center"/>
            <el-table-column label="描述" prop="details" align="center"/>
            <el-table-column label="价格" prop="price" width="80" align="center" />
            <el-table-column
              label="测试"
              prop="details"
              width="100"
              align="center"
            >
              <template v-slot="scope">
                <router-link :to="'guide/?type=' + scope.row.typeId">
                  <span style="color: #67c23a">立即测试</span>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {captchaTypeApi} from "@/api/captcha";
import {CaptchaTypeVo} from "@/api/captcha/types";

let showType = ref("0");
let captchaTypeList = ref<CaptchaTypeVo[]>([]);
let showList = ref<CaptchaTypeVo[]>([]);

function getCaptchaType() {
  captchaTypeApi().then(({data}) => {
    captchaTypeList.value = data;
    showList.value = data;
  });
}

function getArray(item: CaptchaTypeVo) {
  return [item];
}

function changeShowList() {
  showList.value = [];
  let type = parseInt(showType.value);
  if (type == 0) {
    showList.value = captchaTypeList.value;
  } else {
    captchaTypeList.value.forEach((item) => {
      if (Math.floor((item.typeId / 10) % 10) == type) {
        showList.value.push(item);
      }
    });
  }
}

onMounted(() => {
  getCaptchaType();
});
</script>

<style scoped lang="scss">
#demo-contain {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
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
    max-width: 200px;
    height: auto;
    padding: 2px;
    border-radius: 4px;
    border: 1px solid #dedede;
  }
}
</style>
