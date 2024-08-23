import { getSides, setSide } from "./database.js"

const sideDishes = getSides()

document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
        setSide(parseInt(event.target.value))
    }
})

// Requirement: The radio input elements that this component funcion renders must all have a name of "sideDish"
export const displaySideDishes = () => {
    let html = "<ul>"

    const listItems = sideDishes.map(dish => {
        return `<li>
            <input class='radio-button' type="radio" name='sideDish' value='${dish.id}'/> ${dish.title}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

