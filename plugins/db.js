import firebase from '~/plugins/firebase'

const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export default db
