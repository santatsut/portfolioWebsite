<script>
import emailjs from "emailjs-com";
import { 
  getFirestore, collection, addDoc, onSnapshot, serverTimestamp 
} from "firebase/firestore";
import { app } from "./firebase.js";
import { ref } from "vue";

const db = getFirestore(app);

var currentDate = new Date(); 
const format = (date) => {
    return date.toLocaleDateString('en-CA');  
};

export default {
  data() {
    return {
      name: "",
      comment: "",
      comments: [],
      email: "",
      message: "",
      status: "",
      isCommenting: null,
    };
  },

 mounted() {
    const commentsCol = collection(db, "comments");
    onSnapshot(commentsCol, (snapshot) => {
      const list = snapshot.docs.map((doc) => doc.data());
      console.log("📥 Firestore comments:", list);
      this.comments = list;
      
    }, (error) => {
      console.error("❌ Firestore error:", error);
    });
  },
  methods: {
    async addComment(e) {
      e.preventDefault();
      if (!this.name || !this.comment) return;
      console.log("running")
      await addDoc(collection(db, "comments"), {
        name: this.name,
        comment: this.comment,
        createdAt: format(currentDate),
      });
      console.log("commented")

      this.name = "";
      this.comment = "";
    },

    async sendEmail() {
      this.status = "Sending...";
      try {
        await emailjs.send(
          "service_t1ywmsn",
          "template_asi0i9v",
          {
            from_email: this.email,
            message: this.message,
          },
          "dkOakACNLQcKxYR1B"
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
    <div id="tabSection">
      <button @click="isCommenting = false" :class="[!isCommenting ? 'activeButton' : 'nonActiveButton', 'tabs']">Contact Me</button>
      <button @click="isCommenting = true" :class="[isCommenting ? 'activeButton' : 'nonActiveButton', 'tabs']">Comment</button>
    </div>
    <form @submit.prevent="addComment" v-if="isCommenting">
      <h1>Comment</h1>
      <input 
      type="text"
      v-model="name"
      placeholder="username"
      required
      class="form-input"
      >
      <textarea 
      v-model="comment"
      id="comment"
      required
      class="form-textarea"
      ></textarea>
      <button type="submit" class="form-button">Add Comment</button>
    </form>
    <form @submit.prevent="sendEmail" class="contact-form" v-if="!isCommenting">
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
    <ul v-if="isCommenting">
      <li v-for="(c, i) in comments" :key="i">
        <strong>{{ c.name }}:</strong> {{ c.comment }}
      </li>
    </ul>
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

#tabSection {
  display: flex;
  justify-content: center;
  align-items: center; 
}

.tabs {
  border: none;
  outline: none;
}

.activeButton {
  background-color: red;
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
  margin-bottom: 2rem;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 30vw;
}

.form-textarea {
  height: 15vh;
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
