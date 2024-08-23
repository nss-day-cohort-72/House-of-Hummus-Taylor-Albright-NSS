// import { addPurchase } from "./database.js"
import { Sales } from "./Sales.js"
import { displayEntrees } from "./Entrees.js"
import { displayVegetables } from "./Vegetables.js"
import { displaySideDishes } from "./SideDishes.js"
import { clearComboState, getComboChoices, purchaseCombo, clearRadioSelections, getPurchases, assignIdToPurchase } from "./database.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        let comboChoices = getComboChoices()
        // let purchases = getPurchases()
        for (const key in comboChoices) {
            if (comboChoices[key] < 1) {
                window.alert(`Please make a selection in every field before submitting`)
                return
            }
        }
        assignIdToPurchase(comboChoices)
        purchaseCombo(comboChoices)
        clearComboState()
        clearRadioSelections()
    }
})


export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <section class='all-food-elements'>
            <section>
                <h2>Entrees</h2>
                <section class='options'>${displayEntrees()}</section>
            </section>
            <section>
                <h2>Vegetables</h2>
                <section class='options'>${displayVegetables()}</section>
            </section>
            <section>
                <h2>Sides</h2>
                <section class='options'>${displaySideDishes()}</section>
            </section>
        </section>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${Sales()}
        </article>
    `
}
