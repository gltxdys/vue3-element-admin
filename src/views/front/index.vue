<script lang="ts">
import {defineComponent} from "vue";
import {House} from "@element-plus/icons-vue";
import Navbar from "@/views/front/navbar.vue";
import FrontMain from "@/views/front/front-main.vue";
import MyFooter from "@/views/common/my-footer.vue";

export default defineComponent({
  name: "index",
  // eslint-disable-next-line vue/no-unused-components
  components: { MyFooter, FrontMain, Navbar, House },
  computed: {
    isHomePage() {
      // 判断当前路径是否为首页
      return this.$route.path === "/index";
    },
  },
});
</script>

<template>
  <div id="contain">
    <navbar />
    <div id="main">
      <front-main v-if="isHomePage" />
      <router-view />
    </div>
    <my-footer />
  </div>
</template>

<style scoped lang="scss">
#contain {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/login-bg.jpg") no-repeat center right;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

#main {
  width: 80%;
  height: 85%;
  flex: 1;
  margin-top: 100px;
}
</style>
