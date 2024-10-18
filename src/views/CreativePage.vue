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
      <input v-model="guess" type="number" placeholder="Enter a number between 1-100" />
      <button @click="makeGuess">Submit Guess</button>
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
  padding: 220px;
}

section {
  margin-bottom: 50px;
}

/* Skills Section */
.secret h3{
  font-family: valo;
  font-size: 28px;
  color: #f9c74f;
  transition: color 0.3s ease;
}
.skills-section h3,
.experience-section h3,
.testimonial-section h3,
.game-section h3 {
  font-size: 28px;
  color: #f9c74f;
  transition: color 0.3s ease;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.skill-card {
  background-color: #2b2b2b;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
}

.skill-card:hover {
  background-color: #f9c74f;
  transform: scale(1.05);
  color: #1f1f1f;
}

/* Portfolio Section */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.portfolio-item1 {
  background-color: #2b2b2b;
  height: 200px;
  border-radius: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.portfolio-item1:hover {
  background-color: #f9c74f;
  transform: scale(1.05);
}
.portfolio-item1:active{
  background-image: url("/src/assets/cat3.png");
  transform: scale(1.05);
}
.portfolio-item2 {
  background-color: #2b2b2b;
  height: 200px;
  border-radius: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.portfolio-item2:hover {
  background-color: #f9c74f;
  transform: scale(1.05);
}
.portfolio-item2:active{
  background-image: url("/src/assets/cat2.jpg");
  transform: scale(1.05);
}
.portfolio-item3 {
  background-color: #2b2b2b;
  height: 200px;
  border-radius: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.portfolio-item3:hover {
  background-color: #f9c74f;
  opacity: 0.7;
  transform: scale(1.05);
}
.portfolio-item3:active{
  background-image: url("/src/assets/cat.jpg");
  transform: scale(1.05);
}


.game-section input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  width: 250px;
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

/* Testimonial Section */
.testimonial {
  background-color: #2b2b2b;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.testimonial-author {
  margin-top: 10px;
  font-style: italic;
  color: #f9c74f;
}

</style>
