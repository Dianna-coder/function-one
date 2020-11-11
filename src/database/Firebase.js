import { firebaseApp } from "./Config";

export function addItem(item, tabel) {
  firebaseApp.database().ref(tabel).push(item);
};