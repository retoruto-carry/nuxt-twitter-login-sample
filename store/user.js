import firebase from '~/plugins/firebase'
import auth from '~/plugins/auth'

export const state = () => ({
  isAuth: false,
  displayName: '',
  email: '',
  photoURL: ''
})

export const getters = {
  isAuth: (state) => state.isAuth,
  displayName: (state) => state.displayName,
  email: (state) => state.email,
  photoURL: (state) => state.photoURL
}

export const mutations = {
  setSignInState(state, user) {
    state.isAuth = !!user
    state.email = (user && user.email) || ''
    state.displayName = (user && user.displayName) || ''
    state.photoURL = (user && user.photoURL) || ''
  }
}

export const actions = {
  async signIn({ commit }) {
    await firebase
      .auth()
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((res) => commit('setSignInState', res.user))
      .catch((error) => {
        if (error.code === 'auth/popup-closed-by-user') {
          // Do nothing.
        } else {
          // any
        }
      })
  },
  async signOut({ commit }) {
    await firebase
      .auth()
      .signOut()
      .then((res) => {
        commit('setSignInState', false)
      })
  },
  async checkAuth({ commit }) {
    await auth().then((user) => commit('setSignInState', user))
  }
}