<template>
    <div>
        <!-- <Reaction />
        <hr /> -->
        <!-- <FormComp />
        <hr> -->
        <!-- <RouterComp />
        <hr> -->
        <!-- <CompApi />
        <hr> -->
        <Todo />
        
    </div>
    <router-view />
</template>

<script>
  // import Reaction from '@/components/reaction-timer/Reaction'
  import Reaction from './components/Reaction.vue'
  import FormComp from './components/FormComp.vue'
  import RouterComp from './views/RouterComp.vue'
  import CompApi from './CompApi.vue'
  import Todo from './components/Todo.vue'
  
  export default{
     name: 'App',
     components:{ Reaction, FormComp, RouterComp, CompApi, Todo },

  }
</script>

<style scoped>
</style>