<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const routePath = computed(() => route.path);
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div>
    <el-menu
      :default-active="routePath"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/app-vue2-demo">sub-vue-demo</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
    </el-menu>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>
