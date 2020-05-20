<template>
  <v-app>
    <div id="app">
      <Dashboard />
      <NotificationsList />
    </div>
  </v-app>
</template>

<script>
import Dashboard from "@/views/Dashboard";
import NotificationsList from "@/components/Notifications/NotificationsList";
export default {
  name: "App",
  components: {
    Dashboard,
    NotificationsList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
