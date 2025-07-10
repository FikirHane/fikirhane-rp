
  // Firebase başlatma
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

function login() {
  const name = document.getElementById("playerName").value.trim();
  const email = document.getElementById("playerEmail").value.trim();

  if (!name || !email) {
    alert("Lütfen hem isim hem e-posta giriniz.");
    return;
  }

  // Veritabanına kaydet
  const ref = db.ref("players/" + name);
  ref.set({ name: name, email: email, score: 0 });

  // Tarayıcıya da kaydet
  localStorage.setItem("playerName", name);
  localStorage.setItem("playerEmail", email);

  // Dashboard'a yönlendir
  window.location.href = "dashboard.html";
}