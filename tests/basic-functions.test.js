import { expect, test, describe } from 'vitest'

describe('basic-functions', async () => {

    const {calculateArea, isEven, findMaxOfThree, factorial, startsWith} = await import('../tasks/basic-functions.js')

    test('calculateArea', () => {
        expect(calculateArea(2, 3)).toEqual(6)
        expect(calculateArea(5, 5)).toEqual(25)
    })

    test('isEven', () => {
        expect(isEven(2)).toEqual(true)
        expect(isEven(3)).toEqual(false)
    })

    test('findMaxOfThree', () => {
        expect(findMaxOfThree(1, 2, 3)).toEqual(3)
        expect(findMaxOfThree(3, 2, 1)).toEqual(3)
        expect(findMaxOfThree(2, 3, 1)).toEqual(3)
    })

    test('factorial', () => {
        expect(factorial(1)).toEqual(1)
        expect(factorial(2)).toEqual(2)
        expect(factorial(3)).toEqual(6)
        expect(factorial(4)).toEqual(24)
        expect(factorial(5)).toEqual(120)
        expect(factorial(6)).toEqual(720)
        expect(factorial(7)).toEqual(5040)
        expect(factorial(8)).toEqual(40320)
        expect(factorial(9)).toEqual(362880)
        expect(factorial(10)).toEqual(3628800)
    })

    test('startsWith', () => {
        expect(startsWith("hello", "he")).toEqual(true)
        expect(startsWith("hello", "hello")).toEqual(true)
        expect(startsWith("hello", "hel")).toEqual(true)
        expect(startsWith("hello", "h")).toEqual(true)
        expect(startsWith("hello", "e")).toEqual(false)
        expect(startsWith("hello", "l")).toEqual(false)
        expect(startsWith("hello", "o")).toEqual(false)
        expect(startsWith("hello", "helloo")).toEqual(false)
        expect(startsWith("hello", "hello world")).toEqual(false)
    })
    
})