<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="logo">
          <span class="typing-animation">Hi, I am John Carlo Mutuc</span>
        </div>
        <div class="nav-buttons">
          <button @click="navigateTo('profile')">Profile</button>
          <button @click="navigateTo('portfolio')">Portfolio</button>
          <button @click="navigateTo('contacts')">Contact</button>
          <button @click="navigateTo('creative')">Creative Page</button>
        </div>
      </div>
    </nav>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(page) {
      this.$router.push({ path: `/${page}` });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: transparent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #333;
  padding: 30px;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: -10px; 
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  font-family: valo;
  color: white;
  position: relative;
}

.typing-animation {
  display: inline-block;
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid white; /* Cursor effect */
  animation: typing 4s steps(30, end), blink 0.5s step-end infinite;
}

/* Typing animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Blinking cursor animation */
@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.nav-buttons {
  display: flex;
  gap: 15px;
}

.nav-buttons button {
  background-color: #444;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-buttons button:hover {
  background-color: #555;
}

.main-content {
  flex-grow: 1;
  padding: 0px;
  margin: 0px;
}
</style>
