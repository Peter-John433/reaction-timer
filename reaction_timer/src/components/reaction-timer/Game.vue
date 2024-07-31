<template>
    <div class="gamemast" :class="deGame">
        helo
    </div>
</template>

<script>
    export default{
        props:['de-game']
    }
</script>

<style scoped>
  .gamemast{
     background-color: green;
     width: 400px;
     height: 250px;
     margin: 40px auto 20px;
     border-radius: 8px;
     box-sizing: border-box;
     box-shadow: 1px 1px 5px #0d0d0d;
     color: white;
     padding: 20px;
  }
</style>