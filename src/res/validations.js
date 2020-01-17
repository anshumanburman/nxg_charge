import toast from "../components/commons/CustomToast";


export function IsMobileNumber(txtMobId) {
    console.log("mobile validation :::::: ",txtMobId.props.value);
    
    var mob = /^[1-9]{1}[0-9]{9}$/;
    //var txtMobile = document.getElementById(txtMobId);
    if (txtMobId.props.value === "") {
        toast("Mobile number must not be blank.");
        return false;
    } else if (mob.test(txtMobId.props.value) == false) {
        toast("Please enter valid mobile number.");
        txtMobId.focus();
        return false;
    }
    return true;
}

export const IsEmailValid = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
    //console.log("Email is Not Correct");
    //alert("Email is Not Correct");
    //this.setState({email:text})
    return false;
      }
    return true
    }

export function isValidRegister(nameRef, emailRef, mobileRef, passwordRef, coonfirmPasswordRef) {
    if (nameRef.props.value === "") {
        toast("Name should not be blank");
        return false;
    }
    else if (emailRef.props.value === "") {
        toast("Email should not be blank");
        return false;
    }
    else if (IsEmailValid(emailRef.props.value) === false) {
        toast("Please enter a valid email.")
        return false;
    }
    else if (mobileRef.props.value === "") {
        toast("Mobile should not be blank");
        return false;
    }
    else if (IsMobileNumber(mobileRef) === false) {
        toast("Please enter a valid mobile number.")
        return false;
    }
    else if (passwordRef.props.value === "") {
        toast("Password should not be blank");
        return false;
    }
    else if (passwordRef.props.value !== coonfirmPasswordRef.props.value) {
        toast("Password and confirm password must be same.")
        return false;
    }
    return true

} 

export function isValidChangePassword(currentPassRef ,passwordRef, coonfirmPasswordRef) {
    if (currentPassRef.props.value === "") {
        toast("Current password should not be blank.");
        return false;
    }else if(passwordRef.props.value === "") {
        toast("New password should not be blank.");
        return false;
    }else if(coonfirmPasswordRef.props.value === "") {
        toast("Confirm password should not be blank.");
        return false;
    }else if(coonfirmPasswordRef.props.value != passwordRef.props.value) {
        toast("New passwod and Confirm password must be same.");
        return false;
    }else if(currentPassRef.props.value == passwordRef.props.value) {
        toast("Current password and new password must not be same.");
        return false;
    }
    
    return true

}