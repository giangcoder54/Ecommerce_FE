<template>
<!-- Horizontal Form -->
            <div class="card card-info max-w-[60%] mx-[20%] my-[10%] ">
              <div class="card-header">
                <h3 class="card-title text-center">Login Form</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form class="form-horizontal" @submit.prevent="loginUser">
                <div class="card-body ">
                  <div class="form-group row my-4">
                    <label for="inputUserName" class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10 ">
                      <input v-model="user.username" type="text" class="border-2 border-zinc-600 w-full" id="inputUserName" placeholder="Username">
                    </div>
                  </div>
                  <div class="form-group row my-2">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                      <input v-model="user.password" type="password" class="border-2 border-zinc-600 w-full  " id="inputPassword" placeholder="Password">
                    </div>
                  </div>
                  <div class="form-group row my-2">
                    <div class="offset-sm-2 col-sm-10">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck2">
                        <label class="form-check-label" for="exampleCheck2">Remember me</label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-info border-2 border-zinc-600">Sign in</button>
                  <!-- <button type="submit" class="btn btn-default float-right border-2 border-zinc-600">Cancel</button> -->
                </div>
                <div v-if="errorMessage" class="text-red-500">{{errorMessage}}</div>
                <div class="mt-3">
              <span>Not registered? <router-link to="/register">Register/SignUp Here</router-link></span>
            </div>
                <!-- /.card-footer -->
              </form>
            </div>
            <!-- /.card -->
</template>

<script>

import AuthService from '../Service/AuthService';
// import {userRouter} from 'vue-router';


export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
       
      },
       errorMessage :''
    };
  },
  methods: {
   async loginUser() {
      
    try{
      const response = await   AuthService.login(this.user);
      this.$router.push('/home')
    }catch{
       this.errorMessage = 'Login failed. Please check your username and password.';
        console.error("Login failed:", error);
       
    }
        
    }
  }
};
</script>
