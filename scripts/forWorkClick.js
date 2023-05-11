import i18n from "../assets/i18n.json" assert { type : "json"};

export default function forWorkClick(item, nameLang, descriptionLang) {
    document.querySelector(':root').style.overflow = "hidden";
    const shape = document.getElementById("shape");
    shape.style.display = "block";
    let windowForWork = document.createElement("article");
    windowForWork.classList.add("work-window")
    windowForWork.innerHTML = `
    <section>
    <svg class="svg-icon in-window" id="windowRemover" viewBox="0 0 20 20">
        <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
    </svg>
    </section>
    <section>
        <img class="work-in-window" src="${item.ref}" alt=${item[nameLang]}">
    </section>
    <section>
        <h2>${item[nameLang]}</h2>
        <h3>${item.year}</h3>
        <p>${item[descriptionLang]}</p>
        ${
            item.forSale 
            ? 
            `
            <svg class="svg-icon in-window" id="orderButton" viewBox="0 0 20 20">
                <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
            </svg>` 
            : 
            `<p>${i18n[localStorage.getItem("lang")]["notForSale"]}</p>`
        }
        
    </section>
    `

    galery.append(windowForWork);

    let window = document.querySelector(".work-window");

    let windowRemover = document.getElementById("windowRemover");

    shape.onclick = function() { 
        window.remove();
        shape.style.display = "none";
        document.querySelector(':root').style.overflow = "scroll";
    }

    windowRemover.onclick = function() { 
        window.remove();
        shape.style.display = "none";
        document.querySelector(':root').style.overflow = "scroll";

    }
    // console.log(windowForWork.style.top);
}