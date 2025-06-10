import { defineStore } from 'pinia'

export const useBoxStore = defineStore('box', {
  state: () => ({ count: 5 }), // 初始 5 个盒子
  actions: {
    increment() { this.count++ },
    decrement() { if (this.count > 1) this.count-- },
  },
})