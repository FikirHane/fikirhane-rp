
// Firebase başlat
const firebaseConfig = {
    apiKey: "AIzaSyCrNZdDutiPXmZ1SyIJ76TwR2xpvDnU2vY",
    authDomain: "fikirhane-rp.firebaseapp.com",
    projectId: "fikirhane-rp",
    storageBucket: "fikirhane-rp.firebasestorage.app",
    messagingSenderId: "212538739706",
    appId: "1:212538739706:web:00fce865ec58141789f243"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// LocalStorage'dan oku
const name = localStorage.getItem("playerName");
const email = localStorage.getItem("playerEmail");

if (!name || !email) {
  // Giriş yapılmamışsa yönlendir
  window.location.href = "index.html";
} else {
  document.getElementById("showName").innerText = name;
  document.getElementById("showEmail").innerText = email;

  const ref = db.ref("players/" + name + "/score");
  ref.once("value", (snap) => {
    const score = snap.val() || 0;
    document.getElementById("score").innerText = score;
  });
}

function earnPoint() {
  const ref = db.ref("players/" + name + "/score");
  ref.once("value", (snap) => {
    const current = snap.val() || 0;
    ref.set(current + 1);
    document.getElementById("score").innerText = current + 1;
  });
}