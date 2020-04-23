<template>
  <div>
    <sign-in-button />
    <template v-if="$firebase.currentUser">
      <client-only>
        <img :src="$firebase.currentUser.photoURL" />
        {{ $firebase.currentUser.displayName }}
      </client-only>
    </template>
  </div>
</template>

<script>
import signInButton from '~/components/signInButton'

export default {
  components: {
    signInButton
  }
}
</script>
