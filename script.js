document.querySelector("#password").setAttribute("type", "password");
document.querySelector("#confirmpass").setAttribute("type", "password");
document.querySelector("#submit").onclick = function(){
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var confirmPass = document.querySelector("#confirmpass").value;
    if (emailValidation(email) && checkPass(password, confirmPass)){
        alert("your form is received thank you")
        }
    
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
        document.getElementById("email").setAttribute("style", "");
        return true
    }
    else if (!atPresent){
        document.querySelector("#warning").innerHTML = `please include an @ in your email address`;
        document.getElementById("email").setAttribute("style", "border: 1px solid red;");
        return 
    }
    else if (!dotPresent){
        document.querySelector("#warning").innerHTML = `please include an . in your email address`;
        document.getElementById("email").setAttribute("style", "border: 1px solid red;");
        return 
    }
    else if (!comPresent){
        document.querySelector("#warning").innerHTML = `please include an com in your email address`;
        document.getElementById("email").setAttribute("style", "border: 1px solid red;");
        return 
    }
    
}
function checkPass(password, confirmPass){
    for(Element in password){
        if((password[Element])==confirmPass[Element]){
            document.getElementById("email").setAttribute("style", "");
        }
        else{
            document.querySelector("#warning").innerHTML = `check your password confirmation`
            document.getElementById("password").setAttribute("style", "border: 1px solid red;");
            document.getElementById("confirmpass").setAttribute("style", "border: 1px solid red;");
            
            return
        }
    }
    return true
}