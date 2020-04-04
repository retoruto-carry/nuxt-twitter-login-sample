<template>
  <div>
    <div v-if="isAuth">
      <img :src="photoURL" width="32" alt="" />
      {{ displayName }}
    </div>
    <button v-if="!isAuth" type="button" @click="signIn">
      Sign in
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', ['isAuth', 'displayName', 'photoURL'])
  },
  methods: {
    ...mapActions('user', ['signIn', 'signOut', 'checkAuth'])
  }
}
</script>
