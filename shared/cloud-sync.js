// =========================
// SMART TOOLS CLOUD SYNC
// File: Smart-Tools/shared/cloud-sync.js
// =========================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// =========================
// FIREBASE CONFIG
// =========================
const firebaseConfig = {
  apiKey: "AIzaSyCyN0YMYoe8MYKnFXSGLSt6SObAGWr1pQM",
  authDomain: "smart-tools-sync.firebaseapp.com",
  projectId: "smart-tools-sync",
  storageBucket: "smart-tools-sync.firebasestorage.app",
  messagingSenderId: "162182388613",
  appId: "1:162182388613:web:d060a6360772907d6042ec"
};

// =========================
// INITIALIZE FIREBASE
// =========================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

let currentSmartToolsUser = null;

// =========================
// WATCH LOGIN STATE
// =========================
onAuthStateChanged(auth, function(user) {
  currentSmartToolsUser = user || null;

  window.dispatchEvent(new CustomEvent("smartToolsCloudUserChanged", {
    detail: {
      user: currentSmartToolsUser
    }
  }));
});

// =========================
// SIGN IN WITH GOOGLE
// =========================
async function smartToolsSignInWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  currentSmartToolsUser = result.user;
  return result.user;
}

// =========================
// SIGN OUT
// =========================
async function smartToolsSignOut() {
  await signOut(auth);
  currentSmartToolsUser = null;
}

// =========================
// GET CURRENT USER
// =========================
function smartToolsGetCurrentUser() {
  return currentSmartToolsUser;
}

// =========================
// SAVE ONE APP DATA
// Example appName: "notes", "carCare", "qameti"
// =========================
async function smartToolsSaveAppData(appName, data) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Please sign in before saving cloud data.");
  }

  const ref = doc(db, "users", user.uid, "apps", appName);

  await setDoc(ref, {
    appName: appName,
    data: data,
    updatedAt: serverTimestamp()
  }, {
    merge: true
  });

  return true;
}

// =========================
// LOAD ONE APP DATA
// Example appName: "notes", "carCare", "qameti"
// =========================
async function smartToolsLoadAppData(appName) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Please sign in before loading cloud data.");
  }

  const ref = doc(db, "users", user.uid, "apps", appName);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return null;
  }

  const saved = snap.data();
  return saved.data || null;
}

// =========================
// MAKE FUNCTIONS AVAILABLE TO HTML PAGES
// =========================
window.smartToolsCloud = {
  signIn: smartToolsSignInWithGoogle,
  signOut: smartToolsSignOut,
  getCurrentUser: smartToolsGetCurrentUser,
  saveAppData: smartToolsSaveAppData,
  loadAppData: smartToolsLoadAppData
};
