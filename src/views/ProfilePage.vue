<template>
  <div class="dashboard-container">
    <!-- Profile Section -->
    <section class="profile-section">
      <div class="profile-image"></div>
      <div class="profile-info">
        <h1>Mr. John Carlo Mutuc</h1>
        <h2>COMPUTER ENGINEER 41S3</h2>
        <p>CPE 400-CPE41S3 - Embedded Systems</p>
        <button class="hire-me" @click="downloadResume">Hire Me</button>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <h3>Brief Introduction</h3>
      <div class="experience-item">
        <h4>Senior Python Developer</h4>
        <p>As a driven and ambitious undergraduate in Computer Engineering from the Technological Institute of the Philippines, 
          I am eager to begin my professional journey. My passion for technology, coupled with a commitment to continuous learning and personal growth, 
          fuels my desire to acquire new knowledge and skills. With a strong foundation in communication, problem-solving, and proficiency in various software and programming languages,
           I am ready to contribute effectively in dynamic, tech-focused environments.</p>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <h3>Achievements</h3>
      <div class="testimonial">
        <p>"I am continuously striving toward further goals, including advanced certifications in programming and network administration,
          as well as expanding my expertise in 
          emerging technologies to stay at the forefront of industry developments."</p>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  
  name: 'PortfolioDashboard',
  methods: {
    downloadResume() {
      // Correct the path to point to the public folder
      const link = document.createElement('a');
      link.href = '/Resume.pdf'; // Directly from public folder
      link.download = 'Resume.pdf'; // Optional, suggests a file name
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
.profile-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
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
  align-items: center;
  padding: 40px;
}
/* My picture */
.profile-image {
  background: url('/src/assets/profile.png') no-repeat center center;
  background-size: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display:flex;
  align-items: center;
  padding: 100px;
  
}
/* My name */
.profile-info h1 {
  font-size: 36px;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  font-family: valo;
  transition: background 1s ease-in-out, transform 0.03s ease-in-out;
  transform: scale(1);
}
.profile-info h1:hover{
  animation: colorChange 0.5s infinite; 
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
/* Description */
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
.hire-me:hover{
  background-color: #f9c74f;
  color: #1f1f1f;
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.skills-section h3,
.portfolio-section h3,
.experience-section h3,
.testimonial-section h3,
.contact-section h3 {
  font-size: 28px;
  color: #f9c74f;
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
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.portfolio-item {
  background-color: #2b2b2b;
  height: 200px;
  border-radius: 10px;
}

.experience-item {
  background-color: #2b2b2b;
  padding: 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
}
.experience-item:hover {
  background-color: #f9c74f;
  color: #1f1f1f;
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.testimonial {
  background-color: #2b2b2b;
  padding: 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.testimonial:hover {
  background-color: #f9c74f;
  color: #1f1f1f;
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.social-links a {
  color: #f9c74f;
  margin-right: 20px;
  text-decoration: none;
}
</style>
