const firebaseConfig = {
    apiKey: "AIzaSyBXW1ODz8hiDENFis9UZzi5gOcPs_Xj9Kk",
    authDomain: "proyect100-c34a0.firebaseapp.com",
    projectId: "proyect100-c34a0",
    storageBucket: "proyect100-c34a0.appspot.com",
    messagingSenderId: "406012743958",
    appId: "1:406012743958:web:bbcc229608fc5bc090c037"
  };
  
  
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



