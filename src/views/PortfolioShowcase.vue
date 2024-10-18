<template>
    <div class="portfolio-showcase">
      <h2>Portfolio Showcase</h2>
      <div class="portfolio-grid">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <img :src="project.image" alt="Project Image" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            title: 'Project 1',
            description: 'Description of project 1.',
            image: 'path-to-image-1.jpg',
          },
          {
            title: 'Project 2',
            description: 'Description of project 2.',
            image: 'path-to-image-2.jpg',
          },
          // Add more projects as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .portfolio-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .project-card {
    width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
  }
  </style>
  