// Firebase yapılandırması
const firebaseConfig = {
    apiKey: "AIzaSyCrNZdDutiPXmZ1SyIJ76TwR2xpvDnU2vY",
    authDomain: "fikirhane-rp.firebaseapp.com",
    projectId: "fikirhane-rp",
    storageBucket: "fikirhane-rp.firebasestorage.app",
    messagingSenderId: "212538739706",
    appId: "1:212538739706:web:00fce865ec58141789f243"
  };
  
  // Firebase başlat
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  let currentPlayer = "";
  
  function login() {
    const name = document.getElementById("playerName").value;
    if (!name) return alert("İsmini gir!");
  
    currentPlayer = name;
    document.getElementById("showName").innerText = name;
    document.getElementById("gameArea").style.display = "block";
  
    const ref = db.ref("players/" + name);
    ref.once("value", (snapshot) => {
      if (!snapshot.exists()) {
        ref.set({ score: 0 });
      } else {
        document.getElementById("score").innerText = snapshot.val().score;
      }
    });
  }
  
  function earnPoint() {
    const ref = db.ref("players/" + currentPlayer + "/score");
    ref.once("value", (snapshot) => {
      const current = snapshot.val() || 0;
      ref.set(current + 1);
      document.getElementById("score").innerText = current + 1;
    });
  }