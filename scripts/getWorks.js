// import worksObj from "./worksObj" assert { type: "json" };
import forWorkClick from "./forWorkClick.js";
import { checkLanguage } from "./checkLanguage.js";

function getWorks(worksObj) {
    let nameLang = checkLanguage()[0], 
    descriptionLang = checkLanguage()[1];

    const langSwitchers = document.querySelectorAll(".lang-switcher");

    langSwitchers.forEach(elem => {
        elem.addEventListener("click", () => {
            nameLang = checkLanguage()[0];
            descriptionLang = checkLanguage()[1];
            getWorks(worksObj);
        });
    })

    const galery = document.getElementById("galery");
    galery.innerHTML = null;
    worksObj.map((item) => {
        const boxWork = document.createElement("div");
        
        const work = document.createElement("div");
        work.style.backgroundImage = "url(" + item.ref + ")";

        const nameOFTheWork = document.createElement("h3");
        nameOFTheWork.innerHTML = item[nameLang];
        boxWork.append(work);
        boxWork.append(nameOFTheWork);

        boxWork.onclick = () => forWorkClick(item, nameLang, descriptionLang);
        
        galery.append(boxWork);
    })
}

export default getWorks;