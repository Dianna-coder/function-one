import { firebaseApp } from "./Config";

export var db = firebaseApp.firestore();

export function signout(callback) {
  firebaseApp.auth().signOut()
    .catch((err) => callback(err, null))
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

export function uploadImageToFirebase(blob) {
  return new Promise((resolve, reject)=>{
    var storageRef = firebaseApp.storage().ref();

    storageRef.child('uploads/photo' + Math.random() * 286 + '.jpg').put(blob, {
      contentType: 'image/jpeg'
    }).then((snapshot)=>{
      blob.close();

      resolve(snapshot);

    }).catch((error)=>{
      reject(error);
    });
  });
};

export function uploadDocumentToFirebase(blob) {
  return new Promise((resolve, reject)=>{
    var storageRef = firebaseApp.storage().ref();

    storageRef.child('uploads/document' + Math.random() * 286 + '.pdf').put(blob, {
      contentType: 'application/pdf'
    }).then((document)=>{
      blob.close();

      resolve(document);

    }).catch((error)=>{
      reject(error);
    });
  });
};