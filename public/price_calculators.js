/* Gets the number of nights and price of hotel then multiplies them together */
function calculateHotelCost() {
    const nights = Number(document.getElementById("nights").value);
    const price = Number(document.getElementById("price").value);

    let hotelTotal = 0
    hotelTotal = nights*price

    document.getElementById("hotelResult").innerHTML = "Subtotal for hotel: " + hotelTotal
}

