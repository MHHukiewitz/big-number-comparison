import BN from "bn.js"
import BigNumber from "bignumber.js";
import Decimal from "decimal.js";
import Big from "big.js"

function useBN(rawAmount: string, price: number, decimals: number): BN {
    const amount = new BN(rawAmount)
    const precisionFactor = new BN(decimals)

    return new BN(amount.mul(new BN(
      price * precisionFactor.toNumber())
    ).div(precisionFactor.pow(new BN(2))));
}

function useBigNumber(rawAmount: string, price: number, decimals: number): BigNumber {
    const amount = new BigNumber(rawAmount)
    return amount.div(decimals).times(price)
}

function useDecimal(rawAmount: string, price: number, decimals: number): Decimal {
    const amount = new Decimal(rawAmount)
    return amount.div(decimals).times(price)
}

function useBig(rawAmount: string, price: number, decimals: number): Big {
    const amount = new Big(rawAmount)
    return amount.div(decimals).mul(price)
}

const decimals = 9;
const amount = "1000000000000000000000000000000000000000000000000000000000000000";
const price = 1;

console.log(decimals, amount, price)
console.time('BN')
useBN(amount, price, decimals)
console.timeEnd('BN')

console.time('BigNumber')
useBigNumber(amount, price, decimals)
console.timeEnd('BigNumber')

console.time('Decimal')
useDecimal(amount, price, decimals)
console.timeEnd('Decimal')

console.time('Big')
useBig(amount, price, decimals)
console.timeEnd('Big')