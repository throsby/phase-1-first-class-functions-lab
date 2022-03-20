// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    return arr.slice(0,2)
}

function returnLastTwoDrivers(arr) {
    return arr.slice(arr.length - 2, arr.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (mult) {
    return function(fare) {return mult*fare}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arr)
    }
    else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arr)
    }
    return 0
}