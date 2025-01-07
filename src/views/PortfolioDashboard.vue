<template>
  <div class="dashboard-container">
    <!-- Skills Section -->
    <section class="skills-section">
      <h3>My Skills</h3>
      <div class="skills-grid">
        <div class="skill-card">Python: Proficient in writing clean, efficient, 
          and scalable code for data analysis, automation, and web development.</div>
        <div class="skill-card">JavaScript: Skilled in building dynamic and interactive 
          front-end applications, handling asynchronous operations, and integrating APIs.</div>
        <div class="skill-card">Vue: Experienced in developing modular, maintainable, and reactive 
          user interfaces with Vue.js, leveraging its component-based structure.</div>
        <div class="skill-card">React: Proficient in building complex, high-performance web applications using React, 
          with a focus on component reusability and state management.</div>
        <div class="skill-card">UI/UX Design: Knowledgeable in designing user-centered interfaces with an emphasis on 
          enhancing user experience through usability testing and interaction design.</div>
        <div class="skill-card">API Development: Experienced in creating and consuming RESTful APIs, ensuring secure and efficient 
          communication between front-end and back-end systems.</div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio-section">
      <h3>Portfolio</h3>
      <div class="portfolio-grid">
        <!-- Portfolio Item 1 -->
        <div class="portfolio-item" @click="downloadResume">
          <img :src="require('@/assets/project1.jpg')" alt="Project 1" />
        </div>
        <!-- Portfolio Item 2 -->
        <div class="portfolio-item" @click="downloadResume">
          <img :src="require('@/assets/project2.jpg')" alt="Project 2" />
        </div>
        <!-- Portfolio Item 3 -->
        <div class="portfolio-item" @click="downloadResume">
          <img :src="require('@/assets/project3.jpg')" alt="Project 3" />
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <h3>Experience</h3>
      <div class="experience-item">
        <h4>Main Project Python Developer</h4>
        <p>Developed small scale apps and supporting algorithm making Object Oriented Projects.</p>
      </div>
      <div class="experience-item">
        <h4>UI/UX Project Decoration</h4>
        <p>Collaborated with teams to improve user interface and user experience on websites and apps.</p>
      </div>
      <div class="experience-item">
        <h4>Vue Js Web Developing</h4>
        <p>Created this website using vue.js from scratch.</p>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <h3>Sentiment</h3>
      <div class="testimonial">
        <p>"Every step forward, no matter how small, brings you closer to the person you're meant to become—keep learning, growing, and embracing the journey ahead with open arms and an open mind."</p>
        <div class="testimonial-author">- Mutuc</div>
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
      link.href = '/Resume.pdf'; // Directly from public folder
      link.download = 'Resume.pdf'; 
      link.click();
    },
  },
};
</script>

<style scoped>
/* General Container Styles */
.dashboard-container {
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #1f1f1f;
  padding: 20px;
}

section {
  margin-bottom: 50px;
}

h3 {
  font-size: 28px;
  color: #f9c74f;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.skill-card {
  background-color: #2b2b2b;
  padding: 50px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.skill-card:hover {
  background-color: #f9c74f;
  color: #1f1f1f;
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Portfolio Section */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.portfolio-item {
  position: relative;
  background-color: #2b2b2b;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio-item:hover {
  opacity: 0.7;
  transform: scale(1.05);
}

/* Experience Section */
.experience-item {
  background-color: #2b2b2b;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.experience-item:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
