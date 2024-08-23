import { getEntrees, setEntree } from "./database.js"

const entrees = getEntrees()

document.addEventListener("change", (event) => {

})

export const displayEntrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entreeData = await response.json()
    console.log(entreeData)
}

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
