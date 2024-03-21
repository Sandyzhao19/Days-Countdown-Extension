<template>
  <div class="container position-relative mt-4 mb-4">
    <v-row>
      <v-img src="./images/icon-16x16.png" alt="Days Countdown" />
      <h2 class="title">
        Days Countdown
        <v-btn
            class="mx-3"
            density="compact"
            icon="mdi-plus"
            @click="addDayMatter"
        ></v-btn>
      </h2>
    </v-row>


    <v-row v-if="showDateForm" class="mx-2 mt-4">
      <v-col cols="6">
        <v-text-field v-model="inputTitle" label="Task Title" variant="outlined"></v-text-field>
      </v-col>
      <v-col cols="6">
        <VueDatePicker v-model="selectedDate" placeholder="Task Due" text-input/>
      </v-col>
    </v-row>


    <EasyDataTable :headers="taskHeaders" :items="sampleTaskItems" table-class-name="customize-table" hide-footer
                   class="ml-4">
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
          dueDate: "03/24/2024",
        },
        {
          id: 2,
          title: "Photo Shoot",
          dueDate: "03/24/2024",
        },
        {
          id: 3,
          title: "Ultra Festival",
          dueDate: "04/13/2024",
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
  height: 0 !important;
}
</style>