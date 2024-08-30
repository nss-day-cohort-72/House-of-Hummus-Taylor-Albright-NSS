import { setSide, getSides } from "./database.js"

document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
        setSide(parseInt(event.target.value))
    }
})

export const Sides = async () => {
    const sides = await getSides()
    let html = "<ul>"

    const listItems = sides.map(dish => {
        return `<li class='choices__sides'>
            <input class='radio-button' type="radio" name='sideDish' value='${dish.id}'/
                > ${dish.title}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

