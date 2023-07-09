//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyA9KzAq4_wg9VHtKtTMLOorGLbeFnY_Geo",
    authDomain: "kwitter2-5ce24.firebaseapp.com",
    databaseURL: "https://kwitter2-5ce24-default-rtdb.firebaseio.com",
    projectId: "kwitter2-5ce24",
    storageBucket: "kwitter2-5ce24.appspot.com",
    messagingSenderId: "189084926432",
    appId: "1:189084926432:web:e040a842a10041fb89ab85"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { 
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
//Start code
firebase.database().ref(room_name).push({
 name:user_name,
 message:msg,
 like:0
});
//End code
 } });  }); }
getData();
function send(){
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value="";
}
