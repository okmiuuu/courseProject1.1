export function checkLanguage() {
    if (localStorage.getItem("lang") == "BY") {
        return ["nameBY", "descriptionBY"]
    } else {
        return ["nameEN", "descriptionEN"]
    }
}