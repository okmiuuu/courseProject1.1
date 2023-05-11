

export function toSortByName(worksObj, direction, checkedToSale, onlyForSaleArr) {
    let tempWorksObj;
    if (checkedToSale) {
        tempWorksObj = [...onlyForSaleArr];
    } else {
        tempWorksObj = [...worksObj];
    }

    tempWorksObj.sort((a,b) => {
        if (a.nameBY > b.nameBY) {
            return 1 * direction;
        }
        if (b.nameBY > a.nameBY) {
            return -1 * direction;
        }
        return 0;
    });
    return tempWorksObj;
}

export function toSortByYear(worksObj, direction, checkedToSale, onlyForSaleArr) {
    let tempWorksObj;
    if (checkedToSale) {
        tempWorksObj = [...onlyForSaleArr];
    } else {
        tempWorksObj = [...worksObj];
    }

    tempWorksObj.sort((a,b) => {
        if (direction) return a.year - b.year;
        else return b.year - a.year;
    });

    return tempWorksObj;
}

export function getOnlyForSale(worksObj, button, checkedToSale) {
    let tempWorksObj = [];
    if(checkedToSale) {
        checkedToSale  = false;
        button.style.border = "none";
        tempWorksObj = worksObj;
    } else {
        checkedToSale  = true;
        button.style.border = "2px solid" + button.style.color;
        let counter = 0;
        worksObj.map((item,) => {
            if (item.forSale) {
                tempWorksObj[counter++] = item;
            }
        })
    }
    return [checkedToSale, tempWorksObj];
}