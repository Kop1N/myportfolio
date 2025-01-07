<template>
  <div class="portfolio-showcase">
    <h2>Portfolio Showcase</h2>
    <div class="portfolio-grid">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <img :src="project.image" alt="Project Image" class="project-image"/>
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
.portfolio-showcase {
  padding: 20px;
  color: #fff;
}

.portfolio-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.project-card {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  background-color: #2b2b2b;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #f9c74f;
}

h3 {
  font-size: 1.5rem;
  margin-top: 10px;
  color: #f9c74f;
}

p {
  font-size: 1rem;
  color: #ccc;
  margin-top: 10px;
}

/* Media Queries for Responsiveness */

@media (max-width: 1024px) {
  .portfolio-grid {
    justify-content: space-between;
  }

  .project-card {
    width: 45%; /* Adjust card width for larger tablets */
  }
}

@media (max-width: 768px) {
  .project-card {
    width: 100%; /* Full width on smaller tablets and mobile devices */
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }

  .project-card {
    padding: 15px;
  }
}
</style>
