import { getVeggies, setVeggie } from "./database.js"

const veggies = getVeggies()

document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVeggie(parseInt(event.target.value))
    }
})

export const Veggies = () => {

    let html = `<ul>
        ${
            veggies.map(vegetable => {
                return `<li class='choices__veggies'>
                            <input class='radio-button' type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}
                        </li>`
            }).join("")
        }
    </ul>`

    return html
}
