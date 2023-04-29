import { expect, test, describe, vi } from 'vitest'

const responses = [
    "9",
    "6",
    "7",
    "Oslo",
    "Berlin",
    "4",
    "odd",
    "5",
    "even",
    "3",
    "odd"
]

vi.mock('../prompt.js', () => {
    let counter = 0

    return {
        prompt: () => {
            if (counter >= responses.length) throw new Error("Too many prompts")
            return responses[counter++]
        }
    }
})

describe('quiz', async () => {

    const spy = vi.spyOn(console, 'log')

    try {
        await import('../tasks/quiz.js')
    } catch (e) {
        console.log(e.message)
    }

    const calls = spy.calls.flat()

    test(`answering ${responses[0]} to question 1`, () => {
        expect(calls[0]).toEqual("Too high!")
    })

    test(`answering ${responses[1]} to question 1`, () => {
        expect(calls[1]).toEqual("Too low!")
    })

    test(`answering ${responses[2]} to question 1`, () => {
        expect(calls[2]).toEqual("Correct!")
    })

    test(`answering ${responses[3]} to question 2`, () => {
        expect(calls[3]).toEqual("Wrong!")
    })

    test(`answering ${responses[4]} to question 2`, () => {
        expect(calls[4]).toEqual("Correct!")
    })

    test(`answering ${responses[5]} to question 3`, () => {
        expect(calls[5]).toEqual("Wrong!")
    })

    test(`answering ${responses[6]} to question 3`, () => {
        expect(calls[6]).toEqual("Wrong!")
    })

    test(`answering ${responses[7]} to question 3`, () => {
        expect(calls[7]).toEqual("Correct!")
    })
})