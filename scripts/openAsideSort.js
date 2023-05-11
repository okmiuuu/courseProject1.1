function openAsideSort() {
    const asideOpener = document.querySelector(".sort-opener");
    const asideSort = document.querySelector(".sort-aside > form");

    if (asideSort.style.display === "block") {
        asideSort.style.display = "none";
        asideSort.classList.add('sort-aside-show');
        asideOpener.style.top = "10vh";
        asideOpener.style.transform = "rotate(0deg)";

    } else {
        asideSort.style.display = "block";
        asideOpener.style.top = "60vh";
        asideOpener.style.transform = "rotate(180deg)";
    }
}