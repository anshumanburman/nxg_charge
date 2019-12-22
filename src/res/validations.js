

export function IsMobileNumber(txtMobId) {
    console.log("mobile validation :::::: ",txtMobId.props.value);
    
    var mob = /^[1-9]{1}[0-9]{9}$/;
    //var txtMobile = document.getElementById(txtMobId);
    if (mob.test(txtMobId.props.value) == false) {
        alert("Please enter valid mobile number.");
        txtMobId.focus();
        return false;
    }
    return true;
}