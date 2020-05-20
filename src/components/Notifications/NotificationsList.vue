<template>
  <div>
    <div class="notifications-list">
      <NotificationMessage
        v-for="notification in notifications.notifications"
        :key="notification.id"
        :notification="notification"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import NotificationMessage from "@/components/utilities/Notifications/NotificationMessage";
export default {
  components: {
    NotificationMessage
  },
  computed: mapState(["notifications"])
};
</script>

<style scoped>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 350px;
}
</style>