import firebase from '~/plugins/firebase'
import 'firebase/firestore'

const db = firebase.firestore()

export default db

export async function getUser(uid) {
  return await db
    .collection('users')
    .doc(uid)
    .get()
    .then((doc) => {
      return doc.data()
    })
}

export async function setUser(user) {
  await db
    .collection('users')
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      photoURL: user.photoURL
    })
}
