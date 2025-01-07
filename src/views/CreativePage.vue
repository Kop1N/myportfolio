<template>
  <div class="dashboard-container">
    <!-- Portfolio Section -->
    <section class="secret">
      <h3>Find the Cat</h3>
      <div class="portfolio-grid">
        <div class="portfolio-item1"></div>
        <div class="portfolio-item2"></div>
        <div class="portfolio-item3"></div>
      </div>
    </section>

    <!-- Guessing Game Section -->
    <section class="game-section">
      <h3>Guessing Game</h3>
      <div class="game-input">
        <input v-model="guess" type="number" placeholder="Enter a number between 1-100" />
        <button @click="makeGuess">Submit Guess</button>
      </div>
      <p>{{ feedback }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PortfolioDashboard',
  data() {
    return {
      guess: null,
      feedback: '',
      correctNumber: Math.floor(Math.random() * 100) + 1,
    };
  },
  methods: {
    makeGuess() {
      if (this.guess == this.correctNumber) {
        this.feedback = "Correct! You've guessed the number!";
      } else if (this.guess < this.correctNumber) {
        this.feedback = "Too low! Try again.";
      } else {
        this.feedback = "Too high! Try again.";
      }
    },
  },
};
</script>

<style scoped>
/* General Styles */
.dashboard-container {
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

section {
  margin-bottom: 50px;
  width: 80%; /* Container width for better centering */
  max-width: 900px; /* Max width for larger screens */
}

/* Portfolio Section */
.secret h3 {
  font-family: valo;
  font-size: 28px;
  color: #f9c74f;
  text-align: center;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.portfolio-item1, .portfolio-item2, .portfolio-item3 {
  background-color: #2b2b2b;
  height: 200px;
  border-radius: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.portfolio-item1:hover, .portfolio-item2:hover, .portfolio-item3:hover {
  background-color: #f9c74f;
  transform: scale(1.05);
}

.portfolio-item1:active {
  background-image: url("/src/assets/cat3.png");
}

.portfolio-item2:active {
  background-image: url("/src/assets/cat2.jpg");
}

.portfolio-item3:active {
  background-image: url("/src/assets/cat.jpg");
}

/* Game Section */
.game-section h3 {
  font-size: 28px;
  color: #f9c74f;
  text-align: center;
}

.game-input {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.game-section input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  width: 250px;
  font-size: 16px;
}

.game-section button {
  padding: 10px 20px;
  background-color: #f9c74f;
  color: #1f1f1f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.game-section button:hover {
  background-color: #ffc107;
}

.game-section p {
  text-align: center;
  font-size: 18px;
  color: #f9c74f;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr 1fr; /* Two items per row on medium screens */
  }

  .portfolio-item1, .portfolio-item2, .portfolio-item3 {
    height: 150px;
  }

  .game-input {
    flex-direction: column;
    align-items: center;
  }

  .game-section input {
    width: 80%;
    margin-bottom: 10px;
  }

  .game-section button {
    width: 80%;
  }
}

@media (max-width: 480px) {
  .portfolio-item1, .portfolio-item2, .portfolio-item3 {
    height: 120px;
  }

  .game-section input {
    width: 100%;
    font-size: 14px;
  }

  .game-section button {
    width: 100%;
    font-size: 14px;
  }

  .game-section p {
    font-size: 16px;
  }
}
</style>
