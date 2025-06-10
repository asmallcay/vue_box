<template>
  <div class="detail">
    <h2>详情页</h2>
    <p>当前项：{{ $route.params.id }}</p>
    <button @click="goBack">返回</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => router.push('/')
</script>

<style scoped lang="scss">
.detail {
  padding: 20px;
  text-align: center;
  button {
    padding: 8px 16px;
    background: #646cff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover { background: #535bf2; }
  }
}
</style>