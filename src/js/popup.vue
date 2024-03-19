<template>
  <div class="container text-center position-relative mt-4 mb-4">
    <h1 class="title">
      Days Countdown
      <v-btn
        class="mx-3"
        density="compact"
        icon="mdi-plus"
        @click="addDayMatter"
      ></v-btn>
    </h1>
  </div>

  <v-row v-if="showDateForm">
    <v-col cols="12">
      <v-text-field v-model="textFieldValue" label="Enter Text"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-date-picker v-model="selectedDate" label="Select Date"></v-date-picker>
    </v-col>
  </v-row>

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
export default {
  data() {
    return {
      showDateForm: false,
      textFieldValue: "",
      selectedDate: null,
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
};
</script>
