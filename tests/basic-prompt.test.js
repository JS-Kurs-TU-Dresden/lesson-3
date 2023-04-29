import { expect, test, describe, vi } from 'vitest'

vi.mock('../prompt.js', () => {
    let counter = 0
    const responses = ["John", "18"]

    return {
        prompt: () => {
            if (counter >= responses.length) throw new Error("Too many prompts")
            return responses[counter++]
        }
    }
})

describe('basic prompt', async () => {

    const spy = vi.spyOn(console, 'log')

    await import('../tasks/basic-prompt.js')

    const calls = spy.calls.flat()

    test('first loop', () => {
        expect(calls[0]).toEqual("Hello John, in 2 years you will be 20 years old.")
    })
})