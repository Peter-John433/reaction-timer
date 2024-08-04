<template>
    <div class="nav">
        <router-link to="/section one">section one</router-link> |
        <router-link to="/section two">section two</router-link> |
        <router-link :to="{ name: 'jobs'}">Jobs</router-link>
    </div>
</template>

<script>
    export default{
       data() {
        return {
            myData: ''
        }
       },

    //    methods:{
    //         async handleMed() {
    //                 try {
    //                     let response = await fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple');
    //                         if (!response.ok) {
    //                         throw new Error('Network response was not ok');
    //                     }
    //                     let data = await response.json();
    //                     console.log(data);
    //                 } catch (error) {
    //                     console.error("An error occurred:", error.message);
    //                     this.$toast.error("An error occurred while fetching data."); // Example of using a toast notification
    //                 } finally {
    //                     console.log("Fetch attempt finished.");
    //                 }
    //         }        
    //    }
    }
</script>

<style scoped>
  .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }

  a{
        background-color: green;
        color: white;
        padding: 8px 20px;
        border-radius: 8px;
        text-decoration: none;
  }

  a.router-link-exact-active{
    background-color: red;
    color: white;
    padding: 8px 20px;
    border-radius: 8px;
  }
</style>
