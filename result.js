// VALID USERS
const users = [

    {
        voterId : "12345"
    },

    {
        voterId : "11111"
    },

    {
        voterId : "55555"
    },

    {
        voterId : "33333"
    },

    {
        voterId : "01010"
    }

];

// ADMIN DETAILS
const admin = {

    adminId : "99999",

    adminPassword : "99999"

};

// SHOW RESULT
function showResult(){

    document.getElementById("countA").innerHTML =
    localStorage.getItem("TVK");

    document.getElementById("countB").innerHTML =
    localStorage.getItem("DMK");

    document.getElementById("countC").innerHTML =
    localStorage.getItem("ADMK");
}

// GO TO LOGIN PAGE
function goToVote(){

    window.location.href = "login.html";

}

// ADMIN RESET
function adminReset(){

    let adminId =
    prompt("Enter Admin ID");

    let adminPassword =
    prompt("Enter Admin Password");

    if(adminId === admin.adminId &&
       adminPassword === admin.adminPassword){

        localStorage.setItem("TVK", 0);

        localStorage.setItem("DMK", 0);

        localStorage.setItem("ADMK", 0);

        for(let i = 0; i < users.length; i++){

            localStorage.removeItem(
                users[i].voterId
            );
        }

        alert(
            "Voting Count Reset Successfully"
        );

        showResult();

    }
    else{

        alert(
            "Wrong Admin ID or Password"
        );
    }
}