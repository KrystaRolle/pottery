const readySell = []; //stores pottery that will be sold. don't export
export const toSellOrNotToSell= (obj) => {
    if (obj.weight >= 6 ) {
        obj.price = 40
    }
    else if (obj.weight < 6 ) {
        obj.price = 20;
    }
    else if (obj ==='not cracked') {
        readySell.push(obj)
    }
    return readySell
    }
    export const usePottery = (arr) => {
        const readySellCopy = [...arr]
        return readySellCopy
    }



