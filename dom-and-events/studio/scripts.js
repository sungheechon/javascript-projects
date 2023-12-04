// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

    const takeOffButton = document.getElementById("takeoff");
    const flightStatusMsg = document.getElementById("flightStatus");
    const shuttleBg = document.getElementById("shuttleBackground");
    const spaceShuttleHt = document.getElementById("spaceShuttleHeight");

    const landingButton = document.getElementById("landing");

    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const rocketImg = document.getElementById("rocket");
    rocketImg.style.position = "absolute";
    rocketImg.style.bottom = "0px";


    takeOffButton.addEventListener("click", function () {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatusMsg.innerText = "Shuttle in flight";
            shuttleBg.style.backgroundColor = "blue";
            let spaceShuttleHtNum = parseInt(spaceShuttleHt.innerText);
            let totalHt = spaceShuttleHtNum + 10000;
            spaceShuttleHt.innerText = totalHt;

        }
    })


    landingButton.addEventListener("click", function () {
        if (window.confirm("The shuttle is landing. Landing gear engaged.")) {
            flightStatusMsg.innerText = "Shuttle has landed";
            shuttleBg.style.backgroundColor = "green";
            // let spaceShuttleHtNum = parseInt(spaceShuttleHt.innerText); 
            // let totalHt = spaceShuttleHtNum - 10000;
            spaceShuttleHt.innerText = Number(0);

        }
    })

    missionAbortButton.addEventListener("click", function () {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatusMsg.innerText = "Mission aborted";
            shuttleBg.style.backgroundColor = "green";
            spaceShuttleHt.innerText = Number(0);

        }
    })

    upButton.addEventListener("click", function () {
        let rocketMove = parseInt(rocketImg.style.bottom) + 10;
        rocketImg.style.bottom = rocketMove + "px";
            

    })

    });