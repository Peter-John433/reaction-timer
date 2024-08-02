<template>
    <div>
        <Reaction />
        <hr />
        <FormComp />
        <hr>
        <RouterComp />
    </div>
</template>

<script>
  // import Reaction from '@/components/reaction-timer/Reaction'
  import Reaction from './components/Reaction.vue'
  import FormComp from './components/FormComp.vue'
  import RouterComp from './components/RouterComp.vue'
  
  export default{
     name: 'App',
     components:{ Reaction, FormComp, RouterComp },

  }
</script>

<style scoped>
</style>