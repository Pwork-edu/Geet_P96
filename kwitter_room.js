
var firebaseConfig = {
      apiKey: "AIzaSyBa9oG5ySybX7EjyierSCkcHWcivJhui2Q",
      authDomain: "kwitter-9fe43.firebaseapp.com",
      databaseURL: "https://kwitter-9fe43-default-rtdb.firebaseio.com",
      projectId: "kwitter-9fe43",
      storageBucket: "kwitter-9fe43.appspot.com",
      messagingSenderId: "309636483735",
      appId: "1:309636483735:web:57285315f88aa8626c37d2"
    };

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       row="'<div class='r.n'>'<h3 id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</h3><hr></div>'";
       document.getElementById("rooms").innerHTML= row;
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("u_s");
      localStorage.removeItem(u_s);

      window.location= "index.html";
}

function welcome(){
      mn =  localStorage.getItem("u_s");

      document.getElementById("fg").innerHTML="Welcome " + mn;
}


function addroom(){
      ua = document.getElementById("input").value;

      firebase.database().ref("/").child(ua).update({ purpose : "12340012344" });
 }