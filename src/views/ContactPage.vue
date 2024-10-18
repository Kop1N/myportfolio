<template>
  <div class="contact-container">
    <div class="contact-form-section">
      <h2>Write us</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <input v-model="name" type="text" placeholder="Name" required />
        </div>
        <div class="form-group">
          <input v-model="email" type="email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <input v-model="subject" type="text" placeholder="Subject" required />
        </div>
        <div class="form-group">
          <textarea v-model="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <button type="submit" class="btn-submit">Send Message</button>
      </form>
    </div>
    <div class="contact-info-section">
      <h2>Contact Information</h2>
      <ul>
        <li>Technological Institute of the Philippines - Arlegui Campus, 1338 Arlegui St, Quiapo, Manila, 1001 Metro Manila</li>
        <li><strong>Phone:</strong> +639611157337</li>
        <li><strong>Email:</strong> mjcmutuc@tip.edu.ph</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      // Implement form submission logic here
      console.log("Form submitted with:", this.name, this.email, this.subject, this.message);
    },
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 250px;
  background-color: #1f1f1f;
}

.contact-form-section, .contact-info-section {
  background-color: #333;
  color: white;
  padding: 40px;
  border-radius: 8px;
  width: 40%;
  margin: 0 10px;
}

.contact-form-section {
  display: flex;
  flex-direction: column;
}

h2 {
  color: white;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #444;
  color: white;
  font-size: 14px;
}

input::placeholder, textarea::placeholder {
  color: #bbb;
}

textarea {
  resize: none;
}

.btn-submit {
  padding: 10px 20px;
  background-color: #f39c12;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #e67e22;
}

.contact-info-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 15px;
}

ul li strong {
  font-weight: bold;
  margin-right: 10px;
}
</style>
