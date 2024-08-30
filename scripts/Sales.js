import { getEntrees, getVeggies, getSides } from "./database.js"

const buildOrderListItem = async (order) => {
    const entrees = await getEntrees()
    const veggies = await getVeggies()
    const sides = await getSides()

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

    return `<li>
        Receipt #${order.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}

export const Sales = async () => {
    const salesResponse = await fetch(`http://localhost:8088/purchases`)
    const salesData = await salesResponse.json()
    // const sales = getPurchases()
    const sales = salesData
    let buildOrderArray = []
    for (const sale of sales) {
        let buildOrder = await buildOrderListItem(sale)
        buildOrderArray.push(buildOrder)
    }
    return `<ul>${buildOrderArray.join('')}</ul>`
}

