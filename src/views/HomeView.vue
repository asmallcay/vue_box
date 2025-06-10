<template>
  <div class="home">
    <!-- 加减按钮 -->
    <div class="buttons">
      <button @click="increment">加号按钮</button>
      <button @click="decrement">减号按钮</button>
    </div>
    <!-- 动态盒子区域 -->
    <div class="box-container">
      <div 
        v-for="box in boxes" 
        :key="box.id" 
        class="box" 
        @click="goToDetail(box.id)"
      >
        点击跳转 {{ box.id }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useBoxStore } from '../stores/boxStore'
import { useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'

const store = useBoxStore()
const router = useRouter()

const boxes = computed(() => {
  return Array.from({ length: store.count }, (_, index) => ({
    id: index + 1,
  }));
});
const increment = () => store.increment()
const decrement = () => store.decrement()
const goToDetail = (id) => router.push(`/detail/${id}`)
</script>

<style scoped lang="scss">
.home {
  padding: 20px;
  .buttons {
    margin-bottom: 20px;
    button {
      margin: 0 10px;
      padding: 10px 20px;
      background: #646cff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &:hover { background: #535bf2; }
    }
  }
  .box-container {
    background: #c3fae8;
    border: 2px solid #4caf50;
    border-radius: 8px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 20px;
    .box {
      border: 2px solid #646cff;
      border-radius: 4px;
      padding: 20px;
      background: #e0e7ff;
      cursor: pointer;
      transition: 0.3s;
      &:hover { transform: scale(1.05); background: #c7d2ff; }
    }
  }
}
</style>
