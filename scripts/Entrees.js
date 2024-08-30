import { setEntree, getEntrees } from "./database.js"

document.addEventListener("change", (event) => {
    if (event.target.name === 'entree') {
        setEntree(parseInt(event.target.value))
    }
})

export const Entrees = async () => {
    const entrees = await getEntrees()

    let entreeHTML = `<ul>`
    entreeHTML += entrees.map(entree => {
        return `
        <li class='choices__base'>
            <input class='radio-button' type='radio' name='entree' value=${entree.id}
                > ${entree.name}
        </li>`
    }).join('')
    entreeHTML += `</ul>`
    return entreeHTML
}

