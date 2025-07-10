
  // Firebase başlatma
const firebaseConfig = {
    apiKey: "AIzaSyCrNZdDutiPXmZ1SyIJ76TwR2xpvDnU2vY",
    authDomain: "fikirhane-rp.firebaseapp.com",
    databaseURL: "https://fikirhane-rp-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "fikirhane-rp",
    storageBucket: "fikirhane-rp.firebasestorage.app",
    messagingSenderId: "212538739706",
    appId: "1:212538739706:web:00fce865ec58141789f243"
  };

// Firebase başlat
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function login() {
  const name = document.getElementById("playerName").value.trim();
  const email = document.getElementById("playerEmail").value.trim();

  // 🟡 ŞU SATIRI EKLE
  console.log("Giriş fonksiyonu çalıştı", name, email);

  if (!name || !email) {
    alert("Lütfen hem isim hem e-posta giriniz.");
    return;
  }

  const ref = db.ref("players/" + name);
  ref.set({ name: name, email: email, score: 0 });

  // 🟡 ŞU SATIRI DA EKLE
  console.log("Firebase'e veri gönderildi!");

  localStorage.setItem("playerName", name);
  localStorage.setItem("playerEmail", email);

  // 🟡 BU DA ÖNEMLİ
  console.log("Yönlendiriliyor...");
  window.location.href = "dashboard.html";
}