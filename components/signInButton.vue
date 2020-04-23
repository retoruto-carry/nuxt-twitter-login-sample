<template>
  <div>
    <client-only>
      <template v-if="$firebase.currentUser">
        <img :src="$firebase.currentUser.photoURL" />
        <p>
          {{ $firebase.currentUser.displayName }}
        </p>
      </template>
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
    signIn: async () => {
      const provider = new firebase.auth.TwitterAuthProvider()
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          setUser(res.user)
        })
    },
    signOut: async () => {
      await firebase.auth().signOut()
    }
  }
}
</script>

<style></style>
