function getHamMenu() {
    let InsideMenuPC = document.querySelector(".for-pc");
    let flag = document.querySelector(".sort-aside > form");
    let sortMenu, sortOpener
    if (flag) {
        sortMenu = document.querySelector(".sort-aside > form");
        sortOpener =  document.querySelector(".sort-opener");
    }

    if (InsideMenuPC.style.display === "block") {
        InsideMenuPC.style.display = "none";
        if (flag) {
            sortOpener.style.display = "block";
        }
    } else {
        InsideMenuPC.style.display = "block";
        if (flag) {
            sortMenu.style.display = "none";
            sortOpener.style.display = "none";
            sortOpener.style.top = "10vh"
        }
    }
}