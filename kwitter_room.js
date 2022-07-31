
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDNqNpziZAt4C91Fd9HSTVJ9yrxwXTFeCA",
      authDomain: "kwitter-database-5ab9f.firebaseapp.com",
      databaseURL: "https://kwitter-database-5ab9f-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-5ab9f",
      storageBucket: "kwitter-database-5ab9f.appspot.com",
      messagingSenderId: "47943306919",
      appId: "1:47943306919:web:3a338ef36e8f4c0b581582"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name")
console.log(username)
document.getElementById("user_name").innerHTML = "Welcome " +username;

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row = "<div class='room_name'  id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log("Hi!")
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}