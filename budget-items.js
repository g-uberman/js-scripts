// SCRIPT CALCULATING MAX AMOUNT OF ITEMS BUYABLE WITHIN BUDGET
// FOR INPUT BUDGET, ITEM PRICE AND TAX VALUE
// by g-uberman on 2022.08.22

// VALUES

var bank = prompt( "Budget" );
bank = Number( bank );

var iprice = prompt ( "Item price (net)" );
iprice = Number ( iprice );

var taxRate = prompt ( "Tax (%)" );
taxRate = Number ( taxRate ) / 100;

var numOfItems = 0;
var amount = iprice;

// INCLUDE TAX

function calcTaxed() {
	amount = amount + ( amount * taxRate );
	iprice = iprice + ( iprice * taxRate );
	}

// CALC MAX NUMBER OF ITEMS

 function buyMax(){
	while (true) {
		if ( amount <= bank) {
			numOfItems = numOfItems +1;
			amount = amount + iprice;
			}
		else {
			break;
			}
		}
	}

// PRINTS

function printAll() {
	total = numOfItems * iprice;
	console.log( "Total price: $" + total.toFixed( 2 ) );
	console.log ( "Budget: $" + bank.toFixed( 2 ) );
	console.log ( "Item price: $" + iprice.toFixed( 2 ) + " (" + (taxRate * 100).toFixed( 0 ) + "% tax included)" );
	console.log ( "Max number of items bought: " + numOfItems );
	}

// RUNS

calcTaxed();
buyMax();
printAll();