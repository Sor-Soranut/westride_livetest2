let cash = {
  1: 10,
  2: 10,
  5: 10,
  10: 1,
  20: 10,
  50: 10,
  100: 3,
  500: 10,
  1000: 10,
};
/*
usd:ดอลลาร์สหรัฐ
jpy:เยน 
eur:ยูโร
HKD:ดอลลาร์ฮ่องกง
GBP:ปอนด์สเตอร์ลิง
SGD:ดอลลาร์สิงคโปร์
CNY:หยวนจีน
KRW:วอนเกาหลีใต้,
*/
let currency = {
  USD: 0.0291,
  JPY: 3.8939,
  EUR: 0.0265,
  HKD: 0.23,
  GBP: 0.0234,
  SGD: 0.0388,
  CNY: 0.2,
  KRW: 38.72,
  THB: 1,
};
let change_cash = {};
let money = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
money.reverse();
let total_value =
  cash[1] * 1 +
  cash[2] * 2 +
  cash[5] * 5 +
  cash[10] * 10 +
  cash[20] * 20 +
  cash[50] * 50 +
  cash[100] * 100 +
  cash[500] * 500 +
  cash[1000] * 1000;

function change_currency(currency_your, currency_wanted, price) {
  currency_your = currency[currency_your];
  currency_wanted = currency[currency_wanted];
  let trans = (price * currency_wanted) / currency_your;
  return trans;
}

function payment(price, cm_pay) {
  if (cm_pay >= price) {
    var change = cm_pay - price;
  } else {
    return "Your money not enoung";
  }
  for (let i = 0; i < money.length; i++) {
    if (money[i] <= change && change >= 0) {
      let ref = parseInt(change / money[i]);
      if (ref <= cash[money[i]]) {
        cash[money[i]] -= ref;
      } else {
        ref = cash[money[i]];
        cash[money[i]] = 0;
      }
      change -= ref * money[i];
      change_cash[money[i]] = ref;
    }
  }
  return change_cash;
}
//console.log(total_value);
console.log(change_currency("JPY", "USD", 100));
console.log(payment(35, 1000));
