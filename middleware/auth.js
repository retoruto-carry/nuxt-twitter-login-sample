export default function({ app, _route, redirect }) {
  if (!app.$firebase.currentUser) {
    redirect('sign-in')
  }
}
