import { toSortByName, toSortByYear, getOnlyForSale } from "./sortBy.js";
// import getHamMenu from "./outMenuOnPhone.js";

import getWorks from "./getWorks.js"; 

import worksObj from "../genadz/worksObj.json" assert { type: "json"};

const sortButtonsArr = document.querySelectorAll(".sort-button");

const onlyForSaleArr = getOnlyForSale(worksObj, sortButtonsArr[4], false)[1];

let checkedToSale = getOnlyForSale(worksObj, sortButtonsArr[4], true)[0];

getWorks(worksObj);

sortButtonsArr[0].onclick = function() {
    getWorks(toSortByName(worksObj, 1, checkedToSale, onlyForSaleArr));
}

sortButtonsArr[1].onclick = function() {
    getWorks(toSortByName(worksObj, -1, checkedToSale, onlyForSaleArr));
}

sortButtonsArr[2].onclick = function() {
    getWorks(toSortByYear(worksObj, 1, checkedToSale, onlyForSaleArr));
}

sortButtonsArr[3].onclick = function() {
    getWorks(toSortByYear(worksObj, 0, checkedToSale, onlyForSaleArr));
}

sortButtonsArr[4].onclick = function() {
    let tempArr = getOnlyForSale(worksObj, sortButtonsArr[4], checkedToSale);
    getWorks(tempArr[1]);
    checkedToSale = tempArr[0];
}