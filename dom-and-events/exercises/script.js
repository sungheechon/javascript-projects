function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function (event) {
        paragraph.innerHTML = "Houston, we have liftoff!";
    })

    missionAbort.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "red";
    })
    
    missionAbort.addEventListener("mouseout", function (event) {
        event.target.style.backgroundColor = "";
    })

    missionAbort.addEventListener("click", function (event) {
        let confirmMsg = "Are you sure you want to abort the mission?";
        let confirmMsgTrue = "Mission aborted! Space shuttle returning home";
        if (window.confirm(confirmMsg)) {
            paragraph.innerHTML = confirmMsgTrue;
        }
    })
}

window.addEventListener("load", init);
