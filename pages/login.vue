<template>
  <div>
    <div class="install-button-container" v-if="showInstallButton && !downloadedPWA">
      <button class="install-button" @click="installPWA">Install App</button>
    </div>
    <div class="login-container">
      <img src="~/assets/image-left.png" alt="Your Image Alt Text" class="login-header-image" />
      <div class="right">
        <div class="login-form">
          <img src="~/assets/image-right.png" alt="Login Image" class="login-image" />
          <h3 class="login-heading">Login</h3>
          <p class="wel-heading">Welcome Back!</p>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" :class="{ 'error': alertMessage }" placeholder="Username" v-model="username"
                required />
            </div>
            <div class="form-group">
              <div class="password-field">
                <input type="password" :class="{ 'error': alertMessage || passwordError }" placeholder="Password"
                  v-model="password" required id="password" />
                <!-- <span class="error-message" :class="{ 'error-visible': passwordError }">{{ passwordError }}</span> -->
                <div class="show-password">
                  <input type="checkbox" id="showPassword" v-model="showPassword" @change="togglePasswordVisibility" />
                  <label for="showPassword">Show Password</label>
                </div>
              </div>
            </div>
            <div class="form-group text-center">
              <button type="submit">Login</button>
            </div>

            <div v-if="successMessage" class="success-message">
              {{ successMessage }}
            </div>
            <div class="error-container" v-if="alertMessage || passwordError">
              <span class="danger-sign">&#9888;</span>
              <span class="alert-message">{{ alertMessage || passwordError }}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/api.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
      usernameError: '',
      passwordError: '',
      alertMessage: '',
      successMessage: '',
      loggedInUser: null,
      deferredPrompt: null,
      showInstallButton: false,
      downloadedPWA: false,
    };
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the default behavior
      event.preventDefault();
      // Store the event for later use
      this.deferredPrompt = event;
      // Show the install banner
      this.showInstallButton = true;
    });

    // Check if the loggedInUser key is present in session storage
    const storedUser = sessionStorage.getItem('loggedInUser');
    if (storedUser) {
      // Parse and set the user data
      this.loggedInUser = JSON.parse(storedUser);
      console.log('Logged-in user data:', this.loggedInUser);
    } else {
      console.log('No user data found in session storage.');
    }
  },
  methods: {
    async submitForm() {
      this.usernameError = '';
      this.passwordError = '';
      this.alertMessage = '';
      try {
        const { success, data, error } = await loginUser(this.username, this.password, /* objectId */);

        if (success) {
          sessionStorage.setItem('loggedInUser', JSON.stringify(data));
          this.successMessage = 'Logged In Successfully !';
          setTimeout(() => {
            this.$router.push('/Home');
          }, 900);
          console.log("login successful");
          console.log("username:", this.username);
          console.log("password:", this.password);
        } else {
          if (error === 'Invalid username ') {
            this.usernameError = 'Invalid username';
          } else if (error === 'Invalid password') {
            this.passwordError = 'Invalid password';
          } else {
            if (response.status !== 400) {
              this.alertMessage = data.errorMsg || 'An error occurred. Please try again.';
            } else {
              this.alertMessage = '';
            }
          }
        }
      } catch (error) {
        console.error('An error occurred while logging in', error.message);
        this.alertMessage = 'Incorrect Username or Password.';
      }
    },

    togglePasswordVisibility() {
      // Toggle password visibility based on checkbox state
      const passwordField = document.querySelector('#password');
      if (this.showPassword) {
        passwordField.setAttribute('type', 'text');
      } else {
        passwordField.setAttribute('type', 'password');
      }
    },

    installPWA() {
      if (this.deferredPrompt && !this.downloadedPWA) {
        // Show the PWA installation prompt
        this.deferredPrompt.prompt();

        // Wait for the user to respond
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the PWA installation');

            // Set the flag to hide the install button
            this.downloadedPWA = true;
          } else {
            console.log('User dismissed the PWA installation');
          }

          // Reset the deferredPrompt
          this.deferredPrompt = null;
          // Hide the install banner
          this.showInstallButton = false;
        });
      }
    },
  },
};
</script>

<style scoped>
@import '@/styles/login.css';
</style>