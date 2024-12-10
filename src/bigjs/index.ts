import Big from 'big.js';

// Arithmetic Operations
// Addition
const a = new Big(0.1);
const b = new Big(0.2);
const c = a.plus(b).toString(); // c = 0.3 instead of 0.300000000000004

// Minus
const aNum = new Big(10);
const bNum = aNum.minus(4.9).toString(); // bNum = 5.1

// Times
const cNum = new Big(999);
const dNum = cNum.times(2).toString(); // dNum = 1998

// Devide
const eNumber = new Big(666);
const fNumber = eNumber.div(3).toString(); // eNumber = 222

// Comparision
const h = new Big(9.7612);
const j = new Big(9.1234);
const comLt = h.lt(j); // false

const i = new Big(12);
const q = new Big(13);
const comGt = q.gt(i); // true
