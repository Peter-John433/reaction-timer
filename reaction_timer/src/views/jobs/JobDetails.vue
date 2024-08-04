<template>
    <div class="job-details">
        <div>job details</div>
        <div v-if="job">
            <!-- my job details  {{ $route.params.id}} -->
            <p>{{ job.title }}</p>
            <p>{{ job.id }}</p>
             <p>{{ job.duty }}</p>
        </div>
        <div v-else>
            <p>loading job details ...</p>
        </div>
    </div>
</template>
<script>
  export default{
    props:['id'],
     data(){
        return{
            // id: this.$route.params.id
            job: null
        }
     },

     mounted(){
        fetch('http://localhost:3000/jobs' + this.id)
        .then((res) => res.json())
        .then((data) => this.job = data)
        .catch((err) => console.log(err.message))
     }
  }
</script>

<style scoped>
 .job-details{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin-top: 20px;
  }

</style>