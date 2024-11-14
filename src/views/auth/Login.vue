<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
        <br/>
          <!--LOGIN-->
          <div v-if="verification==''" class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <p style="font-size: 1.5rem;">SUBAS TANAUAN LOGIN</p>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Username
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Username"
                  v-model="user.username"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  v-model="user.password"
                />
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="Signin()" :disabled="loginloading"
                >
                <i v-if="loginloading" class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite;"></i>
                <p v-else>Sign In</p>
                </button>
              </div>
              
              <div class="text-center mt-6 relative">
                <router-link to="/register" @click.native.prevent="loginloading ? null : $router.push('/register')">
                    <small>Create new account</small>
                  </router-link>
              </div>
            </form>
          </div>

          <!--VERIFICATION-->
          <div v-else-if="verification=='false'" class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <p style="font-size: 1.5rem;">EMAIL VERIFICATION</p>
            </div>
            <form>
              <br/>
              <center>
                <p>Enter the code below to sign in and link your email to Subas Tanauan account.</p>
                <p>This code will expire in 20 minutes.</p>
              </center>

              <br/>
              <div class="relative w-full mb-3">
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Enter your code"
                  v-model="verificationcode"
                />
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="generateCode()" :disabled="loginloading || generatingcode || seconds > 0"
                >
                <i v-if="loginloading || generatingcode" class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite;"></i>
                <p v-else>{{ (seconds > 0 ? `Regenerating in ${seconds}` : 'Regenerate Code')}}</p>
                </button>
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="verifyemail()" :disabled="loginloading"
                >
                <i v-if="loginloading" class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite;"></i>
                <p v-else>Verify Account</p>
                </button>
              </div>
            </form>
          </div>

          <!--OTP-->
          <div v-else-if="verification=='true'" class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <p style="font-size: 1.5rem;">OTP VERIFICATION</p>
            </div>
            <form>
              <br/>
              <center>
                <p>Enter your OTP below to proceed with your Subas Tanauan account.</p>
                <p>This code will expire in 20 minutes.</p>
              </center>

              <br/>
              <div class="relative w-full mb-3">
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Enter your OTP Code"
                  v-model="otpcode"
                />
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="generateOTPCode()" :disabled="loginloading || generatingcode || seconds > 0"
                >
                <i v-if="loginloading || generatingcode" class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite;"></i>
                <p v-else>{{ (seconds > 0 ? `Regenerating in ${seconds}` : 'Regenerate Code')}}</p>
                </button>
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="verifyOTP()" :disabled="loginloading"
                >
                <i v-if="loginloading" class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite;"></i>
                <p v-else>Verify OTP</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      verificationcode: "",
      loginloading: false,
      auth: "",
      verification: "",
      generatingcode: false,
      seconds: 20,
      timer: null,
      otpcode: "",
      userauth: ""
    };
  },
  methods: {
    async Signin(){

      this.loginloading = true;
      
      const alphaRegex = /^[A-Za-z]+$/;
      const withSpecialCharRegex = /^[A-Za-z0-9@/[\]#]+$/;

      if (this.user.username == ""){
        this.$swal({
          title: "Enter your username",
          icon: "error",
        })
        this.loginloading = false;
        return
      }
      else if (this.user.username.length < 5 || this.user.username.length > 15 ){
        this.$swal({
          title: "Username must be greater than 5 and less than 15 characters",
          icon: "error",
        })
        this.loginloading = false;
        return;
      }
      else if (!alphaRegex.test(this.user.username)){
        this.$swal({
          title: "Please don't use numbers or special characters for username",
          icon: "error",
        })
        this.loginloading = false;
        return;
      }
      else if (this.user.password == ""){
        this.$swal({
          title: "Please enter password",
          icon: "error",
        })
        this.loginloading = false;
        return;
      }
      else if (this.user.password.length < 5 || this.user.password.length > 25 ){
        this.$swal({
          title: "Password must be greater than 5 and less than 25 characters",
          icon: "error",
        })
        this.loginloading = false;
        return;
      }
      else if (!withSpecialCharRegex.test(this.user.password)){
        this.$swal({
          title: "Only use letters, numbers and some special characters (@/[]#) for password",
          icon: "error",
        })
        this.loginloading = false;
        return;
      }

      const response = await fetch(`${process.env.VUE_APP_API_URL}/auth/login?username=${this.user.username}&password=${this.user.password}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const responseData = await response.json();

      if (response.status === 400) {
        //  API HERE
        this.$swal({
          title: responseData.data,
          icon: "error"
        })
        this.loginloading = false;
        return;
      }
      else{
        this.userauth = responseData.data.auth

        if (responseData.data.auth != "superadmin"){
          if (!responseData.data.emailverified){
            this.verification = "false"
            this.loginloading = false;
            this.generateCode()
          }
          else{
            this.verification = "true"
            this.loginloading = false;
            this.generateOTPCode()
          }
        }
        else{
          this.$swal({
              title: "Welcome back!",
              icon: "success",
              allowOutsideClick: false
            }).then(() => {
              this.$router.push({path: `/${this.userauth}`})
          })
        }
      }
    },
    async generateCode(){
      this.generatingcode = true
      const verificationresponse = await fetch(`${process.env.VUE_APP_API_URL}/users/sendemailverification`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const verificationresponseData = await verificationresponse.json()

      if (verificationresponseData.status === 400) {
        //  API HERE
        this.$swal({
          title: verificationresponseData.data,
          icon: "error"
        })
        this.loginloading = false;
        this.generatingcode = false
        return;
      }

      this.generatingcode = false
      this.startTimer()
    },
    async verifyemail(){
      this.loginloading = true

      const response = await fetch(`${process.env.VUE_APP_API_URL}/users/verifyemail`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          code: this.verificationcode
        })
      });

      const responseData = await response.json();

      if (response.status === 400) {
        //  API HERE
        this.$swal({
          title: responseData.data,
          icon: "error"
        })
        this.loginloading = false;
        return;
      }

      this.$swal({
            title: "Welcome back!",
            icon: "success",
            allowOutsideClick: false
        }).then(() => {
          this.$router.push({path: `/${this.userauth}`})
      })
    },
    async generateOTPCode(){
      this.generatingcode = true
      const verificationresponse = await fetch(`${process.env.VUE_APP_API_URL}/users/sendotpemail`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const verificationresponseData = await verificationresponse.json()

      if (verificationresponseData.status === 400) {
        //  API HERE
        this.$swal({
          title: verificationresponseData.data,
          icon: "error"
        })
        this.loginloading = false;
        this.generatingcode = false
        return;
      }

      this.generatingcode = false
      this.startTimer()
    },
    async verifyOTP(){
      this.loginloading = true

      const response = await fetch(`${process.env.VUE_APP_API_URL}/users/verifyOTP`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          code: this.otpcode
        })
      });

      const responseData = await response.json();

      if (response.status === 400) {
        //  API HERE
        this.$swal({
          title: responseData.data,
          icon: "error"
        })
        this.loginloading = false;
        return;
      }

      this.$swal({
            title: "Welcome back!",
            icon: "success",
            allowOutsideClick: false
        }).then(() => {
          this.$router.push({path: `/${this.userauth}`})
      })
    },
    startTimer() {
      if (this.timer) return; // Prevent multiple intervals
      this.seconds = 20
      this.timer = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds -= 1; // Decrement the seconds
        } else {
          this.stopTimer(); // Stop the timer when it reaches zero
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer); // Stop the timer
      this.timer = null; // Reset the timer ID
    },
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // Clean up the timer when the component is destroyed
    }
  },
};



</script>


