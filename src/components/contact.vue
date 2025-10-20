<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      email: "",
      message: "",
      status: "",
    };
  },
  methods: {
    async sendEmail() {
      this.status = "Sending...";
      try {
        await emailjs.send(
          "service_t1ywmsn", // service ID
          "template_asi0i9v", // your template ID
          {
            from_email: this.email,
            message: this.message,
          },
          "dkOakACNLQcKxYR1B" // Public key
        );
        this.status = "✅ Message sent successfully!";
        this.email = "";
        this.message = "";
      } catch (error) {
        console.error("EmailJS Error:", error);
        this.status = "❌ Failed to send message. Try again later.";
      }
    },
  },
};
</script>

<template>
  <div id="contactSection">
    <form @submit.prevent="sendEmail" class="contact-form" :method="POST">
      <h1>Contact Me</h1>
      <input
        type="email"
        v-model="email"
        placeholder="Your Email"
        required
        class="form-input"
      />
      <textarea
        v-model="message"
        placeholder="Your Message"
        required
        class="form-textarea"
      ></textarea>
      <button type="submit" class="form-button">Send Message</button>
      <p v-if="status" class="form-status">{{ status }}</p>
    </form>
  </div>
</template>

<style scoped>
#contactSection {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin: auto;
  align-items: center;
}

.contact-form h1 {
  margin-bottom: 10vh;
  font-family: var(--MainFont);
  font-weight: 300;
  font-style: italic;
  font-size: 3em;
}

.form-input,
.form-textarea {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 30vw;
}
.form-button {
  background-color: black;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.form-button:hover {
  opacity: 0.8;
}
.form-status {
  margin-top: 0.5rem;
  text-align: center;
}
</style>
