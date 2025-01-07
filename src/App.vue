<template>
  <div id="app">
    <nav class="navbar" v-if="$route.path !== '/login'">
      <div class="navbar-content">
        <div class="logo">My Portfolio</div>
        <div class="nav-buttons">
          <button @click="navigateTo('profile')">Profile</button>
          <button @click="navigateTo('portfolio')">Portfolio</button>
          <button @click="navigateTo('contacts')">Contact</button>
          <button @click="navigateTo('creative')">Creative Page</button>
          <button @click="handleLogout">Logout</button>
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
    handleLogout() {
      localStorage.removeItem('user'); // Clear user info from local storage
      this.$router.push({ name: 'Login' }); // Redirect to login page
    },
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4; /* Light background for the dashboard */
  min-height: 100vh; /* Full height */
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #333;
  padding: 15px;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
  color: 
}

.nav-buttons {
  display: flex;
  gap: 15px; /* Space between buttons */
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
  flex-grow: 1; /* Fill remaining space */
  padding: 20px;
}
</style>
