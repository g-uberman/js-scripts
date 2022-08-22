// SCRIPT CALCULATING MAX AMOUNT OF ITEMS BUYABLE WITHIN BUDGET
// FOR A GIVEN BUDGET, ITEM PRICE AND TAX VALUE
// by g-uberman on 2022.08.22

// VALUES

bank = prompt( "Budget" );
bank = Number( bank );

iprice = prompt ( "Item price (net)" );
iprice = Number ( iprice );

tax_rate = prompt ( "Tax (%)" );
tax_rate = Number ( tax_rate ) / 100;

var numOfItems = 0;
var amount = iprice;

// FUNCTIONS

function calcAmountTaxed() {
	amount = amount + ( amount * tax_rate );
	}

function calciPriceTaxed() {
	iprice = iprice + ( iprice * tax_rate );
	}

function fixed2All () {
	bank = bank.toFixed( 2 );
	iprice = iprice.toFixed( 2 );
	amount = amount.toFixed( 2 );
}

function printTotal() {
	total = numOfItems * iprice;
	totalPrint = "Total price: $" + total.toFixed( 2 );
	console.log( totalPrint);
	}
	
function printBank() {
	bankPrint = "Budget: $" + bank.toFixed( 2 );
	console.log ( bankPrint );
	}

function printiPrice() {
	ipricePrint = "Item price: $" + iprice.toFixed( 2 );
	console.log ( ipricePrint);
	}

function printItems() {
	itemPrint = "Number of items bought: " + numOfItems;
	console.log ( itemPrint);
	}

// RUNS

calcAmountTaxed();
calciPriceTaxed();

while (true) {
if ( amount <= bank) {
	numOfItems = numOfItems +1;
	amount = amount + iprice;
	}
else {
	break;
	}
}

// fixed2All();

// PRINTS

printBank();
printiPrice();
printItems();
printTotal();