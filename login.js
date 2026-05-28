// VALID USERS
const users = [

    {
        voterId : "b24267",
        password : "dbcy",
        name : "Paul A",
        age : "20",
        district : "Krishnagiri"
    },
    {
        voterId : "B24251",
        password : "dbcy",
        name : "KANIMOZHI D",
        age : "20"
    },
    {
        voterId : "B24252",
        password : "dbcy",
        name : "Kayalvizhi V",
        age : "20"
    },
     {
        voterId : "B24253",
        password : "dbcy",
        name : "KIRANRAJ P",
        age : "20"
    },
     {
        voterId : "B24254",
        password : "dbcy",
        name : "KIRUTHIKA C",
        age : "20"
    },
     {
        voterId : "B24255",
        password : "dbcy",
        name : "MADHUMITHA D",
        age : "20"
    },
     {
        voterId : "B24256",
        password : "dbcy",
        name : "MANIKANDAN J",
        age : "20"
    },
     {
        voterId : "B24257",
        password : "dbcy",
        name : "MARY NISHA P",
        age : "20"
    },
     {
        voterId : "B24258",
        password : "dbcy",
        name : "MELBIN JULIYAT A",
        age : "20"
    },
    {
        voterId : "B24259",
        password : "dbcy",
        name : "MELVIN JOE ANTONY J",
        age : "20"
    },
    {
        voterId : "B24260",
        password : "dbcy",
        name : "Mercilin Sugina S",
        age : "20"
    },
    {
        voterId : "B24261",
        password : "dbcy",
        name : "MERLEEN MIRSHA M",
        age : "20"
    },
    {
        voterId : "B24262",
        password : "dbcy",
        name : "MOHAN S",
        age : "20"
    },
    {
        voterId : "B24263",
        password : "dbcy",
        name : "MUGILAN P",
        age : "20"
    },
    {
        voterId : "B24264",
        password : "dbcy",
        name : "NITHILY Y",
        age : "20"
    },
    {
        voterId : "B24265",
        password : "dbcy",
        name : "Nishimarshalina A",
        age : "20"
    },
    {
        voterId : "B24268",
        password : "dbcy",
        name : "PRADEEP S",
        age : "20"
    },
    {
        voterId : "B24270",
        password : "dbcy",
        name : "PRINCY",
        age : "20"
    },
    {
        voterId : "B24271",
        password : "dbcy",
        name : "RAKESH A",
        age : "20"
    },
    {
        voterId : "B24272",
        password : "dbcy",
        name : "RONALD FRANCO P",
        age : "20"
    },
    {
        voterId : "B24273",
        password : "dbcy",
        name : "RUBESH KUMAR P",
        age : "20"
    },
    {
        voterId : "B24274",
        password : "dbcy",
        name : "RUDHARAA PMM",
        age : "20"
    },
    {
        voterId : "B24275",
        password : "dbcy",
        name : "RUFINA SHARON C",
        age : "20"
    },
    {
        voterId : "B24276",
        password : "dbcy",
        name : "SALAM P",
        age : "20"
    },
    {
        voterId : "B24277",
        password : "dbcy",
        name : "SAMUEL S",
        age : "20"
    },
    {
        voterId : "B24278",
        password : "dbcy",
        name : "Sandhiya K",
        age : "20"
    },
    {
        voterId : "B24279",
        password : "dbcy",
        name : "Sandhiya P P",
        age : "20"
    },
    {
        voterId : "B24280",
        password : "dbcy",
        name : "SARANYA S",
        age : "20"
    },
    {
        voterId : "B24281",
        password : "dbcy",
        name : "SATHISH A",
        age : "20"
    },
    {
        voterId : "B24282",
        password : "dbcy",
        name : "SHARAL JERWIN S",
        age : "20"
    },
    {
        voterId : "B24283",
        password : "dbcy",
        name : "SHARMILA ANANTHI A",
        age : "20"
    },
    {
        voterId : "B24285",
        password : "dbcy",
        name : "Sibin Joshva V",
        age : "20"
    },
    {
        voterId : "B24286",
        password : "dbcy",
        name : "SOFIYA A",
        age : "20"
    },
    {
        voterId : "B24287",
        password : "dbcy",
        name : "SUJANA VINNARASI E",
        age : "20"
    },
    {
        voterId : "B24288",
        password : "dbcy",
        name : "SUPREENA C",
        age : "20"
    },
    {
        voterId : "B24289",
        password : "dbcy",
        name : "SWEETY MARIA C",
        age : "20"
    },
    {
        voterId : "B24290",
        password : "dbcy",
        name : "TAMILARASI D",
        age : "20"
    },
    {
        voterId : "B24291",
        password : "dbcy",
        name : "TAMIL VENDAN B",
        age : "20"
    },
    {
        voterId : "B24292",
        password : "dbcy",
        name : "THULASINATHAN S",
        age : "20"
    },
    {
        voterId : "B24293",
        password : "dbcy",
        name : "UDAYA S",
        age : "20"
    },
    {
        voterId : "B24294",
        password : "dbcy",
        name : "VIKRAM V",
        age : "20"
    },
    {
        voterId : "B24295",
        password : "dbcy",
        name : "VINAY P",
        age : "20"
    },
    {
        voterId : "B24296",
        password : "dbcy",
        name : "YOGALAKSHMIR",
        age : "20"
    },
    {
        voterId : "B24297",
        password : "dbcy",
        name : "YOGASRI S",
        age : "20"
    },
    {
        voterId : "B24298",
        password : "dbcy",
        name : "YUKESH G",
        age : "20"
    },
    {
        voterId : "11111",
        password : "111111",
        name : "11111",
        age : "24",
    }

];

// LOGIN FUNCTION
function login(){

    let voterId =
    document.getElementById("voterId").value;

    let securityCode =
    document.getElementById("securityCode").value;

    if(voterId === "" || securityCode === ""){

        alert("Please Enter All Details");

        return;
    }

    let valid = false;

    for(let i = 0; i < users.length; i++){

        if(voterId === users[i].voterId &&
           securityCode === users[i].password){

            valid = true;

            sessionStorage.setItem(
                "currentUser",
                users[i].voterId
            );

            sessionStorage.setItem(
                "userName",
                users[i].name
            );

            sessionStorage.setItem(
                "userAge",
                users[i].age
            );

            sessionStorage.setItem(
                "userDistrict",
                users[i].district
            );

            break;
        }
    }

    if(valid){

        window.location.href =
        "details.html";

    }
    else{

        alert("Invalid Voter ID or Password");

    }
}
// GO TO HOME PAGE
function goHome(){

    window.location.href = "index.html";

}