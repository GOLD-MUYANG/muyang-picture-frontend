import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


//一个变量存储一个要共享的数据
export const useCounterStore = defineStore('counter', () => {
  // 初始变量
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  // 定义如何更改数据
  function increment() {
    count.value++
  }
  // 返回
  return { count, doubleCount, increment }
})
