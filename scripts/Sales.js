import { submitPurchase } from "./TransientState.js"


const postPurchases =  (event) =>{
    if (event.target.id === "purchase") {
         submitPurchase()
        
    }
}
export const SubmitButtonHTML = () => {
    document.addEventListener("click",postPurchases)
    return `<button id="purchase">Purchase Combo</button>`

}
const buildOrderListItem =  (order) =>{
    
    const total = order.veggies.price + order.entrees.price + order.sides.price

    return `<li>
        Receipt #${order.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}


export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entrees&_expand=veggies&_expand=sides")
    const sales = await response.json()
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