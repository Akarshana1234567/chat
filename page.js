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

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0  

          });
document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
