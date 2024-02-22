/*
1 meter = 3.281 feet
1 foot = 0.305 meters
1 liter = 0.264 gallon
i gallon = 3.785 liters
1 kilogram = 2.204 pound
1 pound = 0.454 kilogram
*/

const inputEl = document.getElementById("input-field")
const convertBtnEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEL = document.getElementById("volume")
const massEl = document.getElementById("mass")


convertBtnEl.addEventListener("click", function() {
    calculateLength(inputEl.value)
    calculateVolume(inputEl.value)
    calculateMass(inputEl.value)
    inputEl.value = ""
})

function calculateLength(amount) {
    if (amount) {
        let feetFromMeters = (amount * 3.281).toFixed(3)
        let metersFromFeet = (amount * 0.305).toFixed(3)
        let lengthResult = `${amount} meters = ${feetFromMeters} feet | ${amount} feet = ${metersFromFeet} meters`
        lengthEl.innerHTML = lengthResult
    } else {
        lengthEl.innerHTML = ""
    }

} 

function calculateVolume(amount) {
    if (amount) {
        let gallonsFromLiters = (amount * 0.264).toFixed(3)
        let litersFromGallons = (amount * 3.785).toFixed(3)
        let volumeResult = `${amount} liters = ${gallonsFromLiters} gallons | ${amount} gallons = ${litersFromGallons} liters`

        volumeEL.innerHTML = volumeResult
    } else {
        volumeEL.innerHTML = ""
    }
}

function calculateMass(amount) {
    if (amount) {
        let poundsFromKgs = (amount * 2.204).toFixed(3)
        let kgsFromPounds = (amount * 0.454).toFixed(3)
        let massResult = `${amount} kilograms = ${poundsFromKgs} pounds | ${amount} pounds = ${kgsFromPounds} kilograms`

        massEl.innerHTML = massResult
    } else {
        massEl.innerHTML = ""
    }
    
}

