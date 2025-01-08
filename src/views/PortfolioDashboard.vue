<template>
  <div class="dashboard-container">
    <!-- Skills Section -->
    <section class="skills-section">
      <h3>MY SKILLS</h3>
      <div class="skills-grid">
        <div class="skill-card">C / C+</div>
        <div class="skill-card">C#</div>
        <div class="skill-card">Java</div>
        <div class="skill-card">MySQL</div>
        <div class="skill-card">Javascript</div>
        <div class="skill-card">Python</div>
        <div class="skill-card">Web Development</div>
        <div class="skill-card">VueJS</div>
        <div class="skill-card">ReactJS</div>
        <div class="skill-card">CSS</div>
        <div class="skill-card">HTML</div>
        <div class="skill-card">Git</div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio-section">
      <h3>PROJECTS</h3>
      <div class="portfolio-grid">
        <!-- Portfolio Item 1 -->
        <div class="portfolio-item" @click="downloadPortfolio1">
          <img :src="require('@/assets/project1.png')" alt="Project 1" />
        </div>
        <!-- Portfolio Item 2 -->
        <div class="portfolio-item" @click="downloadPortfolio2">
          <img :src="require('@/assets/project2.png')" alt="Project 2" />
        </div>
        <!-- Portfolio Item 3 -->
        <div class="portfolio-item" @click="downloadResume">
          <img :src="require('@/assets/project3.jpg')" alt="Project 3" />
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <h3>Experiences</h3>
      <div class="experience-item">
        <h4>Freelance IT Technician</h4>
        <p>Diagnosed and troubleshot hardware and software issues for laptops and desktops.
Performed repairs, system optimizations, and application installations to enhance performance.
Conducted system cleanups and maintenance to ensure efficient device operation.
Provided customer support by guiding clients through technical solutions and best practices.</p>
      </div>
      <div class="experience-item">
        <h4>Private Mathematics Tutor</h4>
        <p>Provided one-on-one virtual tutoring in Algebra and Geometry via the FLVS platform, helping the student
improve grades and test scores.
Strengthened the student’s understanding of concepts and boosted confidence in problem-solving.
Designed tailored lesson plans and used interactive tools to enhance the learning experience.</p>
      </div>
      <div class="experience-item">
        <h4>Vue Js Web Developing</h4>
        <p>Created this website using vue.js</p>
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
      link.href = '/Resume.pdf'; 
      link.download = 'Resume.pdf';
      link.click();
    },
    downloadPortfolio1() {
      const link = document.createElement('a');
      link.href = '/project1.pdf'; 
      link.download = 'project1.pdf';
      link.click();
    },
    downloadPortfolio2() { 
      const link = document.createElement('a');
      link.href = '/project2.pdf'; 
      link.download = 'project2.pdf';
      link.click();
    }
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
