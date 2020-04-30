export default function({ app, route, redirect }) {
  if (!app.$firebase.currentUser && route.path !== '/login') {
    redirect('/login')
  }
}
