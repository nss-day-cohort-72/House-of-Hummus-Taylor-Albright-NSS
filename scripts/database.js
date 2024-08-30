export let comboChoicesTransientState = {
    entreesId: 0,
    veggiesId: 0,
    sidesId: 0
}

export const setEntree = (chosenEntreeId) => {
    comboChoicesTransientState.entreesId = chosenEntreeId
}
export const setVeggie = (chosenVeggiesId) => {
    comboChoicesTransientState.veggiesId = chosenVeggiesId
}
export const setSide = (chosenSideId) => {
    comboChoicesTransientState.sidesId = chosenSideId
}

export const purchaseCombo = (purchasedCombo) => {
    const customEvent = new CustomEvent("stateChanged")
    postData(purchasedCombo)
    document.dispatchEvent(customEvent)
}

export const postData = async (purchasedCombo) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(purchasedCombo)
    }
    const postResponse = await fetch(`http://localhost:8088/purchases/`, postOptions)
}

export const clearComboState = () => {
    for (const choice in comboChoicesTransientState) {
        comboChoicesTransientState[choice] = 0
    }
}
export const clearRadioSelections = () => {
    let allRadioButtons = document.querySelectorAll('.radio-button')
    allRadioButtons.forEach(button => {
        button.checked = false
    })
}

export const getEntrees = async () => {
    const entreesResponse = await fetch("http://localhost:8088/entrees")
    const entreesData = await entreesResponse.json()
    return entreesData
}
export const getVeggies = async () => {
    const veggiesResponse = await fetch("http://localhost:8088/veggies")
    const veggiesData = await veggiesResponse.json()
    return veggiesData
}
export const getSides = async () => {
    const sidesResponse = await fetch("http://localhost:8088/sides")
    const sidesData = await sidesResponse.json()
    return sidesData
}