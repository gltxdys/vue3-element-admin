<template>
  <el-card shadow="never" style="margin: 10px; height: 400px">
    <el-radio-group v-model="show" size="large">
      <el-radio-button label="换绑邮箱" value="1"/>
      <el-radio-button label="修改密码" value="2"/>
    </el-radio-group>
    <div>
      <div v-if="show == 1">
        <el-form label-width="auto" style="max-width: 600px">
          <el-form-item label="邮箱地址:">
            <el-input v-model="email"/>
            <el-button type="primary" @click="getNewEmailCode">
              发送验证码
            </el-button>
          </el-form-item>
          <el-form-item label="邮箱验证码:">
            <el-input v-model="emailForm.verifyCode"/>
          </el-form-item>
        </el-form>
        <el-button @click="changeEmail">提交</el-button>
      </div>
      <div v-if="show == 2">
        <el-form
          :model="passwordForm"
          label-width="auto"
          style="max-width: 600px"
        >
          <el-form-item label="邮箱验证码:">
            <el-input v-model="passwordForm.emailValue"/>
            <el-button type="primary" @click="getEmailCode">
              发送验证码
            </el-button>
          </el-form-item>
          <el-form-item label="图形验证码:">
            <el-input v-model="passwordForm.captchaValue"/>
            <div @click="refreshCaptcha" style="height: 30px">
              <img :src="captchaBase64" style="height: 100%"/>
            </div>
          </el-form-item>
          <el-form-item label="新密码:">
            <el-input v-model="passwordForm.password" type="password"/>
          </el-form-item>
          <el-form-item label="确认密码:">
            <el-input v-model="verifyPassword" type="password"/>
          </el-form-item>
        </el-form>
        <el-button @click="changePassword">提交</el-button>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import {getCaptchaApi} from "@/api/auth";
import {getEmailApi, getNewEmailApi, updateEmailApi, updatePassApi,} from "@/api/security";

const show = ref(1);
let captchaBase64 = ref();
let verifyPassword = ref();
let passwordForm = ref({
  emailKey: "",
  emailValue: "",
  captchaKey: "",
  captchaValue: "",
  password: "",
});
let email = ref();
let emailForm = ref({
  emailKey: "",
  verifyCode: "",
});

function refreshCaptcha() {
  getCaptchaApi().then((res) => {
    passwordForm.value.captchaKey = res.data.captchaKey;
    captchaBase64.value = res.data.captchaBase64;
    console.log(passwordForm);
  });
}

function getEmailCode() {
  getEmailApi().then((res) => {
    passwordForm.value.emailKey = res.data.emailKey;
    console.log(passwordForm.value.emailKey);
  });
}

function getNewEmailCode() {
  getNewEmailApi(email.value).then((res) => {
    emailForm.value.emailKey = res.data.emailKey;
  });
}

function changePassword() {
  updatePassApi(passwordForm.value).then((res) => {
    if (res.code == "00000") {
      ElMessage.success("修改成功");
      passwordForm.value = {
        captchaKey: "",
        captchaValue: "",
        emailKey: "",
        emailValue: "",
        password: "",
      };
      verifyPassword.value = "";
    }
  });
}

function changeEmail() {
  updateEmailApi(emailForm.value).then((res) => {
    if (res.code == "00000") {
      ElMessage.success("修改邮箱成功");
      emailForm.value = {
        emailKey: "",
        verifyCode: "",
      };
      email.value = "";
    }
  });
}

onMounted(() => {
  refreshCaptcha();
});
</script>

<style lang="scss" scoped>
:deep(.el-form-item) {
  margin-top: 20px;
  width: 500px;

  .el-form-item__content {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
  }
}
</style>
