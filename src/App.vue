<template>
  <div id="app">
    只有 app
    name: {{ name }}
    <button @click="handleClick">点击我有啥用</button>
  </div>
</template>

<script>
/**
 * 1. reactive: 创建响应式数据
 */
import { reactive, computed, onMounted } from '@vue/composition-api'
export default {
  /**
   * 3.0 为组件提供的新属性
   * 加载顺序: created setup mounted
   * 参数: 1. props 2. 上下文对象(content) 3.
   */
  setup (props, { root }) {
    // 创建响应式数据
    const state = reactive({
      name: 'abc',
      id: 1
    })
    const handleClick  = () => {
      state.name = Math.random() + ''
      window.alert('sdfsjdf')
      return state
    }
    return {
      ...state,
      handleClick
    } // 将状态信息返回, 供模板使用
  }
}
</script>

<style lang="scss">
</style>
