<template>
    <div>
        <div class="input">
            <input type="text" v-model="search">
            <button @click="addItem">add</button>
        </div>
        <div>
            <div class="fruits">
                add some fruits to the list...
            </div>
        </div>
            <div v-for="item in items" :key="item.id" class="list">
                <p class="text"> {{item.id}}. {{ item.name }}</p>
                <p @click="deleteItem(item)" class="x">x</p>
            </div>
    </div>
</template>
<script>
  import { ref } from 'vue'
  export default{
      setup(){
          const search = ref('')
          const items = ref([])

        const addItem = () =>{
            if(search.value === ''){
                alert('please enter a name')
            }else{
                items.value.push({name: search.value, id: items.value.length + 1})
                search.value = ''
            }
        }
        
        const deleteItem = (item) => {
           items.value = items.value.filter((check) => item !== check )
        }

        return{ search, items, addItem, deleteItem }
      }
  }

</script>

<style scoped>
    .input{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d0d0d0;
        width: 400px;
        height: 100px;
        padding: 0 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 1px #0d0d0d;
        margin-bottom: 10px;
    }
    input{
        width: 100%;
        padding: 3px 5px;
        outline: none;
    }

    input:focus{
        outline: gray;
    }

    button{
        padding: 3px 8px;
        width: 50px;
        background-color: black;
        color: gold;
    }

    .list{
        margin: 10px auto;
        display: flex;
        width: 400px;
        justify-content: space-between;
        align-items: center;
        background-color: #0d0d0d;
        color: white;
        padding: 8px 10px;
        border-radius: 8px;
        box-shadow: 1px 1px 2px gold;
    }

    .text{
        font-size: 12px;
    }

    .x{
        background-color: white;
        padding: 3px 5px;
        border-radius: 100%;
        color: black;
        box-shadow: 0px 0px 1px gold;
        font-weight: 600;
    }

    .fruits{
        text-align: center;
        color: black;
        font-size: 14px;
        margin-bottom: 20px;
        font-weight: 600;
        text-transform: capitalize;

    }

    @media screen and (max-width: 576px) {
        .input{
            width: 320px;
            margin-left: auto;
            margin-right: auto;
        }

        .list{
        width: 320px;
    }
    }
</style>