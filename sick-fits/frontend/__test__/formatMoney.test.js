import formatMoney from '../lib/formatMoney';

describe('format money func',() => {
    it('dollars test',() =>{
        expect(formatMoney(1)).toEqual('$0.01')
        expect(formatMoney(10)).toEqual('$0.10')
        expect(formatMoney(9)).toEqual('$0.09')
    })

    it('leaves whole dollars',() => {
        expect(formatMoney(5000)).toEqual('$50')
        expect(formatMoney(500)).toEqual('$5')
        expect(formatMoney(500000)).toEqual('$5,000')
    })

    it('fractional dollar',() => {
        expect(formatMoney(5012)).toEqual('$50.12')
        expect(formatMoney(101)).toEqual('$1.01')
        expect(formatMoney(110)).toEqual('$1.10')
    })
});