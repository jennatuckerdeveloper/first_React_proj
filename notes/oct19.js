/*
Let P be the Principal = 1000.00      
Let I be the Interest Rate = 0.05      
Let T be the Tax Rate = 0.18      
Let D be the Desired Sum = 1100.00

After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
*/

function scrooge(desiredSum) {
    const time
    const principal = 1000.0
    const interestRate = 0.05
    const taxRate = 0.18
    const annualAccrualRate = interestRate * (1 - taxRate)
    const desiredGrowth = desiredSum - principal 
    return desiredGrowth * annualAccrualRate
}

console.log(scrooge())