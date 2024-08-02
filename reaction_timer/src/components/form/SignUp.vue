<template>
    <div>
        <!-- form -->
        <form @submit.prevent="handleSubmit">
            <!-- email -->
            <div>
                <label>email:</label>
                <input type="email" v-model="email" required>
            </div>
            <!-- password -->
            <div>
                <label>password:</label>
                <input type="password" v-model="password" required>
                <div>
                    passowrdErr: {{ passwordErr }}
                </div>
            </div>
            <!-- select field -->
            <div>
                <label>role:</label>
                <select v-model="role" required>
                    <option value="dev">web developer</option>
                    <option value="designer">web designer</option>
                    <option value="backend">backend developer</option>
                </select>
            </div>
            <!-- single checkbox -->
            <div>
                <label>accept terms and conditions ?</label>
                <input type="checkbox" required v-model="name">
            </div>
            <!-- multiple checkboxes -->
            <!-- <div>
                <div>
                    <label>male</label>
                    <input type="checkbox" value="male" required v-model="names">
                </div>
                <div>
                    <label>female</label>
                    <input type="checkbox" value="female" required v-model="names">
                </div>
                <div>
                    <label>transgender</label>
                    <input type="checkbox" value="transgender" required v-model="names">
                </div>
            </div> -->

            <!-- adding multiple skills -->
            <div>
                <label>skills</label>
                <input type="text" required v-model="temSkill" @keyup.alt="addSkill">
                <ul v-for="skill in skills" :key="skill">
                    <li @click="deleteSkill(skill)">{{ skill }}</li>
                </ul>
            </div>

            <div>
                <p>email: {{ email }}</p>
                <p>passowrd: {{ password }}</p>
                <p>select: {{ role }}</p>
                <p>check: {{ name }}</p>
                <!-- <p>checkboxes: {{ names }}</p> -->
            </div>

            <div>
                <button @click="handleSubmit">submit</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                email: '',
                password: '',
                role: '',
                name: false,
                names: [],
                temSkill: '',
                skills: [],
                passwordErr: ''
            }
        },
        methods:{
            addSkill(e){
                // console.log(e)
                if(e.key === ',' && this.temSkill){
                    // after writing our function codes we noticed some words can be repeat, therefore we're going to write second if statement to prevent that from happening, okay? so we're going to check if the word already exist in the array
                    if(!this.skills.includes(this.temSkill)){
                        this.skills.push(this.temSkill)
                    }
                    this.temSkill = ''
                }
            },
            // this function is use to filter through the skills array to search for items that are equal, if it find equal items it takes it out of the array else it keep it in the array
            deleteSkill(skill){
                this.skills = this.skills.filter((item) => skill !== item )
            },

            handleSubmit(){
                this.passwordErr = this.password.length > 5 ? 'confirmed' : 'password must be atleast 5'
                console.log('email:', this.email)
                console.log('password:', this.password)
                this.password = ''
                this.email = ''
            }
        }
    }

</script>