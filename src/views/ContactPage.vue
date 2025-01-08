<template>
  <div class="contact-container">
    <div class="contact-form-section">
      <h2>Write an email</h2>
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
        <li><strong>Address:</strong>#16 Flor de liz st, Maripas subdivision. Paliwas Obando Bulacan</li>
        <li><strong>Phone:</strong> +639-913-009-389</li>
        <li><strong>Email:</strong> mjcmutuc@tip.edu.ph / johncarlomutuc@gmail.com</li>
      </ul>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

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
      const templateParams = {
        from_name: this.name,
        from_email: this.email,
        subject_name: this.subject,
        message: this.message,
      };

      emailjs
        .send(
          "portfoliomessage1",      
          "template_v7py2yt",     
          templateParams,
          "r9tqv6ZxpOpPxY_kp"
        )
        .then(
          (response) => {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Message sent successfully!");

            // Clear form after submission
            this.name = '';
            this.email = '';
            this.subject = '';
            this.message = '';
          },
          (error) => {
            console.log("Failed to send email.", error);
            alert("Failed to send message.");
          }
        );
    },
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px;
  background-color: #1f1f1f;
  flex-direction: column; 
  margin: -10px;
}

.contact-form-section,
.contact-info-section {
  background-color: #333;
  color: white;
  padding: 40px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px; 
  margin: 10px 0;
}

.contact-form-section {
  display: flex;
  flex-direction: column;
}

h2 {
  color: white;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #444;
  color: white;
  font-size: 14px;
}

input::placeholder,
textarea::placeholder {
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
  font-size: 14px;
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



@media (min-width: 768px) {
  .contact-container {
    flex-direction: row;
  }

  .contact-form-section,
  .contact-info-section {
    width: 45%; 
    margin: 0 10px;
  }
}

@media (max-width: 480px) {
  .form-group input,
  .form-group textarea {
    font-size: 16px; 
  }

  .btn-submit {
    font-size: 16px; 
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>
