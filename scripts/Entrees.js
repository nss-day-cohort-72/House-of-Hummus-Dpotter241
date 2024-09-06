import { setEntreeChoice } from "./TransientState.js";

document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
        setEntreeChoice(parseInt(event.target.value))
        
    }

})

export const EntreesHTML = async () =>{
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json();
    let html = `<ul>`
    let entreesListArray = entrees.map(entree => {
       return `<li class="choices__base">
                    <input type="radio" name="entree" value="${entree.id}">${entree.name}
                </li>`
    })

    html += entreesListArray.join("")
    html += `<ul>`
    return html

}