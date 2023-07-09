//import { initializeApp } from "firebase/app";
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
  function label_name(){
    user_name=localStorage.getItem("User_Name");
    document.getElementById("label").innerHTML="Welcome " + user_name;
  }

    function addRoom()
    {
      Room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(Room_name).update({
         purpose:"adding room name"   
         });
         redirectToRoomName(Room_name);
    }


    function getData() 
    {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row="<div class='output' id='output' onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
