// getters are functions like computed
export default {
  loggedIn: (state) => {
    return state.token !== null
  },
}
