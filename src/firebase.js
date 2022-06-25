
import {getStorage} from "firebase/storage"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC66DmRVbpgLFS1C-DwWDG_vn9sdoUggG0",
  authDomain: "image-upload-53710.firebaseapp.com",
  projectId: "image-upload-53710",
  storageBucket: "image-upload-53710.appspot.com",
  messagingSenderId: "577008976750",
  appId: "1:577008976750:web:6edf6919ff3450675d377f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage_bucket = getStorage(app);