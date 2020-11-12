import { firebaseApp } from "./Config";

export var db = firebaseApp.firestore();

export function signout(done) {
  firebaseApp.auth().signOut().then(() => done()).catch((error) => done(error))
};

export function emailSignUp({ email, password }, callback) {
  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => callback(null, user))
    .catch((err) => callback(err, null))
};

export function emailSignIn({ email, password }, callback) {
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then((user) => callback(null, user))
    .catch((err) => callback(err, null))
};

export function getUserData(email, callback) {
  var userRef = db.collection('clientes').doc(email);
  userRef.get()
    .then((data) => callback(data, null))
    .catch((error) => callback(null, error))
};

export function getProfissionalData(email, callback) {
  var userRef = db.collection('profissionais').doc(email);
  userRef.get()
    .then((data) => callback(data, null))
    .catch((error) => callback(null, error))
};

export function addNewUserData({ email, userData }, callback) {
  var userRef = db.collection('clientes').doc(email);

  userRef.set(userData)
    .then((docRef) => callback(docRef, null))
    .catch((error) => callback(null, error))
};

export function addNewProfissionalData({ email, userData }, callback) {
  var userRef = db.collection('profissionais').doc(email);
  userRef.set(userData)
    .then((docRef) => callback(docRef, null))
    .catch((error) => callback(null, error))
};

export function addItem(item, tabel) {
  firebaseApp.database().ref(tabel).push(item);
};