//YOUR FIREBASE LINKS
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

room_name = localStorage.getItem("room_name");
username = localStorage.getItem("user_name")
console.log(room_name);
console.log(username);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['likes'];
name_with_tag = "<h4> "+ name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-success' id="+ firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> "+like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            likes:0
      });

      document.getElementById("msg").value="";
}

function updateLike(message_id)
{
      console.log("clicked on like button - "+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            likes: updated_likes
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}