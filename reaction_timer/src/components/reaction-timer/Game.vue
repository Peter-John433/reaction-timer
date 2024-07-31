<template>
    <div 
        class="gamemast" 
        v-if="showGame" 
        :class="deGame"
        @click="stopTimer"
    >
        click me
    </div>
</template>

<script>
    export default{
        props:['de-game', 'delay'],
        data(){
            return{
                showGame: false,
                timer: null,
                reactionTimer: 0
            }
        },
        mounted(){
            setTimeout(() =>{
                this.showGame = true
                this.startTimer()
            }, this.delay)
        },
        methods:{
            // this method is use to set the interval at which the block count until it been cleared by the stoptimer function
            startTimer(){
                this.timer = setInterval(() => {
                    this.reactionTimer += 10
                }, 10);
            },
            // this method is use to clear the timer property inside the startTimer() function
            stopTimer(){
                clearInterval(this.timer)
                this.$emit('end', this.reactionTimer)
            }
        }
    }
</script>

<style scoped>
  .gamemast{
     background-color: black;
     width: 300px;
     /* height: 250px; */
     margin: 40px auto 20px;
     border-radius: 8px;
     box-sizing: border-box;
     box-shadow: 1px 1px 5px #0d0d0d;
     color: white;
     padding: 100px 20px;
     text-align: center;
  }
</style>