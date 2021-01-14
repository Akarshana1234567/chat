//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDmRYWcOLT1Lkh4Upilr6udwfEtoVWo-po",
    authDomain: "kwitter-528d2.firebaseapp.com",
    databaseURL: "https://kwitter-528d2-default-rtdb.firebaseio.com/",
    projectId: "kwitter-528d2",
    storageBucket: "kwitter-528d2.appspot.com",
    messagingSenderId: "95851756772",
    appId: "1:95851756772:web:0fab0a24908f6e887700f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          varshatilwani:"Excellent teacher"
      });
  }
