import { setVeggie, getVeggies } from "./database.js"

document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVeggie(parseInt(event.target.value))
    }
})

export const Veggies = async () => {
    const veggies = await getVeggies()
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
