import firebase from 'firebase'

const signUp = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => console.log(userCredential))
}

export default {
  signUp
}
