<script>
import emailjs from "emailjs-com";
import { 
  getFirestore, collection, addDoc, onSnapshot, serverTimestamp 
} from "firebase/firestore";
import { app } from "./firebase.js";
import { nextTick } from "vue";

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
watch: {
  async isCommenting(newValue, oldValue) {
    console.log("isCommenting changed:", oldValue, "→", newValue);
    if (newValue === true) {
      // Wait until comments are rendered
      await nextTick();

      // Find the comments section
      const commentsSection = document.getElementById("commentsList");
      if (commentsSection) {
        // Get its position relative to the page
        const rect = commentsSection.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Scroll so the top of comments appears nicely on screen
        window.scrollTo({
          top: scrollTop + rect.top - 100, // offset by 100px for better visibility
          behavior: "smooth",
        });
      }
    }
  },
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
  <div id="main">
    <div id="tabSection">
      <button @click="isCommenting = false" :class="[!isCommenting ? 'activeButton' : 'nonActiveButton', 'tabs']">Contact Me</button>
      <button @click="isCommenting = true" :class="[isCommenting ? 'activeButton' : 'nonActiveButton', 'tabs']">Comment</button>
    </div>
    <form @submit.prevent="addComment" v-if="isCommenting" class="contact-form">
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
    <h2 v-if="isCommenting">Comments</h2>
    <ul v-if="isCommenting" id="commentsList">
    <li v-for="(c, i) in comments" :key="i" class="commentItem">
      <strong id="username">{{ c.name }}:</strong> 
      <p>{{ c.comment }}</p>
    </li>
  </ul>
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
  </div>
  </div>
</template>

<style scoped>
#contactSection {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
}

#main {
  margin: auto;
  height: max-content;
  width: 60vw;
}

#tabSection {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center; 
}

.tabs {
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: white;
  padding: 10px 20px;
  background-color: transparent;
  box-shadow: 0 5px 0 0  rgb(255, 255, 255);
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.activeButton {
  background-color: rgba(173, 173, 173, 0.4);
}

.contact-form {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 40vw;
  margin: auto;
  align-items: center;
  padding: 10vh 0;
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

#username {
  font-size: 1.1rem;
  color: #f0f0f0;
}

#commentsList {
  position: relative;
  padding: 0;
  padding: 10px 10px;
  margin-bottom: 10vh;
}

#commentsList h2 {
  color: white;
  text-align: center;
}

.commentItem {
  margin: 10px 25px;
  border-radius: 8px;
  list-style: none;
}

.commentItem p {
  margin: 5px 0 15px 25px;
}
</style>
