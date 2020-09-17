let denomination = { 
  
};

const calculateChange = function (total, cash){
  let change = cash - total;
  
  if ((change / 2000) >= 1) {
    denomination.twentyDollars = Math.floor(change / 2000);
    change -= (denomination.twentyDollars* 2000);
  } 
  if ((change / 1000) >= 1 ) {
    denomination.tenDollars = Math.floor(change / 1000);
    change -= (denomination.tenDollars * 1000);
  }
  if ((change / 500) >= 1) {
    denomination.fiveDollars = Math.floor(change / 500);
    change -= (denomination.fiveDollars * 500);
  }
  if ((change / 200) >= 1) {
    denomination.twoDollars = Math.floor(change / 200);
    change -= (denomination.twoDollars * 200);
  }
  if ((change / 100) >= 1) {
    denomination.oneDollar = Math.floor(change / 100);
    change -= (denomination.oneDollar * 100);
  }
  if ((change / 25) >= 1) {
    denomination.quarter = Math.floor(change / 25) 
    change -= (denomination.quarter * 25);
  }
  if ((change / 10) >= 1) {
    denomination.dime = Math.floor(change / 10);
    change -= (denomination.dime * 10);
  }
  if ((change / 5) >= 1) {
    denomination.nickel = Math.floor(change/5);
    change-= (denomination.nickel *5);
  }
  if ((change /1) >= 1) {
    denomination.penny = Math.floor(change / 1);
  }
  return denomination;
}

console.log(calculateChange(501, 1000));