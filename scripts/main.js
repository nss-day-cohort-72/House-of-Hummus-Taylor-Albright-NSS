import { FoodTruck } from "./FoodTruck.js"
import {applyCustomEvents} from "./customEvents.js"
const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
    applyCustomEvents()
}

renderAllHTML()

document.addEventListener("stateChanged", () => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})




