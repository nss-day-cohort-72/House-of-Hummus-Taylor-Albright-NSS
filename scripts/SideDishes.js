import { setSide } from "./database.js"

// const sideDishes = getSides()

document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
        setSide(parseInt(event.target.value))
    }
})

// Requirement: The radio input elements that this component funcion renders must all have a name of "sideDish"
export const Sides = async () => {
    const sidesResponse = await fetch(`http://localhost:8088/sides`)
    const sidesData = await sidesResponse.json()
    let html = "<ul>"

    const listItems = sidesData.map(dish => {
        return `<li class='choices__sides'>
            <input class='radio-button' type="radio" name='sideDish' value='${dish.id}'/
                > ${dish.title}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

