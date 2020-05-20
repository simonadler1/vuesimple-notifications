<template>
  <div>
    <div><h2>Notifications demo</h2></div>
    <div><v-btn @click="showsuccess()">Show a success message</v-btn></div>
  </div>
</template>

<script>
import store from "vuex";
export default {
  methods: {
    showsuccess() {
      this.$store.dispatch("addNotifications", { type: "success", message });
    },
  },
};
</script>

<style></style>
