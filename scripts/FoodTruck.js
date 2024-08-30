// import { addPurchase } from "./database.js"
import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { clearComboState, purchaseCombo, clearRadioSelections, comboChoicesTransientState } from "./database.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        for (const key in comboChoicesTransientState) {
            if (comboChoicesTransientState[key] < 1) {
                window.alert(`Please make a selection in every field before submitting`)
                return
            }
        }
        // assignIdToPurchase(comboChoicesTransientState)
        purchaseCombo(comboChoicesTransientState)
        clearComboState()
        clearRadioSelections()
    }
})


export const FoodTruck = async () => {
    const entrees = await Entrees()
    const veggies = await Veggies()
    const sides = await Sides()
    const sales = await Sales()
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <section class='all-food-elements'>
            <section>
                <h2>Entrees</h2>
                <section id='option1' class='options'>${entrees}</section>
            </section>
            <section>
                <h2>Vegetables</h2>
                <section id='option2' class='options'>${veggies}</section>
            </section>
            <section>
                <h2>Sides</h2>
                <section id='option3' class='options'>${sides}</section>
            </section>
        </section>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${sales}
        </article>
    `
}
