// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {

    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;

    // BUTTONS
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");

    // AREAS
    const flightStatusMsg = document.getElementById("flightStatus");
    const shuttleBg = document.getElementById("shuttleBackground");
    const spaceShuttleHt = document.getElementById("spaceShuttleHeight");

    let spaceShuttleHtInt = parseInt(spaceShuttleHt.innerText);

    const rocket = document.getElementById("rocket");


    takeOffButton.addEventListener("click", function () {
        let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");

        if (shouldTakeOff) {
            flightStatusMsg.innerHTML = "Shuttle in flight.";
            shuttleBg.style.backgroundColor = "blue";
            altitude = 10000;
            spaceShuttleHt.innerText = altitude;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + "px";
        }
    });

    landingButton.addEventListener("click", function () {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatusMsg.innerText = "The shuttle has landed.";
        resetRocket();
    });


    missionAbortButton.addEventListener("click", function () {
        let shouldAbort = confirm("Confirm that you want to abort the mission.");

        if (shouldAbort) {
            flightStatusMsg.innerHTML = "Mission aborted.";
            resetRocket();
        }

    });

    // upButton.addEventListener("click", function () {
    //     let rocketMove = parseInt(rocketImg.style.bottom) + 10;
    //     rocketImg.style.bottom = rocketMove + "px";
    // });

    // downButton.addEventListener("click", function () {
    //     let rocketMove = parseInt(rocketImg.style.bottom) - 10;
    //     rocketImg.style.bottom = rocketMove + "px";
    // });

    // Use event delegation for directional buttons
    document.addEventListener("click", function(event) {
    let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width")); 

        if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + "px";
        }
        if (event.target.id === "right" && rocketPosX < (bkgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + "px";
            
        }
        if (event.target.id === "up" && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + "px";
            altitude += 10000;
            spaceShuttleHt.innerText = altitude;
        }
        if (event.target.id === "down" && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + "px";
            altitude -= 10000;
            spaceShuttleHt.innerText = altitude;
        }

    });


    function resetRocket() {
        shuttleBg.style.backgroundColor = "green";
        altitude = 0;
        spaceShuttleHt.innerHTML = altitude;
        let rocketPosX = 0;
        let rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + "px";
        rocket.style.marginBottom = rocketPosY + "px";
    }



});
