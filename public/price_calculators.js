/* Initializes the global variables for hotel and food subtotal so that it could later be used by the calculateGT function */
let hotelSubtotal = 0;
let foodSubtotal = 0;

/* Gets the number of nights and price of hotel then multiplies them together */
function calculateHotelCost() {
    /* Initializes and adds the corresponding values to the variables nights and price that the user has input */
    const nights = Number(document.getElementById("nights").value);
    const price = Number(document.getElementById("price").value);

    /* Reminds the user if their nights and price are less than or equal to zero as it could cause issues if not resolved */
    if (nights <= 0 || price <= 0) {
        document.getElementById("hotelResult").innerHTML =
            "Please enter valid nights and price.";
        return;
    }

    /* Calculates the subtotal for hotel */
    hotelSubtotal = nights*price

    /* Displays the subtotal for hotel to the user */
    document.getElementById("hotelResult").innerHTML = "Subtotal for hotel: ₱" + hotelSubtotal
}

/* Calculates the total cost of food considering the price of breakfast lunch and dinner, number of pax, and number of days */
function calculateFoodCost() {
    /* Initializing all variables*/
    let breakfastjs = 0;
    let lunchjs = 0;
    let dinnerjs = 0;
    let paxjs = 1;
    let daysjs = 1; 

    /* Gets the corresponding values from user input */
    breakfastjs = Number(document.getElementById("breakfast").value);
    lunchjs = Number(document.getElementById("lunch").value);
    dinnerjs = Number(document.getElementById("dinner").value);
    paxjs = Number(document.getElementById("pax").value);
    daysjs = Number(document.getElementById("days").value);
    
    /* Reminds the user if their pax and days are less than or equal to zero as it could cause issues if not resolved */
    if (paxjs <= 0 || daysjs <= 0) {
        document.getElementById("foodResult").innerHTML =
            "Please enter valid pax and days.";
        return;
    }

    /* Calculates the subtotal for food */
    foodSubtotal = (breakfastjs + lunchjs + dinnerjs) * paxjs * daysjs;

    /* Displays the subtotal for food to the user */
    document.getElementById("foodResult").innerHTML = "Subtotal for food: ₱" + foodSubtotal;
    
 
}

/* Combines all the subtotals to get the grand total */
function calculateGT() {
    
   let grandTotal = hotelSubtotal + foodSubtotal; /* Adds all the subtotals together giving the grand total. Aka the hotel and food subtotals.*/
    document.getElementById("grandTotal").innerHTML = "Your Grand Total is ₱" + grandTotal; /* Displays the grandtotal to the user. */
} 