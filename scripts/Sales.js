import { getVeggies, getEntrees, getSides } from "./database.js"
import { getPurchases } from "./database.js"

const buildOrderListItem = (order) => {
    const entrees = getEntrees()
    const veggies = getVeggies()
    const sides = getSides()
    let entreePrice
    let veggiePrice
    let sidePrice
    entrees.forEach(entree => {
        if (order.entreesId == entree.id) {
            entreePrice = entree.price
        }
    })
    veggies.forEach(veggie => {
        if (order.veggiesId == veggie.id) {
            veggiePrice = veggie.price
        }
    })
    sides.forEach(side => {
        if (order.sidesId == side.id) {
            sidePrice = side.price
        }
    })

    const total = entreePrice + veggiePrice + sidePrice
    console.log(total)

    return `<li>
        Receipt #${order.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}

export const Sales = () => {
    console.log('SALES RAN')
    const sales = getPurchases()
    console.log(sales, ' SALES FROM SALES FUNCTION')
    return `
        <ul>
            ${sales.map(
                (sale) => {
                    return buildOrderListItem(sale)
                }
            ).join("")}
        </ul>
    `
}

