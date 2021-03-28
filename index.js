
function findMatching(arrOfDrivers, driver) {
    const result = arrOfDrivers.filter(name => name.toLowerCase() === driver.toLowerCase())
    return result;
}

function fuzzyMatch(arrOfDrivers, driver) {
    const newArr = arrOfDrivers.filter(name => {
       return name.startsWith(driver);
    })
    return newArr;
}

function matchName(arrOfDrivers, driver) {
    const result = arrOfDrivers.filter(obj => {
        return obj.name === driver;
    })
    return result;
}