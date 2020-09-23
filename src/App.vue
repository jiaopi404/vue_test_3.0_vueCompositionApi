<template>
  <div id="app">
    只有 app
    name: {{ name }}
    id: {{ id }}
    computedN: {{ computedN }}
    <button @click="handleClick">点击我有啥用</button>
  </div>
</template>

<script>
/**
 * 1. reactive: 创建响应式数据
 * 2. toRefs: 作用, 将 reactive 对象转换为相应数据; 解构会将双向数据绑定给解除, 因此使用这个
 */
import { ref, reactive, computed, onMounted, toRefs } from '@vue/composition-api'
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
      id: 1,
      computedN: computed(() => state.id + 1)
    })
    const methods = {
      a () {
        console.log('log is: ', 1111)
        console.log('state.name is: ', state.name)
      },
      b () {}
    }
    const handleClick  = () => {
      state.name = Math.random() + ''
      state.id++
      // root.a()
      methods.a()
      console.log('state is: ', state)
      return state
    }
    return {
      ...toRefs(state), // 扩展运算符
      ...methods,
      handleClick
    } // 将状态信息返回, 供模板使用
  }
}
</script>

<style lang="scss">
</style>
