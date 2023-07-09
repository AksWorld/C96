function login(){
    User_name=document.getElementById("input").value;
    localStorage.setItem("User_Name",User_name);
    window.location = "kwitter.html";
}