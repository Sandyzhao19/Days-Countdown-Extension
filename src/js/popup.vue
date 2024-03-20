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

    <v-row v-if="showDateForm" class="mx-2 mt-4">
      <v-col cols="6">
        <v-text-field v-model="eventName" label="Enter Name" variant="outlined"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="selectedDate" label="Select Date" variant="outlined" append-inner-icon="mdi-calendar"
                      @click:append-inner="openCalendarPicker"></v-text-field>
        <v-menu v-model="calendarPicker" :close-on-content-click="false" :nudge-y="true">
          <v-date-picker v-model="selectedDate" no-title></v-date-picker>
        </v-menu>

         <v-menu
          ref="menu1"
          v-model="calendarPicker"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="selectedDate"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              prepend-icon="event"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="selectedDate" no-title></v-date-picker>
        </v-menu>
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
export default {
  data() {
    return {
      showDateForm: false,
      eventName: "",
      selectedDate: null,
      calendarPicker: false,
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

    openCalendarPicker() {
      this.calendarPicker = true;
    }
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

<style scoped>
/* Adjusting date picker size */
.v-picker--date {
  max-width: 150px; /* Set the maximum width of the date picker */
}

.v-picker__date-table {
  font-size: 14px; /* Set the font size of the date picker */
}
</style>