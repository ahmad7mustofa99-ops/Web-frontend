 // membuat validasi login
 function validationlogin(){
let user = document.getElementById('username').value;
let pass = document.getElementById('password').value;
        if(user == "admin" &&
         pass == "222"){
        alert ( "berhasil");
        return true;
         }
        else{
            alert (" username dan password salah");
            return false;
        }
    
        
}