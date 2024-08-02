<template>
    <div>
        <h1>
            form
        </h1>

        <div>
            <SignUp />
        </div>
    </div>
</template>

<script>
    import SignUp from './form/SignUp.vue'
    // import Sign from './form/Sign.vue'
    export default{
        components:{ SignUp },
        data(){
            return{
                
            }
        }
    }

</script>

<style scoped>
    h1{
        color: black;
        text-align: center;
        margin: 20px auto;
        font-style: italic;
        text-transform: capitalize;
    }
</style>