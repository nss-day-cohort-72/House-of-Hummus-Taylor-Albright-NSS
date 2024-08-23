import { getEntrees, setEntree } from "./database.js"

const entrees = getEntrees()

document.addEventListener("change", (event) => {
    if (event.target.name === 'entree') {
        setEntree(parseInt(event.target.value))
    }
})

export const displayEntrees = () => {
    console.log(entrees)
    let entreeHTML = `<ul>`
    entreeHTML += entrees.map(entree => {
        return `
        <li>
            <input class='radio-button' type='radio' name='entree' value=${entree.id}
                >${entree.name}
        </li>`
    }).join('')
    entreeHTML += `</ul>`
    return entreeHTML
}

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
