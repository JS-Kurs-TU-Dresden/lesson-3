import { expect, test, describe } from 'vitest'

describe('expressions-arrows', async () => {

    const { map, addBrackets } = await import('../tasks/expressions-arrows.js')

    test('addBrackets', () => {
        expect(addBrackets('hello')).toBe('(hello)')
        expect(addBrackets('world')).toBe('(world)')
        expect(addBrackets('')).toBe('()')
    })

    test('map', () => {
        const double = x => x * 2
        const square = x => x * x

        expect(map([1, 2, 3], double)).toEqual([2, 4, 6])
        expect(map([1, 2, 3], square)).toEqual([1, 4, 9])
        expect(map([], double)).toEqual([])
    })
})