<template>
    <div
        :class="{isActive: myScore }"
    >
        <div>
            reaction time: {{ score }} ms
        </div>
        <p class="reaction" >
            {{ rank }}
        </p>
    </div>
</template>

<script>
   export default{
        props:['score'],
        data(){
            return{
                myScore: true,
                rank: null
            }
        },
        mounted(){
            if(this.score < 600){
                this.rank = 'you can score better'
            }else if(this.score < 1200){
                this.rank = 'you\'re almost there'
            }else{
                this.rank = 'bravo'
            }
        }
   }
</script>

<style scoped>

    .isActive{
        width: 250px;
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /* align-items: center; */
        margin: 40px auto 20px;
        border-radius: 8px;
        box-sizing: border-box;
        box-shadow: 1px 1px 5px #0d0d0d;
        background-color: green;
        color: white;
        text-align: center;
    }

    .reaction{
        color: goldenrod;
        font-weight: 600;
        font-size: 23px;
        font-style: italic;
        margin-top: 20px;
    }
    
</style>