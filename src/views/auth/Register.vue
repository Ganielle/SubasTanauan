<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">

        <!--STEP 0-->
        <div 
          v-if="step == 0"
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="flex-auto px-4 lg:px-10 py-10 pt-5">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <p style="font-size: 1.3rem;">Sign up</p>
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

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  v-model="user.email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  First Name
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="First Name"
                  v-model="user.firstname"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Last Name"
                  v-model="user.lastname"
                />
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="NextStep()"
                >
                  Next Step
                </button>
              </div>

              <div class="text-center mt-6">
                <router-link to="/">
                    <small>Do you have an account? Login here</small>
                  </router-link>
              </div>
            </form>
          </div>
        </div>

        <!--STEP 1-->
        <div 
          v-if="step == 1"
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="flex-auto px-4 lg:px-10 py-10 pt-5">
            <button
              class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              @click="GoBack()"
            >
              Go Back
            </button>
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <p style="font-size: 1.3rem;">Sign up</p>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Price Range
                </label>
                <select
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="user.pricerange"
                >
                  <option value="">Please select your price range</option>
                  <option value="10000">₱5,000 - ₱10,000</option>
                  <option value="30000">₱15,000 - ₱30,000</option>
                  <option value="100000">₱50,000 - ₱100,000</option>
                </select>
              </div>

              
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Preferred Livestock
                </label>
                <select
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="user.livestock"
                >
                <option value="">Please select your preferred livestock</option>
                <option value="Cattle">Cattle</option>
                <option value="Hogs">Hogs</option>
                <option value="Swine">Swine</option>
                <option value="Carabao">Carabao</option>
                <option value="Goat">Goat</option>
                </select>
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Valid ID (Driver's License / UMID / Philid / PhilHealth ID / Postal ID):
                </label>
                <img :src="user.previewImage" class="uploading-image" />
                <input type="file" accept="image/jpeg" @change=uploadImage>
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="FinishSignup()"
                  :disabled="registerloading"
                >
                  <i v-if="registerloading" class="fas fa-solid fa-spinner" style="animation:spin 4s linear infinite;"></i>
                  <p v-else>Finish Sign up</p>
                </button>
              </div>

              <div class="text-center mt-6">
                <router-link to="/"  @click.native.prevent="registerloading ? null : $router.push('/')">
                    <small>Do you have an account? Login here</small>
                  </router-link>
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
      step: 0,
      registerloading: false,
      user: {
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        pricerange: "",
        livestock: "",
        previewImage: null,
        file: null
      }
    };
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      if (image) {
        this.user.file = image; // Store the file object directly
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
          this.user.previewImage = e.target.result; // Base64 string for preview
        };
      }
    },
    NextStep(){

      const alphaRegex = /^[A-Za-z]+$/;
      const withSpecialCharRegex = /^[A-Za-z0-9@/[\]#]+$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (this.user.username == ""){
        this.$swal({
          title: "Please enter username"
        })
        return;
      }
      else if (this.user.username.length < 5 || this.user.username.length > 15 ){
        this.$swal({
          title: "Username must be greater than 5 and less than 15 characters"
        })
        return;
      }
      else if (!alphaRegex.test(this.user.username)){
        this.$swal({
          title: "Please don't use numbers or special characters for username"
        })
        return;
      }
      else if (this.user.password == ""){
        this.$swal({
          title: "Please enter password"
        })
        return;
      }
      else if (this.user.password.length < 5 || this.user.password.length > 25 ){
        this.$swal({
          title: "Password must be greater than 5 and less than 25 characters"
        })
        return;
      }
      else if (!withSpecialCharRegex.test(this.user.password)){
        this.$swal({
          title: "Only use letters, numbers and some special characters (@/[]#) for password"
        })
        return;
      }
      else if (this.user.email == ""){
        this.$swal({
          title: "Please enter email"
        })
        return;
      }
      else if (!emailRegex.test(this.user.email)){
        this.$swal({
          title: "Please enter valid email"
        })
        return;
      }
      else if (this.user.firstname == ""){
        this.$swal({
          title: "Please enter your first name"
        })
        return;
      }
      else if (this.user.lastname == ""){
        this.$swal({
          title: "Please enter your last name"
        })
        return;
      }

      this.step++;
    },
    async FinishSignup(){
      this.registerloading = true
      if (this.user.pricerange == ""){
        this.$swal({
          title: "Please select your price range"
        })
        this.registerloading = false
        return
      }
      else if (this.user.livestock == ""){
        this.$swal({
          title: "Please select your preferred livestock"
        })
        this.registerloading = false
        return
      }

      const formData = new FormData()

      formData.append("username", this.user.username)
      formData.append("password", this.user.password)
      formData.append("email", this.user.email)
      formData.append("firstname", this.user.firstname)
      formData.append("lastname", this.user.lastname)
      formData.append("pricerange", this.user.pricerange)
      formData.append("livestock", this.user.livestock)

      if (this.user.file) {
        formData.append("file", this.user.file);
      }

      const response = await fetch(`${process.env.VUE_APP_API_URL}/users/createuser`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        credentials: "include",
        body: formData
      });

      const responseData = await response.json();

      if (response.status === 400) {
        //  API HERE
        this.$swal({
          title: responseData.data,
          icon: "error"
        })
        this.registerloading = false
        return;
      }
      //  ADD API HERE
      this.$swal({
        title: "Your account has successfully registered",
        icon: "success",
        allowOutsideClick: false
      }).then((data) => {
        if (data.isConfirmed){
          this.registerloading = false
          this.$router.push({path: "/"})
        }
      })
    },
    GoBack(){
      this.step--
      this.user.pricerange = ""
      this.user.livestock = ""
    }
  }
};
</script>
