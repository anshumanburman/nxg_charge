

export function IsMobileNumber(txtMobId) {
    console.log("mobile validation :::::: ",txtMobId.props.value);
    
    var mob = /^[1-9]{1}[0-9]{9}$/;
    //var txtMobile = document.getElementById(txtMobId);
    if (txtMobId.props.value === "") {
        alert("Mobile number must not be blank.");
        return false;
    } else if (mob.test(txtMobId.props.value) == false) {
        alert("Please enter valid mobile number.");
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
        alert("Name should not be blank");
        return false;
    }
    else if (emailRef.props.value === "") {
        alert("Email should not be blank");
        return false;
    }
    else if (IsEmailValid(emailRef.props.value) === false) {
        alert("Please enter a valid email.")
        return false;
    }
    else if (mobileRef.props.value === "") {
        alert("Mobile should not be blank");
        return false;
    }
    else if (IsMobileNumber(mobileRef) === false) {
        alert("Please enter a valid mobile number.")
        return false;
    }
    else if (passwordRef.props.value === "") {
        alert("Password should not be blank");
        return false;
    }
    else if (passwordRef.props.value !== coonfirmPasswordRef.props.value) {
        alert("Password and confirm password must be same.")
        return false;
    }
    return true

} 