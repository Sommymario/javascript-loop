const reg = document.querySelector("#reg");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const password = document.getElementById("password");
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const validateFullName = ()=>{
    if(fullName.value.trim() === ""){
        fullNameError.textContent = "Full name is required";
        return false;
    }
    fullNameError.textContent = "";
    return true;
}

const validateEmail = ()=>{
    if(email.value.trim() === ""){
        fullNameError.textContent = "Email is required";
        return false;
    }
    
    // else if(!/^\S+@\S+\.\S+$/.test(email)){
    //     emailError.textContent = "Invalid Email Address"
    //     return false;
    // }
    
    emailError.textContent = "";
    return true;
}

const validatePassword = ()=>{
    if(password.value.length === ""){
        passwordError.textContent = "Password is required";
        return false;
    }
    else if(password.value.length < 6){
        passwordError.textContent = "Password is too weak";
        return false;
    }
    passwordError.textContent = "";
    return true;
};


function validateForm(){
    const fullNameValidation = validateFullName();
    const emailValidation = validateEmail();
    const passwordValidation = validatePassword();

    return fullNameValidation && emailValidation && passwordValidation;
}

reg.addEventListener('submit',(event)=>{
    event.preventDefault();
    // console.log(event);
    if(validateForm()){
        console.log('Congratulations your details have been submitted');
    }else{
        console.log('Please fill the form correctly');
    }
});

fullName.addEventListener("input", validateFullName);
email.addEventListener('input', validateEmail);
password.addEventListener("input", validatePassword);