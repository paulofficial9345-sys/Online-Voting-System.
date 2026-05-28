// SHOW USER DETAILS
function showUserDetails(){

    document.getElementById("userName").innerHTML =
    sessionStorage.getItem("userName");

    document.getElementById("userId").innerHTML =
    sessionStorage.getItem("currentUser");

    document.getElementById("userAge").innerHTML =
    sessionStorage.getItem("userAge");

    document.getElementById("userDistrict").innerHTML =
    sessionStorage.getItem("userDistrict");
}

// NEXT PAGE
function nextPage(){

    window.location.href = "vote.html";

}