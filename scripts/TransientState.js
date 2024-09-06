const resetTransientState = 
{
    entreesId: 0,
    veggiesId: 0,
    sidesId: 0,
}
let transientState = {...resetTransientState}

export const setEntreeChoice = (currentState) => {
    transientState.entreesId = currentState
    
    
}
export const setVeggieChoice = (currentState) => {
    transientState.veggiesId = currentState
    
}
export const setsidesChoice = (currentState) => {
    transientState.sidesId = currentState
    
}
export const submitPurchase = async () => {
    const groups = [transientState.entreesId,transientState.veggiesId,transientState.sidesId];
    let isValid = true
    groups.forEach(group =>{
        if (group === 0) {
            isValid = false
            
        }
    });
    if (isValid) {
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
    
            },
            body: JSON.stringify(transientState)
        }
        const response = await fetch("http://localhost:8088/purchases", postOptions)
        transientState = {...resetTransientState}
        document.dispatchEvent(new CustomEvent("stateChanged"))
        
    }else{
        window.alert("please make sure you have selected all options")
    }

    
}