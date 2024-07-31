<template>
    <div>
        <div>
            <h1>Reaction timer game</h1>
            <button
                @click="playGame"
                :disabled="showGame"
            >play</button>
        </div>

        <div v-if="showGame">
            <Game 
                :deGame="myGame" 
                :delay="delay" 
                @end="endGame"
             />
        </div>

        <Result 
            :score="score" 
            v-if="showscore" 
        />
    </div>
</template>

<script>
    import Game from './reaction-timer/Game.vue'
    import Result from './reaction-timer/Result.vue'

    export default{
        components:{ Game, Result },
        data() {
            return {
                myGame: true,
                showGame: false,
                delay: null,
                score: null,
                showscore: false
            }
        },

        methods:{
            playGame(){
                this.delay = 2000 + Math.random() * 5000;
                this.showGame = true;
                console.log(this.delay)
                this.showscore = false
            },

            endGame(reactionTimer){
                this.score = reactionTimer
                this.showGame = false
                this.showscore = true
            }
        }
    }
</script>

<style scoped>
     h1{
        font-style: italic;
        text-align: center;
       margin-top: 40px;
    }

    button{
        border: 2px solid green;
        padding: 4px 8px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        background-color: green;
        color: white;
        box-shadow: 1px 1px 2px  black;
    }
</style>