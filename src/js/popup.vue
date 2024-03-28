<template>
  <div class="container position-relative mt-4 mb-4">
    <v-row class="d-flex align-center mt-3 mb-4 mx-5">
      <v-img src="./images/icon-16x16.png" alt="Days Countdown" style="max-width: 24px; max-height: 24px;"/>
      <h3 class="title mx-3 flex-grow-1">
        Days Countdown
      </h3>
      <v-btn
          density="compact"
          icon="mdi-plus"
          @click="addDayMatter"
      ></v-btn>
    </v-row>

    <v-divider color="#9E9E9E"></v-divider>

    <v-row v-if="showDateForm" class="mx-2 mt-2">
      <v-col cols="6">
        <v-text-field v-model="inputTitle" label="Task" variant="outlined"></v-text-field>
      </v-col>
      <v-col cols="6">
        <VueDatePicker v-model="selectedDate" placeholder="Date" text-input/>
      </v-col>
    </v-row>

    <EasyDataTable :headers="taskHeaders" :items="sampleTaskItems" table-class-name="customize-table" hide-footer
                   class="pl-3 pb-3" table-height="450">
      <template #header="header">
      </template>
      <template #item-title="item">
        <div class="d-flex align-center">
          {{ item.title }}<br/>
          {{ item.dueDate }}
        </div>
      </template>

      <template #item-daysLeft="item">
        <div class="d-flex align-center">
          <h4 class="text-h4">{{ getDaysLeft(item.dueDate) }}</h4>
        </div>
      </template>
    </EasyDataTable>

    <v-divider></v-divider>
    <v-row class="d-flex justify-between">
      <v-col cols="auto">
        <a href="https://sandyzhao19.github.io/" target="_blank" class="footer-link">
          <v-btn density="compact" variant="plain" class="mt-3">© 2024 Sandy Z.</v-btn>
        </a>
      </v-col>
      <v-col cols="auto">
        <a href="https://www.buymeacoffee.com/sandyzhao" target="_blank" class="footer-link">
          <v-btn density="compact" variant="plain" prepend-icon="mdi-heart" class="mt-3">Support</v-btn>
        </a>
      </v-col>
    </v-row>
  </div>


  <!-- <div class="container">
    <h1 class="title text-center">Days Countdown</h1>
    <blockquote class="quote-card">
      <p>
        {{ state.quote }}
      </p>

      <cite> {{ state.author }} </cite>
    </blockquote>
  </div> -->
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTq_1kwcnAX28Ztq9_oRxv1vf-xRKO0QE",
  authDomain: "days-countdown-57c13.firebaseapp.com",
  databaseURL: "https://days-countdown-57c13-default-rtdb.firebaseio.com",
  projectId: "days-countdown-57c13",
  storageBucket: "days-countdown-57c13.appspot.com",
  messagingSenderId: "560230548603",
  appId: "1:560230548603:web:77bec4dbc9dadcd1454ede",
  measurementId: "G-8MYN9SZYJR"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseapp);

console.log(db);

const dbRef = ref(db);

// Read data from the specified database reference
get(child(dbRef, "/User")).then((snapshot) => {
  console.log("Snapshot:", snapshot);
  if (snapshot.exists()) {
    const data = snapshot.val();
    console.log("Data from Firebase Realtime Database:", data);
  } else {
    console.log("No data available at the specified path.");
  }
}).catch((error) => {
  console.error("Error fetching data from Firebase Realtime Database:", error);
});





export default {
  data() {
    return {
      showDateForm: false,
      inputTitle: "",
      selectedDate: null,

      taskHeaders: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "title",
        },
        {text: "Days Left", value: "daysLeft"}
      ],

      sampleTaskItems: [
        {
          id: 1,
          title: "Assignment Due",
          dueDate: "03/29/2024",
        },
        {
          id: 2,
          title: "Photo Shoot",
          dueDate: "03/31/2024",
        },
        {
          id: 3,
          title: "Ultra Festival",
          dueDate: "04/13/2024",
        },
        {
          id: 4,
          title: "Birthday",
          dueDate: "08/23/2024",
        },
        {
          id: 5,
          title: "Ivy's Wedding",
          dueDate: "09/28/2024",
        },
        {
          id: 6,
          title: "Graduation",
          dueDate: "12/13/2024",
        },
        {
          id: 7,
          title: "Christmas",
          dueDate: "12/24/2024",
        },
        {
          id: 8,
          title: "New Year",
          dueDate: "01/01/2025",
        },
      ],

      //   state: {
      //     quote: "",
      //     author: "",
      //   },
    };
  },
  methods: {
    addDayMatter() {
      this.showDateForm = true;
    },

    getDaysLeft(dueDate) {
      const date1 = new Date(dueDate);
      const date2 = new Date();
      const diffTime = date1 - date2;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    },


    //   async created() {
    //     try {
    //       const response = await fetch("https://zenquotes.io/api/random");
    //       const data = await response.json();

    //       if (Array.isArray(data) && data.length > 0) {
    //         this.state.quote = data[0].q; // Extract the quote from the response
    //         this.state.author = data[0].a;
    //       } else {
    //         this.state.quote = "Failed to fetch quote.";
    //       }
    //     } catch (error) {
    //       console.error(error);
    //       this.state.quote = "Error occurred while fetching quote.";
    //     }
    //   },
  }
};
</script>

<style scoped>

</style>

<style>
.dp__input {
  min-height: 56px !important;
  border: 1px solid #9E9E9E !important;
}

.dp__input:focus {
  border: 2px solid #000000 !important;
}

.dp__input:hover {
  border: 1px solid #000000 !important;
}

.customize-table {
  --easy-table-border: 0px;
  --easy-table-row-border: 0px;
  --easy-table-body-row-height: 60px;
}

.vue3-easy-data-table__header {
  display: none !important;
}

.footer-link {
  color: inherit !important;
  text-decoration: none !important;
}
</style>