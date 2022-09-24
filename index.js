/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


convertBtn.addEventListener("click", function() {
    const inputEl = document.getElementById("input-el").value
    length(inputEl)
    volume(inputEl)
    mass(inputEl)
})

function length(num) {
    const length = `${num} meters = ${(num * 3.281).toFixed(3)} feet |
     ${num} feet = ${(num / 3.281).toFixed(3)} meters`
    lengthEl.textContent =  length
}

function volume(num) {
    const volume = `${num} liters = ${(num * 0.264).toFixed(3)} gallons |
     ${num} gallons = ${(num / 0.264).toFixed(3)} liters`
    volumeEl.textContent =  volume
}

function mass(num) {
    const mass = `${num} kilos = ${(num * 2.204).toFixed(3)} pounds |
     ${num} pounds = ${(num / 2.204).toFixed(3)} kilos`
    massEl.textContent =  mass
}