function userlogin(){

    user_name=document.getElementById("username").value;
    localStorage.setItem("name",user_name);
    window.location="kwitter_room.html";
    
    }