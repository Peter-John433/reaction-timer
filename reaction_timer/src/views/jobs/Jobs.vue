<template>
    <div class="jobs">
       <h1>
            Jobs
       </h1>

       <div v-for="job in jobs" :key="job.id">
           <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
                <h3>{{ job.title }}</h3>
          </router-link>
       </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                jobs: []
            }
        },

        mounted() {
            fetch('http://localhost:3000/jobs')
            .then((res) => res.json())
            .then((data) => this.jobs = data)
            .catch((err) => console.log(err.message))
        },
    }
</script>

<style scoped>
  .jobs{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin-top: 20px;
  }

  .jobs h1{
     margin: 10px 0;
     color: black
  }

  h3{
      margin: 5px 0;
  }

  a{
    text-decoration: none;
    padding: 8px 10px;
    background-color: #0d0d0d;
    display: block;
    margin: 5px;
    color: white;
    border-radius: 8px;
  }
</style>