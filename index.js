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
    length(inputEl.value)
    volume(inputEl.value)
    mass(inputEl.value)
})

function length(amount) {
    let feetFromMeters = (amount * 3.281).toFixed(3)
    let metersFromFeet = (amount * 0.305).toFixed(3)
    let lengthResult = `${amount} meters = ${feetFromMeters} feet | ${amount} feet = ${metersFromFeet} meters`

    lengthEl.innerHTML = lengthResult
} 

function volume(amount) {
    let gallonsFromLiters = (amount * 0.264).toFixed(3)
    let litersFromGallons = (amount * 3.785).toFixed(3)
    let volumeResult = `${amount} liters = ${gallonsFromLiters} gallons | ${amount} gallons = ${litersFromGallons} liters`
    volumeEL.innerHTML = volumeResult
}

function mass(amount) {
    let poundsFromKgs = (amount * 2.204).toFixed(3)
    let kgsFromPounds = (amount * 0.454).toFixed(3)
    let massResult = `${amount} kilograms = ${poundsFromKgs} pounds | ${amount} pounds = ${kgsFromPounds} kilograms`
    massEl.innerHTML = massResult
}

