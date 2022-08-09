document.querySelector("#submit").onclick = function(){
    var email = document.querySelector("#email").value;
    emailValidation(email);
    var password = document.querySelector("#password").value;
    var confirmPass = document.querySelector("#confirmpass").value;
    checkPass(password, confirmPass);
}
function emailValidation(email){
    var atPresent = false;
    var comPresent = false;
    var dotPresent = false;
    for (Element in email){
        if((email[Element])=="@"){
            atPresent= true;
            console.log("there is an @");
        }   
        if((email[Element])=="."){
            dotPresent= true;
            console.log("there is a .");
        }
        if(((email[parseFloat(Element)])=="c")&&((email[parseFloat(Element)+1]=="o")&&((email[parseFloat(Element)+2])=="m"))){
            comPresent= true;
            console.log("there is a com");
        } 
    }
    if(atPresent&&comPresent&&dotPresent){
        return true
    }
}
function checkPass(password, confirmPass){
    for(Element in password){
        if((password[Element])==confirmPass[Element]){
            
        }
        else{
            console.log("the passwords arent the same bro");
            return false
        }
    }
    return true
}