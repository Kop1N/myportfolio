<template>
  <div class="dashboard-container">
    <!-- Profile Section -->
    <section class="profile-section">
      <div class="profile-info">
        <h1>Mr. John Carlo Mutuc</h1>
        <h2>COMPUTER ENGINEER</h2>
        <button class="hire-me" @click="downloadResume">Hire Me</button>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <h3>BRIEF INTRODUCTION</h3>
      <div class="experience-item">
        <p>As a driven and ambitious undergraduate in Computer Engineering from the Technological Institute of the Philippines, 
          I am eager to begin my professional journey. My passion for technology, coupled with a commitment to continuous learning and personal growth, 
          fuels my desire to acquire new knowledge and skills. With a strong foundation in communication, problem-solving, and proficiency in various software and programming languages,
           I am ready to contribute effectively in dynamic, tech-focused environments.</p>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <h3>OBJECTIVES</h3>
      <div class="testimonial">
        <p>"To leverage my skills in programming, and software development to create innovative and engaging
          solutions, while continuously learning and contributing to the growth of a dynamic team."</p>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'PortfolioDashboard',
  methods: {
    downloadResume() {
      const link = document.createElement('a');
      link.href = '/Resume.pdf';
      link.download = 'Resume.pdf';
      link.click();
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

.dashboard-container {
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #1f1f1f;
  padding: 20px;
}

section {
  margin-bottom: 50px;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.profile-image {
  background: url('/src/assets/profile.png') no-repeat center center;
  background-size: cover;
  width: 300px;
  height: 300px;
  border-radius: 20%;
}

.profile-info {
  text-align: center;
}

.profile-info h1 {
  font-size: 36px;
  margin: 10px 0;
  font-family: valo;
  transition: background 1s ease-in-out, transform 0.03s ease-in-out;
}

.profile-info h1:hover {
  animation: colorChange 0.5s infinite; 
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.profile-info h2 {
  font-size: 24px;
  color: #f9c74f;
}

.hire-me {
  background-color: #2b2b2b;
  border-left: #fff;
  border-right: #fff;
  padding: 10px 20px;
  font-size: 16px;
  color: #f9c74f;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

.hire-me:hover {
  background-color: #f9c74f;
  color: #1f1f1f;
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.experience-item, .testimonial {
  background-color: #2b2b2b;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.experience-item:hover, .testimonial:hover {
  background-color: #f9c74f;
  color: #1f1f1f;
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    padding: 20px;
  }

  .profile-image {
    width: 12px;
    height: 12px;
  }

  .profile-info h1 {
    font-size: 28px;
  }

  .profile-info h2 {
    font-size: 20px;
  }

  .experience-item, .testimonial {
    margin-left: 20px;
    margin-right: 20px;
    padding: 15px;
  }

  .hire-me {
    font-size: 14px;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .profile-info h1 {
    font-size: 24px;
  }

  .profile-info h2 {
    font-size: 18px;
  }

  .hire-me {
    font-size: 12px;
    padding: 6px 12px;
  }

  section {
    margin-bottom: 30px;
  }

  .dashboard-container {
    padding: 10px;
  }
}

</style>
