import { checkLanguage } from "./checkLanguage.js"

export default function getExhibitions(obj) {

    let nameLang = checkLanguage()[0];

    const langSwitchers = document.querySelectorAll(".lang-switcher");

    langSwitchers.forEach(elem => {
        elem.addEventListener("click", () => {
            nameLang = checkLanguage()[0];
            
            getExhibitions(obj);
        });
    })

    let outSection = document.getElementById("listOfExhibitions");
    outSection.innerHTML = null;
    obj.map((item) => {
        const exhb = document.createElement("p");
        exhb.innerHTML = `<span class="year-bold">${item.year}</span> - ${item[nameLang]}`
        outSection.append(exhb);
    })
}