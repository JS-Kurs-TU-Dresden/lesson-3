import { expect, test, describe, vi } from 'vitest'
import { readFileSync } from 'fs'

describe('basic loops', async () => {

    const spy = vi.spyOn(console, 'log')

    let file = readFileSync('tasks/basic-loops.js', 'utf8')

    eval(file)

    const calls = splitArray(spy.calls.flat())


    test('first loop', () => {
        expect(calls[0]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    test('second loop', () => {
        expect(calls[1]).toEqual([10, 8, 6, 4, 2, 0])
    })

    test('third loop', () => {
        expect(calls[2]).toEqual([1, 3, 5, 7, 9])
    })

    test('fourth loop', () => {
        expect(calls[3]).toEqual([11, 12, 13, 14, 15])
    })

    test('fifth loop', () => {
        expect(calls[4]).toEqual([100, 99, 98, 97, 96, 95, 94, 93, 92, 91])
    })

    test('sixth loop', () => {
        expect(calls[5]).toEqual([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
    })
})

function splitArray(array) {
    let result = [[]]
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'New Loop:') {
            result.push([])
        } else {
            result.at(-1).push(array[i])
        }
    }
    return result
}