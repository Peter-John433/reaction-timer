<template>
    <h1 :class="myResult">
        hello
    </h1>
</template>

<script>
   export default{
        props:['my-result']
   }
</script>

<style>
    .myResult{
        background-color: yellow;
    }
</style>