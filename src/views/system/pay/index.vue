<script setup lang="ts">
import {Action, ElNotification} from "element-plus";
import {getPreCreateResult} from "@/api/pay";

let qrCodeUrl = ref();
let payForm = ref({
  type: "1",
  amount: 10,
});

let showImg = ref(false);
const open2 = () => {
  ElNotification({
    title: "Warning",
    message: "输入需要为整数",
    type: "warning",
  });
};

const open = () => {
  ElMessageBox.alert("输入金额必须为整数", "重试", {
    confirmButtonText: "确认",
    callback: (action: Action) => {
      ElMessage({
        type: "info",
        message: `action: ${action}`,
      });
    },
  });
};

function preCreate() {
  let money: number = payForm.value.amount;
  if (Math.floor(money) != money) {
    open();
    payForm.value.amount = 10;
    showImg.value = false;
    return;
  }
  getPreCreateResult(money).then(function (res) {
    qrCodeUrl.value = res["data"]["qrCode"];
    showImg.value = true;
  });
}
</script>

<template>
  <div class="form-container">
    <el-form
      ref="form"
      style="max-width: 600px"
      :model="payForm"
      label-width="auto"
      label-position="left"
      size="default"
    >
      <el-form-item label="支付渠道">
        <el-radio-group v-model="payForm.type" size="large">
          <el-radio-button label="支付宝" value="1"/>
          <el-radio-button label="微信" value="2"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="支付金额">
        <el-radio-group v-model="payForm.amount" size="large">
          <el-radio-button label="10元" value="10"/>
          <el-radio-button label="20元" value="20"/>
          <el-radio-button label="50元" value="50"/>
          <el-radio-button label="100元" value="100"/>
          <el-radio-button label="500元" value="500"/>
          <el-radio-button label="1000元" value="1000"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="自定义金额">
        <el-input placeholder="必须为整数" v-model="payForm.amount"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="preCreate">支付</el-button>
      </el-form-item>
    </el-form>
    <div class="img-box" v-if="showImg">
      <img :src="qrCodeUrl" style="width: 300px; height: 300px"/>
      <span>支付二维码&nbsp;{{ payForm.amount }}￥</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img-box {
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
