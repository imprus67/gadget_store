
export function priceModified (price) {

    let newPrice = String(price);

    if (newPrice.length === 5) {
        newPrice = newPrice.slice(0, 2) + " " + newPrice.slice(2);
    } else if (newPrice.length === 6) {
        newPrice = newPrice.slice(0, 3) + " " + newPrice.slice(3);
    } else if (newPrice.length === 4) {
        newPrice = newPrice.slice(0, 1) + " " + newPrice.slice(1);
    } 
    return newPrice;
}