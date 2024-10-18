<template>
  <div class="login-container">
    <div class="left-section">
      <h1 class="app-name">MY PORTFOLIO</h1>
      <p class="tagline">Login to see my portfolio</p>
    </div>
    <div class="right-section">
      <div class="form-container">
        <h2>LOGIN</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <input v-model="username" type="text" placeholder="Name" required />
          </div>
          <div class="form-group">
            <input v-model="password" type="password" placeholder="Password" required />
          </div>
          <button type="submit">View Portfolio</button>
          <p class="sign-in-link">Don't have an account? <a href="#">Sign up</a></p>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    handleLogin() {
      // Simple form validation (you can add your login logic here)
      const correctUsername = 'admin';
      const correctPassword = '1234';

      if (this.username === correctUsername && this.password === correctPassword) {
        // Set user data in local storage
        localStorage.setItem('user', JSON.stringify({ username: this.username }));
        
        // Emit login event to parent (App.vue)
        this.$emit('login');

        // Redirect to portfolio dashboard
        this.$router.push('/portfolio/profile');
      } else {
        // Show error message
        this.errorMessage = 'Incorrect username or password!';
      }
    },
  },
};
</script>

<style scoped>
@keyframes colorChange {
  0% {
    color: #ff4b2b;
  }
  25% {
    color: #ff416c;
  }
  50% {
    color: #ff8c00;
  }
  75% {
    color: #ffafbd;
  }
  100% {
    color: #ff4b2b; 
  }
}
@font-face {
  font-family: Valo;
  src: url(/src/assets/Valorant\ Font.ttf);
}

.login-container {
  display: flex;
  height: 100vh;
}

.left-section {
  width: 50%;
  background-color: #1f1f1f; /* Default background color */
  color: white;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  font-family: Valo;
  border-left: 0.25rem solid rgb(255, 255, 255);
  border-radius: 10px;
  position: relative;
  transition: background 1s ease-in-out, transform 0.03s ease-in-out;
  transform: scale(1);
}

.left-section:hover {
  background-size: cover;
  animation: colorChange 0.5s infinite; 
}

.app-name {
  font-size: 56px;
  font-weight: bold;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 2.5px 2.5px #434141;
}

.tagline {
  font-size: 18px;
  line-height: 1.5;
  max-width: fit-content;
  margin-left: auto;
  margin-top: -40px;
  margin-right: auto;
}

.right-section {
  width: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background-color: #f03232d5;
  color: #ffffff;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  text-align: center;
  font-family: Valo;
  border-left: 1rem solid rgb(0, 0, 0);
}

h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.795);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: Valo;
  transition: 0.5s;
}

button:hover {
  background-color: #000000;
  color: #ccc;
}

.sign-in-link {
  margin-top: 10px;
  font-size: 14px;
}

.sign-in-link a {
  color: #ffffff;
  text-decoration: none;
  transition: 0.5s;
}

.sign-in-link a:hover {
  color: #020000;
  size: 1%;
}

.error-message {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: rgb(255, 255, 255);
  margin-top: 10px;
}
</style>
