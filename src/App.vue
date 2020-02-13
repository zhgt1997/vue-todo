<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">ss
      <router-link to="calender">跳转</router-link>

      <router-view></router-view>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import en_US from "ant-design-vue/lib/locale-provider/en_US";

export default {
  name: "app",
  data() {
    return {
      zh_CN
    };
  },
  components: {}
};
</script>

<style lang="less">

</style>
