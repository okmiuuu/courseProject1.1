import i18n from "../assets/i18n.json" assert { type: "json"};

window.addEventListener("DOMContentLoaded", () => {
    translate(localStorage.getItem("lang"));
    document.getElementById(localStorage.getItem("lang")).classList.add("lang-now");
});

const langSwitchers = document.querySelectorAll(".lang-switcher");

langSwitchers.forEach(elem => {
    elem.addEventListener("click", () => {
        translate(elem.dataset.lang);
        switchButtons();
    })
})

function translate(lang) {
    const i18nTags = document.querySelectorAll("[data-i18n]");
    localStorage.setItem("lang", lang);
    i18nTags.forEach(elem => {
        elem.textContent = i18n[lang][elem.dataset.i18n];
    }
    )
}

function switchButtons() {
    langSwitchers.forEach(elem => {

        if (elem.classList.contains("lang-now")) {
            elem.classList.remove("lang-now");
        } else {
            elem.classList.add("lang-now");
        }
    })
}