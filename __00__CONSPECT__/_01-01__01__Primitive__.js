﻿let price1 = 200;
let price2 = price1;

console.log(price1, price2);   // 200 200

// !!! WARNING !!!
price1 = 300;
console.log(price1, price2);   // 300 200
// !!! WARNING END !!!

