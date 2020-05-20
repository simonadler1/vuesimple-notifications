<template>
  <div>
    <div>
      <h2>Notifications demo</h2>
      <h3>A small, highly customizable notification system using Vuex</h3>
    </div>
    <div>
      <v-btn color="success" @click="showsuccess()"
        >Show a success message</v-btn
      >
    </div>
    <div>
      <v-btn color="warning" @click="showwarning()"
        >Show a warning message</v-btn
      >
    </div>
    <div>
      <v-btn color="primary" @click="showinfo()">Show a info message</v-btn>
    </div>
    <div>
      <v-btn color="error" @click="showerror()">Show a error message</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showsuccess() {
      this.$store.dispatch("addNotification", {
        type: "success",
        message: "A success message goes here",
      });
    },
    showwarning() {
      this.$store.dispatch("addNotification", {
        type: "warning",
        message: "A warning message goes here",
      });
    },
    showinfo() {
      this.$store.dispatch("addNotification", {
        type: "info",
        message: "A info message goes here",
      });
    },
    showerror() {
      this.$store.dispatch("addNotification", {
        type: "",
        message: "A error message goes here",
      });
    },
  },
};
</script>

<style>
div {
  margin-top: 20px;
}
</style>
