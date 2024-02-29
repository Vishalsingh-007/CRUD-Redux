export const depositMoney = (amount)=>{
    return(disaptch)=>{
        disaptch({
            type:"deposite",
            payload:amount
        })
    }
}

export const withdrawMoney = (amount)=>{
    return(disaptch)=>{
        disaptch({
            type:"withdraw",
            payload:amount
        })
    }
}