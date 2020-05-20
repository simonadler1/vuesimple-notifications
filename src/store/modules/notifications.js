export const state = {
  notifications: [],
};

export const mutations = {
  PUSH_NOTIFICATION(state, notification) {
    state.notifications.push({
      ...notification,
      id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
    });
  },
  REMOVE_NOTIFICATION(state, notification) {
    state.notifications.splice(state.notifications.indexOf(notification));
  },
};
export const actions = {
  addNotification({ commit }, notification) {
    commit("PUSH_NOTIFICATION", notification);
    setTimeout(function() {
      commit("REMOVE_NOTIFICATION", notification);
    }, 3000);
  },
};
