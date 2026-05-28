// DEFAULT RESULT COUNT
if(localStorage.getItem("Candidate A") == null){

    localStorage.setItem("TVK", 0);

    localStorage.setItem("DMK", 0);

    localStorage.setItem("ADMK", 0);
}

// VOTE FUNCTION
function vote(candidate){

    let currentUser =
    sessionStorage.getItem("currentUser");

    if(currentUser == null){

        alert("Please Login First");

        window.location.href = "login.html";

        return;
    }

    let votedUser =
    localStorage.getItem(currentUser);

    if(votedUser === "yes"){

        alert("You Already Voted!");

        return;
    }

    localStorage.setItem(
        currentUser,
        "yes"
    );

    let count =
    Number(localStorage.getItem(candidate));

    count++;

    localStorage.setItem(
        candidate,
        count
    );

    alert(
        "Vote Submitted For " + candidate
    );

    window.location.href = "result.html";
}