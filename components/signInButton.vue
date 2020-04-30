<template>
  <div>
    <client-only>
      <button v-if="!$firebase.currentUser" @click="signIn">サインイン</button>
      <button v-else @click="signOut">サインアウト</button>
    </client-only>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import { setUser } from '~/firebase/db'

export default {
  methods: {
    async signIn() {
      const provider = new firebase.auth.TwitterAuthProvider()
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          setUser(res.user)
          this.$router.push('/secret')
        })
    },
    signOut: async () => {
      await firebase.auth().signOut()
    }
  }
}
</script>

<style></style>
