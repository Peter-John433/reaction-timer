<template>
    <div>
        hello

        <div ref="p" @click="myHand">
            my name is {{  myName }} and am {{ age }} years old.
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    export default{
        setup(){
            const myName = 'john'
            const age = 40
            const p = ref('hello')
           function myHand(){
                console.log('my function')
                console.log(p, p.value)
                p.value.classList.add('test')
                p.value.textContent = 'hello people'
               
            }

            return{ myName, age, myHand, p}
        }
    }
</script>