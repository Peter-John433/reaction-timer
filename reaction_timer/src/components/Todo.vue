<template>
    <div class="todo">
        <h1 class="h1">
            todo-list
        </h1>

        <TodoList />
    </div>
</template>

<script>
 import TodoList from './TodoList.vue'
export default {
    components:{ TodoList }    
}
</script>

<style scoped>
    .h1{
        background-color: black;
        color: gold;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin: 10px auto;
        text-transform: capitalize;
        padding: 10px 0px;
        width: 100%;
    }

    .todo{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
    }
</style>