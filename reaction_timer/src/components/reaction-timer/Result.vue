<template>
    <div 
        :class="{isActive: myScore }"
    >
        reaction time: {{ score }} ms
    </div>
</template>

<script>
   export default{
        props:['score'],
        data(){
            return{
                myScore: true
            }
        }
   }
</script>

<style scoped>

    .isActive{
        width: 250px;
        padding: 20px;
        margin: 40px auto 20px;
        border-radius: 8px;
        box-sizing: border-box;
        box-shadow: 1px 1px 5px #0d0d0d;
        background-color: green;
        color: white;
        text-align: center;
    }
    
</style>