import { expect, test, describe, vi } from 'vitest'

vi.mock('../prompt.js', () => {
    let counter = 0
    const responses = [
        "3", "7", "add",
        "6", "12", "sub",
        "5", "30", "mul",
        "10", "3", "div",
        "4", "3", "mod",
    ]

    return {
        prompt: () => {
            if (counter >= responses.length) throw new Error("Too many prompts")
            return responses[counter++]
        }
    }
})

describe('calculator', async () => {

    const spy = vi.spyOn(console, 'log')

    try {
        await import('../tasks/calculator.js')
        await import('../tasks/calculator.js?buster=1')
        await import('../tasks/calculator.js?buster=2')
        await import('../tasks/calculator.js?buster=3')
        await import('../tasks/calculator.js?buster=4')
    } catch (e) {
        console.log(e.message)
    }

    const calls = spy.calls.flat()

    test('adding 3 and 7', () => {
        expect(calls[0]).toEqual(10)
    })

    test('subtracting 6 from 12', () => {
        expect(calls[1]).toEqual(-6)
    })

    test('multiplying 5 and 30', () => {
        expect(calls[2]).toEqual(150)
    })

    test('dividing 10 by 3', () => {
        expect(calls[3]).toEqual(10 / 3)
    })

    test('using unknown operation', () => {
        expect(calls[4]).toEqual("Unknown operation")
    })
})